
let count = 0;
document.getElementById("eggID").addEventListener('click', function(event) {
    count++
    if (count == 1) {
        document.getElementById("eggCrackID").style.display = 'inline';
        document.getElementById("eggID").style.display = 'none';
    }
});
let count2 = 0;
document.getElementById("eggCrackID").addEventListener('click', function(event) {
    count2++
    if (count2 == 4) {
        document.getElementById("eggOpenID").style.display = 'inline';
        document.getElementById("eggCrackID").style.display = 'none';
        }
    console.log(count2)
});


/*let countChild = 0;
document.getElementById("eggID").addEventListener('click', function(event) {
countChild += 1;

  if (countChild == 3) {
document.getElementById("eggCrackID").display = 'inline';
document.getElementById("eggID").display = 'none';
  }
  else if (countChild == 6) {
document.getElementById("oeuf").innerHTML = 'Oeuf brisé';
  }
document.getElementById("child-count").innerHTML = countChild;
event.stopPropagation();
event.preventDefault();
});
*/
