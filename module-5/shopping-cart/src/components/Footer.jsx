import { useFilters } from '../hooks/useFilters';
import './Footer.css';

function Footer() {
  const { filters } = useFilters();
  return (
    <footer className="footer">
      <h4>
        Review techique of React <span>@Richy</span>
      </h4>
      <h5>Shopping Cart with useContext & useReducer</h5>
      {JSON.stringify(filters, null, 2)}
    </footer>
  );
}

export default Footer;
