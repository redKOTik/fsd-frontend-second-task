import $ from 'jquery';

class LikeButton {
  constructor(root) {
    this.$likeContainer = $(root);
    this.$input = this.$likeContainer.find('.js-like__button');
    this.$count = this.$likeContainer.find('.js-like__label');

    this.initState();
    this.render();
    this.addEvents();
  }

  static init(root, state) {
    return new this(root, state);
  }

  initState() {
    this.state = {};
    this.state.count = +this.$count.text();
  }

  render() {
    this.$count.text(this.state.count);
  }

  handleInputChange() {
    const isTrue = this.$input.prop('checked') === true;
    if (isTrue) {
      this.state.count += 1;
    } else {
      this.state.count -= 1;
    }
    this.render();
  }

  addEvents() {
    this.$input.on('change.like', this.handleInputChange.bind(this));
  }

  destroy() {
    this.$input.off('change.like');
  }
}

export default LikeButton;
