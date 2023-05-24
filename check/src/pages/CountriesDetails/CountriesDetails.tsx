import { Link } from 'react-router-dom';
import CountrieDetailsApi from '../../component/CountrieDetailsApi';
import { HOME_PATH } from '../path';

const CountriesDetails = () => {
  return (
    <div>
      <button type="button">
        <Link to={HOME_PATH}>Retour page d'accueil</Link>
      </button>
      <CountrieDetailsApi />
    </div>
  );
};

export default CountriesDetails;
