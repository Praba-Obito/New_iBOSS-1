import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Menu.css';


const SelectedContent = ({ selectedMenu, selectedDropdown }) => {
  return (
    <div className="selected-content container-fluid mt-3"style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      {selectedMenu && (
        <div>
           {selectedMenu}
          {selectedDropdown && ` >> ${selectedDropdown}`}
        </div>
      )}
    </div>
  );
};


const Menu = ({ onSelectMenu }) => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedDropdown, setSelectedDropdown] = useState(null);


  const handleMenuClick = (menu) => {
    setSelectedMenu((prevMenu) => (prevMenu === menu ? null : menu));
    setSelectedDropdown(null);
    onSelectMenu(menu);
  };

 const handleDropdownItemClick = (menu, dropdownItem) => {
    setSelectedMenu(menu);
    setSelectedDropdown(dropdownItem === selectedDropdown ? null : dropdownItem);
    onSelectMenu(dropdownItem);
  };

  const isMenuOpen = (menu) => {
    // Check if the dropdown for the menu is open
    return selectedMenu === menu && selectedDropdown === null;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-xl bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="menu_box collapse navbar-collapse" id="navbarSupportedContent">
            {/* menu-items */}
            <ul className="nav nav-pills" id="pillNav2" role="tablist" style={{ backgroundColor: '#fff' }}>
              <li className="nav-item">
                <a
                  className={`nav-link   ${selectedMenu === 'Dashboard' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('Dashboard')}
                  type="button"
                  role="tab"
                  aria-selected={selectedMenu === 'Dashboard'}
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item" >
                <a
                  className={`nav-link  ${selectedMenu === 'FAR Info' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('FAR Info')}
                  type="button"
                  role="tab"
                  aria-selected={selectedMenu === 'FAR Info'}
                >FAR Info</a>
              </li>
              <li className="nav-item dropdown-center">
                <a
                  className={`nav-link toggle  ${selectedMenu==='Policy Transfer' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('Policy Transfer')}
                  type="button" role="tab" data-bs-toggle="dropdown" 
                  aria-selected={selectedMenu === 'Policy Transfer'}
                >Policy Transfer</a>
                <ul className={`dropdown-menu ${isMenuOpen('Policy Transfer') ? 'show' : ''}`}>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Internal Transfer' ? 'active' : ''}`}
                    onClick={() => handleDropdownItemClick('Policy Transfer', 'Internal Transfer')}
                  >Internal Transfer</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Bulk Transfer' ? 'active' : ''}`}
                    onClick={() => handleDropdownItemClick('Policy Transfer', 'Bulk Transfer')}
                  >Bulk Transfer</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Awaiting Approve' ? 'active' : ''}`}
                    onClick={() => handleDropdownItemClick('Policy Transfer', 'Awaiting Approve')}
                  >Awaiting Approve</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Success Transfer' ? 'active' : ''}`}
                    onClick={() => handleDropdownItemClick('Policy Transfer', 'Success Transfer')}
                  >Success Transfer</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Inprocess Transfer' ? 'active' : ''}`}
                    onClick={() => handleDropdownItemClick('Policy Transfer', 'Inprocess Transfer')}
                  >Inprocess Transfer</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown-center">
                <a
                  className={`nav-link toggle  ${selectedMenu==='Master CRM' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('Master CRM')}
                  type="button" role="tab" id="crmDropdown" data-bs-toggle="dropdown" aria-expanded="false"
                  aria-selected={selectedMenu === 'Master CRM'}
                >Master CRM</a>
                <ul className={`dropdown-menu ${isMenuOpen('Master CRM') ? 'show' : ''}`}>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Master CRM Index' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Master CRM', 'Master CRM Index')}
                  >Master CRM Index</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Audit Info' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Master CRM', 'Audit Info')}
                  >Audit Info</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Update Address' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Master CRM', 'Update Address')}
                  >Update Address</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Update Contact' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Master CRM', 'Update Contact')}
                  >Update Contact</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'AML Index' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Master CRM', 'AML Index')}
                  >AML Index</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Consultant Change' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Master CRM', 'Consultant Change')}
                  >Consultant Change</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Move Document' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Master CRM', 'Move Document')}
                  >Move Document</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown-center">
                <a
                  className={`nav-link toggle  ${selectedMenu==='Master Account' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('Master Account')}
                  type="button" role="tab" id="AccDropdown" data-bs-toggle="dropdown" aria-expanded="false"
                  aria-selected={selectedMenu === 'Master Account'}
                >Master Account</a>
                <ul className={`dropdown-menu ${isMenuOpen('Master Account') ? 'show' : ''}`}>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Life Insurance' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Master Account', 'Life Insurance')}
                  >Life Insurance</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'General Insurance' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Master Account', 'General Insurance')}
                  >General Insurance</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Group Insurance' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Master Account', 'Group Insurance')}
                  >Group Insurance</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Investment' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Master Account', 'Investment')}
                  >Investment</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Other Services' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Master Account', 'Other Services')}
                  >Other Services</a></li>
                </ul>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link  ${selectedMenu === 'Report' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('Report')}
                  type="button"
                  role="tab"
                  aria-selected={selectedMenu === 'Report'}
                >Report</a>
              </li>
              <li className="nav-item dropdown-center">
                <a
                  className={`nav-link toggle  ${selectedMenu==='Document Mgt.' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('Document Mgt.')}
                  type="button"
                  role="tab" id="DocDropdown" data-bs-toggle="dropdown" aria-expanded="false"
                  aria-selected={selectedMenu === 'Document Mgt.'}
                >Document Mgt.</a>
                <ul className={`dropdown-menu ${isMenuOpen('Document Mgt.') ? 'show' : ''}`}>
                  <li><a className={`dropdown-item ${selectedDropdown === 'AutoCUE' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Document Mgt.', 'AutoCUE')}
                  >AutoCUE</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'DMP' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Document Mgt.', 'DMP')}
                  >DMP</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'File Management' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Document Mgt.', 'File Management')}
                  >File Management</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'View Documents' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Document Mgt.', 'View Documents')}
                  >View Documents</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown-center">
                <a
                  className={`nav-link toggle  ${selectedMenu==='Biz Tran.Register' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('Biz Tran.Register')}
                  type="button"
                  role="tab" id="BizDropdown" data-bs-toggle="dropdown" aria-expanded="false"
                  aria-selected={selectedMenu === 'Biz Tran.Register'}
                >Biz Tran.Register</a>
                <ul className={`dropdown-menu ${isMenuOpen('Biz Tran.Register') ? 'show' : ''}`}>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Life Insurance' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Biz Tran.Register', 'Life Insurance')}
                  >Life Insurance</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'General Insurance' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Biz Tran.Register', 'General Insurance')}
                  >General Insurance</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === ' Group Insurance' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Biz Tran.Register', 'Group Insurance')}
                  >Group Insurance</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Investment' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Biz Tran.Register', 'Investment')}
                  >Investment</a></li>
                </ul>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link  ${selectedMenu === 'Customer Servicing' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('Customer Servicing')}
                  type="button"
                  role="tab"
                  aria-selected={selectedMenu === 'Customer Servicing'}
                >Customer Servicing</a>
              </li>
              <li className="nav-item dropdown-center">
                <a
                  className={`nav-link toggle   ${selectedMenu==='Product Mgt.(Admin)' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('Product Mgt.(Admin)')}
                  type="button"
                  role="tab" id="ProDropdown" data-bs-toggle="dropdown" aria-expanded="false"
                  aria-selected={selectedMenu === 'Product Mgt.(Admin)'}
                >Product Mgt.(Admin)</a>
                <ul className={`dropdown-menu ${isMenuOpen('Product Mgt.(Admin)') ? 'show' : ''}`}>
                  <li><a className={`dropdown-item ${selectedDropdown === 'LI Product' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Product Mgt.(Admin)', 'LI Product')}
                  >LI Product</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'GI Product' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Product Mgt.(Admin)', 'GI Product')}
                  >GI Product</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Group Product' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Product Mgt.(Admin)', 'Group Product')}
                  >Group Product</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Investment Product' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Product Mgt.(Admin)', 'Investment Product')}
                  >Investment Product</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'ILP Product' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Product Mgt.(Admin)', 'ILP Product')}
                  >ILP Product</a></li>
                  <li><a className={`dropdown-item ${selectedDropdown === 'Other product' ? 'active' : ''}`} href="#"
                    onClick={() => handleDropdownItemClick('Product Mgt.(Admin)', 'Other product')}
                  >Other product</a></li>
                </ul>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link  ${selectedMenu === 'Event Mgt' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('Event Mgt')}
                  type="button"
                  role="tab"
                  aria-selected={selectedMenu === 'Event Mgt'}
                >Event Mgt</a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link  ${selectedMenu === 'Compliance Audit' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('Compliance Audit')}
                  type="button"
                  role="tab"
                  aria-selected={selectedMenu === 'Compliance Audit'}
                >Compliance Audit</a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link  ${selectedMenu === 'Dictionaries' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('Dictionaries')}
                  type="button"
                  role="tab"
                  aria-selected={selectedMenu === 'Dictionaries'}
                >Dictionaries</a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link  ${selectedMenu === 'Settings' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('Settings')}
                  type="button"
                  role="tab"
                  aria-selected={selectedMenu === 'Settings'}
                >Settings</a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link  ${selectedMenu === 'Feedback' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('Feedback')}
                  type="button"
                  role="tab"
                  aria-selected={selectedMenu === 'Feedback'}
                >Feedback</a>
              </li>
              <li className="other_menu nav-item dropstart">
                <a className="nav-link toggle" id="othersDropdown" data-bs-toggle="dropdown" type="button"
                  role="tab"
                  aria-expanded="false">Others</a>
                <ul className="dropdown-menu" style={{ marginTop: "40px" }}>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link  ${selectedMenu === 'AutoSync LI' ? 'active' : ''}`}
                      onClick={() => handleMenuClick('AutoSync LI')}
                      type="button"
                      role="tab"
                      aria-selected={selectedMenu === 'AutoSync LI'}
                    >AutoSync LI</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link  ${selectedMenu === 'AutoSync INV' ? 'active' : ''}`}
                      onClick={() => handleMenuClick('AutoSync INV')}
                      type="button"
                      role="tab"
                      aria-selected={selectedMenu === 'AutoSync INV'}
                    >AutoSync INV</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link  ${selectedMenu === 'eDOCU' ? 'active' : ''}`}
                      onClick={() => handleMenuClick('eDOCU')}
                      type="button"
                      role="tab"
                      aria-selected={selectedMenu === 'eDOCU'}
                    >eDOCU(FAR)</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link  ${selectedMenu === 'CommTrack' ? 'active' : ''}`}
                      onClick={() => handleMenuClick('CommTrack')}
                      type="button"
                      role="tab"
                      aria-selected={selectedMenu === 'CommTrack'}
                    >CommTrack</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link  ${selectedMenu === 'EFC' ? 'active' : ''}`}
                      onClick={() => handleMenuClick('EFC')}
                      type="button"
                      role="tab"
                      aria-selected={selectedMenu === 'EFC'}
                    >EFC</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link  ${selectedMenu === 'Centralized Data' ? 'active' : ''}`}
                      onClick={() => handleMenuClick('Centralized Data')}
                      type="button"
                      role="tab"
                      aria-selected={selectedMenu === 'Centralized Data'}
                    >Centralized Data</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    
      {/* <div className="selected-content-container">
        <SelectedContent selectedMenu={selectedMenu} selectedDropdown={selectedDropdown} />
      </div> */}

    </div>
  );
};

export default Menu;


