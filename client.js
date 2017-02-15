// You will be creating a little 'pick the block' game with HTML, CSS, and jQuery!
//
// On document load, append four (or more!) divs on to the DOM with jQuery,
// each colored with a different color. Each div needs to know which color it is.
//
// Prompt the player to pick one of the color blocks you created at random.
//
/* NOTE: we can find the element color using .ccs() */

$(document).ready(function(){
var colorArray = ['red', 'blue', 'green', 'black'];
var colorToPick = null;
var prompt = '';
$('#result').text(prompt);

$('#startButton').on('click', function() {
  colorToPick = 'Click on ' + colorArray[randomNumber(colorArray.length)];
  prompt = 'Click on ' +  colorArray[randomNumber(0,4)];
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

// randomizer function
function randomNumber(array){
    return Math.floor(Math.random() * (1 + array - 0) + 0);

}

// var prompt = 'Click on: ' + colorArray[randomNumber(0,4)];
// console.log(prompt);


// on div click {
// for each div, does the data (css background color) = prompt?
$( "div" ).click(function() {
  var color = $(this).data( "background-color" );
  // (color == )

});




















});
