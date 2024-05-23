import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal, CloseButton } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import './popupform.css';

function Popupform() {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        field1: '',
        field1Dnc: 'No',
        field1Date: '',
        field2: '',
        field2Dnc: 'Yes',
        field2Date: '',
        field3Date: '',
        field4Date: '',
        field5Date: '',
        field6Date: '',
        field7Date: '',
        field8Date: '',
    });
    const handlesave = () => {
        setShow(false);
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const rootElement = document.getElementById('root');
        if (show) {
            rootElement.classList.add('blur-background');
        } else {
            rootElement.classList.remove('blur-background');
        }
    }, [show]);

    const [isFirstContentVisible, setIsFirstContentVisible] = useState(true);
    const [isSecondContentVisible, setIsSecondContentVisible] = useState(true);
    const [isThirdContentVisible, setIsThirdContentVisible] = useState(true);
    const [isFourthContentVisible, setIsFourthContentVisible] = useState(true);

    const toggleFirstContentVisibility = () => setIsFirstContentVisible(!isFirstContentVisible);
    const toggleSecondContentVisibility = (e) => {
        e.preventDefault();
        setIsSecondContentVisible((prevState) => !prevState);
    };
    const toggleThirdContentVisibility = () => setIsThirdContentVisible(!isThirdContentVisible);
    const toggleFourthContentVisibility = () => setIsFourthContentVisible(!isFourthContentVisible);

    const [pepValue, setPepValue] = useState('');

    const handlePepChange = (event) => {
        setPepValue(event.target.value);
        if (event.target.value === 'no') {
            setIsSecondContentVisible(false);
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRadioChange = (fieldName, dateFieldName) => (e) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            [fieldName]: value,
            [dateFieldName]: value === 'Yes' ? new Date().toISOString().split('T')[0] : '',
        });
    };
    const country = [
        {
            value: 'select',
            label: 'Select an Option',
        },
        {
            value: 'single',
            label: 'Singapore',
        },
        {
            value: 'maried',
            label: 'Malaysia',
        },
        {
            value: 'divorced',
            label: 'India',
        },
    ]
    const officer = [
        {
            value: 'select',
            label: 'Select an Option',
        },
        {
            value: 'person1',
            label: 'Faith',
        },
        {
            value: 'person2',
            label: 'Winston',
        },
        {
            value: 'person3',
            label: 'Shanmugam',
        },

    ]

    return (
        <div>
            <Button variant="secondary" onClick={handleShow} style={{ marginBottom: '5px' }}>
                Add New +
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size="xl" style={{
                    width: '74%', maxHeight: '100%', marginLeft: '13%',
                    overflow: 'hidden'
                }}
            >
                <Modal.Header style={{ background: 'linear-gradient(45deg, #1ed7d7, #099e9e)', color: '#fff' }}>
                    <Modal.Title>Compliance</Modal.Title>
                    <CloseButton onClick={() => setShow(false)} aria-label="Close" variant="white" />
                </Modal.Header>
                <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto', overflowX: 'hidden', }}>
                    <div className='content-container'>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <button
                                    className="btn btn-link custom-btn ps-0"
                                    onClick={toggleFirstContentVisibility}
                                    aria-expanded={isFirstContentVisible ? "true" : "false"}
                                    aria-controls="eduInfoContent"
                                >
                                    <i className={`bi bi-caret-${isFirstContentVisible ? 'down' : 'right'}`}></i>
                                    <span className="education-info-text">Accredited Investor(AI)/ Oversea Investor(OI)</span>
                                </button>
                            </div>
                        </div>
                        {isFirstContentVisible && (
                            <div className="row ms-4">
                                <div className='col-2 p-0'>
                                    <div className="dnc-label-container ms-4">
                                        <label className="custom_label">DNC</label>
                                        <div className="radio-buttons" >
                                            <div>
                                                <label htmlFor="yes" className="round-radio">Yes</label>
                                                <input
                                                    type="radio"
                                                    name="field1Dnc"
                                                    value="Yes"
                                                    checked={formData.field1Dnc === 'Yes'}
                                                    onChange={handleRadioChange('field1Dnc', 'field1Date')}
                                                    id="yes"
                                                />
                                            </div>
                                            <div className='p-1'>
                                                <label htmlFor="no" className="round-radio">No</label>
                                                <input
                                                    type="radio"
                                                    id="no"
                                                    name="field1Dnc"
                                                    value="No"
                                                    checked={formData.field1Dnc === 'No'}
                                                    onChange={handleRadioChange('field1Dnc', 'field1Date')}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="effective-date-container col-3 pe-2" style={{marginRight:'100px'}}>
                                    <TextField
                                        id="effective date1"
                                        type="date"
                                        label="Effective Date"
                                        variant="standard"
                                        name="field1Date"
                                        value={formData.field1Date}
                                        onChange={handleInputChange}
                                        style={{ width: "100%", margin: "0px 8px" }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className='col-2 p-0'>
                                    <div className="dnc-label-container ">
                                        <label className="custom_label ms-5">DNC</label>
                                    </div>
                                    <div className="radio-buttons ms-3"  >
                                        <div className='p-2'>
                                            <label htmlFor="yes" className="round-radio">Yes</label>
                                            <input
                                                type="radio"
                                                name="field2Dnc"
                                                value="Yes"
                                                checked={formData.field2Dnc === 'Yes'}
                                                onChange={handleRadioChange('field2Dnc', 'field2Date')}
                                                id="yes2"
                                            />
                                        </div>
                                        <div className='p-2'>
                                            <label htmlFor="no" className="round-radio">No</label>
                                            <input
                                                type="radio"
                                                id="no"
                                                name="field2Dnc"
                                                value="No"
                                                checked={formData.field2Dnc === 'No'}
                                                onChange={handleRadioChange('field2Dnc', 'field2Date')}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 p-0 mt-2 pe-4">
                                    <TextField
                                        id="country"
                                        select
                                        label="Country"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="standard"
                                        style={{ width: "100%", margin: "0px 8px" }} onChange={handleInputChange}
                                        inputProps={{
                                            style: { paddingLeft: "0px" },
                                        }}
                                    >
                                        {country.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                            </div>


                        )}
                    </div>
                    <div className='content-container'>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <button
                                    className="btn btn-link custom-btn ps-0"
                                    onClick={toggleSecondContentVisibility}
                                    aria-expanded={isSecondContentVisible ? "true" : "false"}
                                    aria-controls="AddressContent"
                                >
                                    <i className={`bi bi-caret-${isSecondContentVisible ? 'down' : 'right'}`}></i>
                                    <span className="contact-info-text m-0">Political Exposed Person(PEP)</span>
                                </button>
                                <span className="mx-2">
                                    <label htmlFor="pep-yes" style={{ marginRight: '10px' }}>YES</label>
                                    <input
                                        type="radio"
                                        id="pep-yes"
                                        name="pep"
                                        value="yes" style={{ marginRight: '10px' }}
                                        onChange={() => {
                                            setPepValue('yes');
                                            setIsSecondContentVisible(true);
                                        }}
                                    />
                                    <label htmlFor="pep-no" style={{ marginRight: '10px' }}>NO</label>
                                    <input
                                        type="radio"
                                        id="pep-no"
                                        name="pep"
                                        value="no" defaultChecked
                                        onChange={handlePepChange}
                                    />
                                </span>
                            </div>
                        </div>
                        {isSecondContentVisible && pepValue === 'yes' && (
                            <div className='row ms-4'>
                                <div className='col-6'>
                                    <TextField
                                        id="full name"
                                        type="search"
                                        label="Full Name"
                                        variant="standard"
                                        placeholder='Enter Full Name'
                                        style={{ width: "80%", margin: "6px 8px" }}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='col-6'>
                                    <TextField
                                        id="relationship to client"
                                        type="search"
                                        label="Relationship to Client"
                                        variant="standard"
                                        placeholder='Enter Relationship to Client'
                                        style={{ width: "80%", margin: "6px 8px" }}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='col-6'>
                                    <TextField
                                        id="prominent"
                                        type="search"
                                        label="Prominent"
                                        variant="standard"
                                        placeholder='Enter Prominent'
                                        style={{ width: "80%", margin: "6px 8px" }}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='col-6'>
                                    <TextField
                                        id="country"
                                        select
                                        label="Country"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="standard"
                                        style={{ width: "80%", margin: "6px 8px" }}
                                        onChange={handleInputChange}
                                        inputProps={{
                                            style: { paddingLeft: "0px" },
                                        }}
                                    >
                                        {country.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='content-container'>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <button
                                    className="btn btn-link custom-btn ps-0"
                                    onClick={toggleThirdContentVisibility}
                                    aria-expanded={isThirdContentVisible ? "true" : "false"}
                                    aria-controls="eduInfoContent"
                                >
                                    <i className={`bi bi-caret-${isThirdContentVisible ? 'down' : 'right'}`}></i>
                                    <span className="education-info-text">Accredited Investor(AI)/ Oversea Investor(OI)</span>
                                </button>
                            </div>
                        </div>
                        {isThirdContentVisible && (
                            <div>
                                <div className='row ms-4'>
                                    <div className='col-5' style={{paddingRight:'25px'}}>
                                        <TextField
                                            id="cdd date of search"
                                            type="date"
                                            label="CDD Date of Search"
                                            variant="standard"
                                            name="field3Date"
                                            value={formData.field3Date}
                                            onChange={handleInputChange}
                                            style={{ width: "100%", margin: "6px 8px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            id="cdd date of verify"
                                            type="date"
                                            label="CDD Date of Verification"
                                            variant="standard"
                                            name="field4Date"
                                            value={formData.field4Date}
                                            onChange={handleInputChange}
                                            style={{ width: "100%", margin: "6px 8px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            id="cdd officer-in-charge"
                                            select
                                            label="CDD Officer-in-Charge"
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="standard"
                                            style={{ width: "100%", margin: "6px 8px" }} onChange={handleInputChange}
                                            inputProps={{
                                                style: { paddingLeft: "0px" },
                                            }}
                                        >
                                            {officer.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                    <div className='col-5 offset-1'style={{paddingRight:'25px'}}>
                                        <TextField
                                            id="cdd number of hits"
                                            type="search"
                                            label="CDD Number of Hits"
                                            variant="standard"
                                            placeholder='Building'
                                            style={{ width: "100%", margin: "6px 8px" }} onChange={handleInputChange}
                                        />
                                        <TextField
                                            id="cdd outcomes"
                                            select
                                            label="CDD Outcomes"
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="standard"
                                            style={{ width: "100%", margin: "6px 8px" }} onChange={handleInputChange}
                                            inputProps={{
                                                style: { paddingLeft: "0px" },
                                            }}
                                        >
                                            {officer.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                        <TextField
                                            id="cdd check dept"
                                            select
                                            label="CDD Check Dept"
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="standard"
                                            style={{ width: "100%", margin: "6px 8px" }} onChange={handleInputChange}
                                            inputProps={{
                                                style: { paddingLeft: "0px" },
                                            }}
                                        >
                                            {officer.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                </div>
                                <div className='row mt-2 ' style={{ width: '91%', marginLeft:'45px' }}>
                                    <TextField className="col-10 mb-3" id="remarks"
                                        label="Remarks" placeholder='Enter Remarks Here...' multiline rows={3} style={{ width: "96%", height: "100px" }}
                                        value={formData.remarks} onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='content-container'>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <button
                                    className="btn btn-link custom-btn ps-0"
                                    onClick={toggleFourthContentVisibility}
                                    aria-expanded={isFourthContentVisible ? "true" : "false"}
                                    aria-controls="eduInfoContent"
                                >
                                    <i className={`bi bi-caret-${isFourthContentVisible ? 'down' : 'right'}`}></i>
                                    <span className="education-info-text">Accredited Investor(AI)/ Oversea Investor(OI)</span>
                                </button>
                            </div>
                        </div>
                        {isFourthContentVisible && (
                            <div>
                                <div className='row ms-4'>
                                    <div className='col-5 me-2'>
                                        <TextField
                                            id="ecdd date of search"
                                            type="date"
                                            label="ECDD Date of Search"
                                            variant="standard"
                                            name="field5Date"
                                            value={formData.field5Date}
                                            onChange={handleInputChange}
                                            style={{ width: "100%", margin: "6px 8px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            id="ecdd outcome"
                                            select
                                            label="ECDD Outcome"
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="standard"
                                            style={{ width: "100%", margin: "6px 8px" }} onChange={handleInputChange}
                                            inputProps={{
                                                style: { paddingLeft: "0px" },
                                            }}
                                        >
                                            {officer.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                        <TextField
                                            id="ecdd approved date"
                                            type="date"
                                            label="ECDD Approved Date"
                                            variant="standard"
                                            name="field6Date"
                                            value={formData.field6Date}
                                            onChange={handleInputChange}
                                            style={{ width: "100%", margin: "6px 8px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            id="ecdd date of reporting"
                                            type="date"
                                            label="ECDD Date of Reporting"
                                            variant="standard"
                                            name="field7Date"
                                            value={formData.field7Date}
                                            onChange={handleInputChange}
                                            style={{ width: "100%", margin: "6px 8px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            id="ecdd officer-in-charge"
                                            select
                                            label="ECDD Officer-in-Charge"
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="standard"
                                            style={{ width: "100%", margin: "6px 8px" }} onChange={handleInputChange}
                                            inputProps={{
                                                style: { paddingLeft: "0px" },
                                            }}
                                        >
                                            {officer.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                    <div className='col-5 offset-1'style={{paddingRight:'25px'}}>
                                        <TextField
                                            id="ecdd date of Verification"
                                            type="date"
                                            label="ECDD Date of Verification"
                                            variant="standard"
                                            name="field8Date"
                                            value={formData.field8Date}
                                            onChange={handleInputChange}
                                            style={{ width: "100%", margin: "6px 8px" }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <div className='mt-2 ms-2'>
                                            <label>ECDD Reporting Outcome</label>
                                            <div className='ms-5'>
                                                <label className='me-4'>
                                                    <input
                                                        type="radio"
                                                        name="ecddOutcome"
                                                        value="Yes"
                                                        checked={formData.ecddOutcome === 'Yes'}
                                                        onChange={handleInputChange}
                                                        style={{ marginRight: '5px' }}
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="ecddOutcome"
                                                        value="No"
                                                        checked={formData.ecddOutcome === 'No'}
                                                        onChange={handleInputChange} style={{ marginRight: '5px' }}
                                                    />
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        <div className='mt-2 ms-2 mb-2'>
                                            <label>ECDD Check Dept</label>
                                            <div className='ms-5'>
                                                <label className='me-4'>
                                                    <input
                                                        type="radio"
                                                        name="ecddCheckDept"
                                                        value="Yes"
                                                        checked={formData.ecddCheckDept === 'Yes'}
                                                        onChange={handleInputChange} style={{ marginRight: '5px' }}
                                                    />
                                                    Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="ecddCheckDept"
                                                        value="No"
                                                        checked={formData.ecddCheckDept === 'No'}
                                                        onChange={handleInputChange} style={{ marginRight: '5px' }}
                                                    />
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        <TextField
                                            id="ecdd reporting outcome"
                                            select
                                            label="ECDD Reporting Outcome"
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="standard"
                                            style={{ width: "100%", margin: "6px 8px" }} onChange={handleInputChange}
                                            inputProps={{
                                                style: { paddingLeft: "0px" },
                                            }}
                                        >
                                            {officer.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                        <TextField
                                            id="ecdd check dept"
                                            select
                                            label="ECDD Check Dept"
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="standard"
                                            style={{ width: "100%", margin: "6px 8px" }} onChange={handleInputChange}
                                            inputProps={{
                                                style: { paddingLeft: "0px" },
                                            }}
                                        >
                                            {officer.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                </div>
                                <div className='row  mt-1' style={{ width: '92%', marginLeft:'40px' }}>
                                    <TextField className="col-10 mb-3" id="remarks"
                                        label="ECDD Additional Comments" placeholder='Enter ECDD Additional Comments...' multiline rows={3} style={{ width: "96%", height: "100px" }}
                                        value={formData.remarks} onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        )}
                    </div> <br />
                </Modal.Body>
                <Modal.Footer style={{ position: 'sticky', bottom: 0, zIndex: 999 }}>
                    <Button variant="outline-danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-primary" onClick={handlesave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}

export default Popupform;
