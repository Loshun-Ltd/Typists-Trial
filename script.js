/* Version 2022.12.03.20.14 */

var home = true;
var trial = null;
var prompts = [[
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
],[
  "01001000 01100101 01101100 01101100 01101111.",
  "Attention parents and grandparents of young children, Gerber Life is accepting applications for their affordable grow-up plan!",
  "Hello, we've been trying to reach you about your car's extended warranty.",
  "I'm afraid you've contracted pneumonoultramicroscopicsilicovolcanoconiosis.",
  "I'm off to visit my aunt in Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.",
  "The FitnessGram Pacer Test is a multistage aerobic capacity test that gets progressively more difficult as it continues.",
  "There are so many colorful words for nonsense, for example: balderdash, gobbledygook, hogwash, malarkey, and more.",
  "This Disney DVD is enhanced with Disney's FastPlay, your movie and a selection of bonus features will begin automatically.",
  "Use control+space to enable the international keyboard, make sure to disable it afterward.",
  "Why, isn't this test supercalifragilisticexpialidocious?"
]];
var sentence = null;
var indexes = [];
var typedin = "";
var clears = 0;
var time = 0;
var interval;
var warm_up = localStorage.getItem("warm-up");
var trialBest = localStorage.getItem("trial");
var lastKeyTyped = null;
var opOpen = "none";
var dark = localStorage.getItem("dark");

function loadListeners() {
  window.addEventListener("keydown", function(e) {
    keyDown(e.key);
  });
  
  if (typeof(warm_up) == "string") {
    document.getElementById("warm-up").textContent = "Warm-up Best: " + warm_up + "s";
  }
  
  if (typeof(trialBest) == "string") {
    document.getElementById("trial").textContent = "Trial Best: " + trialBest + "s";
  }
  
  if (typeof(dark) != "string") {
    localStorage.setItem("dark", "false");
    dark = "false";
  }
  
  if (dark == "true") {
    dark = "false";
    darkTheme();
    document.getElementById("dark").checked = true;
  }
}

