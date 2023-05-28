import React, { useState } from 'react';
import './Navbar.css';
import logo from './assets/logo.png';
import searchIcon from './assets/search1.png';
import img2 from './assets/img2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCheck,faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import us from './assets/us.png';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);


  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  
  const handleSubmit = () => {
    // Handle submit logic here
    setShowPopup(false); // Hide the popup after submitting
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageSelect = (value) => {
    // Handle language selection logic here
    console.log('Selected language:', value);
    setShowDropdown(false); // Hide the dropdown after selection
  };

  return (
    <nav className="navbar1">
      <div className='conatiner1 navbar'>
        <div className="navbar-left">
          <div className="logo">
          <a href=""><img src={logo} alt="Logo" /></a>  
          </div>
          <div className="menu-icon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <span className="school-name">
            Mount Carmel School
          </span>
        </div>
        <div className="navbar-right">
          <div className="search-bar">
            <input type="text" placeholder="Search by student name" />
            <img src={searchIcon} alt="Search" className="search-icon" />
          </div>
          <div className="currency-dropdown">
            <select>
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="RUB">RUB</option>
            </select>
          </div>
          <div className="currency-dropdown1">
            <div className="custom-dropdown">
              <div className="selected-language" onClick={toggleDropdown}>
                <img src={us} alt="English" className="flag" />
              </div>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li onClick={() => handleLanguageSelect('English')}>
                    <img src={us} alt="English" className="flag" />
                    English
                  </li>
                  <li onClick={() => handleLanguageSelect('Hindi')}>
                    <img src={us} alt="Hindi" className="flag" />
                    Hindi
                  </li>
                  <li onClick={() => handleLanguageSelect('Russian')}>
                    Russian
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="switch-bar" onClick={togglePopup}>
        <FontAwesomeIcon icon={faExchangeAlt} className="icon" />
      </div>
      {showPopup && (
        <div className="modal">
          <div className="modal-content">
            <h3>Switch Branch</h3>
            <button onClick={togglePopup} className='close'>×</button>
            <div className="radio-group">
                <label>
                  <input type="radio" name="home-branch" value="branch1" />
                  Home Branch 1
                </label>
                <label>
                  <input type="radio" name="home-branch" value="branch2" />
                  Home Branch 2
                </label>
                <label>
                  <input type="radio" name="home-branch" value="branch3" />
                  Home Branch 3
                </label>
              
              </div>
              <button class="update-btn">Update</button>
           
          </div>
        </div>
      )}
       
        <div className="calendar">
          <FontAwesomeIcon icon={faCalendarAlt} className='icon'/>
        </div>
        <div className="checkmark">
          <FontAwesomeIcon icon={faCheck} className='icon'/>
        </div>
        <div className="whatsapp-icon">
          <FontAwesomeIcon icon={faWhatsapp} className='icon'/>
        </div>
        <div className="user-image">
          <img src={img2} alt="User" />
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
