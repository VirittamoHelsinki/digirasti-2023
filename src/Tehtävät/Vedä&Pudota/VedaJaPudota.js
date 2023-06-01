import React from "react";
import { motion } from "framer-motion";
import "../../App.css";
import { useState } from "react";
import RaahattavaObjekti from "./RaahattavaObjekti";
import { Link } from "react-router-dom";

//Creates win condition variables
var eka = 0;
var toka = 0;
var kolmas = 0;
var neljas = 0;
var viides = 0;
var kuudes = 0;
var seiska = 0;
var kasi = 0;
var ysi = 0;
var kymppi = 0;
var all = 0;

export default function DragAndDrop() {
  const [state, setState] = useState(0);

  /*When draggable object is released, get position of the released object, basket and rabbit. If the positions match and the object is 
    right, then it changes the variable that belongs to the object.*/
  function pysahdys(dragOb, keyNum) {
    //Get position of the basket
    const basket = document.getElementById("basket1");
    var topBasket = basket.getBoundingClientRect().top;
    var leftBasket = basket.getBoundingClientRect().left;

    //Get position of the rabbit
    const rabbit = document.getElementById("rabbit");
    var topRabbit = rabbit.getBoundingClientRect().top;
    var leftRabbit = rabbit.getBoundingClientRect().left;

    //Get position of the dragged object
    const dragObject = document.getElementById(dragOb);
    var left = dragObject.getBoundingClientRect().left;
    var top = dragObject.getBoundingClientRect().top;
    if ((left >= leftBasket) & (left <= leftBasket + 180) & ((top >= topBasket) & (top <= topBasket + 100))) {
      if (keyNum === "1") {
        eka = 1;
        all++;
      } else if (keyNum === "2") {
        toka = 1;
        all++;
      } else if (keyNum === "3") {
        kolmas = 1;
        all++;
      } else if (keyNum === "4") {
        neljas = 1;
        all++;
      } else if (keyNum === "5") {
        viides = 1;
        all++;
      } else if (keyNum === "6") {
        kuudes = 1;
        all++;
      } else if (keyNum === "7") {
        seiska = 1;
        all++;
      } else if (keyNum === "8") {
        alert("Porkkana ei kuulu koriin!");
      } else if (keyNum === "9") {
        alert("Porkkana ei kuulu koriin!");
      } else if (keyNum === "10") {
        alert("Porkkana ei kuulu koriin!");
      }
      setState(state + 1);
    } else if ((left >= leftRabbit) & (left <= leftRabbit + 70) & ((top >= topRabbit) & (top <= topRabbit + 100))) {
      if (keyNum === "8") {
        kasi = 1;
        all++;
      } else if (keyNum === "9") {
        ysi = 1;
        all++;
      } else if (keyNum === "10") {
        kymppi = 1;
        all++;
      } else if (keyNum === "1") {
        alert("Jänis ei pidä hedelmistä!");
      } else if (keyNum === "2") {
        alert("Jänis ei pidä hedelmistä!");
      } else if (keyNum === "3") {
        alert("Jänis ei pidä hedelmistä!");
      } else if (keyNum === "4") {
        alert("Jänis ei pidä hedelmistä!");
      } else if (keyNum === "5") {
        alert("Jänis ei pidä hedelmistä!");
      } else if (keyNum === "6") {
        alert("Jänis ei pidä hedelmistä!");
      } else if (keyNum === "7") {
        alert("Jänis ei pidä hedelmistä!");
      }
      setState(state + 1);
    }
  }

  //When going to next practice, scrolls to the top
  function scrollTop() {
    return (
      setTimeout(() => {
        window.scrollTo(0, 0);
      }),
      6
    );
  }

  //Checks if win conditions are met, if they are, calls ClearVariables() function
  function nextPract() {
    if (all === 10) {
      ClearVariables();
      return (
        <Link to="/Email" id="ToTheNext" className="nextPracButton" role="button" onClick={scrollTop}>
          Seuraava tehtävä
        </Link>
      );
    }
  }

  // Set all variables to 0. Also after very short timeout put focus to the appearing button
  function ClearVariables() {
    eka = 0;
    toka = 0;
    kolmas = 0;
    neljas = 0;
    viides = 0;
    kuudes = 0;
    seiska = 0;
    kasi = 0;
    ysi = 0;
    kymppi = 0;
    all = 0;
    setTimeout(function () {
      document.getElementById("ToTheNext").focus();
    }, 2);
  }

  //If win conditions are met, creates fireworks and after 3 sec creates explosion.
  function victory() {
    if (all === 10) {
      return (
        <div>
          <motion.div
            initial={{ y: -100, x: 500, opacity: 0 }}
            className="victoryClass"
            animate={{ opacity: 1, scale: [0.5, 1, 0.5] }}
            transition={{ duration: 3, delay: 3, repeat: Infinity, opacity: { repeat: 0, delay: 3 } }}
          />
          <motion.div
            initial={{ opacity: 0, y: 0, x: 300 }}
            className="victoryClass"
            animate={{ opacity: 1, scale: [0.5, 1, 0.5] }}
            transition={{ duration: 3, delay: 3, repeat: Infinity, opacity: { repeat: 0, delay: 3 } }}
          />
          <motion.div
            initial={{ opacity: 0, y: -100, x: 100 }}
            className="victoryClass"
            animate={{ opacity: 1, scale: [0.5, 1, 0.5] }}
            transition={{ duration: 3, delay: 3, repeat: Infinity, opacity: { repeat: 0, delay: 3 } }}
          />
          <motion.div
            initial={{ y: 400, x: 540 }}
            className="victoryClassFire"
            animate={{
              y: -10,
              transitionEnd: {
                display: "none",
              },
            }}
            transition={{ duration: 3 }}
          />
          <motion.div
            initial={{ y: 400, x: 340 }}
            className="victoryClassFire"
            animate={{
              y: 90,
              transitionEnd: {
                display: "none",
              },
            }}
            transition={{ duration: 3 }}
          />
          <motion.div
            initial={{ y: 400, x: 140 }}
            className="victoryClassFire"
            animate={{
              y: -10,
              transitionEnd: {
                display: "none",
              },
            }}
            transition={{ duration: 3 }}
          />
        </div>
      );
    }
  }

  /*Returns 10 draggable objects and non-draggable rabbit, tree and basket. 
  Also calls functions that have win condition checks inside them.*/
  return (
    <div className="gameContent">
      <h1 className="pageHeader">Vedä ja pudota</h1>
      <div className="pageContentFrame">
        <h2 className="infoHeader">Ohje:</h2>
        <p>
          Tehtävänäsi on raahata kaikki <strong>hedelmät</strong> koriin ja syöttää <strong>porkkanat</strong> jänikselle.
          <br />
          <br />
          Raahaus: Valitse hiiren vasemmalla painikkeella raahattava kohde, pidä painike pohjassa ja liikuta hiirtä samanaikaisesti.
        </p>
      </div>
      <motion.div className="canvas">
        <div className="basket1" id="basket1"></div>
        <div className="rabbit" id="rabbit"></div>
        <RaahattavaObjekti pysahdys={pysahdys} int={eka} className="dragObject apple" id="dragObject1" keyNum="1" left="80px" top="220px" />
        <RaahattavaObjekti pysahdys={pysahdys} int={toka} className="dragObject apple" id="dragObject2" keyNum="2" left="95px" top="50px" />
        <RaahattavaObjekti pysahdys={pysahdys} int={kolmas} className="dragObject apple" id="dragObject3" keyNum="3" left="250px" top="135px" />
        <RaahattavaObjekti pysahdys={pysahdys} int={neljas} className="dragObject apple" id="dragObject4" keyNum="4" left="350px" top="55px" />
        <RaahattavaObjekti pysahdys={pysahdys} int={viides} className="dragObject pear" id="dragObject5" keyNum="5" left="200px" top="35px" />
        <RaahattavaObjekti pysahdys={pysahdys} int={kuudes} className="dragObject pear" id="dragObject6" keyNum="6" left="350px" top="260px" />
        <RaahattavaObjekti pysahdys={pysahdys} int={seiska} className="dragObject pear" id="dragObject7" keyNum="7" left="450px" top="170px" />
        <RaahattavaObjekti pysahdys={pysahdys} int={kasi} className="dragObject carrot" id="dragObject8" keyNum="8" left="155px" top="130px" />
        <RaahattavaObjekti pysahdys={pysahdys} int={ysi} className="dragObject carrot" id="dragObject9" keyNum="9" left="225px" top="230px" />
        <RaahattavaObjekti pysahdys={pysahdys} int={kymppi} className="dragObject carrot" id="dragObject10" keyNum="10" left="350px" top="150px" />
      </motion.div>
      {victory()}
      {nextPract()}
      <Link to="/Email" className="nextPracButton" role="button">
        Seuraava tehtävä
      </Link>
    </div>
  );
}
