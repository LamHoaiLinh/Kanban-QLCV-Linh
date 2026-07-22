(() => {
  'use strict';

  const STORAGE_KEY = 'linh_personal_kanban_v1';
  const VERSION = 3;
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

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    cacheRefs();
    renderStaticOptions();
    bindEvents();
    state = loadState();
    ensureActiveProject();
    applyTheme();
    applyBackground();
    renderAll();
    initClockWidget();
    saveNow();
    registerServiceWorker();
  }

  function cacheRefs() {
    [
      'sidebar','sidebarBackdrop','openSidebarBtn','closeSidebarBtn','projectCount','projectList','addProjectBtn','emptyAddProjectBtn',
      'exportBtn','importBtn','importFile','activeProjectName','editProjectBtn','undoBtn','backgroundBtn','themeBtn','helpBtn','searchInput','projectStats','saveStatus',
      'emptyState','board','projectDialog','projectForm','projectDialogTitle','projectNameInput','projectColorOptions','deleteProjectBtn',
      'cardDialog','cardForm','cardDialogTitle','cardTitleInput','cardDescriptionInput','checklistEditor','checklistEmpty','addChecklistBtn',
      'labelOptions','cardColumnSelect','deleteCardBtn','duplicateCardBtn','columnDialog','columnForm','columnDialogTitle','columnNameInput',
      'deleteColumnBtn','duplicateColumnBtn','backgroundDialog','backgroundOptions','guideDialog','confirmDialog','confirmTitle','confirmMessage','globalTooltip','toast',
      'clockCurrentTime','clockDayPeriod','clockWeekday','clockDate','timerDisplay','clockStatus','timerMinutesInput','timerSecondsInput','timerStartPauseBtn','timerResetBtn','timerStopAlarmBtn','deskClockWidget'
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
    refs.cardForm.addEventListener('submit', saveCard);
    refs.addChecklistBtn.addEventListener('click', () => addChecklistRow());
    refs.deleteCardBtn.addEventListener('click', deleteCard);
    refs.duplicateCardBtn.addEventListener('click', duplicateCard);
    refs.columnForm.addEventListener('submit', saveColumn);
    refs.deleteColumnBtn.addEventListener('click', deleteColumn);
    refs.duplicateColumnBtn.addEventListener('click', duplicateColumn);
    refs.searchInput.addEventListener('input', event => {
      ui.search = event.target.value.trim().toLocaleLowerCase('vi');
      renderBoard();
    });
    refs.undoBtn.addEventListener('click', undo);
    refs.backgroundBtn.addEventListener('click', openBackgroundDialog);
    refs.themeBtn.addEventListener('click', toggleTheme);
    refs.helpBtn.addEventListener('click', () => refs.guideDialog.showModal());
    refs.backgroundOptions.addEventListener('change', changeBackground);
    refs.exportBtn.addEventListener('click', exportData);
    refs.importBtn.addEventListener('click', () => refs.importFile.click());
    refs.importFile.addEventListener('change', importData);
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

    document.querySelectorAll('[data-close]').forEach(button => {
      button.addEventListener('click', () => document.getElementById(button.dataset.close).close());
    });

    refs.confirmDialog.addEventListener('close', () => {
      if (!confirmResolver) return;
      confirmResolver(refs.confirmDialog.returnValue === 'ok');
      confirmResolver = null;
    });

    document.addEventListener('keydown', event => {
      const tag = document.activeElement?.tagName;
      const typing = ['INPUT','TEXTAREA','SELECT'].includes(tag);
      if (event.key === '/' && !typing) {
        event.preventDefault();
        refs.searchInput.focus();
      }
      if (event.key.toLowerCase() === 'n' && !typing) {
        const columns = getActiveProject()?.columns || [];
        const defaultColumn = columns.find(column => /việc cần làm|chưa sắp xếp/i.test(column.title)) || columns[1] || columns[0];
        if (defaultColumn) openCardDialog(defaultColumn.id);
      }
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z' && !typing) {
        event.preventDefault();
        undo();
      }
    });
    initTooltips();
    window.addEventListener('beforeunload', saveNow);
    window.addEventListener('resize', fitProjectLabels);
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
      settings:{theme:'light',background:DEFAULT_BACKGROUND_ID,lastExportAt:null,clock:createDefaultClockSettings()},
      projects:[{id:projectId,name:'Công việc của tôi',color:PROJECT_COLORS[0],createdAt:nowIso(),updatedAt:nowIso(),columns}]
    };
  }

  function createDefaultColumns() {
    return DEFAULT_COLUMN_TITLES.map(createColumn);
  }

  function createColumn(title) {
    return {id:uid('column'),title,cards:[]};
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
      settings:{theme:input.settings?.theme === 'dark' ? 'dark' : 'light',background,lastExportAt:input.settings?.lastExportAt || null,clock:normalizeClockSettings(input.settings?.clock)},
      projects:input.projects.map(project => ({
        id:String(project.id || uid('project')),
        name:String(project.name || 'Dự án chưa đặt tên').slice(0,80),
        color:PROJECT_COLORS.includes(project.color) ? project.color : PROJECT_COLORS[0],
        createdAt:project.createdAt || nowIso(),updatedAt:project.updatedAt || nowIso(),
        columns:Array.isArray(project.columns) ? project.columns.map(column => ({
          id:String(column.id || uid('column')),
          title:String(column.title || 'Cột').slice(0,80),
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

    project.columns.forEach(column => {
      const columnEl = document.createElement('section');
      columnEl.className = 'kanban-column';
      columnEl.dataset.columnId = column.id;
      const visible = column.cards.filter(matchesSearch).length;
      columnEl.innerHTML = `
        <div class="column-header">
          <span class="column-grip" data-tooltip="Kéo sang trái hoặc phải để đổi vị trí cột">⠿</span>
          <div class="column-title" title="${escapeAttr(column.title)}">${escapeHtml(column.title)}</div>
          <span class="column-count">${ui.search ? visible : column.cards.length}</span>
          <button class="icon-btn subtle column-menu" type="button" data-tooltip="Đổi tên, nhân bản hoặc xóa cột">⋯</button>
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
      onStart:type => captureUndo(type === 'card' ? 'Di chuyển công việc' : 'Đổi vị trí cột'),
      onEnd:syncOrderFromDom
    });
  }

  function createCardElement(card,columnId) {
    const el = document.createElement('article');
    el.className = `task-card${matchesSearch(card) ? '' : ' filtered-out'}`;
    el.dataset.cardId = card.id;
    el.dataset.columnId = columnId;
    const labels = card.labels.map(id => LABELS.find(label => label.id === id)).filter(Boolean);
    const total = card.checklist.length;
    const done = card.checklist.filter(item => item.done).length;
    el.innerHTML = `
      <div class="card-main">
        ${labels.length ? `<div class="card-labels">${labels.map(label => `<span class="card-label" style="background:${label.color}" title="${escapeAttr(label.name)}"></span>`).join('')}</div>` : ''}
        <div class="card-title">${escapeHtml(card.title)}</div>
        ${card.description ? `<div class="card-description">${escapeHtml(card.description)}</div>` : ''}
        ${total ? `<div class="card-meta"><span class="check-progress${done === total ? ' complete' : ''}">☑ ${done}/${total}</span></div>` : ''}
      </div>
      <span class="card-grip" data-tooltip="Kéo để đổi vị trí hoặc chuyển sang cột khác">⠿</span>`;
    el.addEventListener('click', event => {
      if (event.target.closest('.card-grip')) return;
      openCardDialog(columnId,card.id);
    });
    return el;
  }

  function matchesSearch(card) {
    if (!ui.search) return true;
    const labels = card.labels.map(id => LABELS.find(label => label.id === id)?.name || '').join(' ');
    const checks = card.checklist.map(item => item.text).join(' ');
    return `${card.title} ${card.description} ${labels} ${checks}`.toLocaleLowerCase('vi').includes(ui.search);
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
    touchProject(project);
    saveNow();
    renderAll();
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
      const project = {id:uid('project'),name,color,createdAt:nowIso(),updatedAt:nowIso(),columns:createDefaultColumns()};
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
    state.projects = state.projects.filter(item => item.id !== project.id);
    ensureActiveProject();
    saveNow();
    refs.projectDialog.close();
    renderAll();
    showToast('Đã xóa dự án.');
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
    found.column.cards = found.column.cards.filter(card => card.id !== found.card.id);
    touchProject(getActiveProject());
    saveNow();
    refs.cardDialog.close();
    renderAll();
    showToast('Đã xóa công việc.');
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
    refs.deleteColumnBtn.hidden = !column;
    refs.duplicateColumnBtn.hidden = !column;
    refs.columnDialog.showModal();
    requestAnimationFrame(() => refs.columnNameInput.focus());
  }

  function saveColumn(event) {
    event.preventDefault();
    const name = refs.columnNameInput.value.trim();
    if (!name) return refs.columnNameInput.focus();
    const project = getActiveProject();
    captureUndo(columnEditId ? 'Sửa cột' : 'Thêm cột');
    if (columnEditId) {
      const column = project.columns.find(item => item.id === columnEditId);
      if (column) column.title = name;
    } else {
      project.columns.push(createColumn(name));
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
    project.columns = project.columns.filter(item => item.id !== column.id);
    touchProject(project);
    saveNow();
    refs.columnDialog.close();
    renderAll();
    showToast('Đã xóa cột.');
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
    if (selected?.file) {
      document.documentElement.style.setProperty('--board-bg-image',`url("${selected.file}")`);
      document.body.classList.add('has-background');
    } else {
      document.documentElement.style.removeProperty('--board-bg-image');
      document.body.classList.remove('has-background');
    }
  }

  function createDefaultClockSettings() {
    return {durationSec:1500,remainingSec:1500,endAt:null,running:false,alarmActive:false};
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
    return {durationSec,remainingSec: running && !endAt ? durationSec : remainingSec,endAt,running:Boolean(endAt),alarmActive:Boolean(input?.alarmActive)};
  }

  function initClockWidget() {
    if (!state.settings.clock) state.settings.clock = createDefaultClockSettings();
    if (!clockTickTimer) clockTickTimer = setInterval(updateClockWidget, 1000);
    updateClockWidget();
  }

  function updateClockWidget() {
    const now = new Date();
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
    if (refs.globalTooltip) refs.globalTooltip.hidden = true;
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

  function uid(prefix) {
    const random = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    return `${prefix}-${random}`;
  }

  function clone(value) {
    return globalThis.structuredClone ? structuredClone(value) : JSON.parse(JSON.stringify(value));
  }

  function nowIso() { return new Date().toISOString(); }
  function dateStamp() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
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
