import React from "react";
import "../../App.css";
import { useState } from "react";
import Clock from "./Clock";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

var letters = "";
var lettersPienet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "ä",
  "ö",
];

var lettersMyosIsot = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "ä",
  "ö",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "Ä",
  "Ö",
];
var lettersIsotJaErikois = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "ä",
  "ö",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "Ä",
  "Ö",
  "/",
  "*",
  "&",
  "-",
  ".",
  ",",
  "€",
  "$",
  "+",
  "?",
  "=",
  "(",
  ")",
];

var arrayOfLetters = [];
var points = 0;
var lives = 5;
var difficultySetting = 4500;
var location = 0;
var id = 10;
var letterToSearch = "";
var firstTime = false;
let userAgentString = navigator.userAgent;
let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
var capslockpaalla = false;
var lap = 0;
var animLenght = 10;
var timeoutLenght = 10200;

function FallingGame() {
  const [state, setState] = useState("");
  const [start, setStart] = useState(true);
  // eslint-disable-next-line
  const [cleanFallen, setCleanFallen] = useState("");

  //Sets starting values and change the state for rerender
  function startGame(difficulty) {
    if (difficulty === "helppo") {
      difficultySetting = 4500;
      letters = lettersPienet;
    } else if (difficulty === "normaali") {
      difficultySetting = 3500;
      letters = lettersPienet;
    } else if (difficulty === "vaikea") {
      difficultySetting = 2000;
      letters = lettersMyosIsot;
    } else {
      difficultySetting = 1500;
      letters = lettersIsotJaErikois;
    }
    arrayOfLetters = [];
    points = 0;
    lives = 5;
    lap = 0;
    animLenght = 10;
    timeoutLenght = 10200;
    setStart(false);
  }

  //return random int between min and max
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //takes back to starting screen, where player can change difficulty
  function changeDifficulty() {
    arrayOfLetters = [];
    points = 0;
    lives = 5;
    firstTime = true;
    setStart(true);
    setState("try");
  }

  const handler = (event) => {
    event.preventDefault();
    setState(event.key);
  };

  /*Checks if the call for new letter is valid, if it is makes a new 
  letter, gives it a id and push it to the array. Everytime regardless
  if the call is valid returns all the existing letters in the array.*/
  function newLetter(ready) {
    if (ready === true || firstTime === true) {
      var num = Math.floor(Math.random() * letters.length);
      var lett = letters[num];
      firstTime = false;
      if (id < 99) {
        id++;
      } else {
        id = 10;
      }
      lett = id + lett;
      arrayOfLetters.push(lett);
      ready = false;

      //Every 10 points, shortens the falling time by 1 sec
      if ((points > 10 && lap === 0) || (points > 20 && lap === 1) || (points > 30 && lap === 2) || (points > 40 && lap === 3) || (points > 50 && lap === 4)) {
        animLenght = animLenght - 1;
        timeoutLenght = timeoutLenght - 1000;
        lap++;
      }

      setTimeout(function () {
        cleanFallenLetter(lett);
      }, timeoutLenght);
    }
    if (lives > 0 && points < 50) {
      if (firefoxAgent) {
        location = randomIntFromInterval(0, 800);
      } else {
        location = randomIntFromInterval(-400, 400);
      }
      return (
        <AnimatePresence>
          {arrayOfLetters.map((letter) => (
            <motion.div
              key={letter}
              id={letter}
              initial={{ y: 0, x: location }}
              animate={{
                y: 502,
                transitionEnd: { backgroundColor: "#BD2719" },
              }}
              transition={{ duration: animLenght, ease: "linear" }}
              exit={{}}
              className="lettersGame"
            >
              {letter.charAt(2)}
            </motion.div>
          ))}
        </AnimatePresence>
      );
    } else {
      setState("lost");
    }
  }

  /*Creates new letter div based on the letter that was deleted from the array, also sets the div's background color to green.
Gets also the position from the deleted letter. After timeout removes the new div*/
  function stopAndFlashGreen(letterToSearch, left, top) {
    var div = document.createElement("div");
    div.id = letterToSearch;
    div.innerHTML = letterToSearch.charAt(2);
    div.className = "lettersGame";
    div.style.backgroundColor = "#009246";
    var scrolledFromTop = window.pageYOffset;
    var scrolledFromLeft = window.pageXOffset;
    div.style.left = left + scrolledFromLeft + "px";
    div.style.top = top + scrolledFromTop + "px";
    document.getElementById("gameFrame").appendChild(div);
    setTimeout(function () {
      var myobj = document.getElementById(letterToSearch);
      myobj.remove();
    }, 200);
  }

  /*Checks if the pressed letter(state) exist in the array
    and if it does removes the letter from the array and awards a point.
    Otherwise takes one live.*/
  function cleanUpLetter() {
    for (var i = 0; i < arrayOfLetters.length; i++) {
      var container = arrayOfLetters[i];
      if (container.charAt(2) === state) {
        letterToSearch = container;
        break;
      }
    }
    var index = arrayOfLetters.indexOf(letterToSearch);
    if (arrayOfLetters.indexOf(letterToSearch) >= 0) {
      //Gets position of the rightly typed letter that exist in the array, then calls stopAndFlashGreen() function.
      var element = document.getElementById(letterToSearch);
      var rect = element.getBoundingClientRect();
      var top = rect.y;
      var left = rect.x;
      stopAndFlashGreen(letterToSearch, left, top);
    }
    if (arrayOfLetters.indexOf(letterToSearch) >= 0) {
      points++;
      capslockpaalla = false;
      arrayOfLetters.splice(index, 1);

      /*Changes the border to reflect if the typed letter exist on the array, to green if it does.
      After short timeout changes it back to blue*/
      if (document.getElementById("gameFrame") != null) {
        document.getElementById("gameFrame").style.borderColor = "#009246";
        setTimeout(function () {
          if (document.getElementById("gameFrame") != null) {
            document.getElementById("gameFrame").style.borderColor = "#9FC9EB";
          }
        }, 200);
      }
    } else if (state !== "" && state !== "try") {
      lives--;
      /*If typed letter doesnt exist and difficulty is easy or normal,
       checks if capslock is on and sets the caplockpaalla var to true if it is*/
      if (
        (difficultySetting === 4500 || difficultySetting === 3500) &&
        ((state.charCodeAt(0) >= 65 && state.charCodeAt(0) <= 90) || state.charCodeAt(0) === 197 || state.charCodeAt(0) === 196 || state.charCodeAt(0) === 214)
      ) {
        capslockpaalla = true;
      }

      /*Changes the border to reflect if the typed letter exist on the array, to red if it doesnt.
      After short timeout changes it back to blue*/
      if (document.getElementById("gameFrame") != null) {
        document.getElementById("gameFrame").style.borderColor = "#BD2719";
        setTimeout(function () {
          if (document.getElementById("gameFrame") != null) {
            document.getElementById("gameFrame").style.borderColor = "#9FC9EB";
          }
        }, 200);
      }
    }
  }

  /*checks if Caps Lock is on and gives a reminder to turn it off*/
  function capslockvaroitus() {
    if (capslockpaalla) {
      return (
        <div className="vinkkiGame" id="vinkkiGame">
          Laita Caps Lock pois päältä
        </div>
      );
    }
  }

  /*Removes letter from array. Is called with timeout
    when making new letter, so the letter is removed when it hits the
    ground, if it still exist.*/
  function cleanFallenLetter(letter) {
    var index = arrayOfLetters.indexOf(letter);
    if (arrayOfLetters.indexOf(letter) >= 0) {
      arrayOfLetters.splice(index, 1);
      lives--;
      setCleanFallen(letter);
    }
  }

  /*Set values back to starting values*/
  function tryAgain() {
    arrayOfLetters = [];
    points = 0;
    lives = 5;
    lap = 0;
    animLenght = 10;
    timeoutLenght = 10200;
    firstTime = true;
    setState("try");
  }

  /*clears the state after every render,
   so it is possible to press same key more than once and remove
   all the matching letters*/
  function clearState() {
    if (state !== "") {
      setState("");
    }
  }

  //Checks if lives are 0 or if points are 50 or over. Returns string depending the checks.
  function winOrLose() {
    if (points < 50) {
      return "Valitettavasti yrityksesi loppuivat, voit yrittää uudelleen, vaihtaa vaikeusastetta tai siirtyä seuraavaan tehtävään";
    } else if (points >= 50) {
      return "Onneksi olkoon, sait vaaditut 50 pistettä, voit yrittää uudelleen toisella vaikeusasteella tai siirtyä seuraavaan tehtävään";
    }
  }

  /*If first render or coming to change difficulty, renders the start menu,
otherwise renders game mechanics. If lives hit 0, renders game over menu.*/
  if (start === false) {
    if (lives > 0 && points < 50) {
      return (
        <div className="gameContent">
          <div className="canvasGame">
            <h1 className="pageHeader">Tippuvat kirjaimet</h1>
            <div className="containerGame">
              <div className="gameFrame" id="gameFrame" style={{ borderColor: "#9FC9EB" }}>
                <Clock letter={newLetter} arrayOfLetters={arrayOfLetters} difficulty={difficultySetting} />
              </div>
              {cleanUpLetter()}
              {capslockvaroitus()}
              <div className="uiDivGame">
                <p className="uiGame">Pisteet: {points}</p>
                <p className="uiGame">Yritykset: {lives}</p>
                <input
                  className="hideGame"
                  id="hideGame"
                  onKeyPress={(e) => handler(e)}
                  autoFocus={true}
                  onBlur={({ target }) =>
                    setTimeout(function () {
                      target.focus({ preventScroll: true });
                    }, 2)
                  }
                ></input>
              </div>
            </div>
            {clearState()}
          </div>
        </div>
      );
    } else {
      return (
        <div className="gameContent">
          <div className="canvasGame">
            <h1 className="pageHeader">Tippuvat kirjaimet</h1>
            <div className="gameButtonsFrame">
              <div className="letterClass_lostGame">
                <h3 className="lostGame">{winOrLose()}</h3>
                <h1 className="pisteetGame">Pisteesi: {points}</h1>
              </div>
              <button className="actionButton" onClick={tryAgain}>
                Yritä uudelleen
              </button>
              <button className="actionButton" onClick={changeDifficulty}>
                Vaihda vaikeusastetta
              </button>
            </div>
            <Link to="/tippuvat_sanat" className="nextPracButton" role="button">
              Seuraava tehtävä
            </Link>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="gameContent">
        <div className="canvasGame">
          <h1 className="pageHeader">Tippuvat kirjaimet</h1>
          <div className="pageContentFrame">
            <h2 className="infoHeader">Ohje:</h2>
            <p>
              Paina näppäimistöstäsi niitä kirjaimia, jotka tippuvat alaspäin ruudulla. Menetät yhden yrityksen painaessasi väärää kirjainta tai jos kirjain
              ehtii tippua loppuun asti. Yritysten loppuessa peli päättyy.
              <br />
              <br /> Huomaathan, että pelissä on sekä pieniä että isoja kirjaimia. Yritä olla nopea, ettei kirjain ehdi tippua alas asti!
              <br />
              <br />
              <strong> Onnea peliin!</strong>
            </p>
          </div>
          <div className="gameButtonsFrame">
            <b>Valitse vaikeusaste:</b>
            <br />
            <button className="actionButton" onClick={() => startGame("helppo")}>
              Helppo
            </button>
            <button className="actionButton" onClick={() => startGame("normaali")}>
              Normaali
            </button>
            <button className="actionButton" onClick={() => startGame("vaikea")}>
              Vaikea
            </button>
            <button className="actionButton" onClick={() => startGame("mahdoton")}>
              Mahdoton
            </button>
          </div>
        </div>
        <Link to="/tippuvat_sanat" className="nextPracButton" role="button">
          Seuraava tehtävä
        </Link>
      </div>
    );
  }
}

export default FallingGame;
