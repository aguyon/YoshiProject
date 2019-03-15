
let count = 0;
document.getElementById("eggID").addEventListener('click', function(event) {
    count++
    if (count == 1) {
        document.getElementById("eggCrackID").style.display = 'inline';
        document.getElementById("eggID").style.display = 'none';
        const audio = new Audio('media/sf_os_broye_02.mp3');
			audio.play();
        
    }
});
let count2 = 0;
document.getElementById("eggCrackID").addEventListener('click', function(event) {
    count2++
    if (count2 == 2) {
        document.getElementById("eggOpenID").style.display = 'inline';
        document.getElementById("eggCrackID").style.display = 'none';
        const audio = new Audio('media/sf_os_broye_01.mp3');
			audio.play();
        }

});

/*let count3 = 0;
document.getElementById("eggOpenID").addEventListener('click', function(event) {
    count3++
    if (count3 == 3) {
        document.getElementById("eggYoshiID").style.display = 'inline';
        document.getElementById("eggOpenID").style.display = 'none';
        const audio = new Audio('media/yoshi-sound-2.mp3');
			audio.play();
        }
});*/

document.getElementById("RCmorty").addEventListener('keypress', function(event) {
    
  count = 0
  count2 = 0
  count3 = 0
  document.getElementById("eggOpenID").style.display = 'none';
  document.getElementById("eggID").style.display = 'inline';
  const audio = new Audio('media/agg.mp3');
  audio.play();

});


document.getElementById("RCmorty").addEventListener('mouseover', function(event) {
    
    count = 0
    count2 = 0
    count3 = 0
    document.getElementById("eggOpenID").style.display = 'none';
    document.getElementById("eggID").style.display = 'inline';
    const audio = new Audio('media/agg.mp3');
    audio.play();

});

// a key map of allowed keys
const allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  let key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  let requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  document.getElementById("eggOpenID").style.display = 'none';
  document.getElementById("eggID").style.display = 'inline';

  var audio = new Audio('media/applause.mp3');
  audio.play();

  alert("cheats activated");
}

/*
event.stopPropagation();
event.preventDefault();
*/
