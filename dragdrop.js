(() => {
  'use strict';

  class KanbanDragDrop {
    constructor(board, options = {}) {
      this.board = board;
      this.onStart = options.onStart || (() => {});
      this.onEnd = options.onEnd || (() => {});
      this.canDrag = options.canDrag || (() => true);
      this.onCardDragPrepare = options.onCardDragPrepare || (() => {});
      this.getCardDragElements = options.getCardDragElements || (card => [card]);
      this.dragEl = null;
      this.dragEls = [];
      this.dragType = null;
      this.pointerId = null;
      this.mouseGrip = null;
      this.boundDragStart = this.handleDragStart.bind(this);
      this.boundDragOver = this.handleDragOver.bind(this);
      this.boundDragEnd = this.handleDragEnd.bind(this);
      this.boundPointerDown = this.handlePointerDown.bind(this);
      this.boundPointerMove = this.handlePointerMove.bind(this);
      this.boundPointerUp = this.handlePointerUp.bind(this);
      this.init();
    }

    init() {
      this.board.addEventListener('dragstart', this.boundDragStart);
      this.board.addEventListener('dragover', this.boundDragOver);
      this.board.addEventListener('dragend', this.boundDragEnd);
      this.board.addEventListener('pointerdown', this.boundPointerDown);
      this.refresh();
    }

    refresh() {
      this.board.querySelectorAll('.task-card,.kanban-column').forEach(el => el.draggable = true);
      this.board.querySelectorAll('.card-grip,.column-grip').forEach(el => el.draggable = false);
    }

    destroy() {
      this.board.removeEventListener('dragstart', this.boundDragStart);
      this.board.removeEventListener('dragover', this.boundDragOver);
      this.board.removeEventListener('dragend', this.boundDragEnd);
      this.board.removeEventListener('pointerdown', this.boundPointerDown);
      document.removeEventListener('pointermove', this.boundPointerMove);
      document.removeEventListener('pointerup', this.boundPointerUp);
      document.removeEventListener('pointercancel', this.boundPointerUp);
      this.cleanup();
    }

    handleDragStart(event) {
      const card = event.target.closest('.task-card');
      const column = event.target.closest('.kanban-column');
      const source = card || column;
      if (!source || !this.mouseGrip || !source.contains(this.mouseGrip) || !this.canDrag()) {
        event.preventDefault();
        return;
      }
      if (card) this.onCardDragPrepare(card);
      this.dragEl = source;
      this.dragType = card ? 'card' : 'column';
      if (!this.dragEl) return;
      this.dragEls = card ? this.getCardDragElements(card).filter(Boolean) : [source];
      if (!this.dragEls.length) this.dragEls = [source];
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', this.dragEl.dataset.cardId || this.dragEl.dataset.columnId || 'kanban');
      requestAnimationFrame(() => this.dragEls.forEach(el => el.classList.add('dragging')));
      document.body.classList.add('drag-active');
      this.onStart(this.dragType);
    }

    handleDragOver(event) {
      if (!this.dragEl) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      this.moveAt(event.clientX, event.clientY);
    }

    handleDragEnd() {
      if (!this.dragEl) return;
      this.cleanup();
      this.onEnd();
    }

    handlePointerDown(event) {
      const grip = event.target.closest('.card-grip,.column-grip');
      if (event.pointerType === 'mouse') {
        this.mouseGrip = grip || null;
        return;
      }
      if (!grip || !this.canDrag()) return;
      const card = grip.closest('.task-card');
      const column = grip.closest('.kanban-column');
      if (card) this.onCardDragPrepare(card);
      this.dragEl = card || column;
      this.dragType = card ? 'card' : 'column';
      if (!this.dragEl) return;
      this.dragEls = card ? this.getCardDragElements(card).filter(Boolean) : [this.dragEl];
      if (!this.dragEls.length) this.dragEls = [this.dragEl];
      event.preventDefault();
      this.pointerId = event.pointerId;
      grip.setPointerCapture?.(event.pointerId);
      this.dragEls.forEach(el => el.classList.add('dragging'));
      document.body.classList.add('drag-active');
      document.addEventListener('pointermove', this.boundPointerMove, { passive: false });
      document.addEventListener('pointerup', this.boundPointerUp);
      document.addEventListener('pointercancel', this.boundPointerUp);
      this.onStart(this.dragType);
    }

    handlePointerMove(event) {
      if (!this.dragEl || event.pointerId !== this.pointerId) return;
      event.preventDefault();
      this.moveAt(event.clientX, event.clientY);
      this.autoScroll(event.clientX, event.clientY);
    }

    handlePointerUp(event) {
      if (!this.dragEl || event.pointerId !== this.pointerId) return;
      this.cleanup();
      this.onEnd();
    }

    moveAt(x, y) {
      if (this.dragType === 'card') this.moveCard(x, y);
      if (this.dragType === 'column') this.moveColumn(x, y);
    }

    moveCard(x, y) {
      const under = document.elementFromPoint(x, y);
      const list = under?.closest('.card-list');
      if (!list || !this.board.contains(list)) return;
      const candidates = [...list.querySelectorAll('.task-card:not(.dragging):not(.filtered-out)')];
      const after = candidates.find(el => {
        const rect = el.getBoundingClientRect();
        return y < rect.top + rect.height / 2;
      });
      const placeholder = list.querySelector('.empty-column');
      if (placeholder) placeholder.remove();
      const fragment = document.createDocumentFragment();
      this.dragEls.forEach(el => fragment.appendChild(el));
      if (after) list.insertBefore(fragment, after);
      else list.appendChild(fragment);
    }

    moveColumn(x) {
      const columns = [...this.board.querySelectorAll('.kanban-column:not(.dragging)')];
      const after = columns.find(el => {
        const rect = el.getBoundingClientRect();
        return x < rect.left + rect.width / 2;
      });
      const addTile = this.board.querySelector('.add-column-tile');
      if (after) this.board.insertBefore(this.dragEl, after);
      else this.board.insertBefore(this.dragEl, addTile || null);
    }

    autoScroll(x, y) {
      const margin = 56;
      const speed = 18;
      if (x < margin) this.board.scrollLeft -= speed;
      else if (x > window.innerWidth - margin) this.board.scrollLeft += speed;
      if (y < margin) this.board.scrollTop -= speed;
      else if (y > window.innerHeight - margin) this.board.scrollTop += speed;
    }

    cleanup() {
      this.dragEls.forEach(el => el.classList.remove('dragging'));
      this.dragEl?.classList.remove('dragging');
      document.body.classList.remove('drag-active');
      document.removeEventListener('pointermove', this.boundPointerMove);
      document.removeEventListener('pointerup', this.boundPointerUp);
      document.removeEventListener('pointercancel', this.boundPointerUp);
      this.dragEl = null;
      this.dragEls = [];
      this.dragType = null;
      this.pointerId = null;
      this.mouseGrip = null;
    }
  }

  class ProjectListDragDrop {
    constructor(list, options = {}) {
      this.list = list;
      this.onStart = options.onStart || (() => {});
      this.onEnd = options.onEnd || (() => {});
      this.dragEl = null;
      this.pointerId = null;
      this.mouseGrip = null;
      this.boundDragStart = this.handleDragStart.bind(this);
      this.boundDragOver = this.handleDragOver.bind(this);
      this.boundDragEnd = this.handleDragEnd.bind(this);
      this.boundPointerDown = this.handlePointerDown.bind(this);
      this.boundPointerMove = this.handlePointerMove.bind(this);
      this.boundPointerUp = this.handlePointerUp.bind(this);
      this.init();
    }

    init() {
      this.list.addEventListener('dragstart', this.boundDragStart);
      this.list.addEventListener('dragover', this.boundDragOver);
      this.list.addEventListener('dragend', this.boundDragEnd);
      this.list.addEventListener('pointerdown', this.boundPointerDown);
      this.refresh();
    }

    refresh() {
      this.list.querySelectorAll('.project-item').forEach(item => item.draggable = true);
      this.list.querySelectorAll('.project-grip').forEach(grip => grip.draggable = false);
    }

    destroy() {
      this.list.removeEventListener('dragstart', this.boundDragStart);
      this.list.removeEventListener('dragover', this.boundDragOver);
      this.list.removeEventListener('dragend', this.boundDragEnd);
      this.list.removeEventListener('pointerdown', this.boundPointerDown);
      document.removeEventListener('pointermove', this.boundPointerMove);
      document.removeEventListener('pointerup', this.boundPointerUp);
      document.removeEventListener('pointercancel', this.boundPointerUp);
      this.cleanup();
    }

    handleDragStart(event) {
      const item = event.target.closest('.project-item');
      if (!item || !this.mouseGrip || !item.contains(this.mouseGrip)) {
        event.preventDefault();
        return;
      }
      this.dragEl = item;
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', item.dataset.projectId || 'project');
      requestAnimationFrame(() => this.dragEl?.classList.add('dragging'));
      document.body.classList.add('drag-active');
      this.onStart();
    }

    handleDragOver(event) {
      if (!this.dragEl) return;
      event.preventDefault();
      this.moveAt(event.clientY);
    }

    handleDragEnd() {
      if (!this.dragEl) return;
      this.cleanup();
      this.onEnd();
    }

    handlePointerDown(event) {
      const grip = event.target.closest('.project-grip');
      if (event.pointerType === 'mouse') {
        this.mouseGrip = grip || null;
        return;
      }
      if (!grip) return;
      const item = grip.closest('.project-item');
      if (!item) return;
      event.preventDefault();
      this.dragEl = item;
      this.pointerId = event.pointerId;
      grip.setPointerCapture?.(event.pointerId);
      this.dragEl.classList.add('dragging');
      document.body.classList.add('drag-active');
      document.addEventListener('pointermove', this.boundPointerMove, {passive:false});
      document.addEventListener('pointerup', this.boundPointerUp);
      document.addEventListener('pointercancel', this.boundPointerUp);
      this.onStart();
    }

    handlePointerMove(event) {
      if (!this.dragEl || event.pointerId !== this.pointerId) return;
      event.preventDefault();
      this.moveAt(event.clientY);
      this.autoScroll(event.clientY);
    }

    handlePointerUp(event) {
      if (!this.dragEl || event.pointerId !== this.pointerId) return;
      this.cleanup();
      this.onEnd();
    }

    moveAt(y) {
      const candidates = [...this.list.querySelectorAll('.project-item:not(.dragging)')];
      const after = candidates.find(item => {
        const rect = item.getBoundingClientRect();
        return y < rect.top + rect.height / 2;
      });
      if (after) this.list.insertBefore(this.dragEl, after);
      else this.list.appendChild(this.dragEl);
    }

    autoScroll(y) {
      const rect = this.list.getBoundingClientRect();
      const margin = 42;
      if (y < rect.top + margin) this.list.scrollTop -= 14;
      else if (y > rect.bottom - margin) this.list.scrollTop += 14;
    }

    cleanup() {
      this.dragEl?.classList.remove('dragging');
      document.body.classList.remove('drag-active');
      document.removeEventListener('pointermove', this.boundPointerMove);
      document.removeEventListener('pointerup', this.boundPointerUp);
      document.removeEventListener('pointercancel', this.boundPointerUp);
      this.dragEl = null;
      this.pointerId = null;
      this.mouseGrip = null;
    }
  }

  window.KanbanDragDrop = KanbanDragDrop;
  window.ProjectListDragDrop = ProjectListDragDrop;
})();
