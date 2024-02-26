import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white border-solid border-b-2 border-gray-400 text-xs w-full">
      <ul className="flex gap-6 w-full px-8 py-2">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/properties">Properties</Link>
        </li>
        <li>
          <Link to="/landlords">Landlords</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
