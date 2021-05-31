import $ from 'jquery';
import Diagram from './Diagram';

export default function init() {
  $('.js-diagram').each((_, domElement) => {
    const diagram = new Diagram(domElement);
    diagram.init();
  });
}
