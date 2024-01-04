import { Link, useLocation } from 'react-router-dom';

const tacos = ['cochinita', 'chili', 'carnita', 'quesilla'];

const SearchPage = () => {
  return (
    <>
      <h1>SearchPage</h1>
      <ul>
        {tacos.map((taco) => (
          <li key={taco}>
            <Link to={`/search/${taco}`}>{taco}</Link>
          </li>
        ))}
      </ul>

      <Link to="/">Go to Home</Link>
    </>
  );
};

export default SearchPage;
