import React, { useState } from "react"
import {Link } from "react-router-dom"
import "../../App.css"
import Video1 from "../../Resources/mouse_copy.mp4"
import Video2 from "../../Resources/ctrlv_ctrlc.mp4"

const myArray = [
  "Helsingin työllisyyspalveluiden tavoitteena on edistää nykyistä tehokkaammin työttömien työnhakijoiden työllistymistä ja koulutukseen ohjautumista, sekä tuoda uusia ratkaisuja osaavan työvoiman saatavuuteen.",
  "Suomalaisten digitaitojen tärkeys korostuu palveluiden muuttuessa sähköisiksi. On arvioitu, että noin neljänneksellä väestöstä olisi liian heikot digitaidot.",
  "Helsingin kaupungin työllisyyspalveluiden toteuttama Digirasti-hanke tarjoaa helsinkiläisille työttömille työnhakuun keskittyvää digitaito-opetusta.",
  "Digitaitokartoituksen kyselyn perusteella suomalaisten digitaidot ja osaaminen älylaitteiden sekä digitaalisten palvelujen käytön osalta on hyvällä tasolla. Avovastauksissa korostui erityisesti huoli ikääntyvän väestön digitaidoista ja nopeassa muutoksessa mukana pysymisestä. Lisäksi digikyselyn avovastauksissa mainittiin myös nuorten digitaidot erityisesti julkisten palvelujen käytön osalta. Syinä digilaitteiden käyttämättömyyteen mainittiin mm., ettei vastaaja omista laitteita tai osaa käyttää niitä, ja ettei laitteiden ostamiseen ole varaa. Lisäksi vastauksissa nousivat esiin terveydelliset syyt. Useassa vastauksessa em. syyt myös linkittyivät toisiinsa, eli yhtä selkeää syytä ei ollut. Vastaajien näkemysten mukaisesti digitukea kaipaavat erityisesti iäkkäät, mutta myös muut väestöryhmät ja erilaisissa elämäntilanteissa olevat kuten työttömät, maahanmuuttajat, nuoret ja työssäkäyvätkin. Lähde: Digitaitokartoitus - Digitaalinen kysely. Valtiovarainministeriö & Digi- ja väestötietovirasto. 31.8.2020."
]
// used to set states from the input field. 
const Kopiointi = () => {
  const [ copied, setCopied ] = useState('')
  const [ secondCopied, setSecondCopied ] = useState('')
  const [ addText, setText ] = useState('')
  const [ secondText, setSecondText] = useState('')


  const Right = (props) => {
    return (
      <div>
        <p className="correctMessage">
          Teksti on kopioitu oikein!<br />
          {props.text}
        </p>
      </div>
    )
  }
  const Wrong = () => {
    return (
      <div>
        <p className="errorMessage">Jokin meni pieleen, yritä uudestaan.</p>
      </div>
    )
  }
  return (
  
	<div>
	  <div className="mainPageFrame">
      <div className="innerPageFrame">
        <h1 className="pageHeader">Kopiointitehtävä</h1>
        <div className="pageContentFrame">
          <h2 className="infoHeader">Ohje:</h2>
			    <p>Kopioi ja liitä teksti sen alla olevaan tyhjään kenttään.</p>
          <br />
          <h3>Kopiointi</h3>
          <video controls src={Video1} type="video/mp4" width="60%" />
          <p>
            Valitse teksti maalaamalla eli kuljettamalla hiirtä sen yli vasen painike alas painettuna. 
            Kun koko kopioitavan tekstin tausta on sininen, paina hiiren oikeaa näppäintä maalatun tekstin päällä. 
            Valitse lisävalikosta "<strong>Kopioi</strong>".
            Siirrä kursori (hiiren osoitin) tyhjän laatikon päälle ja paina hiiren oikealla painikkeella ja valitse lisävalikosta "<strong>Liitä</strong>".
          </p>
		    </div>
      </div>
	    <div className="pageContentFrame">
        <h3 className="exerciseHeader">Kopioitava teksti:</h3>
        <p>{myArray[0]}</p>
        <br />
        <textarea className="textWritingArea mediumTextarea" placeholder="Liitä teksti tähän" name="copied" onChange={e => setCopied(e.target.value)} />
        <br />
        {addText}
        <button className="actionButton" onClick={() => {
          if (copied.trim() === myArray[0]) {
            setText(
              <Right text="Tee seuraavaksi alapuolelta löytyvä tehtävä."/>
            )
          } else {
            setText(
              <Wrong />
            )
          }
        }}>
        Valmis
        </button>
      </div>
      <div className="pageContentFrame">
        <h3>Kopiointi toisella tavalla</h3>
        <video controls src={Video2} type="video/mp4" width="60%"/>
        <p>
          Kopioi teksti maalaamalla se ja painamalla näppäimiä <strong>Ctrl + C</strong> samanaikaisesti.<br /> 
          Siirrä kursori (hiiren osoitin) tyhjän laatikon päälle ja liitä teksti laatikkoon klikkaamalla hiirellä ja paina sitten näppäimiä <strong>Ctrl + V</strong>.
        </p>
        <br />
		    </div>
      <div className="pageContentFrame">
        <h3 className="exerciseHeader">Toinen kopioitava teksti</h3>
        <p>{myArray[3]}</p>
        <br />
        <textarea type="text" className="textWritingArea largeTextarea" placeholder="Liitä teksti tähän" name="secondCopied" onChange={e => setSecondCopied(e.target.value)} />
        <br />
        {secondText}
        <button className="actionButton" onClick={() => {
          if (secondCopied.toString() === myArray[3]) {
            setSecondText(
              <Right text="Voit siirtyä seuraavaan tehtävään alla olevasta napista!" />
            )
          } else {
            setSecondText(
              <Wrong />
            )
          }
        }}>
        Valmis
        </button>
		  </div>
      <Link to="/tietoturva" className="nextPracButton" role="button">Seuraava tehtävä</Link>
    </div>
	</div>
  )
}
export default Kopiointi;