import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'

import "./Sidebar.css";
import acorn from './assets/acorn.png';
import img2 from './assets/img2.png';
import search from './assets/search.png';
import lock from './assets/lock.png';
import bell from './assets/bell.png';
import lightbulb from './assets/lightbulb.png';

const Sidebar = ({ menuItems }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div className="sidebar">
      <div className='top-bar'>
        <ul>
          <li className="acornimg">
            <img src={acorn} alt="Acorn Icon" />
            Acoron
          </li>
          <li className="userimg">
            <img src={img2} alt="User Icon" />
          </li>
          <li className="username">Lisa Jackson</li>
          <li className="username">EN</li>
        </ul>
        <div className='icon-sec'>
          <span><img src={search} alt="Search Icon" /></span>
          <span><img src={lock} alt="Lock Icon" /></span>
          <span><img src={lightbulb} alt="Lightbulb Icon" /></span>
          <span><img src={bell} alt="Bell Icon" /></span>
        </div>
      </div>
      <ul className="menu">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {menuItems.map((item, index) => (
          <li
            className={`menu-item ${activeItem === index ? 'active' : ''}`}
            key={index}
            onClick={() => handleItemClick(index)}
          >
            {item.link ? (
              <Link to={item.link} className="menu-item-link">
                <img className="item-icon" src={item.icon} alt="Icon" />
                <span className="item-label">
                  {item.label}
                  {item.dropdown && <span className="dropdown-icon"></span>}
                </span>
              </Link>
            ) : (
              <>
                <img className="item-icon" src={item.icon} alt="Icon" />
                <span className="item-label">
                  {item.label}
                  {item.dropdown && <span className="dropdown-icon"></span>}
                </span>
              </>
            )}

            {item.dropdown && activeItem === index && (
              <ul className="dropdown-menu">
                {item.dropdownOptions.map((option, optionIndex) => (
                  <li className="dropdown-item" key={optionIndex}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
         </BrowserRouter>
      </ul>
    </div>
  );
};

export default Sidebar;
