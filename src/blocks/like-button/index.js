import $ from 'jquery';
import LikeButton from './LikeButton';

export default function init() {
  $('.js-like').each((_, domElement) => {
    const like = new LikeButton(domElement);
    like.init();
  });
}
