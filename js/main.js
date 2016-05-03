
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
  var re = /[^-+*0-9]/g
  var mathString = mathArray.join('').replace('=', '' ).replace(/x/g, '*').replace(re, '/');
  console.log(mathString)
  var last = mathString.charAt((mathString.length -1));
  var secondLast = mathString.charAt((mathString.length -2));
  total = eval(mathString);
  $('#screen').empty();
  $('#screen').text(total);

})

//$('span').not('operator').on('click', function(){
 //if(counter >= 1) {
  //$('screen').empty();
  //$('#screen').text($('#screen').text()+$(this).text());
  //}
//})
})
//counter for number of clicks
