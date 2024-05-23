import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Topnavbar from './components/Navbar/Topnavbar';
import './App.css';
import MasterCRMIndex from './Modules/MasterCRM/Master CRM Index';
import Layout from './components/Footer/Footer';
import AddCRMForm from './Modules/MasterCRM/AddCRMForm';
import MasterAccount from './Modules/MasterAccount/MasterAccount';



const App = () => {
  // const [selectedMenu, setSelectedMenu] = useState(null);

  return (
    <React.Fragment className='App'>
     <Topnavbar  className="top-navbar" />
      {/* <MasterCRMIndex  /> */}
      {/* <AddCRMForm/> */}

      <MasterAccount/> 
      <Layout/>
    </React.Fragment>
  );
}

export default App;
