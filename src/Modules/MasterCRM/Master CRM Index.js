import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Modal, Button, Table } from 'react-bootstrap';
import AddCRMForm from './AddCRMForm';

const MasterCRMIndex = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [showAddCRMForm, setShowAddCRMForm] = useState(false);

    // const handleMenuClick = (menuItem) => {
    //     setSelectedMenuItem(menuItem);
    //     setInputValue('');
    //     setModalShow(true);
    // };

    const handleSave = () => {
        handleCloseModal();
        console.log('Changes saved');
    };

    // const handleAddCRM = () => {
    //     // Implement functionality to add CRM
    //     console.log('Add CRM button clicked');
    // };

    const handleCloseModal = () => {
        setModalShow(false);
        setInputValue('');
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
        // Implement your search logic here if needed
    };

    // const handleSearch = () => {
    //     // Implement your search functionality here
    //     console.log('Searching for:', searchValue);
    // };

    const handleFilterMenuClick = (filterOption) => {
        setSelectedMenuItem(filterOption);
        setModalShow(true);
    };

    const handleAddCRMButtonClick = () => {
        setShowAddCRMForm(true); // Toggle visibility of AddCRMForm
    };

    return (

        <div >
            <div className='container-fluid'>
                <div className='row g-0' style={{ backgroundColor: "#fff", borderBottom: "1px solid #dad7d7", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                    <div className='col-xl-3'>
                        <h6 className="align-self-start ms-3 mt-2">Master CRM Info</h6>
                    </div>
                    <div className="col-xl-9 d-flex justify-content-end align-items-center">
                        <div className="col-xl-2 offset-xl-5 mr-3 input-group">
                            <div className="search-container">
                                <div style={{ position: "relative" }}>
                                    <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "10px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8" />
                                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        className="search-input"
                                        placeholder="Type a Keyword..."
                                        value={searchValue}
                                        onChange={handleSearchChange}
                                        style={{ border: "1px solid #000", borderRadius: "5px", color: "black", paddingLeft: "30px", width: "100%" }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-1 p-0'>
                            <Button variant='success p-2 mt-1 mb-1' onClick={handleAddCRMButtonClick}>Add CRM</Button>
                        </div>
                        <div className='col-xl-1 p-0'>
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="primary mt-1 mb-1"
                                    id="filterDropdown"
                                    data-bs-toggle="dropstart"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-funnel-fill" style={{ fontSize: '1.1rem', color: 'white' }}></i>
                                </Dropdown.Toggle>
                                <div className='mr-5' style={{ paddingLeft: "40px" }}>
                                    <Dropdown.Menu style={{ marginLeft: "-8rem" }}>
                                        <Dropdown.Item disabled>Filter By:</Dropdown.Item>
                                        <Dropdown.Item className="mb-2" onClick={() => handleFilterMenuClick('Search By Consultant')}>
                                            Search By Consultant
                                        </Dropdown.Item>
                                        <Dropdown.Item className="mb-2" onClick={() => handleFilterMenuClick('Client Name')}>
                                            Client Name
                                        </Dropdown.Item>
                                        <Dropdown.Item className="mb-2" onClick={() => handleFilterMenuClick('NRIC Number')}>
                                            NRIC Number
                                        </Dropdown.Item>
                                        <Dropdown.Item className="mb-2" onClick={() => handleFilterMenuClick('Passport Number')}>
                                            Passport Number
                                        </Dropdown.Item>
                                        <Dropdown.Item className="mb-2" onClick={() => handleFilterMenuClick('FIN Number')}>
                                            FIN Number
                                        </Dropdown.Item>
                                        <Dropdown.Item className="mb-2" onClick={() => handleFilterMenuClick('Client ID')}>
                                            Client ID
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>

            {/* Space */}
            <div style={{ height: '20px' }}></div>

            <div className="card p-3">
                {/* Table */}
                <div className="table-responsive text-center">
                    <Table className="table table-bordered" striped>
                        <thead>
                            <tr>
                                <th>FAR Code</th>
                                <th>FAR Name</th>
                                <th>NRIC No/Passport No/FIN No</th>
                                <th>NRIC Name/Business Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(10)].map((_, index) => (
                                <tr key={index}>
                                    <td>123456</td>
                                    <td>FAR Name {index + 1}</td>
                                    <td>123-456-789</td>
                                    <td>ThinkBig InfoTech</td>
                                    <td>
                                        <div className='d-flex justify-content-center align-items-center '>
                                            <Dropdown className='mr-3'>
                                                <Dropdown.Toggle variant='outline-primary' id='dropdown-action' className='no-toggle'>
                                                    Action
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end" className='dropdown-menu' style={{ "--bs-dropdown-min-width": "0rem" }}>
                                                    <ul className="dropdown-menu-list" style={{ padding: "0", width: "100%" }}>
                                                        <li style={{ width: "auto" }}> <Dropdown.Item style={{ textAlign: "center", padding: "0" }} href="#">View CRM</Dropdown.Item></li>
                                                        <li style={{ width: "auto" }}> <Dropdown.Item style={{ textAlign: "center", padding: "0" }} href="#">Edit</Dropdown.Item></li>
                                                        <li style={{ width: "auto" }}> <Dropdown.Item style={{ textAlign: "center", padding: "0" }} href="#">Copy</Dropdown.Item></li>
                                                        <li style={{ width: "auto" }}> <Dropdown.Item style={{ textAlign: "center", padding: "0" }} href="#">Account Summary</Dropdown.Item></li>
                                                        <li style={{ width: "auto" }}> <Dropdown.Item style={{ textAlign: "center", padding: "0" }} href="#">Log</Dropdown.Item></li>
                                                        <li style={{ width: "auto" }}> <Dropdown.Item style={{ textAlign: "center", padding: "0" }} href="#">Delete</Dropdown.Item></li>
                                                        <li style={{ width: "auto" }}> <Dropdown.Item style={{ textAlign: "center", padding: "0" }} href="#">View Documents</Dropdown.Item></li>
                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='outline-success' id='dropdown-add-new' className='no-toggle'>
                                                    Add New
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end" className='dropdown-menu' style={{ "--bs-dropdown-min-width": "0rem" }}>
                                                    <ul className="dropdown-menu-list" style={{ padding: "0", width: "100%" }}>
                                                        <li> <Dropdown.Item href="#" style={{ textAlign: "center", padding: "0" }}>Life Insurance</Dropdown.Item></li>
                                                        <li> <Dropdown.Item href="#" style={{ textAlign: "center", padding: "0" }}>General Insurance</Dropdown.Item></li>
                                                        <li> <Dropdown.Item href="#" style={{ textAlign: "center", padding: "0" }}>Group Insurance</Dropdown.Item></li>
                                                        <li> <Dropdown.Item href="#" style={{ textAlign: "center", padding: "0" }}>Investment</Dropdown.Item></li>
                                                        <li> <Dropdown.Item href="#" style={{ textAlign: "center", padding: "0" }}>Other Services</Dropdown.Item></li>
                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>

          

            <Modal show={modalShow} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedMenuItem}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter the value"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        style={{ border: '1px solid #ced4da', borderRadius: '0.5rem', color: "black" }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="btn" style={{ backgroundColor: '#8c7357', color: '#fff' }} onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="btn" style={{ backgroundColor: '#2061a9', color: '#fff' }} onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

{/* Add CRM Form */}
             <AddCRMForm show={showAddCRMForm} setShowAddCRMForm={setShowAddCRMForm} />

        </div>
    );
};

export default MasterCRMIndex;
