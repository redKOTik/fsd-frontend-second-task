import $ from 'jquery';
import Diagram from './Diagram';

$('.js-diagram').each((_, domElement) => {
  const diagram = new Diagram(domElement);
  diagram.init();
});
