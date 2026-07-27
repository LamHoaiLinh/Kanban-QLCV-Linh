(() => {
  'use strict';

  const STORAGE_KEY = 'linh_personal_kanban_v1';
  const VERSION = 11;
  const DEFAULT_BACKGROUND_ID = 'bg6';
  const DEFAULT_COLUMN_TITLES = ['Đã hoàn thành','Việc cần làm/chưa sắp xếp','Việc hôm nay','Việc ngày mai','Mục tiêu/ý tưởng'];
  const BACKGROUNDS = [
    {id:'none',name:'Không dùng hình nền',file:null},
    {id:'bg6',name:'Beautiful Background6',file:'assets/backgrounds/Beautiful Background6.png'},
    {id:'bg7',name:'Beautiful Background7',file:'assets/backgrounds/Beautiful Background7.png'},
    {id:'bg8',name:'Beautiful Background8',file:'assets/backgrounds/Beautiful Background8.png'},
    {id:'bg13',name:'Beautiful Background13',file:'assets/backgrounds/Beautiful Background13.png'},
    {id:'bg15',name:'Beautiful Background15',file:'assets/backgrounds/Beautiful Background15.png'},
    {id:'bg28',name:'Beautiful Background28',file:'assets/backgrounds/Beautiful Background28.png'},
    {id:'bg33',name:'Beautiful Background33',file:'assets/backgrounds/Beautiful Background33.png'},
    {id:'bg40',name:'Beautiful Background40',file:'assets/backgrounds/Beautiful Background40.png'},
    {id:'bg49',name:'Beautiful Background49',file:'assets/backgrounds/Beautiful Background49.png'}
  ];
  const PROJECT_COLORS = ['#62b493','#f0a66f','#7ba9d8','#a68ad8','#d77e97','#d1a942','#6aa9a4','#9baf6b'];
  const COLUMN_COLORS = [
    {value:'',name:'Mặc định'},
    {value:'#dff2e9',name:'Xanh bạc hà'},
    {value:'#e3eef9',name:'Xanh da trời'},
    {value:'#fcebdc',name:'Cam nhạt'},
    {value:'#f7e3ea',name:'Hồng nhạt'},
    {value:'#eee7fa',name:'Tím nhạt'},
    {value:'#f7f1d9',name:'Vàng nhạt'},
    {value:'#e5efdf',name:'Xanh lá nhạt'}
  ];
  const LABELS = [
    {id:'urgent',name:'Ưu tiên',color:'#e76f6f'},
    {id:'important',name:'Quan trọng',color:'#f0a15f'},
    {id:'work',name:'Công việc',color:'#65a7d8'},
    {id:'personal',name:'Cá nhân',color:'#9b82d3'},
    {id:'waiting',name:'Đang chờ',color:'#d0aa43'},
    {id:'quick',name:'Việc nhanh',color:'#65af8f'}
  ];

  const refs = {};
  const ui = { search: '' };
  let state;
  let undoSnapshot = null;
  let undoLabel = '';
  let projectEditId = null;
  let cardEdit = null;
  let columnEditId = null;
  let dragManager = null;
  let projectDragManager = null;
  let confirmResolver = null;
  let toastTimer = null;
  let saveTimer = null;
  let clockTickTimer = null;
  let alarmTimer = null;
  let audioContext = null;
  let lastObservedLocalDate = null;
  let deletedViewTab = 'archive';
  let noteEditId = null;
  let noteEditProjectId = null;
  let noteInitialSnapshot = null;
  const selectedCardIds = new Set();
  let selectionColumnId = null;
  let selectionAnchorCardId = null;

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    cacheRefs();
    renderStaticOptions();
    bindEvents();
    state = loadState();
    ensureActiveProject();
    const dailyMoveResult = runDailyMovesIfNeeded();
    lastObservedLocalDate = localDateStamp();
    applyTheme();
    applyBackground();
    renderAll();
    initClockWidget();
    saveNow();
    if (dailyMoveResult.moved > 0) setTimeout(() => showToast(`Đã tự động chuyển ${dailyMoveResult.moved} công việc sang ngày mới.`), 180);
    registerServiceWorker();
  }

  function cacheRefs() {
    [
      'sidebar','sidebarBackdrop','openSidebarBtn','closeSidebarBtn','projectCount','projectList','addProjectBtn','emptyAddProjectBtn',
      'exportBtn','importBtn','importFile','activeProjectName','editProjectBtn','projectNotesBar','projectNoteTabs','addProjectNoteBtn','noteDialog','noteForm','noteDialogTitle','noteTitleInput','notePickerBtn','notePickerMenu','noteEditorContent','noteUpdatedInfo','deleteNoteBtn','undoBtn','backgroundBtn','themeBtn','helpBtn','searchInput','projectStats','saveStatus',
      'emptyState','board','projectDialog','projectForm','projectDialogTitle','projectNameInput','projectColorOptions','deleteProjectBtn',
      'cardDialog','cardForm','cardDialogTitle','cardTitleInput','cardDescriptionInput','checklistEditor','checklistEmpty','addChecklistBtn',
      'labelOptions','cardColumnSelect','deleteCardBtn','duplicateCardBtn','columnDialog','columnForm','columnDialogTitle','columnNameInput','columnColorOptions',
      'deleteColumnBtn','clearColumnContentBtn','duplicateColumnBtn','quickCaptureDialog','quickCaptureForm','quickCaptureTitleInput','quickCaptureColumnSelect','quickCaptureDestinationHint','backgroundDialog','backgroundOptions','guideDialog','settingsBtn','settingsDialog','settingsExportBtn','quickCaptureProjectName','quickCaptureDefaultColumnSelect','quickCaptureStatus','dailyMoveEnabled','dailyMoveProjectName','dailyMoveRules','addDailyMoveRuleBtn','dailyMoveStatus','openDeletedContentBtn','deletedContentCount','deletedContentDialog','deletedArchiveTabBtn','deletedTrashTabBtn','deletedArchivePanel','deletedTrashPanel','deletedArchiveCount','deletedTrashCount','deletedArchiveList','deletedTrashList','emptyTrashBtn','openResetDataBtn','resetDataDialog','resetDataForm','resetBackupBtn','resetConfirmInput','resetDeleteBtn','resetBackupStatus','confirmDialog','confirmTitle','confirmMessage','globalTooltip','toast',
      'clockCurrentTime','clockDayPeriod','clockWeekday','clockDate','timerDisplay','clockStatus','timerMinutesInput','timerSecondsInput','timerStartPauseBtn','timerResetBtn','timerStopAlarmBtn','deskClockWidget','deskClockControls','clockToggleBtn'
    ].forEach(id => refs[id] = document.getElementById(id));
  }

  function renderStaticOptions() {
    refs.projectColorOptions.innerHTML = PROJECT_COLORS.map((color,index) => `
      <label class="color-radio" title="Màu ${index + 1}">
        <input type="radio" name="projectColor" value="${color}" ${index === 0 ? 'checked' : ''}>
        <span class="color-swatch" style="background:${color}"></span>
      </label>`).join('');
    refs.labelOptions.innerHTML = LABELS.map(label => `
      <label class="label-check">
        <input type="checkbox" name="cardLabel" value="${label.id}">
        <span class="label-chip" style="--label-color:${label.color}">${escapeHtml(label.name)}</span>
      </label>`).join('');
    refs.backgroundOptions.innerHTML = BACKGROUNDS.map(background => `
      <label class="background-option" data-tooltip="Chọn ${escapeAttr(background.name)}">
        <input type="radio" name="boardBackground" value="${background.id}">
        <span class="background-preview${background.file ? '' : ' no-background'}">
          ${background.file ? `<img src="${escapeAttr(background.file)}" alt="">` : '<span>Không nền</span>'}
        </span>
        <span class="background-name">${escapeHtml(background.name)}</span>
      </label>`).join('');
    refs.columnColorOptions.innerHTML = COLUMN_COLORS.map((item,index) => `
      <label class="column-color-radio" data-tooltip="${escapeAttr(item.name)}">
        <input type="radio" name="columnBackground" value="${escapeAttr(item.value)}" ${index === 0 ? 'checked' : ''}>
        <span class="column-color-swatch${item.value ? '' : ' default-swatch'}" style="${item.value ? `--swatch:${item.value}` : ''}">${item.value ? '' : 'Mặc định'}</span>
      </label>`).join('');
  }

  function bindEvents() {
    refs.addProjectBtn.addEventListener('click', () => openProjectDialog());
    refs.emptyAddProjectBtn.addEventListener('click', () => openProjectDialog());
    refs.editProjectBtn.addEventListener('click', () => {
      const project = getActiveProject();
      if (project) openProjectDialog(project.id);
    });
    refs.projectForm.addEventListener('submit', saveProject);
    refs.deleteProjectBtn.addEventListener('click', deleteProject);
    refs.addProjectNoteBtn.addEventListener('click', () => openNoteDialog());
    refs.noteForm.addEventListener('submit', saveNote);
    refs.deleteNoteBtn.addEventListener('click', deleteNote);
    refs.notePickerBtn.addEventListener('click', toggleNotePickerMenu);
    refs.notePickerMenu.addEventListener('click', handleNotePickerMenuClick);
    refs.noteDialog.addEventListener('close', closeNotePickerMenu);
    refs.noteEditorContent.addEventListener('paste', pastePlainTextIntoNote);
    refs.noteEditorContent.addEventListener('drop', preventNoteFileDrop);
    document.querySelectorAll('[data-note-command]').forEach(button => button.addEventListener('mousedown', runNoteCommand));
    refs.quickCaptureForm.addEventListener('submit', saveQuickCaptureTask);
    refs.quickCaptureColumnSelect.addEventListener('change', updateQuickCaptureHint);
    refs.cardForm.addEventListener('submit', saveCard);
    refs.addChecklistBtn.addEventListener('click', () => addChecklistRow());
    refs.deleteCardBtn.addEventListener('click', deleteCard);
    refs.duplicateCardBtn.addEventListener('click', duplicateCard);
    refs.columnForm.addEventListener('submit', saveColumn);
    refs.deleteColumnBtn.addEventListener('click', deleteColumn);
    refs.clearColumnContentBtn.addEventListener('click', clearColumnContent);
    refs.duplicateColumnBtn.addEventListener('click', duplicateColumn);
    refs.searchInput.addEventListener('input', event => {
      ui.search = event.target.value.trim().toLocaleLowerCase('vi');
      clearCardSelection(false);
      renderBoard();
    });
    refs.undoBtn.addEventListener('click', undo);
    refs.backgroundBtn.addEventListener('click', openBackgroundDialog);
    refs.themeBtn.addEventListener('click', toggleTheme);
    refs.settingsBtn.addEventListener('click', openSettingsDialog);
    refs.settingsExportBtn.addEventListener('click', exportData);
    refs.quickCaptureDefaultColumnSelect.addEventListener('change', updateQuickCaptureDefaultColumn);
    refs.dailyMoveEnabled.addEventListener('change', toggleDailyMoveEnabled);
    refs.addDailyMoveRuleBtn.addEventListener('click', addDailyMoveRule);
    refs.dailyMoveRules.addEventListener('change', updateDailyMoveRule);
    refs.dailyMoveRules.addEventListener('click', handleDailyMoveRuleClick);
    refs.openDeletedContentBtn.addEventListener('click', openDeletedContentDialog);
    refs.deletedArchiveTabBtn.addEventListener('click', () => switchDeletedTab('archive'));
    refs.deletedTrashTabBtn.addEventListener('click', () => switchDeletedTab('trash'));
    refs.deletedArchiveList.addEventListener('click', handleDeletedListClick);
    refs.deletedTrashList.addEventListener('click', handleDeletedListClick);
    refs.emptyTrashBtn.addEventListener('click', emptyTrash);
    refs.openResetDataBtn.addEventListener('click', openResetDataDialog);
    refs.resetBackupBtn.addEventListener('click', exportBackupBeforeReset);
    refs.resetConfirmInput.addEventListener('input', updateResetDeleteButton);
    refs.resetDataForm.addEventListener('submit', deleteAllAppData);
    refs.helpBtn.addEventListener('click', () => refs.guideDialog.showModal());
    refs.backgroundOptions.addEventListener('change', changeBackground);
    refs.exportBtn.addEventListener('click', exportData);
    refs.importBtn.addEventListener('click', () => refs.importFile.click());
    refs.importFile.addEventListener('change', importData);
    refs.clockToggleBtn.addEventListener('click', toggleClockExpanded);
    refs.timerStartPauseBtn.addEventListener('click', toggleCountdown);
    refs.timerResetBtn.addEventListener('click', resetCountdown);
    refs.timerStopAlarmBtn.addEventListener('click', stopAlarm);
    refs.timerMinutesInput.addEventListener('change', handleTimerInputChange);
    refs.timerSecondsInput.addEventListener('change', handleTimerInputChange);
    refs.timerMinutesInput.addEventListener('input', syncTimerInputsSoft);
    refs.timerSecondsInput.addEventListener('input', syncTimerInputsSoft);
    document.querySelectorAll('.timer-preset').forEach(button => button.addEventListener('click', () => applyTimerPreset(Number(button.dataset.minutes || 0))));
    refs.openSidebarBtn.addEventListener('click', openSidebar);
    refs.closeSidebarBtn.addEventListener('click', closeSidebar);
    refs.sidebarBackdrop.addEventListener('click', closeSidebar);
    refs.board.addEventListener('click', event => {
      if (!event.target.closest('.task-card') && !event.ctrlKey && !event.metaKey && !event.shiftKey) clearCardSelection();
    });

    document.querySelectorAll('[data-close]').forEach(button => {
      button.addEventListener('click', () => document.getElementById(button.dataset.close).close());
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.note-title-combo')) closeNotePickerMenu();
    });

    refs.confirmDialog.addEventListener('close', () => {
      if (!confirmResolver) return;
      confirmResolver(refs.confirmDialog.returnValue === 'ok');
      confirmResolver = null;
    });

    document.addEventListener('keydown', event => {
      const tag = document.activeElement?.tagName;
      const typing = ['INPUT','TEXTAREA','SELECT'].includes(tag) || Boolean(document.activeElement?.isContentEditable);
      const modifier = event.ctrlKey || event.metaKey;
      const openDialog = document.querySelector('dialog[open]');

      // Phím tắt chỉ nhận khi chính trang Kanban đang focus; khi chuyển sang phần mềm khác,
      // trình duyệt không nhận sự kiện nên không ảnh hưởng phím tắt bên ngoài.
      if (modifier && event.key === 'Enter' && !typing && !openDialog && document.hasFocus()) {
        event.preventDefault();
        openQuickCaptureDialog();
        return;
      }
      if (modifier && event.key.toLowerCase() === 'a' && !typing && !openDialog) {
        const focusedCard = document.activeElement?.closest?.('.task-card');
        const columnId = focusedCard?.dataset.columnId || selectionColumnId;
        if (columnId) {
          event.preventDefault();
          selectAllCardsInColumn(columnId);
          return;
        }
      }
      if (event.key === 'Escape' && !openDialog && selectedCardIds.size) {
        event.preventDefault();
        clearCardSelection();
        return;
      }
      // Xóa nhanh các công việc đang chọn. Chỉ hoạt động khi không nhập liệu và không có modal mở.
      // Nội dung được chuyển vào khu “Nội dung đã xóa”, nên vẫn còn bản văn bản lưu trữ và có thể Hoàn tác ngay.
      if (event.key === 'Delete' && !typing && !openDialog && selectedCardIds.size) {
        event.preventDefault();
        deleteSelectedCardsToArchive();
        return;
      }
      if (event.key === '/' && !typing) {
        event.preventDefault();
        refs.searchInput.focus();
      }
      if (event.key.toLowerCase() === 'n' && !typing) {
        const columns = getActiveProject()?.columns || [];
        const defaultColumn = columns.find(column => /việc cần làm|chưa sắp xếp/i.test(column.title)) || columns[1] || columns[0];
        if (defaultColumn) openCardDialog(defaultColumn.id);
      }
      if (modifier && event.key.toLowerCase() === 'z' && !typing) {
        event.preventDefault();
        undo();
      }
    });
    initTooltips();
    window.addEventListener('beforeunload', saveNow);
    window.addEventListener('resize', fitProjectLabels);
    window.addEventListener('focus', checkDailyMoveAfterResume);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) checkDailyMoveAfterResume(); });
  }

  function createDefaultDailyMoveSettings() {
    return {enabled:false,lastRunDate:localDateStamp(),rules:[]};
  }

  function createDefaultQuickCaptureSettings() {
    return {defaultColumns:{}};
  }

  function normalizeQuickCaptureSettings(input) {
    const defaults = {};
    if (input?.defaultColumns && typeof input.defaultColumns === 'object') {
      Object.entries(input.defaultColumns).forEach(([projectId,columnId]) => {
        if (projectId && columnId) defaults[String(projectId)] = String(columnId);
      });
    }
    return {defaultColumns:defaults};
  }

  function normalizeDailyMoveSettings(input) {
    return {
      enabled:Boolean(input?.enabled),
      lastRunDate:isDateStamp(input?.lastRunDate) ? input.lastRunDate : localDateStamp(),
      rules:Array.isArray(input?.rules) ? input.rules.map(rule => ({
        id:String(rule?.id || uid('rule')),
        projectId:String(rule?.projectId || ''),
        fromColumnId:String(rule?.fromColumnId || ''),
        toColumnId:String(rule?.toColumnId || '')
      })).filter(rule => rule.projectId && rule.fromColumnId && rule.toColumnId) : []
    };
  }

  function normalizeDeletedStorage(input) {
    const normalizeItem = (item,stage) => ({
      id:String(item?.id || uid('deleted')),
      title:String(item?.title || 'Công việc đã xóa').slice(0,160),
      text:String(item?.text || '').slice(0,12000),
      project:String(item?.project || 'Dự án').slice(0,120),
      column:String(item?.column || 'Cột').slice(0,120),
      createdAt:item?.createdAt || nowIso(),
      updatedAt:item?.updatedAt || item?.createdAt || nowIso(),
      deletedAt:item?.deletedAt || nowIso(),
      ...(stage === 'trash' ? {trashedAt:item?.trashedAt || nowIso()} : {})
    });
    return {
      archive:Array.isArray(input?.archive) ? input.archive.map(item => normalizeItem(item,'archive')) : [],
      trash:Array.isArray(input?.trash) ? input.trash.map(item => normalizeItem(item,'trash')) : []
    };
  }

  function createDefaultNotes() {
    const now = nowIso();
    return [{id:uid('note'),title:'Note 1',content:'',createdAt:now,updatedAt:now}];
  }

  function normalizeNotes(input) {
    if (!Array.isArray(input)) return createDefaultNotes();
    return input.map((note,index) => ({
      id:String(note?.id || uid('note')),
      title:String(note?.title || `Note ${index + 1}`).slice(0,80),
      content:sanitizeNoteHtml(String(note?.content || '')).slice(0,50000),
      createdAt:note?.createdAt || nowIso(),
      updatedAt:note?.updatedAt || note?.createdAt || nowIso()
    }));
  }

  function createDefaultState() {
    const projectId = uid('project');
    const columns = createDefaultColumns();
    columns[1].cards.push({
      id:uid('card'),
      title:'Bấm vào thẻ để xem và chỉnh sửa',
      description:'Bạn có thể thêm mô tả, nhãn màu và danh sách kiểm tra. Kéo biểu tượng ⠿ để chuyển thẻ giữa các cột.',
      labels:['quick'],
      checklist:[{id:uid('check'),text:'Tạo dự án riêng cho từng nhóm công việc',done:false}],
      createdAt:nowIso(),updatedAt:nowIso()
    });
    return {
      version:VERSION,
      activeProjectId:projectId,
      settings:{theme:'light',background:DEFAULT_BACKGROUND_ID,lastExportAt:null,clock:createDefaultClockSettings(),dailyMove:createDefaultDailyMoveSettings(),quickCapture:createDefaultQuickCaptureSettings()},
      deleted:{archive:[],trash:[]},
      projects:[{id:projectId,name:'Công việc của tôi',color:PROJECT_COLORS[0],createdAt:nowIso(),updatedAt:nowIso(),notes:createDefaultNotes(),columns}]
    };
  }

  function createDefaultColumns() {
    return DEFAULT_COLUMN_TITLES.map(createColumn);
  }

  function createColumn(title,backgroundColor = null) {
    return {id:uid('column'),title,backgroundColor:COLUMN_COLORS.some(item => item.value === backgroundColor) && backgroundColor ? backgroundColor : null,cards:[]};
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? normalizeState(JSON.parse(raw)) : createDefaultState();
    } catch (error) {
      console.error(error);
      setTimeout(() => showToast('Dữ liệu cũ bị lỗi, đã tạo bảng mới.'), 100);
      return createDefaultState();
    }
  }

  function normalizeState(input) {
    if (!input || !Array.isArray(input.projects)) throw new Error('Sai cấu trúc dữ liệu');
    const background = BACKGROUNDS.some(item => item.id === input.settings?.background) ? input.settings.background : DEFAULT_BACKGROUND_ID;
    const normalized = {
      version:VERSION,
      activeProjectId:input.activeProjectId || input.projects[0]?.id || null,
      settings:{theme:input.settings?.theme === 'dark' ? 'dark' : 'light',background,lastExportAt:input.settings?.lastExportAt || null,clock:normalizeClockSettings(input.settings?.clock),dailyMove:normalizeDailyMoveSettings(input.settings?.dailyMove),quickCapture:normalizeQuickCaptureSettings(input.settings?.quickCapture)},
      deleted:normalizeDeletedStorage(input.deleted),
      projects:input.projects.map(project => ({
        id:String(project.id || uid('project')),
        name:String(project.name || 'Dự án chưa đặt tên').slice(0,80),
        color:PROJECT_COLORS.includes(project.color) ? project.color : PROJECT_COLORS[0],
        createdAt:project.createdAt || nowIso(),updatedAt:project.updatedAt || nowIso(),
        notes:normalizeNotes(project.notes),
        columns:Array.isArray(project.columns) ? project.columns.map(column => ({
          id:String(column.id || uid('column')),
          title:String(column.title || 'Cột').slice(0,80),
          backgroundColor:COLUMN_COLORS.some(item => item.value === column.backgroundColor) && column.backgroundColor ? column.backgroundColor : null,
          cards:Array.isArray(column.cards) ? column.cards.map(card => ({
            id:String(card.id || uid('card')),
            title:String(card.title || 'Công việc').slice(0,160),
            description:migrateInstructionText(String(card.description || '')).slice(0,4000),
            labels:Array.isArray(card.labels) ? card.labels.filter(id => LABELS.some(label => label.id === id)) : [],
            checklist:Array.isArray(card.checklist) ? card.checklist.map(item => ({id:String(item.id || uid('check')),text:String(item.text || '').slice(0,300),done:Boolean(item.done)})).filter(item => item.text.trim()) : [],
            createdAt:card.createdAt || nowIso(),updatedAt:card.updatedAt || nowIso()
          })) : []
        })) : []
      }))
    };
    normalized.projects.forEach(project => {
      if (!project.columns.length) project.columns = createDefaultColumns();
      project.columns = migrateLegacyColumns(project.columns);
    });
    normalized.settings.dailyMove.rules = normalized.settings.dailyMove.rules.filter(rule => {
      const project = normalized.projects.find(item => item.id === rule.projectId);
      return Boolean(project && project.columns.some(column => column.id === rule.fromColumnId) && project.columns.some(column => column.id === rule.toColumnId) && rule.fromColumnId !== rule.toColumnId);
    });
    Object.entries(normalized.settings.quickCapture.defaultColumns).forEach(([projectId,columnId]) => {
      const project = normalized.projects.find(item => item.id === projectId);
      if (!project || !project.columns.some(column => column.id === columnId)) delete normalized.settings.quickCapture.defaultColumns[projectId];
    });
    return normalized;
  }

  function migrateInstructionText(text) {
    return text.replace('Anh có thể thêm mô tả, nhãn màu và danh sách kiểm tra.', 'Bạn có thể thêm mô tả, nhãn màu và danh sách kiểm tra.');
  }

  function migrateLegacyColumns(columns) {
    if (columns.length !== 4) return columns;
    const normalizedTitles = columns.map(column => column.title.trim().toLocaleLowerCase('vi'));
    const oldTitles = ['ý tưởng','cần làm','đang làm','hoàn thành'];
    if (!oldTitles.every(title => normalizedTitles.includes(title))) return columns;
    const byTitle = new Map(columns.map(column => [column.title.trim().toLocaleLowerCase('vi'),column]));
    const completed = byTitle.get('hoàn thành');
    const unsorted = byTitle.get('cần làm');
    const today = byTitle.get('đang làm');
    const ideas = byTitle.get('ý tưởng');
    completed.title = DEFAULT_COLUMN_TITLES[0];
    unsorted.title = DEFAULT_COLUMN_TITLES[1];
    today.title = DEFAULT_COLUMN_TITLES[2];
    ideas.title = DEFAULT_COLUMN_TITLES[4];
    return [completed,unsorted,today,createColumn(DEFAULT_COLUMN_TITLES[3]),ideas];
  }

  function ensureActiveProject() {
    if (!state.projects.length) {
      state.activeProjectId = null;
      return;
    }
    if (!state.projects.some(project => project.id === state.activeProjectId)) state.activeProjectId = state.projects[0].id;
  }

  function renderAll() {
    ensureActiveProject();
    renderProjects();
    renderHeader();
    renderBoard();
    updateUndoButton();
  }

  function renderProjects() {
    projectDragManager?.destroy();
    projectDragManager = null;
    refs.projectCount.textContent = state.projects.length;
    refs.projectList.innerHTML = '';
    state.projects.forEach(project => {
      const count = project.columns.reduce((sum,column) => sum + column.cards.length,0);
      const item = document.createElement('div');
      item.className = `project-item${project.id === state.activeProjectId ? ' active' : ''}`;
      item.dataset.projectId = project.id;
      item.innerHTML = `
        <span class="project-grip" data-tooltip="Kéo lên hoặc xuống để sắp xếp dự án">⠿</span>
        <button class="project-select" type="button" data-tooltip="Mở dự án ${escapeAttr(project.name)}">
          <span class="project-dot" style="background:${project.color}"></span>
          <span class="project-label">${escapeHtml(project.name)}</span>
          <span class="project-card-count">${count}</span>
        </button>
        <button class="icon-btn subtle project-more" type="button" data-tooltip="Sửa dự án">⋯</button>`;
      item.querySelector('.project-select').addEventListener('click', () => {
        state.activeProjectId = project.id;
        clearCardSelection(false);
        ui.search = '';
        refs.searchInput.value = '';
        saveNow();
        renderAll();
        closeSidebar();
      });
      item.querySelector('.project-more').addEventListener('click', () => openProjectDialog(project.id));
      refs.projectList.appendChild(item);
    });
    if (state.projects.length > 1) {
      projectDragManager = new ProjectListDragDrop(refs.projectList,{
        onStart:() => captureUndo('Đổi vị trí dự án'),
        onEnd:syncProjectOrderFromDom
      });
    }
    requestAnimationFrame(fitProjectLabels);
  }

  function syncProjectOrderFromDom() {
    const projectMap = new Map(state.projects.map(project => [project.id,project]));
    state.projects = [...refs.projectList.querySelectorAll('.project-item')]
      .map(item => projectMap.get(item.dataset.projectId))
      .filter(Boolean);
    saveNow();
    renderAll();
  }

  function renderHeader() {
    const project = getActiveProject();
    refs.activeProjectName.textContent = project?.name || 'Chưa có dự án';
    refs.editProjectBtn.disabled = !project;
    refs.searchInput.disabled = !project;
    renderProjectNotes(project);
    if (!project) {
      refs.projectStats.innerHTML = '';
      return;
    }
    const total = project.columns.reduce((sum,column) => sum + column.cards.length,0);
    const doneColumn = project.columns.find(column => /hoàn thành|xong|done/i.test(column.title));
    const done = doneColumn?.cards.length || 0;
    refs.projectStats.innerHTML = `
      <span class="stat-pill"><strong>${total}</strong> công việc</span>
      <span class="stat-pill"><strong>${done}</strong> hoàn thành</span>
      <span class="stat-pill"><strong>${Math.max(0,total-done)}</strong> còn lại</span>`;
  }

  function renderBoard() {
    dragManager?.destroy();
    dragManager = null;
    const project = getActiveProject();
    refs.emptyState.hidden = Boolean(project);
    refs.board.hidden = !project;
    refs.board.innerHTML = '';
    if (!project) return;

    pruneCardSelection(project);
    project.columns.forEach(column => {
      const columnEl = document.createElement('section');
      columnEl.className = `kanban-column${column.backgroundColor ? ' custom-column-color' : ''}`;
      columnEl.dataset.columnId = column.id;
      if (column.backgroundColor) columnEl.style.setProperty('--column-custom-bg',column.backgroundColor);
      const visible = column.cards.filter(matchesSearch).length;
      columnEl.innerHTML = `
        <div class="column-header">
          <span class="column-grip" data-tooltip="Kéo sang trái hoặc phải để đổi vị trí cột">⠿</span>
          <div class="column-title" title="${escapeAttr(column.title)}">${escapeHtml(column.title)}</div>
          <span class="column-count">${ui.search ? visible : column.cards.length}</span>
          <button class="icon-btn subtle column-menu" type="button" data-tooltip="Đổi tên, đổi màu nền, nhân bản hoặc xóa cột">⋯</button>
        </div>
        <div class="card-list" data-column-id="${column.id}"></div>
        <button class="add-card-btn" type="button">＋ Thêm công việc</button>`;
      const list = columnEl.querySelector('.card-list');
      column.cards.forEach(card => list.appendChild(createCardElement(card,column.id)));
      if (!column.cards.length) {
        const empty = document.createElement('div');
        empty.className = 'empty-column';
        empty.textContent = 'Kéo công việc vào đây';
        list.appendChild(empty);
      }
      columnEl.querySelector('.add-card-btn').addEventListener('click', () => openCardDialog(column.id));
      columnEl.querySelector('.column-menu').addEventListener('click', () => openColumnDialog(column.id));
      columnEl.querySelector('.column-title').addEventListener('dblclick', () => openColumnDialog(column.id));
      refs.board.appendChild(columnEl);
    });

    const addColumn = document.createElement('button');
    addColumn.className = 'add-column-tile';
    addColumn.type = 'button';
    addColumn.innerHTML = '＋ Thêm cột';
    addColumn.dataset.tooltip = 'Tạo thêm một cột mới ở cuối bảng';
    addColumn.addEventListener('click', () => openColumnDialog());
    refs.board.appendChild(addColumn);

    dragManager = new KanbanDragDrop(refs.board,{
      canDrag:() => {
        if (!ui.search) return true;
        showToast('Xóa từ khóa tìm kiếm trước khi kéo thả.');
        return false;
      },
      onCardDragPrepare:cardEl => prepareCardGroupForDrag(cardEl),
      getCardDragElements:cardEl => getSelectedCardElementsForDrag(cardEl),
      onStart:type => captureUndo(type === 'card' ? (selectedCardIds.size > 1 ? 'Di chuyển nhiều công việc' : 'Di chuyển công việc') : 'Đổi vị trí cột'),
      onEnd:syncOrderFromDom
    });
  }

  function createCardElement(card,columnId) {
    const el = document.createElement('article');
    el.className = `task-card${matchesSearch(card) ? '' : ' filtered-out'}${selectedCardIds.has(card.id) ? ' selected-card' : ''}`;
    el.dataset.cardId = card.id;
    el.dataset.columnId = columnId;
    el.tabIndex = 0;
    el.setAttribute('aria-selected',String(selectedCardIds.has(card.id)));
    el.dataset.tooltip = 'Nhấp để chọn; Ctrl/Shift để chọn nhiều; Delete để xóa vào lưu trữ; nhấp đúp hoặc Enter để chỉnh sửa';
    const labels = card.labels.map(id => LABELS.find(label => label.id === id)).filter(Boolean);
    const total = card.checklist.length;
    const done = card.checklist.filter(item => item.done).length;
    el.innerHTML = `
      <span class="card-selected-mark" aria-hidden="true">✓</span>
      <div class="card-main">
        ${labels.length ? `<div class="card-labels">${labels.map(label => `<span class="card-label" style="background:${label.color}" title="${escapeAttr(label.name)}"></span>`).join('')}</div>` : ''}
        <div class="card-title">${escapeHtml(card.title)}</div>
        ${card.description ? `<div class="card-description">${escapeHtml(card.description)}</div>` : ''}
        ${total ? `<div class="card-meta"><span class="check-progress${done === total ? ' complete' : ''}">☑ ${done}/${total}</span></div>` : ''}
      </div>
      <span class="card-grip" data-tooltip="Kéo thẻ; nếu đang chọn nhiều thẻ thì kéo cả nhóm">⠿</span>`;
    el.addEventListener('click', event => handleCardSelectionClick(event,el,columnId,card.id));
    el.addEventListener('dblclick', event => {
      if (event.target.closest('.card-grip')) return;
      event.preventDefault();
      openCardDialog(columnId,card.id);
    });
    el.addEventListener('keydown', event => {
      if (event.key === 'Enter' && !event.ctrlKey && !event.metaKey) {
        event.preventDefault();
        openCardDialog(columnId,card.id);
      }
    });
    return el;
  }

  function matchesSearch(card) {
    if (!ui.search) return true;
    const labels = card.labels.map(id => LABELS.find(label => label.id === id)?.name || '').join(' ');
    const checks = card.checklist.map(item => item.text).join(' ');
    return `${card.title} ${card.description} ${labels} ${checks}`.toLocaleLowerCase('vi').includes(ui.search);
  }

  function handleCardSelectionClick(event,cardEl,columnId,cardId) {
    if (event.target.closest('.card-grip')) return;
    event.preventDefault();
    event.stopPropagation();
    const toggle = event.ctrlKey || event.metaKey;
    const range = event.shiftKey;

    if (range) {
      selectCardRange(columnId,cardId);
    } else if (toggle) {
      if (selectionColumnId && selectionColumnId !== columnId) clearCardSelection(false);
      selectionColumnId = columnId;
      if (selectedCardIds.has(cardId)) selectedCardIds.delete(cardId);
      else selectedCardIds.add(cardId);
      selectionAnchorCardId = cardId;
      if (!selectedCardIds.size) {
        selectionColumnId = null;
        selectionAnchorCardId = null;
      }
      updateCardSelectionDom();
    } else {
      selectedCardIds.clear();
      selectedCardIds.add(cardId);
      selectionColumnId = columnId;
      selectionAnchorCardId = cardId;
      updateCardSelectionDom();
    }
    cardEl.focus({preventScroll:true});
  }

  function selectCardRange(columnId,targetCardId) {
    const project = getActiveProject();
    const column = project?.columns.find(item => item.id === columnId);
    if (!column) return;
    if (selectionColumnId !== columnId || !selectionAnchorCardId) {
      selectedCardIds.clear();
      selectedCardIds.add(targetCardId);
      selectionColumnId = columnId;
      selectionAnchorCardId = targetCardId;
      updateCardSelectionDom();
      return;
    }
    const ids = column.cards.map(card => card.id);
    const start = ids.indexOf(selectionAnchorCardId);
    const end = ids.indexOf(targetCardId);
    if (start < 0 || end < 0) return;
    selectedCardIds.clear();
    ids.slice(Math.min(start,end),Math.max(start,end)+1).forEach(id => selectedCardIds.add(id));
    selectionColumnId = columnId;
    updateCardSelectionDom();
  }

  function selectAllCardsInColumn(columnId) {
    const project = getActiveProject();
    const column = project?.columns.find(item => item.id === columnId);
    if (!column || !column.cards.length) return;
    selectedCardIds.clear();
    column.cards.forEach(card => selectedCardIds.add(card.id));
    selectionColumnId = columnId;
    selectionAnchorCardId = column.cards[0]?.id || null;
    updateCardSelectionDom();
    refs.board.querySelector(`.task-card[data-card-id="${cssEscape(selectionAnchorCardId)}"]`)?.focus({preventScroll:true});
    showToast(`Đã chọn ${column.cards.length} công việc trong cột “${column.title}”.`);
  }


  function deleteSelectedCardsToArchive() {
    const project = getActiveProject();
    if (!project || !selectedCardIds.size) return;
    const selected = new Set(selectedCardIds);
    const batches = [];
    project.columns.forEach(column => {
      const cards = column.cards.filter(card => selected.has(card.id));
      if (cards.length) batches.push({column,cards});
    });
    const total = batches.reduce((sum,batch) => sum + batch.cards.length,0);
    if (!total) {
      clearCardSelection();
      return;
    }
    captureUndo(total > 1 ? 'Xóa nhiều công việc' : 'Xóa công việc');
    batches.forEach(({column,cards}) => {
      archiveCards(cards,project,column,total > 1 ? 'Xóa nhanh nhiều công việc bằng phím Delete' : 'Xóa nhanh bằng phím Delete');
      const ids = new Set(cards.map(card => card.id));
      column.cards = column.cards.filter(card => !ids.has(card.id));
    });
    clearCardSelection(false);
    touchProject(project);
    saveNow();
    renderAll();
    showToast(`Đã xóa ${total} công việc và chuyển vào Nội dung đã xóa. Có thể bấm Hoàn tác.`);
  }

  function clearCardSelection(updateDom = true) {
    selectedCardIds.clear();
    selectionColumnId = null;
    selectionAnchorCardId = null;
    if (updateDom) updateCardSelectionDom();
  }

  function updateCardSelectionDom() {
    refs.board.querySelectorAll('.task-card').forEach(cardEl => {
      const selected = selectedCardIds.has(cardEl.dataset.cardId);
      cardEl.classList.toggle('selected-card',selected);
      cardEl.setAttribute('aria-selected',String(selected));
    });
  }

  function pruneCardSelection(project) {
    const valid = new Map();
    project.columns.forEach(column => column.cards.forEach(card => valid.set(card.id,column.id)));
    [...selectedCardIds].forEach(id => { if (!valid.has(id)) selectedCardIds.delete(id); });
    if (!selectedCardIds.size) {
      selectionColumnId = null;
      selectionAnchorCardId = null;
      return;
    }
    const firstId = [...selectedCardIds][0];
    selectionColumnId = valid.get(firstId) || null;
  }

  function prepareCardGroupForDrag(cardEl) {
    const cardId = cardEl.dataset.cardId;
    const columnId = cardEl.dataset.columnId;
    if (!selectedCardIds.has(cardId) || selectionColumnId !== columnId) {
      selectedCardIds.clear();
      selectedCardIds.add(cardId);
      selectionColumnId = columnId;
      selectionAnchorCardId = cardId;
      updateCardSelectionDom();
    }
  }

  function getSelectedCardElementsForDrag(cardEl) {
    if (!selectedCardIds.has(cardEl.dataset.cardId)) return [cardEl];
    const list = cardEl.closest('.card-list');
    return [...list.querySelectorAll('.task-card')].filter(el => selectedCardIds.has(el.dataset.cardId));
  }

  function syncOrderFromDom() {
    const project = getActiveProject();
    if (!project) return;
    const columnMap = new Map(project.columns.map(column => [column.id,column]));
    const cardMap = new Map(project.columns.flatMap(column => column.cards.map(card => [card.id,card])));
    const columns = [];
    refs.board.querySelectorAll('.kanban-column').forEach(columnEl => {
      const column = columnMap.get(columnEl.dataset.columnId);
      if (!column) return;
      column.cards = [...columnEl.querySelectorAll('.task-card')].map(cardEl => cardMap.get(cardEl.dataset.cardId)).filter(Boolean);
      columns.push(column);
    });
    project.columns = columns;
    const selectedEl = refs.board.querySelector('.task-card.selected-card');
    selectionColumnId = selectedEl?.closest('.card-list')?.dataset.columnId || selectionColumnId;
    touchProject(project);
    saveNow();
    renderAll();
  }

  // ===== Ghi chú nhanh theo từng dự án =====
  function renderProjectNotes(project) {
    refs.projectNotesBar.hidden = !project;
    refs.projectNoteTabs.innerHTML = '';
    refs.addProjectNoteBtn.disabled = !project;
    if (!project) return;
    const notes = Array.isArray(project.notes) ? project.notes : (project.notes = createDefaultNotes());
    notes.forEach(note => {
      const button = document.createElement('button');
      button.className = 'project-note-tab';
      button.type = 'button';
      button.textContent = note.title;
      button.title = note.title;
      button.dataset.tooltip = `Mở ghi chú: ${note.title}`;
      button.addEventListener('click', () => openNoteDialog(note.id));
      refs.projectNoteTabs.appendChild(button);
    });
  }

  function openNoteDialog(noteId = null) {
    const project = getActiveProject();
    if (!project) return;
    noteEditProjectId = project.id;
    noteEditId = noteId;
    const note = noteId ? project.notes?.find(item => item.id === noteId) : null;
    const nextNumber = (project.notes?.length || 0) + 1;
    refs.noteDialogTitle.textContent = note ? 'Chỉnh sửa ghi chú' : 'Tạo ghi chú';
    refs.noteTitleInput.value = note?.title || `Note ${nextNumber}`;
    refs.noteEditorContent.innerHTML = sanitizeNoteHtml(note?.content || '');
    refs.deleteNoteBtn.hidden = !note;
    refs.noteUpdatedInfo.textContent = note ? `Sửa lần cuối: ${formatDateTime(note.updatedAt)}` : '';
    renderNotePickerMenu();
    closeNotePickerMenu();
    noteInitialSnapshot = getCurrentNoteDraftSnapshot();
    if (!refs.noteDialog.open) refs.noteDialog.showModal();
    requestAnimationFrame(() => {
      if (note) refs.noteEditorContent.focus();
      else { refs.noteTitleInput.focus(); refs.noteTitleInput.select(); }
    });
  }

  function toggleNotePickerMenu(event) {
    event.preventDefault();
    event.stopPropagation();
    const willOpen = refs.notePickerMenu.hidden;
    if (willOpen) renderNotePickerMenu();
    refs.notePickerMenu.hidden = !willOpen;
    refs.notePickerBtn.setAttribute('aria-expanded',String(willOpen));
    refs.notePickerBtn.textContent = willOpen ? '▴' : '▾';
  }

  function closeNotePickerMenu() {
    if (!refs.notePickerMenu) return;
    refs.notePickerMenu.hidden = true;
    refs.notePickerBtn?.setAttribute('aria-expanded','false');
    if (refs.notePickerBtn) refs.notePickerBtn.textContent = '▾';
  }

  function renderNotePickerMenu() {
    const project = state.projects.find(item => item.id === noteEditProjectId) || getActiveProject();
    const notes = project?.notes || [];
    if (!notes.length) {
      refs.notePickerMenu.innerHTML = '<div class="note-picker-empty">Dự án chưa có ghi chú nào.</div>';
      return;
    }
    refs.notePickerMenu.innerHTML = notes.map(note => `
      <button class="note-picker-item${note.id === noteEditId ? ' current' : ''}" type="button" role="option" aria-selected="${note.id === noteEditId}" data-note-pick-id="${escapeAttr(note.id)}" title="Mở ghi chú ${escapeAttr(note.title)}">
        <span class="note-picker-title">${escapeHtml(note.title)}</span>
        <span class="note-picker-date">${escapeHtml(formatDateTime(note.updatedAt))}</span>
      </button>`).join('');
  }

  async function handleNotePickerMenuClick(event) {
    const button = event.target.closest('[data-note-pick-id]');
    if (!button) return;
    event.preventDefault();
    const targetId = button.dataset.notePickId;
    if (!targetId || targetId === noteEditId) {
      closeNotePickerMenu();
      return;
    }
    if (hasUnsavedNoteChanges()) {
      closeNotePickerMenu();
      const ok = await askConfirm('Chuyển sang ghi chú khác?', 'Những thay đổi chưa lưu trong ghi chú hiện tại sẽ bị bỏ qua.');
      if (!ok) return;
    }
    openNoteDialog(targetId);
  }

  function getCurrentNoteDraftSnapshot() {
    return JSON.stringify({
      title:refs.noteTitleInput.value.trim(),
      content:sanitizeNoteHtml(refs.noteEditorContent.innerHTML)
    });
  }

  function hasUnsavedNoteChanges() {
    return noteInitialSnapshot !== null && getCurrentNoteDraftSnapshot() !== noteInitialSnapshot;
  }

  function runNoteCommand(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const command = button.dataset.noteCommand;
    const value = button.dataset.noteValue || null;
    refs.noteEditorContent.focus();
    try {
      document.execCommand(command,false,value);
    } catch (error) {
      console.warn('Định dạng ghi chú:',error);
    }
  }

  function pastePlainTextIntoNote(event) {
    event.preventDefault();
    const text = event.clipboardData?.getData('text/plain') || '';
    insertPlainTextAtSelection(text.slice(0,50000));
  }

  function preventNoteFileDrop(event) {
    event.preventDefault();
    showToast('Ghi chú không nhận kéo thả hình ảnh hoặc tệp; hãy dán văn bản vào trình soạn thảo.');
  }

  function insertPlainTextAtSelection(text) {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;
    selection.deleteFromDocument();
    const range = selection.getRangeAt(0);
    const node = document.createTextNode(text);
    range.insertNode(node);
    range.setStartAfter(node);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function saveNote(event) {
    event.preventDefault();
    const project = state.projects.find(item => item.id === noteEditProjectId);
    if (!project) return refs.noteDialog.close();
    const title = refs.noteTitleInput.value.trim();
    if (!title) return refs.noteTitleInput.focus();
    const textLength = refs.noteEditorContent.textContent.length;
    if (textLength > 30000) {
      showToast('Ghi chú quá dài. Vui lòng rút gọn dưới 30.000 ký tự.');
      return;
    }
    const content = sanitizeNoteHtml(refs.noteEditorContent.innerHTML);
    captureUndo(noteEditId ? 'Sửa ghi chú' : 'Thêm ghi chú');
    if (noteEditId) {
      const note = project.notes.find(item => item.id === noteEditId);
      if (note) {
        note.title = title.slice(0,80);
        note.content = content;
        note.updatedAt = nowIso();
      }
    } else {
      project.notes.push({id:uid('note'),title:title.slice(0,80),content,createdAt:nowIso(),updatedAt:nowIso()});
    }
    touchProject(project);
    saveNow();
    noteInitialSnapshot = null;
    refs.noteDialog.close();
    renderHeader();
    showToast('Đã lưu ghi chú.');
  }

  async function deleteNote() {
    const project = state.projects.find(item => item.id === noteEditProjectId);
    const note = project?.notes?.find(item => item.id === noteEditId);
    if (!project || !note) return;
    const ok = await askConfirm('Xóa ghi chú?',`Ghi chú “${note.title}” sẽ bị xóa khỏi dự án.`);
    if (!ok) return;
    captureUndo('Xóa ghi chú');
    project.notes = project.notes.filter(item => item.id !== note.id);
    touchProject(project);
    saveNow();
    noteInitialSnapshot = null;
    refs.noteDialog.close();
    renderHeader();
    showToast('Đã xóa ghi chú.');
  }

  // Chỉ giữ các thẻ định dạng cơ bản, loại bỏ ảnh, tệp nhúng và thuộc tính HTML.
  function sanitizeNoteHtml(value) {
    const template = document.createElement('template');
    template.innerHTML = String(value || '');
    const allowed = new Set(['P','BR','STRONG','B','EM','I','U','H2','H3','UL','OL','LI','DIV']);
    const blocked = new Set(['SCRIPT','STYLE','IMG','SVG','IFRAME','OBJECT','EMBED','VIDEO','AUDIO','CANVAS','LINK','META']);
    const cleanNode = node => {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === Node.COMMENT_NODE) {
          child.remove();
          return;
        }
        if (child.nodeType !== Node.ELEMENT_NODE) return;
        const tag = child.tagName;
        if (blocked.has(tag)) {
          child.remove();
          return;
        }
        cleanNode(child);
        if (!allowed.has(tag)) {
          child.replaceWith(...child.childNodes);
          return;
        }
        [...child.attributes].forEach(attribute => child.removeAttribute(attribute.name));
      });
    };
    cleanNode(template.content);
    return template.innerHTML;
  }

  function openProjectDialog(id = null) {
    projectEditId = id;
    const project = id ? state.projects.find(item => item.id === id) : null;
    refs.projectDialogTitle.textContent = project ? 'Sửa dự án' : 'Tạo dự án';
    refs.projectNameInput.value = project?.name || '';
    refs.deleteProjectBtn.hidden = !project;
    const color = project?.color || PROJECT_COLORS[state.projects.length % PROJECT_COLORS.length];
    const radio = refs.projectColorOptions.querySelector(`input[value="${color}"]`);
    if (radio) radio.checked = true;
    refs.projectDialog.showModal();
    requestAnimationFrame(() => refs.projectNameInput.focus());
  }

  function saveProject(event) {
    event.preventDefault();
    const name = refs.projectNameInput.value.trim();
    if (!name) return refs.projectNameInput.focus();
    const color = refs.projectColorOptions.querySelector('input[name="projectColor"]:checked')?.value || PROJECT_COLORS[0];
    captureUndo(projectEditId ? 'Sửa dự án' : 'Tạo dự án');
    if (projectEditId) {
      const project = state.projects.find(item => item.id === projectEditId);
      if (project) {
        project.name = name;
        project.color = color;
        touchProject(project);
      }
    } else {
      const project = {id:uid('project'),name,color,createdAt:nowIso(),updatedAt:nowIso(),notes:createDefaultNotes(),columns:createDefaultColumns()};
      state.projects.push(project);
      state.activeProjectId = project.id;
    }
    saveNow();
    refs.projectDialog.close();
    renderAll();
    showToast('Đã lưu dự án.');
  }

  async function deleteProject() {
    const project = state.projects.find(item => item.id === projectEditId);
    if (!project) return;
    const ok = await askConfirm('Xóa dự án?',`Toàn bộ cột và công việc trong “${project.name}” sẽ bị xóa.`);
    if (!ok) return;
    captureUndo('Xóa dự án');
    project.columns.forEach(column => archiveCards(column.cards, project, column, 'Xóa dự án'));
    state.projects = state.projects.filter(item => item.id !== project.id);
    state.settings.dailyMove.rules = state.settings.dailyMove.rules.filter(rule => rule.projectId !== project.id);
    if (state.settings.quickCapture?.defaultColumns) delete state.settings.quickCapture.defaultColumns[project.id];
    clearCardSelection(false);
    ensureActiveProject();
    saveNow();
    refs.projectDialog.close();
    renderAll();
    showToast('Đã xóa dự án; nội dung công việc được lưu gọn trong Nội dung đã xóa.');
  }

  function getQuickCaptureDefaultColumn(project = getActiveProject()) {
    if (!project?.columns?.length) return null;
    const settings = state.settings.quickCapture || (state.settings.quickCapture = createDefaultQuickCaptureSettings());
    const savedId = settings.defaultColumns[project.id];
    return project.columns.find(column => column.id === savedId)
      || project.columns.find(column => /việc cần làm|chưa sắp xếp/i.test(column.title))
      || project.columns[1]
      || project.columns[0];
  }

  function openQuickCaptureDialog() {
    const project = getActiveProject();
    if (!project) {
      showToast('Hãy tạo hoặc mở một dự án trước.');
      return;
    }
    const defaultColumn = getQuickCaptureDefaultColumn(project);
    refs.quickCaptureColumnSelect.innerHTML = project.columns.map(column => `<option value="${escapeAttr(column.id)}">${escapeHtml(column.title)}</option>`).join('');
    refs.quickCaptureColumnSelect.value = defaultColumn?.id || project.columns[0]?.id || '';
    refs.quickCaptureTitleInput.value = '';
    updateQuickCaptureHint();
    refs.quickCaptureDialog.showModal();
    requestAnimationFrame(() => refs.quickCaptureTitleInput.focus());
  }

  function updateQuickCaptureHint() {
    const project = getActiveProject();
    const column = project?.columns.find(item => item.id === refs.quickCaptureColumnSelect.value);
    refs.quickCaptureDestinationHint.textContent = column
      ? `Công việc sẽ được thêm vào cuối cột “${column.title}” của dự án “${project.name}”.`
      : 'Hãy chọn cột nhận công việc.';
  }

  function saveQuickCaptureTask(event) {
    event.preventDefault();
    const title = refs.quickCaptureTitleInput.value.trim();
    if (!title) return refs.quickCaptureTitleInput.focus();
    const project = getActiveProject();
    const column = project?.columns.find(item => item.id === refs.quickCaptureColumnSelect.value);
    if (!project || !column) return;
    captureUndo('Ghi nhanh công việc');
    column.cards.push({id:uid('card'),title,description:'',labels:[],checklist:[],createdAt:nowIso(),updatedAt:nowIso()});
    touchProject(project);
    saveNow();
    refs.quickCaptureDialog.close();
    refs.quickCaptureTitleInput.blur();
    renderAll();
    showToast(`Đã thêm công việc vào “${column.title}”.`);
  }

  function openCardDialog(columnId,cardId = null) {
    const project = getActiveProject();
    if (!project) return;
    const found = cardId ? findCard(cardId) : null;
    const card = found?.card || null;
    cardEdit = {cardId,originalColumnId:found?.column.id || columnId};
    refs.cardDialogTitle.textContent = card ? 'Sửa công việc' : 'Thêm công việc';
    refs.cardTitleInput.value = card?.title || '';
    refs.cardDescriptionInput.value = card?.description || '';
    refs.deleteCardBtn.hidden = !card;
    refs.duplicateCardBtn.hidden = !card;
    refs.labelOptions.querySelectorAll('input[name="cardLabel"]').forEach(input => input.checked = Boolean(card?.labels.includes(input.value)));
    refs.cardColumnSelect.innerHTML = project.columns.map(column => `<option value="${column.id}">${escapeHtml(column.title)}</option>`).join('');
    refs.cardColumnSelect.value = found?.column.id || columnId;
    refs.checklistEditor.innerHTML = '';
    (card?.checklist || []).forEach(item => addChecklistRow(item));
    updateChecklistEmpty();
    refs.cardDialog.showModal();
    requestAnimationFrame(() => refs.cardTitleInput.focus());
  }

  function addChecklistRow(item = {id:uid('check'),text:'',done:false}) {
    const row = document.createElement('div');
    row.className = 'checklist-row';
    row.dataset.checkId = item.id || uid('check');
    row.innerHTML = `
      <input type="checkbox" aria-label="Đã hoàn thành" ${item.done ? 'checked' : ''}>
      <input type="text" maxlength="300" placeholder="Nội dung cần kiểm tra" value="${escapeAttr(item.text || '')}">
      <button class="icon-btn subtle remove-check-btn" type="button" aria-label="Xóa dòng">×</button>`;
    row.querySelector('.remove-check-btn').addEventListener('click', () => {
      row.remove();
      updateChecklistEmpty();
    });
    refs.checklistEditor.appendChild(row);
    updateChecklistEmpty();
    if (!item.text) requestAnimationFrame(() => row.querySelector('input[type="text"]').focus());
  }

  function updateChecklistEmpty() {
    refs.checklistEmpty.hidden = refs.checklistEditor.children.length > 0;
  }

  function saveCard(event) {
    event.preventDefault();
    const title = refs.cardTitleInput.value.trim();
    if (!title) return refs.cardTitleInput.focus();
    const project = getActiveProject();
    const targetColumn = project.columns.find(column => column.id === refs.cardColumnSelect.value);
    if (!targetColumn) return;
    const labels = [...refs.labelOptions.querySelectorAll('input[name="cardLabel"]:checked')].map(input => input.value);
    const checklist = [...refs.checklistEditor.querySelectorAll('.checklist-row')].map(row => ({
      id:row.dataset.checkId || uid('check'),
      text:row.querySelector('input[type="text"]').value.trim(),
      done:row.querySelector('input[type="checkbox"]').checked
    })).filter(item => item.text);
    captureUndo(cardEdit?.cardId ? 'Sửa công việc' : 'Thêm công việc');
    if (cardEdit?.cardId) {
      const found = findCard(cardEdit.cardId);
      if (!found) return;
      found.card.title = title;
      found.card.description = refs.cardDescriptionInput.value.trim();
      found.card.labels = labels;
      found.card.checklist = checklist;
      found.card.updatedAt = nowIso();
      if (found.column.id !== targetColumn.id) {
        found.column.cards = found.column.cards.filter(card => card.id !== found.card.id);
        targetColumn.cards.push(found.card);
      }
    } else {
      targetColumn.cards.push({id:uid('card'),title,description:refs.cardDescriptionInput.value.trim(),labels,checklist,createdAt:nowIso(),updatedAt:nowIso()});
    }
    touchProject(project);
    saveNow();
    refs.cardDialog.close();
    renderAll();
    showToast('Đã lưu công việc.');
  }

  async function deleteCard() {
    const found = cardEdit?.cardId ? findCard(cardEdit.cardId) : null;
    if (!found) return;
    const ok = await askConfirm('Xóa công việc?',`“${found.card.title}” sẽ bị xóa khỏi bảng.`);
    if (!ok) return;
    captureUndo('Xóa công việc');
    archiveCards([found.card], getActiveProject(), found.column, 'Xóa công việc');
    found.column.cards = found.column.cards.filter(card => card.id !== found.card.id);
    touchProject(getActiveProject());
    saveNow();
    refs.cardDialog.close();
    renderAll();
    showToast('Đã xóa công việc và lưu vào Nội dung đã xóa.');
  }

  function duplicateCard() {
    const found = cardEdit?.cardId ? findCard(cardEdit.cardId) : null;
    if (!found) return;
    captureUndo('Nhân bản công việc');
    const copy = clone(found.card);
    copy.id = uid('card');
    copy.title = `${copy.title} (bản sao)`;
    copy.createdAt = nowIso();
    copy.updatedAt = nowIso();
    copy.checklist = copy.checklist.map(item => ({...item,id:uid('check')}));
    found.column.cards.push(copy);
    touchProject(getActiveProject());
    saveNow();
    refs.cardDialog.close();
    renderAll();
    showToast('Đã nhân bản công việc.');
  }

  function openColumnDialog(id = null) {
    columnEditId = id;
    const column = id ? getActiveProject()?.columns.find(item => item.id === id) : null;
    refs.columnDialogTitle.textContent = column ? 'Sửa cột' : 'Thêm cột';
    refs.columnNameInput.value = column?.title || '';
    const columnBackground = column?.backgroundColor || '';
    refs.columnColorOptions.querySelectorAll('input[name="columnBackground"]').forEach(input => input.checked = input.value === columnBackground);
    refs.deleteColumnBtn.hidden = !column;
    refs.clearColumnContentBtn.hidden = !column;
    refs.clearColumnContentBtn.disabled = !column?.cards?.length;
    refs.clearColumnContentBtn.innerHTML = column?.cards?.length ? `<span aria-hidden="true">⌫</span> Xóa nội dung (${column.cards.length})` : '<span aria-hidden="true">⌫</span> Xóa nội dung';
    refs.duplicateColumnBtn.hidden = !column;
    refs.columnDialog.showModal();
    requestAnimationFrame(() => refs.columnNameInput.focus());
  }

  function saveColumn(event) {
    event.preventDefault();
    const name = refs.columnNameInput.value.trim();
    if (!name) return refs.columnNameInput.focus();
    const project = getActiveProject();
    const backgroundColor = refs.columnColorOptions.querySelector('input[name="columnBackground"]:checked')?.value || null;
    captureUndo(columnEditId ? 'Sửa cột' : 'Thêm cột');
    if (columnEditId) {
      const column = project.columns.find(item => item.id === columnEditId);
      if (column) { column.title = name; column.backgroundColor = backgroundColor; }
    } else {
      project.columns.push(createColumn(name,backgroundColor));
    }
    touchProject(project);
    saveNow();
    refs.columnDialog.close();
    renderAll();
    if (!columnEditId) requestAnimationFrame(() => refs.board.scrollTo({left:refs.board.scrollWidth,behavior:'smooth'}));
  }

  async function deleteColumn() {
    const project = getActiveProject();
    const column = project?.columns.find(item => item.id === columnEditId);
    if (!column) return;
    if (project.columns.length === 1) {
      showToast('Dự án phải có ít nhất một cột.');
      return;
    }
    const ok = await askConfirm('Xóa cột?',`Cột “${column.title}” và ${column.cards.length} công việc bên trong sẽ bị xóa.`);
    if (!ok) return;
    captureUndo('Xóa cột');
    archiveCards(column.cards, project, column, 'Xóa cột');
    project.columns = project.columns.filter(item => item.id !== column.id);
    state.settings.dailyMove.rules = state.settings.dailyMove.rules.filter(rule => rule.fromColumnId !== column.id && rule.toColumnId !== column.id);
    if (state.settings.quickCapture?.defaultColumns?.[project.id] === column.id) delete state.settings.quickCapture.defaultColumns[project.id];
    touchProject(project);
    saveNow();
    refs.columnDialog.close();
    renderAll();
    showToast('Đã xóa cột; nội dung bên trong được lưu gọn trong Nội dung đã xóa.');
  }

  async function clearColumnContent() {
    const project = getActiveProject();
    const column = project?.columns.find(item => item.id === columnEditId);
    if (!column) return;
    if (!column.cards.length) {
      showToast('Cột này không có nội dung để xóa.');
      return;
    }
    const ok = await askConfirm('Xóa toàn bộ nội dung?',`${column.cards.length} công việc trong “${column.title}” sẽ được xóa khỏi cột và lưu gọn dưới dạng văn bản trong mục Nội dung đã xóa.`);
    if (!ok) return;
    captureUndo('Xóa toàn bộ nội dung cột');
    const count = column.cards.length;
    archiveCards(column.cards, project, column, 'Xóa toàn bộ nội dung cột');
    column.cards = [];
    touchProject(project);
    saveNow();
    refs.columnDialog.close();
    renderAll();
    showToast(`Đã xóa ${count} công việc và lưu vào Nội dung đã xóa.`);
  }

  function duplicateColumn() {
    const project = getActiveProject();
    const index = project?.columns.findIndex(item => item.id === columnEditId) ?? -1;
    if (index < 0) return;
    captureUndo('Nhân bản cột');
    const copy = clone(project.columns[index]);
    copy.id = uid('column');
    copy.title = `${copy.title} (bản sao)`;
    copy.cards = copy.cards.map(card => ({...card,id:uid('card'),createdAt:nowIso(),updatedAt:nowIso(),checklist:card.checklist.map(item => ({...item,id:uid('check')}))}));
    project.columns.splice(index + 1,0,copy);
    touchProject(project);
    saveNow();
    refs.columnDialog.close();
    renderAll();
    showToast('Đã nhân bản cột.');
  }

  function captureUndo(label) {
    undoSnapshot = JSON.stringify(state);
    undoLabel = label;
    updateUndoButton();
  }

  function undo() {
    if (!undoSnapshot) return;
    const current = JSON.stringify(state);
    try {
      state = normalizeState(JSON.parse(undoSnapshot));
      undoSnapshot = current;
      undoLabel = 'Làm lại thay đổi';
      saveNow();
      renderAll();
      showToast('Đã hoàn tác.');
    } catch (error) {
      console.error(error);
      showToast('Không thể hoàn tác thay đổi này.');
    }
  }

  function updateUndoButton() {
    refs.undoBtn.disabled = !undoSnapshot;
    refs.undoBtn.title = undoSnapshot ? undoLabel : 'Chưa có thay đổi để hoàn tác';
  }

  function saveNow() {
    if (!state) return;
    clearTimeout(saveTimer);
    refs.saveStatus.textContent = 'Đang lưu…';
    refs.saveStatus.classList.add('saving');
    try {
      localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
      saveTimer = setTimeout(() => {
        refs.saveStatus.textContent = 'Đã lưu';
        refs.saveStatus.classList.remove('saving');
      },220);
    } catch (error) {
      console.error(error);
      refs.saveStatus.textContent = 'Lỗi lưu';
      refs.saveStatus.classList.remove('saving');
      showToast('Không thể lưu. Trình duyệt có thể đã hết dung lượng.');
    }
  }

  function exportData() {
    state.settings.lastExportAt = nowIso();
    saveNow();
    const payload = {app:'Kanban Cá Nhân',exportVersion:VERSION,exportedAt:nowIso(),data:state};
    const blob = new Blob([JSON.stringify(payload,null,2)],{type:'application/json;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kanban-ca-nhan-${dateStamp()}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast('Đã xuất bản sao dữ liệu.');
  }

  async function importData(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      const imported = normalizeState(parsed.data || parsed);
      const ok = await askConfirm('Nhập dữ liệu?','Dữ liệu hiện tại sẽ được thay thế. Nên xuất bản sao trước khi tiếp tục.');
      if (!ok) return;
      captureUndo('Nhập dữ liệu');
      state = imported;
      ensureActiveProject();
      applyTheme();
      applyBackground();
      initClockWidget();
      saveNow();
      renderAll();
      showToast('Đã nhập dữ liệu thành công.');
    } catch (error) {
      console.error(error);
      showToast('Tệp JSON không hợp lệ hoặc sai cấu trúc.');
    }
  }

  function openSettingsDialog() {
    renderSettings();
    refs.settingsDialog.showModal();
  }

  function renderSettings() {
    const dailyMove = state.settings.dailyMove || (state.settings.dailyMove = createDefaultDailyMoveSettings());
    const project = getActiveProject();
    renderQuickCaptureSettings(project);
    refs.dailyMoveEnabled.checked = dailyMove.enabled;
    refs.dailyMoveProjectName.textContent = project?.name || 'Chưa có dự án';
    refs.addDailyMoveRuleBtn.disabled = !project || project.columns.length < 2;
    renderDailyMoveRules();
    const archiveCount = state.deleted?.archive?.length || 0;
    const trashCount = state.deleted?.trash?.length || 0;
    refs.deletedContentCount.textContent = archiveCount + trashCount;
    const lastRun = dailyMove.lastRunDate ? formatDateOnly(dailyMove.lastRunDate) : 'chưa có';
    refs.dailyMoveStatus.textContent = dailyMove.enabled
      ? `Đang bật · Mốc ngày đã ghi nhớ: ${lastRun}. Nếu ứng dụng đang đóng, quy tắc sẽ chạy ngay lần mở đầu tiên sau ngày mới.`
      : 'Đang tắt. Khi bật, ngày hiện tại sẽ được ghi nhớ và quy tắc bắt đầu chạy từ lần sang ngày tiếp theo.';
  }

  function renderQuickCaptureSettings(project = getActiveProject()) {
    refs.quickCaptureProjectName.textContent = project?.name || 'Chưa có dự án';
    refs.quickCaptureDefaultColumnSelect.disabled = !project;
    if (!project) {
      refs.quickCaptureDefaultColumnSelect.innerHTML = '<option value="">Chưa có cột</option>';
      refs.quickCaptureStatus.textContent = 'Hãy tạo hoặc mở một dự án để chọn cột nhận công việc.';
      return;
    }
    refs.quickCaptureDefaultColumnSelect.innerHTML = project.columns.map(column => `<option value="${escapeAttr(column.id)}">${escapeHtml(column.title)}</option>`).join('');
    const defaultColumn = getQuickCaptureDefaultColumn(project);
    refs.quickCaptureDefaultColumnSelect.value = defaultColumn?.id || '';
    refs.quickCaptureStatus.textContent = defaultColumn
      ? `Ctrl + Enter sẽ mặc định đưa công việc vào cột “${defaultColumn.title}”. Bạn vẫn có thể đổi cột trong từng lần nhập.`
      : 'Dự án chưa có cột nhận công việc.';
  }

  function updateQuickCaptureDefaultColumn() {
    const project = getActiveProject();
    const column = project?.columns.find(item => item.id === refs.quickCaptureDefaultColumnSelect.value);
    if (!project || !column) return;
    const quick = state.settings.quickCapture || (state.settings.quickCapture = createDefaultQuickCaptureSettings());
    quick.defaultColumns[project.id] = column.id;
    saveNow();
    renderQuickCaptureSettings(project);
    showToast(`Đã đặt “${column.title}” làm cột nhập nhanh mặc định.`);
  }

  function renderDailyMoveRules() {
    const project = getActiveProject();
    const dailyMove = state.settings.dailyMove || (state.settings.dailyMove = createDefaultDailyMoveSettings());
    refs.dailyMoveRules.innerHTML = '';
    if (!project) {
      refs.dailyMoveRules.innerHTML = '<div class="settings-empty">Chưa có dự án để thiết lập.</div>';
      return;
    }
    const rules = dailyMove.rules.filter(rule => rule.projectId === project.id);
    if (!rules.length) {
      refs.dailyMoveRules.innerHTML = '<div class="settings-empty">Chưa có thao tác chuyển. Bấm dấu ＋ để thêm.</div>';
      return;
    }
    const options = project.columns.map(column => `<option value="${escapeAttr(column.id)}">${escapeHtml(column.title)}</option>`).join('');
    rules.forEach((rule,index) => {
      const row = document.createElement('div');
      row.className = 'daily-rule-row';
      row.dataset.ruleId = rule.id;
      row.innerHTML = `
        <span class="daily-rule-index">${index + 1}</span>
        <label><span>Từ</span><select class="daily-rule-from" aria-label="Cột nguồn">${options}</select></label>
        <span class="daily-rule-arrow">→</span>
        <label><span>Sang</span><select class="daily-rule-to" aria-label="Cột đích">${options}</select></label>
        <button class="icon-btn subtle remove-daily-rule" type="button" aria-label="Xóa thao tác" data-tooltip="Xóa thao tác chuyển này">×</button>`;
      row.querySelector('.daily-rule-from').value = rule.fromColumnId;
      row.querySelector('.daily-rule-to').value = rule.toColumnId;
      refs.dailyMoveRules.appendChild(row);
    });
  }

  function toggleDailyMoveEnabled() {
    const dailyMove = state.settings.dailyMove || (state.settings.dailyMove = createDefaultDailyMoveSettings());
    dailyMove.enabled = refs.dailyMoveEnabled.checked;
    dailyMove.lastRunDate = localDateStamp();
    saveNow();
    renderSettings();
    showToast(dailyMove.enabled ? 'Đã bật tự động chuyển khi sang ngày mới.' : 'Đã tắt tự động chuyển khi sang ngày mới.');
  }

  function addDailyMoveRule() {
    const project = getActiveProject();
    if (!project || project.columns.length < 2) {
      showToast('Cần ít nhất hai cột để tạo thao tác chuyển.');
      return;
    }
    const from = project.columns.find(column => /việc ngày mai/i.test(column.title)) || project.columns[0];
    const to = project.columns.find(column => /việc hôm nay/i.test(column.title)) || project.columns.find(column => column.id !== from.id);
    if (!from || !to) return;
    const dailyMove = state.settings.dailyMove || (state.settings.dailyMove = createDefaultDailyMoveSettings());
    dailyMove.rules.push({id:uid('rule'),projectId:project.id,fromColumnId:from.id,toColumnId:to.id});
    dailyMove.lastRunDate = localDateStamp();
    saveNow();
    renderSettings();
  }

  function updateDailyMoveRule(event) {
    const row = event.target.closest('.daily-rule-row');
    if (!row || !event.target.matches('select')) return;
    const rule = state.settings.dailyMove.rules.find(item => item.id === row.dataset.ruleId);
    if (!rule) return;
    const fromId = row.querySelector('.daily-rule-from').value;
    const toId = row.querySelector('.daily-rule-to').value;
    if (fromId === toId) {
      showToast('Cột nguồn và cột đích phải khác nhau.');
      renderDailyMoveRules();
      return;
    }
    rule.fromColumnId = fromId;
    rule.toColumnId = toId;
    state.settings.dailyMove.lastRunDate = localDateStamp();
    saveNow();
  }

  function handleDailyMoveRuleClick(event) {
    const button = event.target.closest('.remove-daily-rule');
    if (!button) return;
    const row = button.closest('.daily-rule-row');
    state.settings.dailyMove.rules = state.settings.dailyMove.rules.filter(rule => rule.id !== row.dataset.ruleId);
    state.settings.dailyMove.lastRunDate = localDateStamp();
    saveNow();
    renderSettings();
  }

  function runDailyMovesIfNeeded() {
    const result = {moved:0,rules:0};
    const dailyMove = state?.settings?.dailyMove;
    if (!dailyMove) return result;
    const today = localDateStamp();
    if (!dailyMove.lastRunDate) {
      dailyMove.lastRunDate = today;
      return result;
    }
    if (!dailyMove.enabled || dailyMove.lastRunDate === today) return result;

    const movedCardIds = new Set();
    const snapshots = [];
    dailyMove.rules.forEach(rule => {
      const project = state.projects.find(item => item.id === rule.projectId);
      const source = project?.columns.find(column => column.id === rule.fromColumnId);
      const target = project?.columns.find(column => column.id === rule.toColumnId);
      if (!project || !source || !target || source.id === target.id) return;
      const cards = source.cards.filter(card => !movedCardIds.has(card.id));
      cards.forEach(card => movedCardIds.add(card.id));
      snapshots.push({project,source,target,cards});
    });

    snapshots.forEach(move => {
      if (!move.cards.length) return;
      const ids = new Set(move.cards.map(card => card.id));
      move.source.cards = move.source.cards.filter(card => !ids.has(card.id));
      move.target.cards.push(...move.cards);
      touchProject(move.project);
      result.moved += move.cards.length;
      result.rules += 1;
    });
    dailyMove.lastRunDate = today;
    return result;
  }

  function checkDailyMoveAfterResume() {
    if (!state) return;
    const today = localDateStamp();
    if (lastObservedLocalDate === today && state.settings.dailyMove?.lastRunDate === today) return;
    lastObservedLocalDate = today;
    const result = runDailyMovesIfNeeded();
    saveNow();
    if (result.moved > 0) {
      renderAll();
      showToast(`Đã tự động chuyển ${result.moved} công việc sang ngày mới.`);
    }
  }

  function archiveCards(cards,project,column,reason = '') {
    if (!Array.isArray(cards) || !cards.length || !project || !column) return 0;
    if (!state.deleted) state.deleted = {archive:[],trash:[]};
    const deletedAt = nowIso();
    const items = cards.map(card => ({
      id:uid('deleted'),
      title:String(card.title || 'Công việc').slice(0,160),
      text:cardToPlainText(card,reason),
      project:String(project.name || 'Dự án').slice(0,120),
      column:String(column.title || 'Cột').slice(0,120),
      createdAt:card.createdAt || deletedAt,
      updatedAt:card.updatedAt || card.createdAt || deletedAt,
      deletedAt
    }));
    state.deleted.archive.unshift(...items);
    return items.length;
  }

  function cardToPlainText(card,reason = '') {
    const lines = [];
    const description = String(card.description || '').trim();
    if (description) lines.push(description);
    const labels = Array.isArray(card.labels) ? card.labels.map(id => LABELS.find(label => label.id === id)?.name).filter(Boolean) : [];
    if (labels.length) lines.push(`Nhãn: ${labels.join(', ')}`);
    const checklist = Array.isArray(card.checklist) ? card.checklist : [];
    if (checklist.length) lines.push(`Danh sách kiểm tra:\n${checklist.map(item => `${item.done ? '[x]' : '[ ]'} ${String(item.text || '').trim()}`).join('\n')}`);
    if (reason) lines.push(`Nguồn xóa: ${reason}`);
    return lines.join('\n\n').slice(0,12000);
  }

  function openDeletedContentDialog() {
    refs.settingsDialog.close();
    deletedViewTab = 'archive';
    renderDeletedContent();
    refs.deletedContentDialog.showModal();
  }

  function switchDeletedTab(tab) {
    deletedViewTab = tab === 'trash' ? 'trash' : 'archive';
    renderDeletedContent();
  }

  function renderDeletedContent() {
    if (!state.deleted) state.deleted = {archive:[],trash:[]};
    const archive = state.deleted.archive;
    const trash = state.deleted.trash;
    refs.deletedArchiveCount.textContent = archive.length;
    refs.deletedTrashCount.textContent = trash.length;
    refs.deletedArchiveTabBtn.classList.toggle('active',deletedViewTab === 'archive');
    refs.deletedTrashTabBtn.classList.toggle('active',deletedViewTab === 'trash');
    refs.deletedArchivePanel.hidden = deletedViewTab !== 'archive';
    refs.deletedTrashPanel.hidden = deletedViewTab !== 'trash';
    refs.emptyTrashBtn.disabled = trash.length === 0;
    refs.deletedArchiveList.innerHTML = renderDeletedItems(archive,'archive');
    refs.deletedTrashList.innerHTML = renderDeletedItems(trash,'trash');
  }

  function renderDeletedItems(items,stage) {
    if (!items.length) return `<div class="deleted-empty">${stage === 'archive' ? 'Chưa có nội dung đã xóa.' : 'Thùng rác đang trống.'}</div>`;
    return items.map(item => `
      <article class="deleted-item" data-deleted-id="${escapeAttr(item.id)}" data-stage="${stage}">
        <div class="deleted-item-head">
          <button class="deleted-expand-btn" type="button" aria-expanded="false">
            <span class="deleted-item-title">${escapeHtml(item.title)}</span>
            <span class="deleted-item-location">${escapeHtml(item.project)} › ${escapeHtml(item.column)}</span>
            <span class="deleted-item-dates">Tạo ${formatDateTime(item.createdAt)} · Sửa ${formatDateTime(item.updatedAt)} · Xóa ${formatDateTime(item.deletedAt)}</span>
          </button>
          <button class="${stage === 'archive' ? 'danger-btn' : 'ghost-btn'} compact-btn deleted-action-btn" type="button" data-action="${stage === 'archive' ? 'trash' : 'purge'}">${stage === 'archive' ? 'Xóa' : 'Xóa vĩnh viễn'}</button>
        </div>
        <div class="deleted-item-body" hidden><pre>${escapeHtml(item.text || '(Không có mô tả bổ sung)')}</pre>${stage === 'trash' ? `<div class="deleted-trash-date">Vào thùng rác: ${formatDateTime(item.trashedAt)}</div>` : ''}</div>
      </article>`).join('');
  }

  function handleDeletedListClick(event) {
    const itemEl = event.target.closest('.deleted-item');
    if (!itemEl) return;
    const expand = event.target.closest('.deleted-expand-btn');
    if (expand) {
      const body = itemEl.querySelector('.deleted-item-body');
      body.hidden = !body.hidden;
      expand.setAttribute('aria-expanded',String(!body.hidden));
      return;
    }
    const action = event.target.closest('.deleted-action-btn')?.dataset.action;
    if (action === 'trash') moveDeletedItemToTrash(itemEl.dataset.deletedId);
    if (action === 'purge') purgeDeletedItem(itemEl.dataset.deletedId);
  }

  function moveDeletedItemToTrash(id) {
    const index = state.deleted.archive.findIndex(item => item.id === id);
    if (index < 0) return;
    captureUndo('Chuyển nội dung vào thùng rác');
    const [item] = state.deleted.archive.splice(index,1);
    state.deleted.trash.unshift({...item,trashedAt:nowIso()});
    saveNow();
    renderDeletedContent();
    showToast('Đã chuyển nội dung vào thùng rác.');
  }

  async function purgeDeletedItem(id) {
    const item = state.deleted.trash.find(entry => entry.id === id);
    if (!item) return;
    const ok = await askConfirm('Xóa vĩnh viễn?',`“${item.title}” sẽ bị xóa hoàn toàn và không thể khôi phục.`);
    if (!ok) return;
    state.deleted.trash = state.deleted.trash.filter(entry => entry.id !== id);
    saveNow();
    renderDeletedContent();
    showToast('Đã xóa vĩnh viễn nội dung.');
  }

  async function emptyTrash() {
    if (!state.deleted.trash.length) return;
    const ok = await askConfirm('Xóa vĩnh viễn toàn bộ thùng rác?',`${state.deleted.trash.length} mục sẽ bị xóa hoàn toàn để giải phóng dung lượng.`);
    if (!ok) return;
    state.deleted.trash = [];
    saveNow();
    renderDeletedContent();
    showToast('Đã dọn sạch thùng rác.');
  }

  function openResetDataDialog() {
    refs.settingsDialog.close();
    refs.resetConfirmInput.value = '';
    refs.resetBackupStatus.textContent = 'Chưa xuất backup trong lần xác nhận này.';
    refs.resetBackupStatus.className = 'reset-backup-status';
    updateResetDeleteButton();
    refs.resetDataDialog.showModal();
    requestAnimationFrame(() => refs.resetConfirmInput.focus());
  }

  function exportBackupBeforeReset() {
    exportData();
    refs.resetBackupStatus.textContent = 'Đã tạo file backup JSON. Hãy kiểm tra thư mục tải xuống trước khi xóa.';
    refs.resetBackupStatus.className = 'reset-backup-status success';
  }

  function updateResetDeleteButton() {
    const confirmed = refs.resetConfirmInput.value.trim() === 'OK';
    refs.resetDeleteBtn.disabled = !confirmed;
    refs.resetConfirmInput.classList.toggle('confirmed', confirmed);
  }

  async function deleteAllAppData(event) {
    event.preventDefault();
    if (refs.resetConfirmInput.value.trim() !== 'OK') {
      refs.resetConfirmInput.focus();
      showToast('Bạn cần gõ chính xác OK để xác nhận.');
      return;
    }

    refs.resetDeleteBtn.disabled = true;
    refs.resetDeleteBtn.textContent = 'Đang xóa…';
    stopAlarm(false);
    clearTimeout(saveTimer);
    undoSnapshot = null;
    undoLabel = '';
    ui.search = '';

    await window.KanbanMusicPlayer?.clearAllData?.();
    removeAppStorage(localStorage);
    removeAppStorage(sessionStorage);
    await removeAppCaches();

    state = createDefaultState();
    refs.searchInput.value = '';
    applyTheme();
    applyBackground();
    renderAll();
    initClockWidget();
    saveNow();

    refs.resetDataDialog.close();
    refs.resetDeleteBtn.textContent = 'Xóa vĩnh viễn';
    refs.resetConfirmInput.value = '';
    updateResetDeleteButton();
    showToast('Đã xóa toàn bộ dữ liệu và khôi phục ứng dụng về trạng thái ban đầu.');
  }

  function removeAppStorage(storage) {
    try {
      const keys = [];
      for (let index = 0; index < storage.length; index += 1) {
        const key = storage.key(index);
        if (key && isAppStorageKey(key)) keys.push(key);
      }
      keys.forEach(key => storage.removeItem(key));
    } catch (error) {
      console.warn('Không thể xóa storage của ứng dụng:', error);
    }
  }

  function isAppStorageKey(key) {
    return key === STORAGE_KEY || key.startsWith('linh_personal_kanban') || key.startsWith('linh-kanban-static') || key.startsWith('linh_kanban_music') || key.startsWith('linh_kanban_office');
  }

  async function removeAppCaches() {
    if (!('caches' in window)) return;
    try {
      const names = await caches.keys();
      const appCaches = names.filter(name => name.startsWith('linh-kanban-static'));
      await Promise.all(appCaches.map(name => caches.delete(name)));
    } catch (error) {
      console.warn('Không thể xóa cache của ứng dụng:', error);
    }
  }

  function toggleTheme() {
    state.settings.theme = state.settings.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveNow();
  }

  function applyTheme() {
    document.documentElement.dataset.theme = state?.settings?.theme === 'dark' ? 'dark' : 'light';
  }

  function openBackgroundDialog() {
    const selected = refs.backgroundOptions.querySelector(`input[value="${state.settings.background}"]`);
    if (selected) selected.checked = true;
    refs.backgroundDialog.showModal();
  }

  function changeBackground(event) {
    const id = event.target?.value;
    if (!BACKGROUNDS.some(background => background.id === id)) return;
    state.settings.background = id;
    applyBackground();
    saveNow();
    showToast('Đã đổi hình nền.');
  }

  function applyBackground() {
    const selected = BACKGROUNDS.find(background => background.id === state?.settings?.background) || BACKGROUNDS.find(background => background.id === DEFAULT_BACKGROUND_ID);
    document.body.dataset.backgroundId = selected?.id || 'none';
    if (selected?.file) {
      document.documentElement.style.setProperty('--board-bg-image',`url("${selected.file}")`);
      document.body.classList.add('has-background');
    } else {
      document.documentElement.style.removeProperty('--board-bg-image');
      document.body.classList.remove('has-background');
    }
  }

  function createDefaultClockSettings() {
    return {durationSec:1500,remainingSec:1500,endAt:null,running:false,alarmActive:false,expanded:false};
  }

  function normalizeClockSettings(input) {
    const defaults = createDefaultClockSettings();
    const durationSec = Number.isFinite(Number(input?.durationSec)) ? Math.max(1,Math.min(359999,Math.round(Number(input.durationSec)))) : defaults.durationSec;
    let remainingSec = Number.isFinite(Number(input?.remainingSec)) ? Math.max(0,Math.min(359999,Math.round(Number(input.remainingSec)))) : durationSec;
    const running = Boolean(input?.running && input?.endAt);
    let endAt = null;
    if (running) {
      const parsed = new Date(input.endAt).getTime();
      if (Number.isFinite(parsed)) {
        const rest = Math.ceil((parsed - Date.now()) / 1000);
        if (rest > 0) {
          remainingSec = rest;
          endAt = new Date(Date.now() + rest * 1000).toISOString();
        }
      }
    }
    return {durationSec,remainingSec: running && !endAt ? durationSec : remainingSec,endAt,running:Boolean(endAt),alarmActive:Boolean(input?.alarmActive),expanded:Boolean(input?.expanded)};
  }

  function initClockWidget() {
    if (!state.settings.clock) state.settings.clock = createDefaultClockSettings();
    if (!clockTickTimer) clockTickTimer = setInterval(updateClockWidget, 1000);
    updateClockWidget();
  }


  function toggleClockExpanded() {
    const clock = state.settings.clock || (state.settings.clock = createDefaultClockSettings());
    clock.expanded = !clock.expanded;
    saveNow();
    updateClockWidget();
  }


  function updateClockWidget() {
    const now = new Date();
    const observedDate = localDateStamp(now);
    if (lastObservedLocalDate && observedDate !== lastObservedLocalDate) checkDailyMoveAfterResume();
    lastObservedLocalDate = observedDate;
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const period = hours < 12 ? 'Sáng' : hours < 18 ? 'Chiều' : 'Tối';
    const weekdayNames = ['Chủ nhật','Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy'];
    refs.clockDayPeriod.textContent = period;
    refs.clockCurrentTime.textContent = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    refs.clockWeekday.textContent = weekdayNames[now.getDay()];
    refs.clockDate.textContent = `${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${now.getFullYear()}`;

    const clock = state.settings.clock || (state.settings.clock = createDefaultClockSettings());
    if (clock.running && clock.endAt) {
      const remain = Math.max(0, Math.ceil((new Date(clock.endAt).getTime() - Date.now()) / 1000));
      clock.remainingSec = remain;
      if (remain <= 0) finishCountdown();
    }
    refs.timerDisplay.textContent = formatCountdown(clock.remainingSec);
    if (!clock.running) {
      refs.timerMinutesInput.value = Math.floor(clock.durationSec / 60);
      refs.timerSecondsInput.value = clock.durationSec % 60;
    }
    refs.timerStartPauseBtn.textContent = clock.running ? 'Tạm dừng' : (clock.remainingSec > 0 && clock.remainingSec !== clock.durationSec ? 'Tiếp tục' : 'Bắt đầu');
    refs.clockStatus.textContent = clock.alarmActive ? 'Đã hết giờ' : clock.running ? 'Đang tập trung' : clock.remainingSec !== clock.durationSec && clock.remainingSec > 0 ? 'Đang tạm dừng' : 'Sẵn sàng';
    refs.timerStopAlarmBtn.hidden = !clock.alarmActive;
    refs.deskClockControls.hidden = !clock.expanded;
    refs.clockToggleBtn.setAttribute('aria-expanded', String(clock.expanded));
    refs.clockToggleBtn.setAttribute('aria-label', clock.expanded ? 'Thu gọn hẹn giờ' : 'Mở hẹn giờ');
    refs.clockToggleBtn.textContent = clock.expanded ? '▴' : '▾';
    refs.clockToggleBtn.dataset.tooltip = clock.expanded ? 'Thu gọn phần hẹn giờ' : 'Mở rộng phần hẹn giờ';
    refs.deskClockWidget.classList.toggle('expanded', clock.expanded);
    refs.deskClockWidget.classList.toggle('alarm-active', clock.alarmActive);
  }

  function syncTimerInputsSoft() {
    refs.timerMinutesInput.value = sanitizeInteger(refs.timerMinutesInput.value,0,999);
    refs.timerSecondsInput.value = sanitizeInteger(refs.timerSecondsInput.value,0,59);
  }

  function handleTimerInputChange() {
    syncTimerInputsSoft();
    const durationSec = getTimerInputSeconds();
    const clock = state.settings.clock || (state.settings.clock = createDefaultClockSettings());
    clock.durationSec = durationSec;
    if (!clock.running) clock.remainingSec = durationSec;
    saveNow();
    updateClockWidget();
  }

  function getTimerInputSeconds() {
    const minutes = sanitizeInteger(refs.timerMinutesInput.value,0,999);
    const seconds = sanitizeInteger(refs.timerSecondsInput.value,0,59);
    refs.timerMinutesInput.value = minutes;
    refs.timerSecondsInput.value = seconds;
    return Math.max(1, minutes * 60 + seconds);
  }

  function applyTimerPreset(minutes) {
    const safeMinutes = Math.max(0, Math.min(999, Math.round(minutes || 0)));
    refs.timerMinutesInput.value = safeMinutes;
    refs.timerSecondsInput.value = 0;
    stopAlarm();
    const clock = state.settings.clock || (state.settings.clock = createDefaultClockSettings());
    clock.durationSec = Math.max(1, safeMinutes * 60);
    clock.remainingSec = clock.durationSec;
    clock.endAt = null;
    clock.running = false;
    saveNow();
    updateClockWidget();
    showToast(`Đã đặt nhanh ${safeMinutes} phút.`);
  }

  function toggleCountdown() {
    const clock = state.settings.clock || (state.settings.clock = createDefaultClockSettings());
    stopAlarm();
    if (clock.running) {
      clock.remainingSec = Math.max(0, Math.ceil((new Date(clock.endAt).getTime() - Date.now()) / 1000));
      clock.endAt = null;
      clock.running = false;
      saveNow();
      updateClockWidget();
      return;
    }
    if (clock.remainingSec <= 0 || clock.remainingSec === clock.durationSec) {
      clock.durationSec = getTimerInputSeconds();
      clock.remainingSec = clock.durationSec;
    }
    clock.endAt = new Date(Date.now() + clock.remainingSec * 1000).toISOString();
    clock.running = true;
    saveNow();
    updateClockWidget();
  }

  function resetCountdown() {
    stopAlarm();
    const clock = state.settings.clock || (state.settings.clock = createDefaultClockSettings());
    clock.durationSec = getTimerInputSeconds();
    clock.remainingSec = clock.durationSec;
    clock.endAt = null;
    clock.running = false;
    saveNow();
    updateClockWidget();
    showToast('Đã đặt lại bộ đếm ngược.');
  }

  function finishCountdown() {
    const clock = state.settings.clock || (state.settings.clock = createDefaultClockSettings());
    if (clock.alarmActive) return;
    clock.remainingSec = 0;
    clock.endAt = null;
    clock.running = false;
    clock.alarmActive = true;
    clock.expanded = true;
    startAlarm();
    saveNow();
    updateClockWidget();
    showToast('Đã hết giờ làm việc.');
  }

  function startAlarm() {
    stopAlarm(false);
    playBeep();
    alarmTimer = setInterval(playBeep, 1300);
  }

  function stopAlarm(update=true) {
    if (alarmTimer) clearInterval(alarmTimer);
    alarmTimer = null;
    const clock = state?.settings?.clock;
    if (clock) clock.alarmActive = false;
    if (update) {
      saveNow();
      updateClockWidget();
    }
  }

  function playBeep() {
    try {
      if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
      if (audioContext.state === 'suspended') audioContext.resume();
      const now = audioContext.currentTime;
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.18, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.start(now);
      osc.stop(now + 0.36);
    } catch (error) {
      console.warn('Audio alarm:', error);
    }
  }

  function formatCountdown(totalSeconds) {
    const safe = Math.max(0, Math.round(totalSeconds || 0));
    const hours = Math.floor(safe / 3600);
    const minutes = Math.floor((safe % 3600) / 60);
    const seconds = safe % 60;
    return hours > 0 ? `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}` : `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
  }

  function sanitizeInteger(value,min,max) {
    const num = Number.parseInt(String(value),10);
    const safe = Number.isFinite(num) ? num : min;
    return Math.max(min,Math.min(max,safe));
  }

  function fitProjectLabels() {
    refs.projectList.querySelectorAll('.project-label').forEach(label => {
      label.classList.remove('two-line');
      let size = 15;
      label.style.fontSize = `${size}px`;
      while (label.scrollWidth > label.clientWidth + 1 && size > 10) {
        size -= 0.5;
        label.style.fontSize = `${size}px`;
      }
      if (label.scrollWidth > label.clientWidth + 1) {
        label.classList.add('two-line');
        label.style.fontSize = '10px';
      }
    });
  }

  function getActiveProject() {
    return state.projects.find(project => project.id === state.activeProjectId) || null;
  }

  function findCard(cardId) {
    const project = getActiveProject();
    if (!project) return null;
    for (const column of project.columns) {
      const card = column.cards.find(item => item.id === cardId);
      if (card) return {project,column,card};
    }
    return null;
  }

  function touchProject(project) {
    if (project) project.updatedAt = nowIso();
  }

  function openSidebar() {
    refs.sidebar.classList.add('open');
    refs.sidebarBackdrop.hidden = false;
  }

  function closeSidebar() {
    refs.sidebar.classList.remove('open');
    refs.sidebarBackdrop.hidden = true;
  }

  function initTooltips() {
    document.addEventListener('mouseover', event => {
      const target = event.target.closest('[data-tooltip]');
      if (target) showTooltip(target);
    });
    document.addEventListener('mouseout', event => {
      const target = event.target.closest('[data-tooltip]');
      if (target && !target.contains(event.relatedTarget)) hideTooltip();
    });
    document.addEventListener('focusin', event => {
      const target = event.target.closest('[data-tooltip]');
      if (target) showTooltip(target);
    });
    document.addEventListener('focusout', event => {
      if (event.target.closest('[data-tooltip]')) hideTooltip();
    });
    window.addEventListener('scroll', hideTooltip, true);
    window.addEventListener('resize', hideTooltip);
  }

  function showTooltip(target) {
    const text = target.dataset.tooltip;
    if (!text || !refs.globalTooltip) return;
    // Dialog modal nằm trong lớp top-layer của trình duyệt. Đưa tooltip vào chính dialog
    // để tooltip không bị che phía sau lớp nền mờ của modal.
    const openDialog = target.closest('dialog[open]');
    const tooltipHost = openDialog || document.body;
    if (refs.globalTooltip.parentElement !== tooltipHost) tooltipHost.appendChild(refs.globalTooltip);
    refs.globalTooltip.textContent = text;
    refs.globalTooltip.hidden = false;
    refs.globalTooltip.style.left = '0px';
    refs.globalTooltip.style.top = '0px';
    const targetRect = target.getBoundingClientRect();
    const tipRect = refs.globalTooltip.getBoundingClientRect();
    let left = targetRect.left + targetRect.width / 2 - tipRect.width / 2;
    left = Math.max(8,Math.min(left,window.innerWidth - tipRect.width - 8));
    let top = targetRect.bottom + 9;
    if (top + tipRect.height > window.innerHeight - 8) top = targetRect.top - tipRect.height - 9;
    refs.globalTooltip.style.left = `${left}px`;
    refs.globalTooltip.style.top = `${Math.max(8,top)}px`;
  }

  function hideTooltip() {
    if (!refs.globalTooltip) return;
    refs.globalTooltip.hidden = true;
    if (refs.globalTooltip.parentElement !== document.body) document.body.appendChild(refs.globalTooltip);
  }

  function askConfirm(title,message) {
    refs.confirmTitle.textContent = title;
    refs.confirmMessage.textContent = message;
    refs.confirmDialog.returnValue = 'cancel';
    refs.confirmDialog.showModal();
    return new Promise(resolve => { confirmResolver = resolve; });
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    refs.toast.textContent = message;
    refs.toast.classList.add('show');
    toastTimer = setTimeout(() => refs.toast.classList.remove('show'),2200);
  }

  function cssEscape(value) {
    if (globalThis.CSS?.escape) return CSS.escape(String(value || ''));
    return String(value || '').replace(/[^a-zA-Z0-9_-]/g,'\$&');
  }

  function uid(prefix) {
    const random = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    return `${prefix}-${random}`;
  }

  function clone(value) {
    return globalThis.structuredClone ? structuredClone(value) : JSON.parse(JSON.stringify(value));
  }

  function nowIso() { return new Date().toISOString(); }
  function localDateStamp(date = new Date()) {
    return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  }
  function isDateStamp(value) { return /^\d{4}-\d{2}-\d{2}$/.test(String(value || '')); }
  function dateStamp() { return localDateStamp(); }
  function formatDateOnly(value) {
    if (!isDateStamp(value)) return 'chưa có';
    const [year,month,day] = value.split('-');
    return `${day}/${month}/${year}`;
  }
  function formatDateTime(value) {
    const date = new Date(value);
    if (!Number.isFinite(date.getTime())) return '—';
    return `${String(date.getDate()).padStart(2,'0')}/${String(date.getMonth()+1).padStart(2,'0')}/${date.getFullYear()} ${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`;
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g,char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'})[char]);
  }
  function escapeAttr(value) { return escapeHtml(value).replace(/`/g,'&#96;'); }

  function registerServiceWorker() {
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
      navigator.serviceWorker.register('./sw.js').catch(error => console.warn('Service worker:',error));
    }
  }
})();
