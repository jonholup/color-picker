$(document).ready(function(){

  var colorArray = ['red', 'blue', 'green', 'black', 'pink', 'yellow'];
  var colorToPick = null;
  var prompt = '';
  $('#result').text(prompt);

  // on start click, generate random color to find
  $('#startButton').on('click', function() {
    colorToPick = colorArray[randomNumber(colorArray.length)];
    $('#result').text(colorToPick);
  });

  // create colored divs
  for (var i = 0; i < colorArray.length; i++) {
    var colorDiv = $('<div class= "colorDiv"></div>');
    colorDiv.data('idNumber', i);
    colorDiv.data('background-color', colorArray[i]);
    colorDiv.css('background-color', colorArray[i]);
    $('body').append(colorDiv);
  }

  // randomizer function takes in array and will look at length
  function randomNumber(arrayLength){
    return Math.floor(Math.random() * arrayLength);

  }

//   function randomNumber(min, max){
//     return Math.floor(Math.random() * (1 + max - min) + min);
// }

  // on div click {
  // for each div, does the data background color) = colorToPick?
  $('div').click(function() {
    var color = $(this).data( "background-color" );
    if (color == colorToPick) {
      $('#message').text('You got it! Play again?');
      var randomNumberSelected = randomNumber(colorArray.length);
      colorToPick = colorArray[randomNumberSelected];
      console.log(randomNumberSelected);
      console.log(colorToPick);
      $('#result').text(colorToPick);
    } else {
      $('#message').text('Not that');
    }

  });

});
// NOTE: todo: // adding colors to array works, but how to add on correct div click?
// style html
