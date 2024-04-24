import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './CRM Personal Info.css';


const CRMPersonalInfo = ({ show, handleClose, handleSubmit, formData, handleChange }) => {
    return (

        <Modal show={show} onHide={handleClose} size="xl"> 
            <Modal.Header closeButton>
                <Modal.Title>CRM Personal Info</Modal.Title>
            </Modal.Header>
            <Modal.Body >        
                <div className="top_menu ">
                    <Button variant="btn" style={{ backgroundColor: '#eab676', color: '#fff' }}>
                        Add Personal Info
                    </Button>
                    <Button variant="btn" style={{ backgroundColor: '#eab676', color: '#fff' }}>
                        Contact Info
                    </Button>
                    <Button variant="btn" style={{ backgroundColor: '#eab676', color: '#fff' }}>
                        Educational & Employment Info
                    </Button>
                    <Button variant="btn" style={{ backgroundColor: '#eab676', color: '#fff' }}>
                        Compliance Info
                    </Button>
                    <Button variant="btn" style={{ backgroundColor: '#eab676', color: '#fff' }}>
                        AML Info
                    </Button>
 
                    <Button variant="btn me-2" style={{ backgroundColor: '#eab676', color: '#fff' }} onClick={handleClose}>
                        Marketing Info
                    </Button>
                    <Button variant="btn" style={{ backgroundColor: '#eab676', color: '#fff' }} type="submit" onClick={handleSubmit}>
                        Log
                    </Button>             
                </div>
                <hr className="my-2" style={{ width: '100%' }} />
                <br />
                <div className="container">
                    <h5>Personal Info</h5>
                    <hr className="my-3" style={{ borderWidth: '3px'  }} />
                    <form onSubmit={handleSubmit} className="row">
                        <div className="col-5 offset-1">
                            <div className="form-group ">
                                <label htmlFor="input1" className='form_label'>Consultant Name</label>
                                <select
                                    className="form-select text-center" id="input1" name='input1' >
                                    <option> -- Select FAR --   </option>
                                    <option value="All">All</option>
                                    <option value="Option 1">input 1</option>
                                    <option value="Option 2">input 2</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input2">NRIC Number</label> <br />
                                <input type="text" className="placebox text_bar text-center" id="input2" placeholder="NRIC NUMBER" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="input4" className='form_label'>Salutation</label>
                                <select
                                    className="form-select text-center" id="input4" name='input4' >
                                    <option> -- Select FAR --   </option>
                                    <option value="All">All</option>
                                    <option value="Option 1">input 1</option>
                                    <option value="Option 2">input 2</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input7" className='form_label'>Nationality</label>
                                <select
                                    className="form-select text-center" id="input7" name='input7' >
                                    <option> -- Select FAR --   </option>
                                    <option value="All">All</option>
                                    <option value="Option 1">input 1</option>
                                    <option value="Option 2">input 2</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input8" className='form_label'>Entry Pass</label>
                                <select
                                    className="form-select text-center" id="input8" name='input8' >
                                    <option> -- Select FAR --   </option>
                                    <option value="All">All</option>
                                    <option value="Option 1">input 1</option>
                                    <option value="Option 2">input 2</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-4 offset-1">
                            <div className="form-group">
                                <label htmlFor="input6" className='form_label'>Name(As in NRIC)</label>
                                <select
                                    className="form-select text-center" id="input6" name='input6' >
                                    <option> -- Select FAR --   </option>
                                    <option value="All">All</option>
                                    <option value="Option 1">input 1</option>
                                    <option value="Option 2">input 2</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input3">Preferred Name</label> <br />
                                <input type="text" className="placebox text_bar text-center" id="input3" placeholder="Name (As in NRIC)" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="input5">Country of Residence</label> <br />
                                <input type="text" className="placebox text_bar text-center" id="input5" placeholder="Preferred Name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="input9" className='form_label'>Residence</label>
                                <select
                                    className="form-select text-center" id="input9" name='input9' >
                                    <option> -- Select FAR --   </option>
                                    <option value="All">All</option>
                                    <option value="Option 1">input 1</option>
                                    <option value="Option 2">input 2</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input10" className="form-label">FIN NO</label> <br />
                                <input type="text" className="placebox text_bar  text-center" id="input10" name="input10" placeholder="FIN No" />
                            </div>
                        </div>
                    </form>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <div className="d-flex justify-content-start">
                    <Button variant="btn" style={{ backgroundColor: '#26877c', color: '#fff' }}>
                        Back
                    </Button>
                </div>
                <div className="d-flex justify-content-end">
                    <Button variant="btn me-2" style={{ backgroundColor: '#8c7357', color: '#fff' }} onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="btn" style={{ backgroundColor: '#2061a9', color: '#fff' }} type="submit" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </div>
            </Modal.Footer>

        </Modal>


    );
};
export default CRMPersonalInfo;