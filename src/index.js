import { API_URL, log } from './js/common'

console.log('init')

log(API_URL)


let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')

box1.innerHTML = '<img src="' + require('./assets/img/icon.png') + '" alt="" />'
box2.innerHTML = '<img src="' + require('./assets/img/2.jpg') + '" alt="" />'


$(document).ready(function () {
  console.log('load')

  $('h1').css('color', '#d33')
})
