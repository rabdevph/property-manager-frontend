import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard.jsx';
import Landlords from '../pages/Landlords.jsx';
import Properties from '../pages/Properties.jsx';

function Main() {
  return (
    <div className="flex bg-white px-8 py-2 h-full w-full">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landlords" element={<Landlords />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </div>
  );
}

export default Main;
