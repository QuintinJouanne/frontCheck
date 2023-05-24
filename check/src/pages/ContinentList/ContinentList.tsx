import { Link } from 'react-router-dom';
import { HOME_PATH } from '../path';
import ContinentListAPI from '../../component/ContinentListApi';

const ContinentList = () => {
  return (
    <div>
      Continents Liste
      <button type="button">
        <Link to={HOME_PATH}>Retour page d'accueil</Link>
      </button>
      <ContinentListAPI />
    </div>
  );
};

export default ContinentList;
