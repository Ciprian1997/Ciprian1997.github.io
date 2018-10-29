console.info(0);

function sayWelcome() {
  console.info("Salut " + prenume + ", bine ai venit la noi!");
}
var prenume = "Ciprian";
var nume = "Gros";
var owner = "Ciprian's";
var msg1 = 'ai zis "Cipsa"';
var msg2 = "Nu, am zis Ciprian";
var template = `'Text cu ghilimele " sau simple'`;

console.debug("auzi....? dar cum te cheama? -" + prenume);
sayWelcome();
var skills = ["html", "css", "js"];

prenume = "Cipsa";

console.info("toate variabilele au fost initializate");
console.log(nume);
console.debug("cum te cheama? -" + prenume);
sayWelcome();

// schimb valutar

var cursEUR = 4.5;
var myEUR = 20;
var myRON = 0;
var friendEUR = 100;
var friendRON = 0;
// operatori * / + -

myRON = myEUR * cursEUR;
console.info("eu am " + myRON + "RON");

friendRON = friendEUR * cursEUR - (friendEUR * cursEUR * 1) / 100;
console.info("tu ai " + friendRON + "RON");

function extractFromATM(ammount) {
  console.info("==== ==== ==== ==== ==== ");
  console.info("suma extrasa este: " + ammount);
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    comision = 2.5;
    console.warn("comision minim aplicat");
  }
  console.info("comison aplicat: " + comision);
  console.info("==== ==== ==== ==== ==== ");
}

extractFromATM(1005);
extractFromATM(100);
