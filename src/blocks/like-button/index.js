import $ from 'jquery';
import LikeButton from './LikeButton';

export default function init() {
  $('.js-like').each((_, like) => {
    LikeButton.init(like);
  });
}
