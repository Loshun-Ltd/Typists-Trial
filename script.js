<!-- Version 2022.12.05.12.54 -->
<!DOCTYPE html>
<html lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>
      Typist's Trial
    </title>
    <meta charset="UTF-8"/>
    <meta content="Benjamin Lockhard, Jean-Denis de Beauvoir" name="author"/>
    <meta content="The Typist’s Trial is a simple typing game, serving as both a simple time killer and means of improving one’s ability to type efficiently and precisely. The Typist’s Trial is to incorporate a rather steep learning curve, granting players no guidance save introductory info." name="description"/>
    <meta content="#012345" data-n-head="ssr" name="theme-color"/>
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <link href="assets/img/logo.png" rel="icon" type="image/x-icon"/>
    <link href="style.css" rel="stylesheet"/>
    <script src="script.js" type="text/javascript">
    </script>
    <noscript>
      You cannot play this game unless you have JavaScript!
    </noscript>
  </head>
  <body onload="loadListeners()">
    <div id="topnav">
      <div class="imgdiv" id="menu">
        <img alt="Menu" class="topimg" onclick="opClick('menudiv')" src="assets/img/white/menu.png"/>
      </div>
      <div class="imgdiv" id="rimg1">
        <img alt="Settings" class="topimg" onclick="opClick('settingsdiv')" src="assets/img/white/settings.png"/>
      </div>
      <div class="imgdiv" id="rimg2">
        <img alt="Help" class="topimg" onclick="opClick('helpdiv')" src="assets/img/white/help.png"/>
      </div>
      <center>
        <div class="title">
          <h1 class="title-text">
            <strong>
              }
            </strong>
          </h1>
          <h1 class="title-text">
            <strong>
              Typist's Trial
            </strong>
          </h1>
          <h1 class="title-text">
            <strong>
              {
            </strong>
          </h1>
        </div>
      </center>
    </div>
    <div id="menudiv">
      <p>
        Sorry! W.I.P.
      </p>
    </div>
    <div id="helpdiv">
      <p>
        Type the prompt that is shown in the top box.
        If you are on the menu screen, type
        <u>
          <b>
            Warm-up.
          </b>
        </u>
        &nbsp;or
        <u>
          <b>
            Trial.
          </b>
        </u>
        &nbsp;to get started.
        Or, type
        <u>
          <b>
            Reset.
          </b>
        </u>
        &nbsp;to return to the menu screen.
        <br>
        To clear what you type just typed, press
        <u>
          <b>
            .
          </b>
        </u>
        , or
        <u>
          <b>
            !
          </b>
        </u>
        , or
        <u>
          <b>
            ?
          </b>
        </u>
        .
      </p>
      <p>
        Have any feedback? Join the Loshun Ltd. Discord server to speak with us.
        <a href="https://discord.gg/Pv6agYuc4C" hreflang="en" target="_blank">
          Link
        </a>
      </p>
    </div>
    <div id="settingsdiv">
      <input class="checkbox" id="dark" name="dark" onclick="darkTheme()" type="checkbox"/>
      <label class="label" for="dark" id="darkl">
        Dark Theme
      </label>
    </div>
    <div class="main">
      <center id="bigger">
        <div class="game">
          <div class="infod" id="infot">
            <h2 class="info" id="clears">
              Clears:
              <u>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </u>
            </h2>
            <h2 class="info" id="time">
              Time:
              <u>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </u>
            </h2>
          </div>
          <br/>
          <div id="outer">
            <div class="play" id="play">
              <p id="prompt">
                Welcome to the Typist's Trial, this will test your ability to accurately and efficiently replicate displayed text. To begin, please type 'Warm-up.' for a simpler challenge or 'Trial.' for the real deal. Good luck!
              </p>
            </div>
            <br/>
            <div id="hrdiv">
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
              <div class="hrdiv">
                <hr color="#3c64f0"/>
              </div>
            </div>
            <div class="play" id="cin">
              <p id="input">
                You'll see your typing here, end entries with a punctuation mark to submit. There is no deleting, precision is key. Type 'Reset.' to return to this hub at any time.
              </p>
            </div>
            <br/>
          </div>
          <div class="infod" id="infob">
            <h2 class="info" id="warm-up">
              Warm-up Best:
              <u>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </u>
            </h2>
            <h2 class="info" id="trial">
              Trial Best:
              <u>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </u>
            </h2>
          </div>
        </div>
      </center>
    </div>
    <div id="footer">
      <p>
        Copyright © 2022 Loshun Ltd. Version 22.12.05 All Rights Reserved
      </p>
    </div>
  </body>
</html>
