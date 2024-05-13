import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Topnavbar from './components/Navbar/Topnavbar';
import './App.css';
import MasterCRMIndex from './Modules/MasterCRM/Master CRM Index';
import Layout from './components/Footer/Footer';
import AddCRMForm from './Modules/MasterCRM/AddCRMForm';



const App = () => {
  // const [selectedMenu, setSelectedMenu] = useState(null);

  return (
    <React.Fragment className='App'>
      <Topnavbar  className="top-navbar" />
      {/* Space */}
      <div style={{ height: '10px' }}></div>
      <MasterCRMIndex  />
      <AddCRMForm/>

      
      <Layout/>
    </React.Fragment>
  );
}

export default App;
