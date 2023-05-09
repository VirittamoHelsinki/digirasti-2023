import React, { useState }from "react"
import { Link } from "react-router-dom"
import "../../App.css"

const Tehtava2 = () => {
  const [ counter, setCounter ] = useState( 0 )
  const [ taskTimer, countTaskTimer ] = useState( '00:00' )
  const [ taskText, setTaskText ] = useState('')

  setTimeout(() => {
    laskurifunktio()
  }, 1000)

  const laskurifunktio = () => {
    setCounter( counter + 1 )
  }
  
  const aikatulosfunktio = () => {
	let minutes = Math.floor( counter / 60 );
	let seconds = counter - minutes * 60;
	if( seconds < 10 ) seconds = "0" + seconds
	
	let resultTime = minutes + ":" + seconds	
	countTaskTimer( resultTime )
  }

  const textChangeEvent = ( event ) => {
    setTaskText( event.target.value )
	aikatulosfunktio()
 
	let correctValue = 'Tässä tehtävässä harjoittelen kirjoittamaan tietokoneen näppäimistöllä. Opin käyttämään isoja ja pieniä kirjaimia sekä erikoismerkkejä! Kun olen oppinut kirjoittamaan tietokoneella sujuvasti, voin kirjoittaa työhakemuksen minua kiinnostavaan työpaikkaan. Mistä saisin apua ansioluettelon tekemiseen?'
    if( event.target.value === correctValue ) {
      alert( `Hienoa, olet tehnyt tämän tehtävän onnistuneesti!\nAikaa sinulla tähän tehtävään meni ${taskTimer}.\n\nVoit nyt jatkaa seuraavaan tehtävään.\nSulkeaksesi tämän ilmoituksen, paina OK-painiketta.` )
    }
  }
  
  const aloitusAlustaFunktio = () => {
    if (window.confirm( `Oletko varma että haluat aloittaa alusta?` )) {
      setTaskText( "" )
	  }
  }

    return (
      <div>
        <div className="mainPageFrame">
			    <div className="innerPageFrame">
			      <h1 className="pageHeader">Kirjoitustehtävä</h1>
			      <div className="pageContentFrame">
				      <h2 className="infoHeader">Ohje:</h2>
				      <p>Kirjoita seuraava teksti alla olevaan kenttään. Teksti antaa sinulle vihjeitä, miten voit toimia, kun kirjoitat tekstiä.</p>
			      </div>
			      <div className="pageContentFrame">
              <h3 className="exerciseHeader">Kirjoitettava teksti:</h3>
				      <p>Tässä tehtävässä harjoittelen kirjoittamaan tietokoneen näppäimistöllä. Opin käyttämään isoja ja pieniä kirjaimia sekä erikoismerkkejä! Kun olen oppinut kirjoittamaan tietokoneella sujuvasti, voin kirjoittaa työhakemuksen minua kiinnostavaan työpaikkaan. Mistä saisin apua ansioluettelon tekemiseen?</p>
              <br />
				      <textarea className="textWritingArea mediumTextarea" onChange={textChangeEvent} value={taskText} placeholder='Klikkaa tähän aloittaaksesi kirjoittamisen' />	  
			        <button className="actionButton" onClick={ aloitusAlustaFunktio } type="reset">Aloita alusta</button>
            </div>
			    </div>
			    <Link to="/Tehtava1" className="nextPracButton" role="button">Seuraava tehtävä</Link>
		    </div>
      </div>
    )
  }
  export default Tehtava2
