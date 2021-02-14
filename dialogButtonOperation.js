'use strict'

const form = document.getElementById('dialog');
const text = document.getElementById('text');
const array = Array("yes", "no" , "キャンセル");

form.yes.addEventListener('click', function() {
  text.innerHTML = array[0] + "がクリックされました";
});
form.no.addEventListener('click', function() {
  text.innerHTML = array[1] + "がクリックされました";
});
form.cancel.addEventListener('click', function() {
  text.innerHTML = "";
});