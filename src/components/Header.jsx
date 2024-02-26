import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex bg-blue-800 text-white w-full">
      <div className="px-8 py-2">
        <Link to="/" className="logo | font-bold text-xl">
          PROPERTY MANAGER
        </Link>
      </div>
    </header>
  );
}

export default Header;
