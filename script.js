/* Version 2022.11.19.15.00 */

var home = true;
var trial = null;
var prompts = [
  [
    "001000101 110100100.",
    "Buy yourself a copy of the APCS Principles Prep Book.",
    "Don't expect a WPM score.",
    "Five dollar foot long.",
    "Have you heard of the hit game Among Us?",
    "Hello, world!",
    "I hope you know how to use the international keyboard.",
    "The quick brown fox jumps over the lazy dog.",
    "The record time on the trial is 214 seconds.",
    "What's the longest town name in Wales?"
  ],
  [
    "01001000 01100101 01101100 01101100 01101111.",
    "Hello, we've been trying to reach you about your car's extended warranty.",
    "I'm afraid you've contracted pneumonoultramicroscopicsilicovolcanoconiosis.",
    "The FitnessGram Pacer Test is a multistage aerobic capacity test that gets progressively more difficult as it continues.",
    "This Disney DVD is enhanced with Disney's FastPlay, your movie and a selection of bonus features will begin automatically."
  ]
];
var sentance = null;
var indexes = [];
var typedin = "";

function loadListeners() {
  window.addEventListener("keydown", function(e) {
    keyDown(e.key);
  });
//   window.addEventListener("pointerenter", function(e) {
    
//   });
}

function keyDown(key) {
  var input = document.getElementById("input");
  var text = document.getElementById("prompt");
  
  if (key.length == 1) {
    if (home || input.textContent == " ") {
      input.textContent = "";
      home = false;
      typedin = "";
    }
    
    if (key == " ") {
      input.innerHTML += "&nbsp;";
    } else {
      input.textContent += key;
    }
    
    typedin += key;
  }
  
  if (key == "." || key == "!" || key == "?") {
    var typed = typedin;
    
    input.textContent = " ";
    typedin = "";
    
    if (sentance == null && (typed == "Warm-up." || typed == "Trial.")) {
      trial = typed == "Trial.";
      
      let ind = trial ? 1 : 0;
      let i = Math.floor(Math.random() * prompts[ind].length);

      sentance = prompts[ind][i];
      text.textContent = sentance;
      input.style.backgroundColor = "#7f7f1f";
      
      indexes.push(i);
      
      setTimeout(function() {
        input.style.backgroundColor = "#112233";
      }, 500);
    } else if (sentance != null && typed == sentance) {
      if (indexes.length == 5) {
        home = true;
        sentance = null;
        trial = null;
        indexes = [];
        text.textContent = trial
          ? "Excellent job, you're a keyboard master! Type 'Warm-up.' to take a step back or 'Trial.' to try for a better time. Good luck!"
          : "Well done, you're ready for trial mode! Type 'Warm-up.' again to try for a better time or 'Trial.' for the real deal. Good luck!";
      } else {
        let ind = trial ? 1 : 0;
        let b = true;
        let i = 0;
        
        while (b) {
          i = Math.floor(Math.random() * prompts[ind].length);
          b = false;
          
          for (let j = 0; j < indexes.length; j++) {
            if (indexes[j] == i) {
              b = true;
            }
          }
        }
        
        sentance = prompts[ind][i];
        text.textContent = sentance;
        input.style.backgroundColor = "#1f7f1f";
        
        indexes.push(i);
        
        setTimeout(function() {
          input.style.backgroundColor = "#112233";
        }, 500);
      }
    } else {
      input.style.backgroundColor = "#7f1f1f";
      
      setTimeout(function() {
        input.style.backgroundColor = "#112233";
      }, 500);
    }
  }
}

function reset() {
  home = true;
  trial = null;
  sentance = null;
  indexes = [];
  
  document.getElementById("text").textContent =
    "Welcome to the Typist's Trial, this will test your ability to accurately and efficiently replicate displayed text. " +
    "To begin, please type 'Warm-up.' for a simpler challenge or 'Trial.' for the real deal. Good luck!";
  document.getElementById("input").textContent =
    "You'll see your typing here, end entries with a punctuation mark to submit. " +
    "There is no deleting, precision is key. Click the reset button to return to this hub at any time."
}
