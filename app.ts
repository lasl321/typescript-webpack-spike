import {greet} from './greeter';
import * as $ from 'jquery';

$(() => {
  $(document.body).html(greet('world'));
});
