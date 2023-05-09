import React from 'react';
import './App.css';
import { Link } from "react-router-dom"

const Home = () => {
    return (
		<div className="mainPageFrame">
		  <div className="innerPageFrame">
			  <h1 className="pageHeader">Etusivu</h1>
			  <div className="pageContentFrame">
			    <h2 className="infoHeader"><p>Tervetuloa Digirastin tehtäväsivuille!</p></h2>
				<p>Sivun vasemmasta laidasta löydät tehtäviä. Vie hiiren osoitin tehtävän nimen päälle ja klikkaa hiiren vasemmalla painikkeella. Näin siirryt sivustolla eri tehtäviin. Jokaisen tehtävän jälkeen voit painaa alhaalta löytyvää <b>Seuraava tehtävä</b>-painiketta.</p>
				<br></br>
				<p>Pääset milloin vain takaisin tälle sivulle painamalla <b>Etusivu</b>-linkkiä sivun vasemmassa laidassa.</p>
				<br></br>
				<p>Luethan tehtävän ohjeet huolellisesti ennen tehtävän aloittamista.</p>
				<br></br>
				<p>Onnea harjoitteluun!</p>
			  </div>
			  <Link to="/Tehtava2" className="nextPracButton"
              role="button">Aloita</Link>
		  </div>
		</div>
		
    )
}

export default Home;