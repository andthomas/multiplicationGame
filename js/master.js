$(function(){
  var correct = 0;
  var incorrect = 0;
  var counter = 1;

  var newGame = () => {
    var factor = () => {
      return (Math.floor(Math.random() * 12) + 1);
    }
    var x = factor();
    var y = factor();
    var ans = x * y;


    console.log(`${x} * ${y} = ${ans}`);
    // debugger;

    $("#x").text(x);
    $("#y").text(y);

    $( "form" ).submit(function( e ){
      // debugger;
      console.log($('input').val());
      console.log(ans);
      e.preventDefault();
      if ( $( "input" ).val() === ans.toString()) {
        correct = correct + 1;
        counter = counter + 1;
        console.log('correct counter' + correct);
        $( 'span' ).text( counter ).show();
        $( "#inputAnswer" ).val("");
        newGame();
      } else {
        incorrect = incorrect + 1;
        counter = counter + 1;
        console.log('incorrect counter' + incorrect);
        $( 'span' ).text( counter ).show();
        $( "#inputAnswer" ).val("");
        newGame();
      }
    })

    if ( counter === 10 ){
      console.log('you got ' + correct + " out of " + counter);
    } else {
      // newGame();
    }
  }

  newGame();

})
