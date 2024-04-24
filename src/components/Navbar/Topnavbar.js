import React, { useState } from 'react';
import { Navbar, InputGroup, FormControl, Dropdown, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/fa_logo.jpg';
import './Topnavbar.css'
import { BsMenuButtonWide } from "react-icons/bs";
import Menubar from '../../Menubar/Menubar'; 

const UserDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleItemClick = () => {
    setShowDropdown(false);
  };

  return (
    <div className="user-icon" onClick={toggleDropdown}>
      <img
        src={require('../../assets/user_icon.png')}
        alt="User_Icon"
        height="45"
        className="d-inline-block align-top"
        onClick={toggleDropdown}
      />
      {showDropdown && (
        <div className="dropdown-menu">
        <ul className="dropdown-menu-list">
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Feedback</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
      )}
    </div>
  );
};

// Define the Topnavbar component
const Topnavbar = ({}) => {
  const [showMenuBar, setShowMenuBar] = useState(false); // Moved state declaration inside the Topnavbar component

  const handleMenuClick = () => {
    setShowMenuBar(!showMenuBar);
  };

  const handleSearch = () => { };

  return (
    <Navbar className="custom-navbar  " bg="light" >

      {/* Left side - Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />

        {/* Button with Menu Icon */}
        <button className="more" onClick={handleMenuClick}>
          <BsMenuButtonWide size={32} />
        </button>

        {/* Render Menubar based on state */}
        {showMenuBar && <Menubar />}

        <div className="menu-path">
          <p className="path">Master CRM</p>
          <p className="sec-path">/Policy Transfer</p>
        </div>
      </div>

      {/* Center - Search Bar */}
      <div className='col-lg-4 col-md-4 col-sm-4 offset-2'>
        <InputGroup className="mb-3 searchbar">
          <FormControl placeholder="Search..." />
          <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
            <i className="bi bi-search"></i>
          </Button>
        </InputGroup>
      </div>

      {/* Right side - User Icon with Tooltip */}
      <div className="col-lg-1 col-md-1 col-sm-1 ">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip-welcome">Sriram</Tooltip>}
        >
          <div className="user_icon">
            <UserDropdown />
            <div className="tooltip">Sriram</div>
          </div>
        </OverlayTrigger>
      </div>
    </Navbar>
  );
};

export default Topnavbar;
