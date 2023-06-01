import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mainPageFrame">
      <div className="innerPageFrame">
        <h1 className="pageHeader">Etusivu</h1>
        <div className="pageContentFrame">
          <h2 className="infoHeader">
            <p>Tervetuloa harjoittelemaan digitaitojen perusteita!</p>
          </h2>
          <p>Sivun vasemmasta laidasta löydät erilaisia tehtäviä perustason digitaitojen harjoitteluun.</p>
          <br />
          <p>
            Siirry tehtävään viemällä hiiren osoitin tehtävän nimen päälle ja klikkaa hiiren vasenta painiketta valitaksesi tehtävän. Pääset milloin vain
            takaisin tälle sivulle painamalla Etusivu-linkkiä sivun vasemmassa laidassa.
          </p>
          <br />
          <p>Luethan tehtävän ohjeet huolellisesti ennen tehtävän aloittamista.</p>
          <br />
          <p>Tsemppiä harjoitteluun!</p>
          <br />
          <br />
          <p>
            Sivut on tehty Helsingin työllisyyspalveluiden Digitaitojen oppimisalusta -palvelun ja Helsingin kaupungin työllistämispalvelu Virittämön
            yhteistyönä.
          </p>
        </div>
        <Link to="/Tehtava2" className="nextPracButton" role="button">
          Aloita
        </Link>
      </div>
    </div>
  );
};

export default Home;
