import { Link, Outlet, useParams } from 'react-router-dom';

const TacoPage = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <div>
      <h1>TacoPage</h1>
      <p>{name}</p>
      <Link to="details">Go to Details</Link>

      <Outlet />
    </div>
  );
};

export default TacoPage;
