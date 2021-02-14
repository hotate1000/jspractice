'use strict'

const countText = document.getElementById('countText');
const count = document.getElementById('count');

countText.addEventListener('keyup',function() {
  const inputText = countText.value.replace(/\n|\s/g,"");
  count.textContent = inputText.length + "文字";
});

const largeText = document.getElementById('largeText');
let largeCount = 0;
const timer   = setInterval(function(){
  largeText.style.fontSize = largeCount + "px";
  largeCount = largeCount + 0.5;

  if(largeCount >= 50) clearInterval(timer);
},100);

