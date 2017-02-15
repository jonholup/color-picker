$(document).ready(function(){

var colorArray = ['red', 'blue', 'green', 'black'];
var colorToPick = null;
var prompt = '';
$('#result').text(prompt);

// on start click, generate random color to find
$('#startButton').on('click', function() {
  colorToPick = 'Click on ' + colorArray[randomNumber(colorArray.length)];
  $('#result').text(colorToPick);
});

// create colored divs
for (var i = 0; i < 4; i++) {
  var colorDiv = $('<div class= "colorDiv"></div>');
  colorDiv.data('idNumber', i);
  colorDiv.data('background-color', colorArray[i]);
  colorDiv.css('background-color', colorArray[i]);
  $('body').append(colorDiv);
}

// randomizer function takes in array and will look at length
function randomNumber(array){
    return Math.floor(Math.random() * (1 + array - 0) + 0);

}

// on div click {
// for each div, does the data (css background color) = prompt?
$( "div" ).click(function() {
  var color = $(this).data( "background-color" );
  // (color == )

});




















});
