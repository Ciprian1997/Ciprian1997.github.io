function learnVariables() {
  console.info(1);

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
}

// learnVariables();

function executeATMExample() {
  // schimb valutar

  var ATMFunds = 50000;
  var funds = 5000;

  function getExtractFee(amount) {
    var comision = amount * 0.01;
    if (comision < 2.5) {
      console.warn("comision minim aplicat");
      comision = 2.5;
    }
    return comision;
  }
  // T0D0 implement
  function checkExtractPermissions() {
    return true;
  }

  function extractFromATM(amount) {
    console.info("==== ==== ==== ==== ==== ");
    console.info("suma extrasa este: " + amount);
    var comision = getExtractFee(amount);

    var totalExtract = amount + comision;

    if (totalExtract > funds) {
      console.error("insufficient funds");
      return;
    }
    if (ATMFunds < totalExtract) {
      console.error("ATM insufficient funds");
      return;
    }
    funds = funds - totalExtract;
    //ATMFunds = ATMFunds - ammount;
    ATMFunds -= amount;

    console.info("comision aplicat: " + comision);
    console.info("sold curent: " + funds);
    console.info("==== ==== ==== ==== ==== ");
  }

  extractFromATM(1005); // nu e multiplu de 10
  extractFromATM(100000); // solduri insufieciente
  extractFromATM(3000);
  extractFromATM(3000);
  extractFromATM(100);
  extractFromATM(0); // nu ar trebui sa existe comision
}

// executeATMExample();

function learnIterators() {
  function countTo(n) {
    console.info("sa numaram pana la " + n);
    //for(init; condition; after)
    for (var i = 1; i <= n; i += 1) {
      console.info(i);
    }
  }

  function countDown(n) {
    var i = n;
    for (; i > 0; ) {
      console.info(i);
      i--;
    }
    var i = n;
    while (i > 0) {
      console.info(i);
      i--;
    }
  }

  countTo(10);
  countDown(10);
}

//learnIterators();
