import $ from "jquery";

class Pagination {
  constructor(root) {
    this.$root = $(root);
    this.data = this.$root.data("options") || this.setDefault();
    this.$root.removeAttr("data-options");

    this.state = {
      currentPage: 1,
      showPrev: false,
      showNext: true,
      visibleArray: [1, 2, 3],
      size: this.computeSize(this.data),
    };
  }

  init() {
    this.render();
    this.initState();
    this.setHandler();
  }

  transformNav() {
    const ellipsis = this.pagination.querySelector(".js-ellipsis").cloneNode();
    ellipsis.textContent = "...";

    const lastPageEl = this.pagination.querySelector(".js-page_last");
    const firstPageEl = this.pagination.querySelector(".js-page_first");

    if (this.state.size - this.state.currentPage < 2) {
      if (lastPageEl) lastPageEl.classList.remove("js-page_last");

      this.pagination.querySelector(".js-ellipsis").remove();
      this.pagination
        .querySelector(".js-page:not(.js-page_next):not(.js-page_prev)")
        .insertAdjacentElement("afterend", ellipsis);
      this.pagination
        .querySelector(".js-page:not(.js-page_next):not(.js-page_prev)")
        .classList.add("js-page_first");

      if (firstPageEl) firstPageEl.textContent = "1";
    } else if (this.state.currentPage < 3) {
      if (firstPageEl) firstPageEl.classList.remove("js-page_first");

      this.pagination.querySelector(".js-ellipsis").remove();
      this.pagination
        .querySelectorAll(".js-page:not(.js-page_next):not(.js-page_prev)")[3]
        .insertAdjacentElement("beforebegin", ellipsis);
      this.pagination
        .querySelectorAll(".js-page:not(.js-page_next):not(.js-page_prev)")[3]
        .classList.add("js-page_last");
      if (lastPageEl) lastPageEl.textContent = this.state.size;
    }
  }

  computeSize() {
    let param = this.data.length % 12 === 0 ? 0 : 1;
    return Math.floor(this.data.length / 12) + param;
  }

  setDefault() {
    this.data = [];
    this.data.length = 180;
    return this.data;
  }

  initState() {
    const $prev = $(this.pagination.querySelector(".js-page_prev"));
    const $next = $(this.pagination.querySelector(".js-page_next"));
    const paginationElements = this.pagination.querySelectorAll(
      ".js-page:not(.js-page_first):not(.js-page_last):not(.js-page_next):not(.js-page_prev)"
    );
    const isShowPrev = this.state.showPrev;
    const isShowNext = this.state.showNext;

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

    this.pagination
      .querySelector(".js-page_select")
      .classList.remove("page_select", "js-page_select");

    this.state.visibleArray.forEach((element, i) => {
      paginationElements[i].textContent = element;
    });

    this.pagination
      .querySelectorAll(".js-page:not(.js-page_next):not(.js-page_prev)")
      .forEach((element) => {
        if (+element.textContent === this.state.currentPage) {
          element.classList.add("page_select", "js-page_select");
        }
      });

    this.transformNav();

    const text = this.pagination.querySelector(".js-pagination__info");
    text.textContent = `${this.state.currentPage * 12 - 11} - ${
      this.state.currentPage * 12
    } из 100+ вариантов аренды`;
  }

  render() {
    if (this.$root.length > 0) {
      this.pagination = document.createElement("div");
      this.pagination.classList.add("pagination__container");

      const pagefisrt = document.createElement("div");
      pagefisrt.className = "page js-page page_select js-page_select";
      pagefisrt.textContent = "1";

      const page2 = pagefisrt.cloneNode();
      page2.className = "page js-page";
      page2.textContent = "2";

      const page3 = pagefisrt.cloneNode();
      page3.className = "page js-page";
      page3.textContent = "3";

      const pagelast = pagefisrt.cloneNode();
      pagelast.className = "page js-page";
      pagelast.textContent = this.state.size;

      const ellipsis = pagefisrt.cloneNode();
      ellipsis.textContent = "...";
      ellipsis.className = "ellipsis js-ellipsis";

      const spanprev = document.createElement("span");
      const spannext = document.createElement("span");
      const prev = pagefisrt.cloneNode();
      const next = pagefisrt.cloneNode();

      prev.insertAdjacentElement("afterbegin", spanprev);
      next.insertAdjacentElement("afterbegin", spannext);

      prev.className = "page js-page page_prev js-page_prev";
      next.className = "page js-page page_next js-page_next";

      const text = document.createElement("span");
      text.className = "pagination__info js-pagination__info";
      text.textContent = "1 – 12 из 100+ вариантов аренды";

      this.pagination.insertAdjacentElement("beforeend", prev);
      this.pagination.insertAdjacentElement("beforeend", pagefisrt);
      this.pagination.insertAdjacentElement("beforeend", page2);
      this.pagination.insertAdjacentElement("beforeend", page3);
      this.pagination.insertAdjacentElement("beforeend", ellipsis);
      this.pagination.insertAdjacentElement("beforeend", pagelast);
      this.pagination.insertAdjacentElement("beforeend", next);
      this.pagination.insertAdjacentElement("beforeend", text);
      this.$root.append($(this.pagination));
      return this;
    }
    throw new Error("невалидные данные для инициализации");
  }

  handlePaginationClick(e) {
    const $target = $(e.target);
    if ($target.closest(".js-page_next", this.$root).length > 0) {
      this.state.currentPage += 1;

      if (this.state.currentPage > 1) {
        this.state.showPrev = true;
      }

      if (this.state.currentPage === this.state.size) {
        this.state.showNext = false;
      }

      if (
        this.state.currentPage >
        this.state.visibleArray[this.state.visibleArray.length - 1]
      ) {
        this.state.visibleArray = this.state.visibleArray.map(
          (element) => element + 1
        );
      }
    }
    if ($target.closest(".js-page_prev", this.$root).length > 0) {
      this.state.currentPage -= 1;

      if (this.state.currentPage === 1) {
        this.state.showPrev = false;
      }

      if (this.state.currentPage < this.state.size) {
        this.state.showNext = true;
      }

      if (this.state.currentPage < this.state.visibleArray[0]) {
        this.state.visibleArray = this.state.visibleArray.map(
          (element) => element - 1
        );
      }
    }

    this.initState();
  }

  setHandler() {
    $(this.pagination).on(
      "click.pagination",
      this.handlePaginationClick.bind(this)
    );
  }

  destroy() {
    $(this.pagination).off("click.pagination");
    this.$root.empty();
  }
}

export default Pagination;
