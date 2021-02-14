'use strict'

$('.popup').hide();

$('#open').on('click', function() {
  $('.popup').fadeIn();
});
$('#close').on('click', function() {
  $('.popup').fadeOut();
});