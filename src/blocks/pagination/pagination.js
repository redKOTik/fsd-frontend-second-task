import $ from 'jquery';

function setDefault() {
  let arr = [];
  arr.length = 180;
  return arr;
}

function size(data) {
  let param = data.length % 12 === 0 ? 0 : 1;
  return Math.floor(data.length / 12) + param;
}

function render(selector, data) {
  const rootDir = document.querySelector(selector);
  if (rootDir) {
    const container = document.createElement('div');
    container.classList.add('pagination__container');

    const pagefisrt = document.createElement('div');
    pagefisrt.className = 'page page_select';
    pagefisrt.textContent = '1';

    const page2 = pagefisrt.cloneNode();
    page2.className = 'page';
    page2.textContent = '2';

    const page3 = pagefisrt.cloneNode();
    page3.className = 'page';
    page3.textContent = '3';

    const pagelast = pagefisrt.cloneNode();
    pagelast.className = 'page';
    pagelast.textContent = size(data);

    const ellipsis = pagefisrt.cloneNode();
    ellipsis.textContent = '...';
    ellipsis.className = 'ellipsis';

    const spanprev = document.createElement('span');
    const spannext = document.createElement('span');
    const prev = pagefisrt.cloneNode();
    const next = pagefisrt.cloneNode();

    prev.insertAdjacentElement('afterbegin', spanprev);
    next.insertAdjacentElement('afterbegin', spannext);

    prev.className = 'page page_prev';
    next.className = 'page page_next';

    const text = document.createElement('span');
    text.className = 'pagination__info';
    text.textContent = '1 – 12 из 100+ вариантов аренды';

    container.insertAdjacentElement('beforeend', prev);
    container.insertAdjacentElement('beforeend', pagefisrt);
    container.insertAdjacentElement('beforeend', page2);
    container.insertAdjacentElement('beforeend', page3);
    container.insertAdjacentElement('beforeend', ellipsis);
    container.insertAdjacentElement('beforeend', pagelast);
    container.insertAdjacentElement('beforeend', next);
    container.insertAdjacentElement('beforeend', text);
    rootDir.insertAdjacentElement('afterbegin', container);

    return container;
  }
  throw new Error('невалидные данные для инициализации');
}

function transformNav(state, pagination) {
  const ellipsis = pagination.querySelector('.ellipsis').cloneNode();
  ellipsis.textContent = '...';

  const lastPageEl = pagination.querySelector('.page_last');
  const firstPageEl = pagination.querySelector('.page_first');

  if (state.size - state.currentPage < 2) {
    if (lastPageEl) lastPageEl.classList.remove('page_last');

    pagination.querySelector('.ellipsis').remove();
    pagination
      .querySelector('.page:not(.page_next):not(.page_prev)')
      .insertAdjacentElement('afterend', ellipsis);
    pagination
      .querySelector('.page:not(.page_next):not(.page_prev)')
      .classList.add('page_first');

    if (firstPageEl) firstPageEl.textContent = '1';
  } else if (state.currentPage < 3) {
    if (firstPageEl) firstPageEl.classList.remove('page_first');

    pagination.querySelector('.ellipsis').remove();
    pagination
      .querySelectorAll('.page:not(.page_next):not(.page_prev)')[3]
      .insertAdjacentElement('beforebegin', ellipsis);
    pagination
      .querySelectorAll('.page:not(.page_next):not(.page_prev)')[3]
      .classList.add('page_last');
    if (lastPageEl) lastPageEl.textContent = state.size;
  }
}

function initState(state, pagination) {
  const $prev = $(pagination.querySelector('.page_prev'));
  const $next = $(pagination.querySelector('.page_next'));
  const paginationElements = pagination.querySelectorAll('.page:not(.page_first):not(.page_last):not(.page_next):not(.page_prev)');
  const isShowPrev = state.showPrev;
  const isShowNext = state.showNext;

  if (isShowPrev) {
    $prev.show();
  } else {
    $prev.hide();
  }

  if (isShowNext) {
    $next.show();
  } else {
    $next.hide();
  }

  pagination.querySelector('.page_select').classList.remove('page_select');

  state.visibleArray.forEach((element, i) => {
    paginationElements[i].textContent = element;
  });

  pagination
    .querySelectorAll('.page:not(.page_next):not(.page_prev)')
    .forEach((element) => {
      if (+element.textContent === state.currentPage) {
        element.classList.add('page_select');
      }
    });

  transformNav(state, pagination);

  const text = pagination.querySelector('.pagination__info');
  text.textContent = `${state.currentPage * 12 - 11} - ${
    state.currentPage * 12
  } из 100+ вариантов аренды`;
}

const handler = (state, pagination, e) => {
  const target = e.target;
  if (target.closest('.page_next')) {
    const newState = state;
    newState.currentPage += 1;

    if (state.currentPage > 1) {
      newState.showPrev = true;
    }

    if (state.currentPage === state.size) {
      newState.showNext = false;
    }

    if (state.currentPage > state.visibleArray[state.visibleArray.length - 1]) {
      newState.visibleArray = state.visibleArray.map((element) => element + 1);
    }

    initState(newState, pagination);
  }

  if (target.closest('.page_prev')) {
    const newState = state;
    newState.currentPage -= 1;

    if (state.currentPage === 1) {
      newState.showPrev = false;
    }

    if (state.currentPage < state.size) {
      newState.showNext = true;
    }

    if (state.currentPage < state.visibleArray[0]) {
      newState.visibleArray = state.visibleArray.map((element) => element - 1);
    }

    initState(newState, pagination);
  }
};

function setHandler(pagination, state) {
  pagination.addEventListener('click', handler.bind(null, state, pagination));
}

export default function initPagination(selector, data = setDefault()) {
  const state = {
    currentPage: 1,
    showPrev: false,
    showNext: true,
    visibleArray: [1, 2, 3],
    size: size(data)
  };

  const pagination = render(selector, data);

  initState(state, pagination);
  setHandler(pagination, state);
}
