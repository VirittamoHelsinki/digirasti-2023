import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const originalText =
  "Helsi8ngin työllisyys4palveluiden tavoittee5na on edistää1 nykyis9tä tehokkaam1min työ3ttömien työnhaki7joiden työllistym9istä ja koulutuks0een ohjaut4umista, sekä tuoda uu6sia ratkai2suja os1aavan työvoiman saatavu8uteen.\n\nSuomal3aisten digitaitojen tärkeys kor6ostuu palveluiden muuttue7ssa s2ähköisiksi. On arvioitu, että noin 7neljänneksellä väestöstä olisi liian heikot digitaido345t.\n\nHelsingin kaupungin työllisyys6palveluiden 7toteuttama Digitaitojen oppimisalusta -hanke tarjoaa helsinkiläisille50 työttö9mille työnhakuun keskittyvää digitaito-opetusta.";

const expectedText =
  "Helsingin työllisyyspalveluiden tavoitteena on edistää nykyistä tehokkaammin työttömien työnhakijoiden työllistymistä ja koulutukseen ohjautumista, sekä tuoda uusia ratkaisuja osaavan työvoiman saatavuuteen.\n\nSuomalaisten digitaitojen tärkeys korostuu palveluiden muuttuessa sähköisiksi. On arvioitu, että noin neljänneksellä väestöstä olisi liian heikot digitaidot.\n\nHelsingin kaupungin työllisyyspalveluiden toteuttama Digitaitojen oppimisalusta -hanke tarjoaa helsinkiläisille työttömille työnhakuun keskittyvää digitaito-opetusta.";

const Tehtava1 = () => {
  const [started, setStarted] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [taskText, setTaskText] = useState(originalText);

  // Triggers when start exercise button is clicked
  const startingTime = () => {
    let start = new Date();
    setStartTime(start);
    setStarted(true);
  };

  const aikatulosfunktio = () => {};

  const textChangeEvent = (event) => {
    if (event.target.value === "") {
      alert(`Ups, poistit kaiken tekstin. Näin ei pitänyt tehdä!`);
    } else {
      setTaskText(event.target.value);
    }
  };

  const aloitusAlustaFunktio = () => {
    if (window.confirm(`Oletko varma että haluat aloittaa alusta?`)) {
      setTaskText(originalText);
    }
  };

  const tarkistusFunktio = () => {
    aikatulosfunktio();
    if (taskText === expectedText) {
      let end = new Date();
      let duration = new Date(end - startTime);
      alert(
        `Hienoa! Olet onnistuneesti poistanut kaikki numerot!\n\nAikaa sinulla tähän tehtävään meni ${duration.getMinutes() + ":" + duration.getSeconds()}.`
      );
    } else {
      numeronTarkistusFunktio(taskText);
    }
  };

  const numeronTarkistusFunktio = (param) => {
    let numero = param.match(/\d+/g);
    if (numero === null) {
      alert(`Hienoa, poistit kaikki numerot. Ikävä kyllä poistit myös muutakin.\nYritä uudelleen ja poista vain numerot!.`);
    } else {
      alert(`Numeroita on vielä jäljellä, jatka poistamista!.`);
    }
  };

  if (started === true) {
    return (
      <div>
        <div className="mainPageFrame">
          <div className="innerPageFrame">
            <h1 className="pageHeader">Muokkaustehtävä</h1>
            <div className="pageContentFrame">
              <h2 className="infoHeader">Ohje:</h2>
              <p>Liiku tekstissä nuolinäppäimillä ja poista tekstistä kaikki numerot. Tehtävä on ajastettu.</p>
            </div>
          </div>
          <div className="pageContentFrame">
            <h3 className="exerciseHeader">Muokattava teksti:</h3>
            <textarea className="textWritingArea largeTextarea" onChange={textChangeEvent} value={taskText}></textarea>
            <button className="actionButton" onClick={tarkistusFunktio} value="validateResult">
              Tarkista tulos
            </button>
            <button className="actionButton" onClick={aloitusAlustaFunktio} value="reset">
              Aloita alusta
            </button>
          </div>
          <Link to="/kopiointi" className="nextPracButton" role="button">
            Seuraava tehtävä
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="mainPageFrame">
          <div className="innerPageFrame">
            <h1 className="pageHeader">Muokkaustehtävä</h1>
            <div className="pageContentFrame">
              <h2 className="infoHeader">Ohje:</h2>
              <p>
                Liiku tekstissä nuolinäppäimillä ja poista tekstistä kaikki numerot. Tehtävä on ajastettu, klikkaa "Aloita tehtävä" painiketta aloittaaksesti
                tehtävä.
              </p>
            </div>
          </div>
          <div className="pageContentFrame">
            <button className="actionButton" onClick={startingTime}>
              Aloita tehtävä
            </button>
          </div>
          <Link to="/kopiointi" className="nextPracButton" role="button">
            Seuraava tehtävä
          </Link>
        </div>
      </div>
    );
  }
};

export default Tehtava1;
