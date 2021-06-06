import $ from 'jquery';

class Diagram {
  constructor(rootContainer) {
    this.$diagram = $(rootContainer);
    this.state = this.$diagram.data('list');
    this.$list = this.$diagram.next().find(this.state.list);
    this.$diagram.removeAttr('data-list');
  }

  init() {
    this.render();
    this.addEvents();
  }

  createInfoBlock() {
    this.$info = $(document.createElement('div'));
    this.$pCount = $(document.createElement('p'));
    const $pName = $(document.createElement('p'));

    this.$info.addClass('diagram__info');
    this.$pCount.addClass('diagram__count').text(this.state.summary);
    $pName.addClass('diagram__name').text('голосов');
    this.$info.append(this.$pCount).append($pName);
  }

  render() {
    this.createInfoBlock();
    const $block = $(document.createElement('div')).addClass('diagram__block js-diagram__block');
    this.$diagram
      .append($block.clone().addClass('diagram__block_yellow').attr('data-block', 'yellow')
        .append($block.clone().addClass('diagram__pseudo-block_yellow')))
      .append($block.clone().addClass('diagram__block_purple').attr('data-block', 'purple')
        .append($block.clone().addClass('diagram__pseudo-block_purple')))
      .append($block.clone().addClass('diagram__block_green').attr('data-block', 'green')
        .append($block.clone().addClass('diagram__pseudo-block_green')))
      .append($block.clone().addClass('diagram__block_grey').attr('data-block', 'grey')
        .append($block.clone().addClass('diagram__pseudo-block_grey')))
      .append(this.$info);
  }

  handleDiagramMouseover(e) {
    const $target = $(e.target);
    const isSegment = $target.data('block') !== undefined;

    if (isSegment) {
      this.$pCount.text(this.state[$target.data('block')]);
      $target.addClass('diagram__block_active');
    }
  }

  handleDiagramMouseout(e) {
    const $target = $(e.target);
    const isSegment = $target.data('block') !== undefined;

    if (isSegment) {
      this.$pCount.text(this.state.summary);
      $target.removeClass('diagram__block_active');
    }
  }

  handleListMouseover(e) {
    const $target = $(e.target);
    const isList = $target.data('block') !== undefined;

    if (isList) {
      const dataAttr = $target.data('block');
      this.$pCount.text(this.state[dataAttr]);
      this.$diagram.find('.js-diagram__block[data-block="' + dataAttr + '"]').addClass('diagram__block_active');
    }
  }

  handleListMouseout(e) {
    const $target = $(e.target);
    const isList = $target.data('block') !== undefined;

    if (isList) {
      const dataAttr = $target.data('block');
      this.$pCount.text(this.state.summary);
      this.$diagram.find('.js-diagram__block[data-block="' + dataAttr + '"]').removeClass('diagram__block_active');
    }
  }

  addEvents() {
    this.$diagram.on('mouseover.segment', this.handleDiagramMouseover.bind(this));
    this.$diagram.on('mouseout.segment', this.handleDiagramMouseout.bind(this));
    this.$list.on('mouseover.list', this.handleListMouseover.bind(this));
    this.$list.on('mouseout.list', this.handleListMouseout.bind(this));
  }

  destroy() {
    this.$diagram.off('mouseover.segment');
    this.$diagram.off('mouseout.segment');
    this.$list.off('mouseover.list');
    this.$list.off('mouseout.list');
    this.$diagram.empty();
  }
}

export default Diagram;
