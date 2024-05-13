import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Modal, Button, Table } from 'react-bootstrap';
import AddCRMForm from './AddCRMForm';
import Filter from '../../Modules/MasterCRM/Filter.js';
import './Master CRM Index.css'

const MasterCRMIndex = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [showAddCRMForm, setShowAddCRMForm] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    const handleSave = () => {
        handleCloseModal();
        console.log('Changes saved');
    };

    const handleCloseModal = () => {
        setModalShow(false);
        setInputValue('');
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleAddCRMButtonClick = () => {
        setShowAddCRMForm(true); // Toggle visibility of AddCRMForm
    };

    return (
        <div >
            <div className="container-fluid custom_design p-0">
                <div className="row g-0" style={{ backgroundColor: "#fff", borderBottom: "1px solid #dad7d7", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                    <div className="col-12 d-flex align-items-center">
                        <div className="input-group search-container ps-4">
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
                        <div style={{ paddingRight: '25px' }}>
                            <Button variant="success" onClick={handleAddCRMButtonClick} style={{ fontSize: '0.8rem', padding: '0.6rem 0.5rem', lineHeight: '1', textWrap: 'nowrap' }}>Add CRM</Button>
                        </div>
                        <div style={{ paddingRight: '15px' }}>
                            <Dropdown.Toggle
                                variant="primary"
                                id="filterDropdown"
                                data-bs-toggle="dropstart"
                                aria-expanded="false"
                                onClick={() => setShowFilter(!showFilter)}
                            >
                                <i className="bi bi-funnel-fill" style={{ fontSize: '1.1rem', color: 'white' }}></i>
                            </Dropdown.Toggle>
                            {/* Render Filter component based on showFilter state */}
                            {showFilter && <Filter showFilter={showFilter} setShowFilter={setShowFilter} />}
                        </div>
                    </div>
                </div>
            </div>
            <div className="card p-3">
                {/* Table */}
                <div className="table-responsive text-start">
                    <Table className="table table-bordered" >
                        <thead className='table-bordered'>
                            <tr>
                                <th className="table-header" style={{ width: "3%", textAlign: "left", padding: "8px 16px" }}>FAR Code</th>
                                <th className="table-header" style={{ width: "10%",textAlign: "left", padding: "8px 16px"   }}>FAR Name</th>
                                <th className="table-header" style={{ width: "4%" ,textAlign: "left", padding: "8px 16px"  }}>NRIC No/Passport No/FIN No</th>
                                <th className="table-header" style={{ width: "6%", textAlign: "left", padding: "8px 16px"  }}>NRIC Name/Business Name</th>
                                <th className="table-header" style={{ width: "1%" ,textAlign: "left", padding: "8px 16px"  }}>Actions</th>
                            </tr>
                        </thead>


                        <tbody className="table-body" >
                            {[...Array(12)].map((_, index) => (
                                <tr key={index}>
                                    <td>123456</td>
                                    <td>Financial Alliance Pte Ltd</td>
                                    <td>123-456-789</td>
                                    <td>ThinkBig InfoTech</td>
                                    <td>
                                        <div className='d-flex  align-items-center '>
                                            <Dropdown className='mr-3'>
                                                <Dropdown.Toggle variant='outline-primary' id='dropdown-action' className='no-toggle'>
                                                    Action
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end" className='dropdown-menu' style={{ "--bs-dropdown-min-width": "0rem" }}>
                                                    <ul className="dropdown-menu-list" style={{ padding: "0", width: "100%", listStyleType: "none" }}>
                                                        <li style={{ width: "auto" }}> <Dropdown.Item className="dd-action" style={{ textAlign: "left", padding: "10px 25px", margin: '0' }} href="#">View CRM</Dropdown.Item></li>
                                                        <li style={{ width: "auto" }}> <Dropdown.Item className="dd-action" style={{ textAlign: "left", padding: "10px 25px", margin: '0' }} href="#">Edit</Dropdown.Item></li>
                                                        <li style={{ width: "auto" }}> <Dropdown.Item className="dd-action" style={{ textAlign: "left", padding: "10px 25px", margin: '0' }} href="#">Copy</Dropdown.Item></li>
                                                        <li style={{ width: "auto" }}> <Dropdown.Item className="dd-action" style={{ textAlign: "left", padding: "10px 25px", margin: '0' }} href="#">Account Summary</Dropdown.Item></li>
                                                        <li style={{ width: "auto" }}> <Dropdown.Item className="dd-action" style={{ textAlign: "left", padding: "10px 25px", margin: '0' }} href="#">Log</Dropdown.Item></li>
                                                        <li style={{ width: "auto" }}> <Dropdown.Item className="dd-action" style={{ textAlign: "left", padding: "10px 25px", margin: '0' }} href="#">Delete</Dropdown.Item></li>
                                                        <li style={{ width: "auto" }}> <Dropdown.Item className="dd-action" style={{ textAlign: "left", padding: "10px 25px", margin: '0' }} href="#">View Documents</Dropdown.Item></li>
                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='outline-success' id='dropdown-add-new' className='no-toggle'>
                                                    Add New
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end" className='dropdown-menu' style={{ "--bs-dropdown-min-width": "0rem" }}>
                                                    <ul className="dropdown-menu-list" style={{ padding: "0", width: "100%", listStyleType: "none" }}>
                                                        <li> <Dropdown.Item href="#" className="dd-add-new" style={{ textAlign: "left",  padding: "10px 25px", margin:'0' }}>Life Insurance</Dropdown.Item></li>
                                                        <li> <Dropdown.Item href="#" className="dd-add-new" style={{ textAlign: "left",  padding: "10px 25px", margin:'0' }}>General Insurance</Dropdown.Item></li>
                                                        <li> <Dropdown.Item href="#" className="dd-add-new" style={{ textAlign: "left",  padding: "10px 25px", margin:'0' }}>Group Insurance</Dropdown.Item></li>
                                                        <li> <Dropdown.Item href="#" className="dd-add-new" style={{ textAlign: "left",  padding: "10px 25px", margin:'0' }}>Investment</Dropdown.Item></li>
                                                        <li> <Dropdown.Item href="#" className="dd-add-new" style={{ textAlign: "left",  padding: "10px 25px", margin:'0' }}>Other Services</Dropdown.Item></li>
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
