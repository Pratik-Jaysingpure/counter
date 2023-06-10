'use strict';

let count = 0;

document.querySelector('#decrease').addEventListener('click', function () {
  count--;
  document.querySelector('#counter').textContent = count;
});

document.querySelector('#increase').addEventListener('click', function () {
  count++;
  document.querySelector('#counter').textContent = count;
});
