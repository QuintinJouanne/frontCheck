import { Link } from 'react-router-dom';
import CountriesListApi from '../../component/CountriesListApi';
import { HOME_PATH } from '../path';

const CountriesPerContinents = () => {
  return (
    <div>
      <button type="button">
        <Link to={HOME_PATH}>Retour page d'accueil</Link>
      </button>{' '}
      <CountriesListApi />
    </div>
  );
};

export default CountriesPerContinents;
