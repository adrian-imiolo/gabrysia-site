import { useState } from 'react';

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu} className="dropdown-toggle">
        Menu
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <a href="#about">Kancelaria</a>
          <a href="#services">Zakres Usług</a>
          {/* Other dropdown menu items */}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
