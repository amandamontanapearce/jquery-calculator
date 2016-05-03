
$(document).ready( function () {
var mathArray = [];
var total = 0;
$('#cancel').click(function (){
  $('#screen').empty()
  mathArray = [];
})
$('span').not('#cancel').bind('click', function (){
  $('#screen').text($('#screen').text()+$(this).text());
})

$('.operator').not('#calc').on('click', function(){
  mathArray.push($('#screen').text());
  $('#screen').empty();
  console.log(mathArray)
})
$('#calc').on('click', function(){
  mathArray.push($('#screen').text());
  var re = /[^-+*a-zA-Z0-9]/g
  var mathString = mathArray.join('').replace('=', '' ).replace('x', '*').replace(re, '/');
  total = eval(mathString);
  $('#screen').empty();
  $('#screen').text(total);
  console.log(mathString);
})

//$('span').not('operator').on('click', function(){
 //if(counter >= 1) {
  //$('screen').empty();
  //$('#screen').text($('#screen').text()+$(this).text());
  //}
//})
})
//counter for number of clicks