function keyDown(key) {
  var input = document.getElementById("input");
  var text = document.getElementById("prompt");
  var cin = document.getElementById("cin");
  
  if (key.length == 1) {
    if (home || input.textContent == " ") {
      input.textContent = "";
      home = false;
      typedin = "";
    }
    
    if (lastKeyTyped != " " && key == " ") {
      input.textContent += key;
    } else if (lastKeyTyped == " " && key == " ") {
      input.innerHTML += "&nbsp;";
    } else {
      input.textContent += key;
    }
    
    typedin += key;
    lastKeyTyped = key;
  }
  
  if (key == "." || key == "!" || key == "?") {
    var typed = typedin;
    
    input.textContent = " ";
    typedin = "";
    
    if (sentence == null && (typed == "Warm-up." || typed == "Trial.")) {
      playSound("assets/sfx/default/in.mp3");
      
      trial = typed == "Trial.";
      
      let ind = trial ? 1 : 0;
      let i = Math.floor(Math.random() * prompts[ind].length);

      sentence = prompts[ind][i];
      text.textContent = sentence;
      cin.style.backgroundColor = "#f5ffa5";
      document.getElementById("clears").textContent = "Clears: 0/5";
      document.getElementById("time").textContent = "Time: 0s";
      
      indexes.push(i);
      
      setTimeout(function() {
        cin.style.backgroundColor = "#ffffff";
      }, 500);
      
      interval = setInterval(function() {
        time++;
        document.getElementById("time").textContent = "Time: " + time + "s";
      }, 1000);
    } else if (sentence != null && typed == sentence) {
      if (indexes.length == 5) {
        let played = false;
        
        if (trial && (typeof(trialBest) != "string" || time < trialBest)) {
          playSound("assets/sfx/default/high.mp3");
          played = true;
          localStorage.setItem("trial", time);
          trialBest = localStorage.getItem("trial");
          document.getElementById("trial").textContent = "Trial Best: " + time + "s";
        } else if (!trial && (typeof(warm_up) != "string" || time < warm_up)) {
          playSound("assets/sfx/default/high.mp3");
          played = true;
          localStorage.setItem("warm-up", time);
          warm_up = localStorage.getItem("warm-up");
          document.getElementById("warm-up").textContent = "Warm-up Best: " + time + "s";
        }
        
        if (!played) {
          playSound("assets/sfx/default/out.mp3");
        }
        
        home = true;
        sentence = null;
        indexes = [];
        clears = 0;
        text.textContent = trial
          ? "Excellent job, you're a keyboard master! Type 'Warm-up.' to take a step back or 'Trial.' to try for a better time. Good luck!"
          : "Well done, you're ready for trial mode! Type 'Warm-up.' again to try for a better time or 'Trial.' for the real deal. Good luck!";
        cin.style.backgroundColor = "#f5ffa5";
        document.getElementById("clears").innerHTML = "Clears: <u>&nbsp;&nbsp;&nbsp;&nbsp;</u>";
        document.getElementById("time").innerHTML = "Time: <u>&nbsp;&nbsp;&nbsp;&nbsp;</u>";
        
        clearInterval(interval);
        
        time = 0;
        trial = null;
        
        setTimeout(function() {
          cin.style.backgroundColor = "#ffffff";
        }, 500);
      } else {
        playSound("assets/sfx/default/good.mp3");
        
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
        
        sentence = prompts[ind][i];
        text.textContent = sentence;
        cin.style.backgroundColor = "#b4fabe";
        clears++;
        document.getElementById("clears").textContent = "Clears: " + clears + "/5";
        
        indexes.push(i);
        
        setTimeout(function() {
          cin.style.backgroundColor = "#ffffff";
        }, 500);
      }
    } else if (typed == "Reset.") {
      home = true;
      trial = null;
      sentence = null;
      indexes = [];
      clears = 0;
      time = 0;

      text.textContent =
        "Welcome to the Typist's Trial, this will test your ability to accurately and efficiently replicate displayed text. " +
        "To begin, please type 'Warm-up.' for a simpler challenge or 'Trial.' for the real deal. Good luck!";
      input.textContent =
        "You'll see your typing here, end entries with a punctuation mark to submit. " +
        "There is no deleting, precision is key. Click the reset button to return to this hub at any time.";
      document.getElementById("clears").innerHTML = "Clears: <u>&nbsp;&nbsp;&nbsp;&nbsp;</u>";
      document.getElementById("time").innerHTML = "Time: <u>&nbsp;&nbsp;&nbsp;&nbsp;</u>";
      
      clearInterval(interval);
    } else {
      playSound("assets/sfx/default/bad.mp3");
      
      cin.style.backgroundColor = "#fabeb4";
      
      setTimeout(function() {
        cin.style.backgroundColor = "#ffffff";
      }, 500);
    }
  }
}

function opClick(div) {
  if (opOpen == div) {
    document.getElementById(div).style.top = "-100%";
    opOpen = "none";
  } else if (opOpen != "none") {
    document.getElementById(opOpen).style.top = "-100%";
    document.getElementById(div).style.top = "7.5%";
    opOpen = div;
  } else {
    document.getElementById(div).style.top = "7.5%";
    opOpen = div;
  }
}

function darkTheme() {
  if (dark == "false") {
    document.body.style.backgroundColor = "black";
    document.getElementById("outer").style.backgroundColor = "black";
    localStorage.setItem("dark", "true");
    dark = "true";
  } else {
    document.body.style.backgroundColor = "#e6fff0";
    document.getElementById("outer").style.backgroundColor = "#e6fff0";
    localStorage.setItem("dark", "false");
    dark = "false";
  }
}

function playSound(link) {
  var a = new Audio(link);
  a.play();
}
