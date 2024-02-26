import { useState } from 'react';

import Summary from './landlords/Summary.jsx';
import Individual from './landlords/Individual.jsx';
import Company from './landlords/Company.jsx';

function Landlords() {
  const [selectedTab, setSelectedTab] = useState('summary');

  const buttonClass = `border-none outline-none py-1 w-20`;

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const content = () => {
    switch (selectedTab) {
      case 'summary':
        return <Summary />;
      case 'individual':
        return <Individual />;
      case 'company':
        return <Company />;
      default:
        return;
    }
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex bg-white text-xs">
        <button
          className={`${buttonClass} ${selectedTab === 'summary' ? 'bg-gray-200' : 'bg-transparent'}`}
          onClick={() => handleTabClick('summary')}
        >
          Summary
        </button>
        <button
          className={`${buttonClass} ${selectedTab === 'individual' ? 'bg-gray-200' : 'bg-transparent'}`}
          onClick={() => handleTabClick('individual')}
        >
          Individual
        </button>
        <button
          className={`${buttonClass} ${selectedTab === 'company' ? 'bg-gray-200' : 'bg-transparent'}`}
          onClick={() => handleTabClick('company')}
        >
          Company
        </button>
      </div>
      <div className="bg-gray-200 p-2 h-full w-full">{content()}</div>
    </div>
  );
}

export default Landlords;
