import "reflect-metadata";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Countries from './pages/Countries';
import Continents from './pages/Continents';
import CountryDetails from './pages/CountryDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Continents />} />
          <Route path="/countries/:codeContinent" element={<Countries />} />
          <Route path="/countryDetails/:codeCountry" element={<CountryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
