import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<button id="start">Click here to get started</button>');
$('body').append("<p id='count'></p>");

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('#start').on('click', _.debounce(updateCounter, 500));

