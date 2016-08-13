/**
 * Breaks various keyboard keys
 * Space bar breaks on 10% of presses
 * 'e' breaks on 33% of presses
 * Author: Angus Turner
 */

function faultyKeyboard() {
  $("html").on('keypress', function(e) {
    var code = e.keyCode || e.which;

    //Stop e from working 30% of the time
    if (code == 101) {
      if (randBetween(1,3) === 1) {
        e.preventDefault();
      }
    }
    //And 10% of space bar hits
    else if (code == 32) {
      if (randBetween(1,10) === 1) {
        e.preventDefault();
      }
    }
  });

  //Random number in interval
  function randBetween(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}
