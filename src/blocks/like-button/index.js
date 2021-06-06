import $ from 'jquery';
import LikeButton from './LikeButton';

$('.js-like').each((_, domElement) => {
  const like = new LikeButton(domElement);
  like.init();
});
