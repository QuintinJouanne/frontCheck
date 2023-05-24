import { Routes, Route } from 'react-router-dom';
import {
  CONTINENT_LIST,
  COUNTRIES_DETAILS_PATH,
  COUNTRIES_PATH,
  HOME_PATH,
} from './pages/path';
import ContinentList from './pages/ContinentList/ContinentList';
import CountriesList from './pages/CountriesPerContinents/CountriesList';
import CountriesDetails from './pages/CountriesDetails/CountriesDetails';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<Home />} />
      <Route path={CONTINENT_LIST} element={<ContinentList />} />
      <Route path={COUNTRIES_PATH} element={<CountriesList />} />
      <Route path={COUNTRIES_DETAILS_PATH} element={<CountriesDetails />} />
    </Routes>
  );
}
//Une page qui affiche la liste des liens vers chaque continent

export default App;
