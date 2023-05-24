import { Link } from 'react-router-dom';
import {
  CONTINENT_LIST,
  COUNTRIES_DETAILS_PATH,
  COUNTRIES_PATH,
} from '../path';

const Home = () => {
  return (
    <div>
      Home Page
      <button type="button">
        <Link to={CONTINENT_LIST}> Go to continent List</Link>
        <Link to={COUNTRIES_PATH}> Go to countries List</Link>
        <Link to={COUNTRIES_DETAILS_PATH}> Go to countries Details List</Link>
      </button>
    </div>
  );
};

export default Home;
