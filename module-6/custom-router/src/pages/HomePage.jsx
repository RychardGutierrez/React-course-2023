import { Link } from '../router-tools/Link';

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
        exercitationem nobis magnam, earum iusto fuga debitis at hic nisi,
        eligendi autem iure saepe aperiam placeat doloremque non expedita
        consectetur vel?
      </p>
      <Link to="/about">Go to About</Link>
    </>
  );
};

export default HomePage;
