import $ from 'jquery';

function setAllActive(wrappers) {
  wrappers.each((i, wrapper) => {
    $(wrapper).find('.rate__label').addClass('rate__label_active');
  });
}
function setAllInactive(wrappers) {
  wrappers.each((i, wrapper) => {
    $(wrapper).find('.rate__label').removeClass('rate__label_active');
  });
}

function findChecked(siblings) {
  let $checkedEl = false;
  siblings.forEach(element => {
    if (element.checked) {
      $checkedEl = $(element);
    }
  });

  return $checkedEl;
}
function setStarState($target) {
  const nextAll = $target.parent().nextAll();
  const prevAll = $target.parent().prevAll();

  $target.siblings().addClass('rate__label_active');

  setAllActive(nextAll);
  setAllInactive(prevAll);
}

function handleRateClick(event) {
  const target = event.target;
  const parent = $(target).parent().parent()[0];
  const $checkedEl = findChecked(parent.querySelectorAll('.rate__input'));
  if ($checkedEl.length > 0) {
    setStarState($checkedEl);
  } else {
    const nextAll = $(target).parent().nextAll('.rate__wrapper');
    setAllActive(nextAll);
  }
}
function handleRateMouseout(event) {
  const target = event.target;
  const parent = $(target).parent().parent()[0];

  const $checkedEl = findChecked(parent.querySelectorAll('.rate__input'));

  if ($checkedEl.length > 0) {
    setStarState($checkedEl);
  } else {
    const nextAll = $(target).parent().nextAll('.rate__wrapper');
    setAllInactive(nextAll);
  }
}
function handleRateMouseover(event) {
  const target = event.target;
  const nextAll = $(target).parent().nextAll('.rate__wrapper');
  setAllActive(nextAll);
}

export function initRates(selector) {
  const $rate = $(selector);
  if ($rate.length > 0) {
    $rate.on('mouseover', '.rate__label', handleRateMouseover);
    $rate.on('mouseout', '.rate__label', handleRateMouseout);
    $rate.on('click', handleRateClick);

    $rate.each((i, item) => {
      const $checkedEl = findChecked(item.querySelectorAll('.rate__input'));
      setStarState($checkedEl);
    });
  } else {
    throw new Error(`cannot find elements by ${selector}`);
  }
}
