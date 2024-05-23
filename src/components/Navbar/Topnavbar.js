import React, { useState } from 'react';
import {OverlayTrigger, Dropdown, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/fa_logo.jpg';
import './Topnavbar.css'
import { LuMenuSquare } from "react-icons/lu";
import Menubar from '../Menubar/Menubar';

const UserDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Dropdown className="user-icon" show={dropdownOpen}
      onClick={toggleDropdown} drop="left" >

      <img
        src={require('../../assets/user_icon.png')}
        alt="User_Icon"
        height="45"
        className="d-inline-block align-top"
      />

      <Dropdown.Menu className="custom-dropdown-menu" >
        <Dropdown.Item href="#">Profile</Dropdown.Item>
        <Dropdown.Item href="#">Settings</Dropdown.Item>
        <Dropdown.Item href="#">Feedback</Dropdown.Item>
        <Dropdown.Item href="#">Help</Dropdown.Item>
        <Dropdown.Item href="#">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  );
};

// Define the Topnavbar component
const Topnavbar = ({ }) => {
  const [showMenuBar, setShowMenuBar] = useState(false);

  const handleMenuClick = () => {
    setShowMenuBar(!showMenuBar);
  };

  const handleOutsideClick = () => {
    setShowMenuBar(false);
  };
  const [path, setPath] = useState("Dashboard");

  return (
   
      <div className="App fixed-top" >
        <header>
            {/* Left side - Logo */}
            <div className="logo_container">
              <img src={logo} alt="Logo" className="logo" />
              {/* Button with Menu Icon */}
              <button className="more" onClick={handleMenuClick}>
                <LuMenuSquare size={32} />
              </button>

              {/* Render Menubar based on state */}
              {showMenuBar && <Menubar path={path} setPath={setPath} open={showMenuBar} onClose={handleOutsideClick} />}

              <div className="menu-path">
                <p className="path">{path}</p>
              </div>
            </div>

            {/* Center - Search Bar */}
           
            <div className="search-box">
              <input placeholder="Search Here..." />
                  <i className="bi bi-search"></i>
            </div>

            {/* Right side - User Icon with Tooltip */}
            <div >
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
          
        </header>
      </div>
    

  );
};

export default Topnavbar;
