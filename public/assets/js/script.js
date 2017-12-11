$(document).ready(function() {

  console.log('loaded');
  var icon = document.getElementById("icon");
  var listItem = document.getElementById("link-item1");
  var listItemx = document.getElementById("link-itemx");
  var listItem2 = document.getElementById("link-item2");
  var icon1 = document.getElementById("a");
  var icon2 = document.getElementById("b");
  var icon3 = document.getElementById("c");
  var nav = document.getElementById('nav');
  var blue = document.getElementById("blue");

  icon.addEventListener('click', function() {
    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    nav.classList.toggle('show');
    blue.classList.toggle('slide');
  });

  listItem.addEventListener('click', function() {
    console.log('help me out here')
    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    nav.classList.toggle('show');
    blue.classList.toggle('slide');
  });

  listItemx.addEventListener('click', function() {
    console.log('help me out here')
    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    nav.classList.toggle('show');
    blue.classList.toggle('slide');
  });

  listItem2.addEventListener('click', function() {
    console.log('help me out here')
    icon1.classList.toggle('a');
    icon2.classList.toggle('c');
    icon3.classList.toggle('b');
    nav.classList.toggle('show');
    blue.classList.toggle('slide');
  });

});