import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Topnavbar from './components/Navbar/Topnavbar';
import './App.css';
// import Menu from './components/Menubar/Menu';
import MasterCRMIndex from './Modules/MasterCRM/Master CRM Index';
import Layout from './components/Footer/Footer';
import AddCRMForm from './Modules/MasterCRM/AddCRMForm';
import Menubar from './components/Menubar/Menubar.js';


const App = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  
  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className='App'>
      <Topnavbar selectedMenu={selectedMenu} className="top-navbar" />
      {/* <Menu onSelectMenu={handleMenuSelect} className="menu" /> */}
      <Menubar/>
      <MasterCRMIndex  />
      <AddCRMForm/>

      
      <Layout/>
    </div>
  );
}

export default App;
