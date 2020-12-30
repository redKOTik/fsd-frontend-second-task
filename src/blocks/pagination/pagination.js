export default function initPagination(selector, data = setDefault()) {
  console.log("init pagination");

  const state = {
    currentPage: 1,
    showPrev: false,
    showNext: true,
    visibleArray: [1, 2, 3],
    size: size(data),
  };

  const pagination = render(selector, data);

  initState(state, pagination);
  setHandler(pagination, state);
}

const handler = function (state, pagination, e) {
  const target = e.target;
  if (target.closest(".page_next")) {
    state.currentPage++;

    if (state.currentPage > 1) {
      state.showPrev = true;
    }

    if (state.currentPage === state.size) {
      state.showNext = false;
    }

    if (state.currentPage > state.visibleArray[state.visibleArray.length - 1]) {
      state.visibleArray = state.visibleArray.map((element) => element + 1);
    }

    initState(state, pagination);
  }

  if (target.closest(".page_prev")) {
    state.currentPage--;

    if (state.currentPage === 1) {
      state.showPrev = false;
    }

    if (state.currentPage < state.size) {
      state.showNext = true;
    }

    if (state.currentPage < state.visibleArray[0]) {
      state.visibleArray = state.visibleArray.map((element) => element - 1);
    }

    initState(state, pagination);
  }
};

function setDefault() {
  let arr = new Array();
  arr.length = 180;
  return arr;
}

function size(data) {
  let size = data.length % 12 === 0 ? 0 : 1;
  return Math.floor(data.length / 12) + size;
}

function render(selector, data) {
  const rootDir = document.querySelector(selector);
  if (rootDir) {
    const container = document.createElement("div");
    container.classList.add("pagination__container");

    const pagefisrt = document.createElement("div");
    pagefisrt.className = "page page_select";
    pagefisrt.textContent = "1";

    const page2 = pagefisrt.cloneNode();
    page2.className = "page";
    page2.textContent = "2";

    const page3 = pagefisrt.cloneNode();
    page3.className = "page";
    page3.textContent = "3";

    const pagelast = pagefisrt.cloneNode();
    pagelast.className = "page";
    pagelast.textContent = size(data);

    const ellipsis = pagefisrt.cloneNode();
    ellipsis.textContent = "...";
    ellipsis.className = "ellipsis";

    const spanprev = document.createElement("span");
    const spannext = document.createElement("span");
    const prev = pagefisrt.cloneNode();
    const next = pagefisrt.cloneNode();

    prev.insertAdjacentElement("afterbegin", spanprev);
    next.insertAdjacentElement("afterbegin", spannext);

    prev.className = "page page_prev";
    next.className = "page page_next";

    const text = document.createElement("span");
    text.className = "pagination__info";
    text.textContent = `1 – 12 из 100+ вариантов аренды`;

    container.insertAdjacentElement("beforeend", prev);
    container.insertAdjacentElement("beforeend", pagefisrt);
    container.insertAdjacentElement("beforeend", page2);
    container.insertAdjacentElement("beforeend", page3);
    container.insertAdjacentElement("beforeend", ellipsis);
    container.insertAdjacentElement("beforeend", pagelast);
    container.insertAdjacentElement("beforeend", next);
    container.insertAdjacentElement("beforeend", text);
    rootDir.insertAdjacentElement("afterbegin", container);

    return container;
  } else {
    throw new Error("невалидные данные для инициализации");
  }
}

function transformNav(state, pagination) {
  const ellipsis = pagination.querySelector(".ellipsis").cloneNode();
  ellipsis.textContent = "...";

  if (state.size - state.currentPage < 2) {
    if (pagination.querySelector(".page_last"))
      pagination.querySelector(".page_last").classList.remove("page_last");

    pagination.querySelector(".ellipsis").remove();
    pagination
      .querySelector(".page:not(.page_next):not(.page_prev)")
      .insertAdjacentElement("afterend", ellipsis);
    pagination
      .querySelector(".page:not(.page_next):not(.page_prev)")
      .classList.add("page_first");
    pagination.querySelector(".page_first").textContent = "1";
  } else if (state.currentPage < 3) {
    if (pagination.querySelector(".page_first"))
      pagination.querySelector(".page_first").classList.remove("page_first");

    pagination.querySelector(".ellipsis").remove();
    pagination
      .querySelectorAll(".page:not(.page_next):not(.page_prev)")[3]
      .insertAdjacentElement("beforebegin", ellipsis);
    pagination
      .querySelectorAll(".page:not(.page_next):not(.page_prev)")[3]
      .classList.add("page_last");
    pagination.querySelector(".page_last").textContent = state.size;
  }
}

function initState(state, pagination) {
  const prev = pagination.querySelector(".page_prev");
  const next = pagination.querySelector(".page_next");

  !state.showPrev ? $(prev).hide() : $(prev).show();
  !state.showNext ? $(next).hide() : $(next).show();

  pagination.querySelector(".page_select").classList.remove("page_select");

  state.visibleArray.forEach((element, i) => {
    pagination.querySelectorAll(
      ".page:not(.page_first):not(.page_last):not(.page_next):not(.page_prev)"
    )[i].textContent = element;
  });

  pagination
    .querySelectorAll(".page:not(.page_next):not(.page_prev)")
    .forEach((element) => {
      if (+element.textContent === state.currentPage) {
        element.classList.add("page_select");
      }
    });

  transformNav(state, pagination);

  const text = pagination.querySelector(".pagination__info");
  text.textContent = `${state.currentPage * 12 - 11} - ${
    state.currentPage * 12
  } из 100+ вариантов аренды`;
}

function setHandler(pagination, state) {
  pagination.addEventListener("click", handler.bind(null, state, pagination));
}
