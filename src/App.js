import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Tehtava1 from "./Tehtävät/Editointi/Tehtava1";
import Tehtava2 from "./Tehtävät/Kirjoitus/Tehtava2";
import Kopiointi from "./Tehtävät/Kopiointi/Kopiointi";
import Tietoturva from "./Tehtävät/Tietoturva/tietoturva";
import FallingGame from "./Tehtävät/Tippuvat kirjaimet/FallingGame";
import FallingWords from "./Tehtävät/Tippuvat sanat/FallingWords";
import DragAndDrop from "./Tehtävät/Vedä&Pudota/VedaJaPudota";
import Email from "./Tehtävät/Email/Email";
import Eform from "./Tehtävät/Eform/Eform";

const App = () => {
  return (
    <Router forceRefresh={true}>
      <div className="App">
        <nav>
          <div className="aalto-element" />
          <h1>Digirastin tehtäväsivut</h1>
          <ul>
            <li>
              <Link to="/">Etusivu</Link>
            </li>
            <li>
              <Link to="/Tehtava2">Kirjoitustehtävä</Link>
            </li>
            <li>
              <Link to="/Tehtava1">Muokkaustehtävä</Link>
            </li>
            <li>
              <Link to="/kopiointi">Kopiointitehtävä</Link>
            </li>
            <li>
              <Link to="/tietoturva">Tietoturvatehtävä</Link>
            </li>
            <li>
              <Link to="/tippuvat_kirjaimet">Tippuvat kirjaimet</Link>
            </li>
            <li>
              <Link to="/tippuvat_sanat">Tippuvat sanat</Link>
            </li>
            <li>
              <Link to="/veda_ja_pudota">Vedä ja pudota</Link>
            </li>
            <li>
              <Link to="/Email">Sähköposti</Link>
            </li>
            <li>
              <Link to="/Eform">Sähköinen lomake</Link>
            </li>
          </ul>
          <footer>Digitalents Helsinki</footer>
        </nav>

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Tehtava1">
              <Tehtava1 />
            </Route>
            <Route path="/Tehtava2">
              <Tehtava2 />
            </Route>
            <Route path="/kopiointi">
              <Kopiointi />
            </Route>
            <Route path="/tietoturva">
              <Tietoturva />
            </Route>
            <Route path="/tippuvat_kirjaimet">
              <FallingGame />
            </Route>
            <Route path="/tippuvat_sanat">
              <FallingWords />
            </Route>
            <Route path="/veda_ja_pudota">
              <DragAndDrop />
            </Route>
            <Route path="/Email">
              <Email />
            </Route>
            <Route path="/Eform">
              <Eform />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
