import React, { useState, useEffect } from 'react';
import { Modal, Button, Tabs, Tab } from 'react-bootstrap';
import './AddCRMForm.css';


const AddCRMForm = ({ show, setShowAddCRMForm }) => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '',
        field6Dnc: 'No',
        field6Date: '',
        field7: '',
        field7Dnc: 'No',
        field7Date: '',
        field8: '',
        field8Dnc: 'No',
        field8Date: '',
        field9: '',
        field9Dnc: 'No',
        field9Date: '',
        field10: '',
        field10Dnc: 'No',
        field10Date: '',
        phoneNumber: '',
        countryCode: ''
        // Add more fields as needed for each step
    });

    // Define your step names array
    const stepNames = [
        "Add Personal Info",
        "Contact Info",
        "Edu & Emp Info",
        "Compliance Info",
        "AML Info",
        "Marketing Info",
        "Log"
    ];


    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleSaveAndNext = () => {
        if (step < 7) {
            setStep(step + 1);
        }
    };

    const handleSave = () => {
        // Implement functionality to save the form data
        // For demonstration purposes, just closing the modal
        setShowAddCRMForm(false);
    };

    const handleStepClick = (nextStep) => {
        if (step < nextStep) {
            setStep(nextStep);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleBackButtonClick = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };
    const handlePhoneNumberChange = (event) => {
        const { name, value } = event.target;

        // Validate if the input is numeric
        if (/^\d*$/.test(value) || value === '') {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };
    const handleRadioChange = (fieldName, dateFieldName) => (e) => {
        e.stopPropagation();
        const { value } = e.target;
        setFormData({
            ...formData,
            [fieldName]: value,
            [dateFieldName]: value === 'Yes' ? new Date().toISOString().split('T')[0] : '', // Set current date if 'Yes' is selected
        });
    };

    useEffect(() => {
        // Set initial state of the date field based on the default value of 'field6Dnc'
        const defaultDate = formData.field6Dnc === 'Yes' ? new Date().toISOString().split('T')[0] : '';
        setFormData(prevState => ({
            ...prevState,
            field6Date: defaultDate,
        }));
    }, [formData.field6Dnc]);


    const [isFirstContentVisible, setIsFirstContentVisible] = useState(true);
    const [isSecondContentVisible, setIsSecondContentVisible] = useState(true);
    const [isLocalAddressVisible, setIsLocalAddressVisible] = useState(false);
    const [isOverseasAddressVisible, setIsOverseasAddressVisible] = useState(false);
    const [isMailingAddressVisible, setIsMailingAddressVisible] = useState(false);

    const toggleFirstContentVisibility = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFirstContentVisible(!isFirstContentVisible);
    };
    const toggleSecondContentVisibility = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSecondContentVisible(!isSecondContentVisible);
    };
    const toggleLocalAddressVisibility = () => {
        setIsLocalAddressVisible(!isLocalAddressVisible);
    };
    const toggleOverseasAddressVisibility = () => {
        setIsOverseasAddressVisible(!isOverseasAddressVisible);
    };
    const toggleMailingAddressVisibility = () => {
        setIsMailingAddressVisible(!isMailingAddressVisible);
    };


    const isField3Required = () => {
        return formData.field1 !== '' && formData.field2 === '';
    };
    const renderStepContent = () => {

        switch (step) {
            case 1:
                return (
                    <form className='text-center mt-4'>
                        <div className="row">
                            <div className="col-xl-6">
                                <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                    {/* First column of form fields */}
                                    <li className="mb-3" id="field1">
                                        <label className='custom_label'>Consultant Name</label>
                                        <input type="text" placeholder="Enter Consultant Name" name="field1" value={formData.field1} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field2">
                                        <label className='custom_label'>NRIC Number</label>
                                        <input type="text" placeholder="Enter NRIC Number" name="field2" value={formData.field2} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field3">
                                        <label className='custom_label'>Name(As in NRIC)<span className="text-danger">*</span></label>
                                        <input type="text" placeholder="Enter Name(As in NRIC)" name="field3" value={formData.field3} onChange={handleInputChange} className={`custom-input ${formData.field3 === '' ? 'required' : ''}`} required />
                                    </li>
                                    <li className="mb-3" id="field4">
                                        <label className='custom_label'>Salutation</label>
                                        <select name="field4" value={formData.field4} onChange={handleInputChange} className="custom-input">
                                            <option value="" >Select an Option</option>
                                            <option value="Mr.">Mr.</option>
                                            <option value="Ms.">Ms.</option>
                                            <option value="Mrs.">Mrs.</option>
                                        </select>
                                    </li>
                                    <li className="mb-3" id="field10">
                                        <label className='custom_label'>DOB</label>
                                        <input
                                            type="date" style={{ width: "50%" }}
                                            placeholder="Select DOB"
                                            name="field10"
                                            value={formData.field10}
                                            onChange={handleInputChange}
                                            className="custom-input"
                                        />
                                    </li>

                                    <li className="mb-3" id="field6">
                                        <label className='custom_label'>Preferred Language</label>
                                        <select name="field6" value={formData.field6} onChange={handleInputChange} className="custom-input">
                                            <option value=" ">Select an Option</option>
                                            <option value="English">English</option>
                                            <option value="Spanish">Spanish</option>
                                            <option value="French">French</option>
                                            <option value="German">German</option>
                                            <option value="Chinese">Chinese</option>
                                        </select>
                                    </li>
                                    <li className="mb-3" id="field4">
                                        <label className='custom_label'>Religion</label>
                                        <select name="field4" value={formData.field4} onChange={handleInputChange} className="custom-input">
                                            <option value="" >Select an Option</option>
                                            <option value="Mr.">Hinduism</option>
                                            <option value="Ms.">Islam</option>
                                            <option value="Mrs.">Christianity</option>
                                            <option value="Mrs.">Catholic</option>
                                            <option value="Mrs.">Other Religions</option>
                                        </select>
                                    </li>
                                    <li className="mb-3" id="field7">
                                        <label className='custom_label'>CRM Status</label>
                                        <select name="field7" value={formData.field7} onChange={handleInputChange} className="custom-input">
                                            <option value="">Select an Option</option>
                                            <option value="Mr.">Active</option>
                                            <option value="Ms.">Archived(Client Request)</option>
                                            <option value="Mrs.">Archived(far Request)</option>
                                            <option value="Mr.">Inactive</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-6">
                                <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                    {/* Second column of form fields */}
                                    <li className="mb-3" id="field8">
                                        <label className='custom_label'>Entry Pass</label>
                                        <select name="field8" value={formData.field8} onChange={handleInputChange} className="custom-input">
                                            <option value="">Select an Option</option>
                                            <option value="Long-term visit pass">Long-term visit pass</option>
                                            <option value="Student's pass">Student's pass</option>
                                            <option value="Singapore Permanent resident">Singapore Permanent resident</option>
                                            <option value="Not Applicable">Not Applicable</option>
                                            <option value="Employment Pass">Employment Pass</option>
                                            <option value="Work permit">Work permit</option>
                                            <option value="S-pass">S-pass</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </li>
                                    <li className="mb-3" id="field9">
                                        <label className='custom_label'>FIN No</label>
                                        <input type="text" placeholder="Enter FIN Number" name="field9" value={formData.field9} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field9">
                                        <label className='custom_label'>Passport No</label>
                                        <input type="text" placeholder="Enter Passport Number" name="field9" value={formData.field9} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field5">
                                        <label className='custom_label'>Preferred Name</label>
                                        <input type="text" placeholder="Enter Preferred Name" name="field5" value={formData.field5} onChange={handleInputChange} className="custom-input" />
                                    </li>

                                    <li className="mb-3" id="field11">
                                        <label className='custom_label'>Gender</label>
                                        <select name="field11" value={formData.field11} onChange={handleInputChange} className="custom-input">
                                            <option value="">Select an Option</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </li>
                                    <li className="mb-3" id="field12">
                                        <label className='custom_label'>Marital Status</label>
                                        <select name="field12" value={formData.field12} onChange={handleInputChange} className="custom-input">
                                            <option value="">Select an Option</option>
                                            <option value="Single">Single</option>
                                            <option value="Married">Married</option>
                                            <option value="Divorced">Divorced</option>
                                            <option value="Widowed">Widowed</option>
                                        </select>
                                    </li>
                                    <li className="mb-3" id="remarks">
                                        <label className='custom_label'>Remarks</label>
                                        <textarea placeholder="Enter Remarks" name="remarks" value={formData.remarks} onChange={handleInputChange} className="custom-input remark_box"></textarea>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                );
            case 2:
                return (
                    <form className='text-center mt-4'>
                        <div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <button
                                        className="btn btn-link custom-btn"
                                        onClick={toggleFirstContentVisibility}
                                        aria-expanded={isFirstContentVisible ? "true" : "false"}
                                        aria-controls="contInfoContent"
                                    >
                                        <i className={`bi bi-caret-${isFirstContentVisible ? 'down' : 'right'}`}></i>
                                        <span className="contact-info-text">Contact Info</span>
                                    </button>
                                </div>
                                <hr style={{ borderTop: '1px solid black', width: '87%', marginBottom: '0.5rem' }} />
                            </div>
                            {isFirstContentVisible && (
                                <div className="row">
                                    <div className="col-xl-6">
                                        <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                            {/* First column of form fields */}
                                            <li className="mb-3" id="field1">
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <label className='custom_label'>Primary Contact (HP)</label>
                                                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>

                                                        <select
                                                            name="primaryCountryCode"
                                                            value={formData.primaryCountryCode}
                                                            onChange={handleInputChange}
                                                            className="custom-input"
                                                            style={{ paddingRight: '20px' }}
                                                        >
                                                            <option value="" disabled >Select an option</option>
                                                            <option value="Singapore">Singapore(+65)</option>
                                                            <option value="India">India(+91)</option>
                                                            <option value="Canada">Canada(+1)</option>
                                                            <option value="Malaysia">Malaysia(+60)</option>
                                                            <option value="United Kingdom">United Kingdom(+44)</option>
                                                        </select>

                                                        <input
                                                            type="text" pattern="[0-9]*"
                                                            placeholder="Enter phone number"
                                                            name="primaryphoneNumber"
                                                            value={formData.primaryphoneNumber}
                                                            onChange={handlePhoneNumberChange}
                                                            className="custom-input"
                                                            style={{ marginLeft: '10px' }}
                                                        />
                                                    </div>
                                                </div>

                                            </li>
                                            <li className="mb-3" id="field2">
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <label className='custom_label' style={{ width: "50%" }}>Secondary Contact (HP)</label>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <select
                                                            name="secondaryCountryCode"
                                                            value={formData.secondaryCountryCode}
                                                            onChange={handleInputChange}
                                                            className="custom-input"
                                                        >
                                                            <option value="" disabled >Select an option</option>
                                                            <option value="Singapore">Singapore(+65)</option>
                                                            <option value="India">India(+91)</option>
                                                            <option value="Canada">Canada(+1)</option>
                                                            <option value="Malaysia">Malaysia(+60)</option>
                                                            <option value="United Kingdom">United Kingdom(+44)</option>
                                                        </select>
                                                        <input
                                                            type="text" pattern="[0-9]*"
                                                            placeholder="Enter phone number"
                                                            name="secondaryphoneNumber"
                                                            value={formData.secondaryphoneNumber}
                                                            onChange={handlePhoneNumberChange}
                                                            className="custom-input"
                                                            style={{ marginLeft: '10px' }}
                                                        />
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="mb-3" id="field3">
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <label className='custom_label'>Home Contact</label>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <select
                                                            name="homeCountryCode"
                                                            value={formData.homeCountryCode}
                                                            onChange={handleInputChange}
                                                            className="custom-input"
                                                        >
                                                            <option value="" disabled >Select an option</option>
                                                            <option value="Singapore">Singapore(+65)</option>
                                                            <option value="India">India(+91)</option>
                                                            <option value="Canada">Canada(+1)</option>
                                                            <option value="Malaysia">Malaysia(+60)</option>
                                                            <option value="United Kingdom">United Kingdom(+44)</option>
                                                        </select>
                                                        <input
                                                            type="text" pattern="[0-9]*"
                                                            placeholder="Enter phone number"
                                                            name="homephoneNumber"
                                                            value={formData.homephoneNumber}
                                                            onChange={handlePhoneNumberChange}
                                                            className="custom-input"
                                                            style={{ marginLeft: '10px' }}
                                                        />
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="mb-3" id="field4">
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <label className='custom_label'>Office Contact</label>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <select
                                                            name="officeCountryCode"
                                                            value={formData.officeCountryCode}
                                                            onChange={handleInputChange}
                                                            className="custom-input"
                                                        >
                                                            <option value="" disabled  >Select an option</option>
                                                            <option value="Singapore">Singapore(+65)</option>
                                                            <option value="India">India(+91)</option>
                                                            <option value="Canada">Canada(+1)</option>
                                                            <option value="Malaysia">Malaysia(+60)</option>
                                                            <option value="United Kingdom">United Kingdom(+44)</option>
                                                        </select>

                                                        <input
                                                            type="text" pattern="[0-9]*"
                                                            placeholder="Enter phone number"
                                                            name="officephoneNumber"
                                                            value={formData.officephoneNumber}
                                                            onChange={handlePhoneNumberChange}
                                                            className="custom-input"
                                                            style={{ marginLeft: '10px' }}
                                                        />
                                                    </div>
                                                </div>
                                            </li>

                                            <span id="field5" >
                                                <label htmlFor="primaryEmailAddress" className='custom-label'>Primary Email Address</label> <br />
                                                <input type="text" id="primaryEmailAddress" name="primaryEmailAddress" placeholder="Ex: test@123.com" className='custom_change' />
                                            </span>


                                        </ul>
                                    </div>
                                    <div className="col-xl-6" style={{ paddingLeft: "80px" }}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                                    {/* First form field */}
                                                    <li className="mb-3" id="field6">
                                                        <div>
                                                            <label className='custom_label'>DNC</label>

                                                            <label htmlFor="yes" className="round-radio">Yes</label>
                                                            <input
                                                                type="radio"
                                                                name="field6Dnc"
                                                                value="Yes"
                                                                checked={formData.field6Dnc === 'Yes'}
                                                                onChange={handleRadioChange('field6Dnc', 'field6Date')} // Change function name to handleRadioChange
                                                                id="yes"
                                                            />
                                                            <label htmlFor="no" className="round-radio">No</label>
                                                            <input
                                                                type="radio"
                                                                id="no"
                                                                name="field6Dnc"
                                                                value="No"
                                                                checked={formData.field6Dnc === 'No'}
                                                                onChange={handleRadioChange('field6Dnc', 'field6Date')} // Change function name to handleRadioChange
                                                            />
                                                        </div>
                                                        <div className="calendar-placeholder ml-5">
                                                            <label className='custom_label'>Effective Date</label>
                                                            <input
                                                                type="date"
                                                                placeholder="Effective Date"
                                                                name="field6Date"
                                                                value={formData.field6Date}
                                                                onChange={handleInputChange}
                                                                className="custom-input"
                                                            />
                                                        </div>
                                                    </li>
                                                    {/* Second form field */}
                                                    <li className="mb-3" id="field7">
                                                        <div>
                                                            <label className='custom_label'>DNC</label>

                                                            <label htmlFor="yes2" className="round-radio">Yes</label>
                                                            <input
                                                                type="radio"
                                                                name="field7Dnc"
                                                                value="Yes"
                                                                checked={formData.field7Dnc === 'Yes'}
                                                                onChange={handleRadioChange('field7Dnc', 'field7Date')} // Change function name to handleRadioChange
                                                                id="yes2"
                                                            />
                                                            <label htmlFor="no2" className="round-radio">No</label>
                                                            <input
                                                                type="radio"
                                                                id="no2"
                                                                name="field7Dnc"
                                                                value="No"
                                                                checked={formData.field7Dnc === 'No'}
                                                                onChange={handleRadioChange('field7Dnc', 'field7Date')} // Change function name to handleRadioChange
                                                            />
                                                        </div>
                                                        <div className="calendar-placeholder ml-5 ">
                                                            <label className='custom_label'>Effective Date</label>
                                                            <input
                                                                type="date"
                                                                placeholder="Select date"
                                                                name="field7Date"
                                                                value={formData.field7Date}
                                                                onChange={handleInputChange}
                                                                className="custom-input"
                                                            />
                                                        </div>
                                                    </li>
                                                    <li className="mb-3" id="field8">
                                                        <div>
                                                            <label className='custom_label'>DNC</label>

                                                            <label htmlFor="yes3" className="round-radio">Yes</label>
                                                            <input
                                                                type="radio"
                                                                name="field8Dnc"
                                                                value="Yes"
                                                                checked={formData.field8Dnc === 'Yes'}
                                                                onChange={handleRadioChange('field8Dnc', 'field8Date')} // Change function name to handleRadioChange
                                                                id="yes3"
                                                            />
                                                            <label htmlFor="no3" className="round-radio">No</label>
                                                            <input
                                                                type="radio"
                                                                id="no3"
                                                                name="field8Dnc"
                                                                value="No"
                                                                checked={formData.field8Dnc === 'No'}
                                                                onChange={handleRadioChange('field8Dnc', 'field8Date')} // Change function name to handleRadioChange
                                                            />
                                                        </div>
                                                        <div className="calendar-placeholder ml-5">
                                                            <label className='custom_label'>Effective Date</label>
                                                            <input
                                                                type="date"
                                                                placeholder="Select date"
                                                                name="field8Date"
                                                                value={formData.field8Date}
                                                                onChange={handleInputChange}
                                                                className="custom-input"
                                                            />
                                                        </div>
                                                    </li>
                                                    <li className="mb-3" id="field9">
                                                        <div>
                                                            <label className='custom_label'>DNC</label>

                                                            <label htmlFor="yes4" className="round-radio">Yes</label>
                                                            <input
                                                                type="radio"
                                                                name="field9Dnc"
                                                                value="Yes"
                                                                checked={formData.field9Dnc === 'Yes'}
                                                                onChange={handleRadioChange('field9Dnc', 'field9Date')} // Change function name to handleRadioChange
                                                                id="yes4"
                                                            />
                                                            <label htmlFor="no4" className="round-radio">No</label>
                                                            <input
                                                                type="radio"
                                                                id="no4"
                                                                name="field9Dnc"
                                                                value="No"
                                                                checked={formData.field9Dnc === 'No'}
                                                                onChange={handleRadioChange('field9Dnc', 'field9Date')} // Change function name to handleRadioChange
                                                            />
                                                        </div>
                                                        <div className="calendar-placeholder ml-5">
                                                            <label className='custom_label'>Effective Date</label>
                                                            <input
                                                                type="date"
                                                                placeholder="Select date"
                                                                name="field9Date"
                                                                value={formData.field9Date}
                                                                onChange={handleInputChange}
                                                                className="custom-input"
                                                            />
                                                        </div>
                                                    </li>
                                                    <li className="mb-3" id="field10">
                                                        <div>
                                                            <label className='custom_label'>DNC</label>

                                                            <label htmlFor="yes5" className="round-radio">Yes</label>
                                                            <input
                                                                type="radio"
                                                                name="field10Dnc"
                                                                value="Yes"
                                                                checked={formData.field10Dnc === 'Yes'}
                                                                onChange={handleRadioChange('field10Dnc', 'field10Date')} // Change function name to handleRadioChange
                                                                id="yes5"
                                                            />
                                                            <label htmlFor="no5" className="round-radio">No</label>
                                                            <input
                                                                type="radio"
                                                                id="no5"
                                                                name="field10Dnc"
                                                                value="No"
                                                                checked={formData.field10Dnc === 'No'}
                                                                onChange={handleRadioChange('field10Dnc', 'field10Date')} // Change function name to handleRadioChange
                                                            />
                                                        </div>
                                                        <div className="calendar-placeholder ml-5">
                                                            <label className='custom_label'>Effective Date</label>
                                                            <input
                                                                type="date"
                                                                placeholder="select a Date..."
                                                                name="field10Date"
                                                                value={formData.field10Date}
                                                                onChange={handleInputChange}
                                                                className="custom-input"
                                                            />
                                                        </div>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                        <div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <button
                                        className="btn btn-link custom-btn"
                                        onClick={toggleSecondContentVisibility}
                                        aria-expanded={isSecondContentVisible ? "true" : "false"}
                                        aria-controls="AddressContent"
                                    >
                                        <i className={`bi bi-caret-${isSecondContentVisible ? 'down' : 'right'}`}></i>
                                        <span className="contact-info-text">Address Info</span>
                                    </button>
                                </div>
                                <hr style={{ borderTop: '1px solid black', width: '87%', marginBottom: '0.5rem' }} />
                            </div>
                            {
                                isSecondContentVisible && (
                                    <div>
                                        <div className="d-flex align-items-center justify-content-between mb-3 ml-3 ">
                                            <div>
                                                <button
                                                    className="btn btn-link custom-btn"
                                                    onClick={(e) => { e.stopPropagation(); e.preventDefault(); toggleLocalAddressVisibility(); }}
                                                    aria-expanded={isLocalAddressVisible ? "true" : "false"}
                                                    aria-controls="LocalAddressContent"

                                                >
                                                    <i className={`bi bi-caret-${isLocalAddressVisible ? 'down' : 'right'} custom-green`}></i>
                                                    <span className="local-address-text  custom-green">Local Address</span>
                                                </button>
                                            </div>
                                            <hr style={{ borderTop: '1px solid black', width: '86%', marginBottom: '0.5rem' }} />
                                        </div>
                                        {isLocalAddressVisible && (
                                            <div className="row nested-dropdown">
                                                <div className="col-xl-6">
                                                    <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                                        {/* First column of form fields */}
                                                        <li className="mb-3" id="field11">
                                                            <label className='custom_label'>Postal Code</label>
                                                            <input type="text" placeholder="Enter Postal Code" name="field11" value={formData.field11} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                        <li className="mb-3" id="field12">
                                                            <label className='custom_label'>Block</label>
                                                            <input type="text" placeholder="Enter Block" name="field12" value={formData.field12} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                        <li className="mb-3" id="field13">
                                                            <label className='custom_label'>Unit Number<span className="text-danger">*</span></label>
                                                            <input type="text" placeholder="Enter Unit Number" name="field13" value={formData.field13} onChange={handleInputChange} className={`custom-input ${formData.field3 === '' ? 'required' : ''}`} required />
                                                        </li>
                                                        <li className="mb-3" id="field14">
                                                            <label className='custom_label'>Building</label>
                                                            <input type="text" placeholder="Enter Building" name="field14" value={formData.field14} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-xl-6">
                                                    <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                                        {/* Second column of form fields */}
                                                        <li className="mb-3" id="field15">
                                                            <label className='custom_label'>Street Name</label>
                                                            <input type="text" placeholder="Enter Street " name="field15" value={formData.field15} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                        <li className="mb-3" id="field16">
                                                            <label className='custom_label'>City</label>
                                                            <input type="text" placeholder="Enter City " name="field16" value={formData.field16} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                        <li className="mb-3" id="field17">
                                                            <label className='custom_label'>State</label>
                                                            <input type="text" placeholder="Enter State" name="field17" value={formData.field17} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                        <li className="mb-3" id="field18">
                                                            <label className='custom_label'>Country</label>
                                                            <select
                                                                name="field18"
                                                                value={formData.field18}
                                                                onChange={handleInputChange}
                                                                className="custom-input"
                                                            >
                                                                <option value="" disabled>Select an Option</option>
                                                                <option value="Singapore">Singapore</option>
                                                                <option value="India">India</option>
                                                                <option value="Canada">Canada</option>
                                                                <option value="Malaysia">Malaysia</option>
                                                                <option value="United Kingdom">United Kingdom</option>
                                                            </select>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            }

                            {
                                isSecondContentVisible && (
                                    <div>
                                        <div className="d-flex align-items-center justify-content-between mb-3 ml-3 ">
                                            <div>
                                                <button
                                                    className="btn btn-link custom-btn"
                                                    onClick={(e) => { e.stopPropagation(); e.preventDefault(); toggleOverseasAddressVisibility(); }}
                                                    aria-expanded={isOverseasAddressVisible ? "true" : "false"}
                                                    aria-controls="OverseasAddressContent"
                                                >
                                                    <i className={`bi bi-caret-${isOverseasAddressVisible ? 'down' : 'right'} custom-green`}></i>
                                                    <span className="overseas-address-text  custom-green">Overseas Residential Address</span>
                                                </button>
                                            </div>
                                            <hr style={{ borderTop: '1px solid black', width: '76%', marginBottom: '0.5rem' }} />
                                        </div>
                                        {isOverseasAddressVisible && (
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                                        {/* First column of form fields */}
                                                        <li className="mb-3" id="field19">
                                                            <label className='custom_label'>Postal Code</label>
                                                            <input type="text" placeholder="Enter Postal Code" name="field19" value={formData.field19} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                        <li className="mb-3" id="field20">
                                                            <label className='custom_label'>Block</label>
                                                            <input type="text" placeholder="Enter Block" name="field20" value={formData.field20} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                        <li className="mb-3" id="field21">
                                                            <label className='custom_label'>Unit Number<span className="text-danger">*</span></label>
                                                            <input type="text" placeholder="Enter Unit Number" name="field21" value={formData.field21} onChange={handleInputChange} className={`custom-input ${formData.field3 === '' ? 'required' : ''}`} required />
                                                        </li>
                                                        <li className="mb-3" id="field22">
                                                            <label className='custom_label'>Building</label>
                                                            <input type="text" placeholder="Enter Building" name="field22" value={formData.field22} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-xl-6">
                                                    <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                                        {/* Second column of form fields */}
                                                        <li className="mb-3" id="field23">
                                                            <label className='custom_label'>Street Name</label>
                                                            <input type="text" placeholder="Enter Street " name="field23" value={formData.field23} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                        <li className="mb-3" id="field24">
                                                            <label className='custom_label'>City</label>
                                                            <input type="text" placeholder="Enter City " name="field24" value={formData.field24} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                        <li className="mb-3" id="field25">
                                                            <label className='custom_label'>State</label>
                                                            <input type="text" placeholder="Enter State" name="field25" value={formData.field25} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                        <li className="mb-3" id="field26">
                                                            <label className='custom_label'>Country</label>
                                                            <select
                                                                name="field26"
                                                                value={formData.field26 || ""}
                                                                onChange={handleInputChange}
                                                                className="custom-input"
                                                            >
                                                                <option value="" disabled>Select an Option</option>
                                                                <option value="Singapore">Singapore</option>
                                                                <option value="India">India</option>
                                                                <option value="Canada">Canada</option>
                                                                <option value="Malaysia">Malaysia</option>
                                                                <option value="United Kingdom">United Kingdom</option>
                                                            </select>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            }
                            {
                                isSecondContentVisible && (
                                    <div>
                                        <div className="d-flex align-items-center justify-content-between mb-3 ml-3">
                                            <div>
                                                <button
                                                    className="btn btn-link custom-btn"
                                                    onClick={(e) => { e.stopPropagation(); e.preventDefault(); toggleMailingAddressVisibility(); }}
                                                    aria-expanded={isMailingAddressVisible ? "true" : "false"}
                                                    aria-controls="MailingAddressContent"
                                                >
                                                    <i className={`bi bi-caret-${isMailingAddressVisible ? 'down' : 'right'} custom-green`}></i>
                                                    <span className="mailing-address-text  custom-green">Mailing Address</span>
                                                </button>

                                            </div>
                                            <li className="mb-3" id="field10">
                                                <div className="d-flex  justify-content-center align-items-center">
                                                    <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                                        <label className='custom_label' style={{ width: "auto" }}>DNC</label>
                                                        <input
                                                            type="radio"
                                                            name="field10Dnc"
                                                            value="Yes"
                                                            checked={formData.field10Dnc === 'Yes'}
                                                            onChange={handleRadioChange('field10Dnc', 'field10Date')} // Change function name to handleRadioChange
                                                            id="yes5"
                                                        />
                                                        <label htmlFor="yes5" className="round-radio me-2">Yes</label>
                                                        <input
                                                            type="radio"
                                                            id="no5"
                                                            name="field10Dnc"
                                                            value="No"
                                                            checked={formData.field10Dnc === 'No'}
                                                            onChange={handleRadioChange('field10Dnc', 'field10Date')} // Change function name to handleRadioChange
                                                        />
                                                        <label htmlFor="no5" className="round-radio me-4">No</label>
                                                    </div>
                                                    <div className="ms-4">
                                                        <label className='custom_label' style={{ width: "auto", marginTop: "0px" }}>Effective Date</label>
                                                        <input
                                                            type="date"
                                                            placeholder="select a Date..."
                                                            name="field10Date"
                                                            value={formData.field10Date}
                                                            onChange={handleInputChange}
                                                            className="custom-input" style={{ width: "auto" }}
                                                        />
                                                    </div>
                                                </div>
                                            </li>

                                            <hr style={{ borderTop: '1px solid black', width: '40%', marginBottom: '0.5rem' }} />
                                        </div>
                                        {isMailingAddressVisible && (
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                                        {/* First column of form fields */}
                                                        <li className="mb-3" id="field27">
                                                            <label className='custom_label'>Postal Code</label>
                                                            <input type="text" placeholder="Enter Postal Code" name="field27" value={formData.field27} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                        <li className="mb-3" id="field28">
                                                            <label className='custom_label'>Block</label>
                                                            <input type="text" placeholder="Enter Block" name="field28" value={formData.field28} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                        <li className="mb-3" id="field29">
                                                            <label className='custom_label'>Unit Number<span className="text-danger">*</span></label>
                                                            <input type="text" placeholder="Enter Unit Number" name="field29" value={formData.field29} onChange={handleInputChange} className={`custom-input ${formData.field3 === '' ? 'required' : ''}`} required />
                                                        </li>
                                                        <li className="mb-3" id="field30">
                                                            <label className='custom_label'>Building</label>
                                                            <input type="text" placeholder="Enter Building" name="field30" value={formData.field30} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-xl-6">
                                                    <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                                        {/* Second column of form fields */}
                                                        <li className="mb-3" id="field31">
                                                            <label className='custom_label'>Street Name</label>
                                                            <input type="text" placeholder="Enter Street " name="field31" value={formData.field31} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                        <li className="mb-3" id="field32">
                                                            <label className='custom_label'>City</label>
                                                            <input type="text" placeholder="Enter City " name="field32" value={formData.field32} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                        <li className="mb-3" id="field33">
                                                            <label className='custom_label'>State</label>
                                                            <input type="text" placeholder="Enter State" name="field33" value={formData.field33} onChange={handleInputChange} className="custom-input" />
                                                        </li>
                                                        <li className="mb-3" id="field34">
                                                            <label className='custom_label'>Country</label>
                                                            <select
                                                                name="field34"
                                                                value={formData.field34 || ""}
                                                                onChange={handleInputChange}
                                                                className="custom-input"
                                                            >
                                                                <option value="" disabled>Select an Option</option>
                                                                <option value="Singapore">Singapore</option>
                                                                <option value="India">India</option>
                                                                <option value="Canada">Canada</option>
                                                                <option value="Malaysia">Malaysia</option>
                                                                <option value="United Kingdom">United Kingdom</option>
                                                            </select>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            }
                        </div >
                    </form >
                );

            case 3:
                return (
                    <form className='text-center mt-5'>
                        <div>
                            <div className="d-flex align-items-center justify-content-between ">
                                <div>
                                    <button
                                        className="btn btn-link custom-btn"
                                        onClick={toggleFirstContentVisibility}
                                        aria-expanded={isFirstContentVisible ? "true" : "false"}
                                        aria-controls="eduInfoContent"
                                    >
                                        <i className={`bi bi-caret-${isFirstContentVisible ? 'down' : 'right'}`}></i>
                                        <span className="education-info-text">Educational Info</span>
                                    </button>
                                </div>
                                <hr style={{ borderTop: '1px solid black', width: '84%', marginBottom: '0.5rem' }} />
                            </div>
                            {isFirstContentVisible && (
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div>
                                        <label className='custom_label w-100 mb-0' style={{ textAlign: 'left', marginLeft: "150px" }}>Highest Education :</label> <br />
                                        <input type="text" placeholder="Enter Your Highest level of education" name="field35" value={formData.field35} onChange={handleInputChange} className="custom-input p-0" />
                                    </div>
                                    <div>
                                        <label className='custom_label w-100 mb-0' style={{ textAlign: 'left', marginLeft: "150px" }}>School :</label> <br />
                                        <input type="text" placeholder="Enter Your school name" name="field36" value={formData.field36} onChange={handleInputChange} className="custom-input p-0" />
                                    </div>
                                    <div>
                                        <label className='custom_label w-100 mb-0' style={{ textAlign: 'left', marginLeft: "150px" }}>Qualification :</label> <br />
                                        <input type="text" placeholder="Enter Your Qualification" name="field37" value={formData.field37} onChange={handleInputChange} className="custom-input p-0" />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <button
                                        className="btn btn-link custom-btn"
                                        onClick={toggleSecondContentVisibility}
                                        aria-expanded={isSecondContentVisible ? "true" : "false"}
                                        aria-controls="eduInfoContent"
                                    >
                                        <i className={`bi bi-caret-${isSecondContentVisible ? 'down' : 'right'}`}></i>
                                        <span className="employment-info-text">Employment Info</span>
                                    </button>
                                </div>
                                <hr style={{ borderTop: '1px solid black', width: '84%', marginBottom: '0.5rem' }} />
                            </div>
                            {isSecondContentVisible && (
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div>
                                        <label className='custom_label w-100 mb-0' style={{ textAlign: 'left', marginLeft: "150px" }}>Employer :</label> <br />
                                        <input type="text" placeholder="Enter your Employer Name" name="field38" value={formData.field38} onChange={handleInputChange} className="custom-input p-0" />
                                    </div>
                                    <div className='row mt-2 d-flex justify-content-between ml-5'>
                                        <div className='col-4 p-0 '>
                                            <label className='custom_label ml-4 mb-0 w-100'>Nature of Business</label> <br />
                                            <input type="text" placeholder="Enter Nature of Business" name="field39" value={formData.field39} onChange={handleInputChange} className="custom-input p-0" />
                                        </div>
                                        <div className='col-4 p-0'>
                                            <label className='custom_label  ml-4 mb-0 w-100' >Occupation</label> <br />
                                            <input type="text" placeholder="Enter Your Occupation" name="field40" value={formData.field40} onChange={handleInputChange} className="custom-input p-0" />
                                        </div>
                                        <div className='col-4 p-0'>
                                            <label className='custom_label mb-0 w-100' >Nature of Employment</label> <br />
                                            <input type="text" placeholder=" Nature of Employment" name="field40" value={formData.field40} onChange={handleInputChange} className="custom-input p-0" />
                                        </div>
                                    </div>
                                    <div className='row mt-2 d-flex justify-content-between ml-5'>
                                        <div className='col-4 p-0'>
                                            <label className='custom_label ml-4 mb-0 w-100'>Designation</label> <br />
                                            <input type="text" placeholder="Enter Your Designation" name="field39" value={formData.field39} onChange={handleInputChange} className="custom-input p-0" />
                                        </div>
                                        <div className='col-4 p-0'>
                                            <label className='custom_label  ml-4 mb-0 w-100' >Length of Service</label> <br />
                                            <input type="text" placeholder="Length of Service" name="field40" value={formData.field40} onChange={handleInputChange} className="custom-input p-0" />
                                        </div>
                                        <div className='col-4 p-0'>
                                            <label className='custom_label mb-0 w-100' >Annual Income</label> <br />
                                            <input type="text" placeholder="EnterAnnual Income" name="field40" value={formData.field40} onChange={handleInputChange} className="custom-input p-0" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div> <br />
                    </form>
                );

            case 4:
                return (
                    <form className='text-center mt-5'>
                        <div className="row">
                            <div className="col-xl-6">
                                <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                    {/* First column of form fields */}
                                    <li className="mb-3" id="field1">
                                        <label className='custom_label'>Consultant Name</label>
                                        <input type="text" placeholder="Enter field 1" name="field1" value={formData.field1} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field2">
                                        <label className='custom_label'>NRIC Number</label>
                                        <input type="text" placeholder="Enter field 2" name="field2" value={formData.field2} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field3">
                                        <label className='custom_label'>Name(As in NRIC)<span className="text-danger">*</span></label>
                                        <input type="text" placeholder="Enter field 3" name="field3" value={formData.field3} onChange={handleInputChange} className={`custom-input ${formData.field3 === '' ? 'required' : ''}`} required />
                                    </li>
                                    <li className="mb-3" id="field4">
                                        <label className='custom_label'>Salutation</label>
                                        <input type="text" placeholder="Enter field 4" name="field4" value={formData.field4} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field5">
                                        <label className='custom_label'>Entry Pass</label>
                                        <input type="text" placeholder="Enter field 5" name="field5" value={formData.field5} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-6">
                                <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                    {/* Second column of form fields */}
                                    <li className="mb-3" id="field6">
                                        <label className='custom_label'>FIN No</label>
                                        <input type="text" placeholder="Enter field 6" name="field6" value={formData.field6} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field7">
                                        <label className='custom_label'>DOB</label>
                                        <input type="text" placeholder="Enter field 7" name="field7" value={formData.field7} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field8">
                                        <label className='custom_label'>Gender</label>
                                        <input type="text" placeholder="Enter field 8" name="field8" value={formData.field8} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field9">
                                        <label className='custom_label'>Marital Status</label>
                                        <input type="text" placeholder="Enter field 9" name="field9" value={formData.field9} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field10">
                                        <label className='custom_label'>Preferred Language</label>
                                        <input type="text" placeholder="Enter field 10" name="field10" value={formData.field10} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                );

            case 5:
                return (
                    <form className='text-center mt-5'>
                        <div className="row">
                            <div className="col-xl-6">
                                <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                    {/* First column of form fields */}
                                    <li className="mb-3" id="field1">
                                        <label className='custom_label'>Consultant Name</label>
                                        <input type="text" placeholder="Enter field 1" name="field1" value={formData.field1} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field2">
                                        <label className='custom_label'>NRIC Number</label>
                                        <input type="text" placeholder="Enter field 2" name="field2" value={formData.field2} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field3">
                                        <label className='custom_label'>Name(As in NRIC)<span className="text-danger">*</span></label>
                                        <input type="text" placeholder="Enter field 3" name="field3" value={formData.field3} onChange={handleInputChange} className={`custom-input ${formData.field3 === '' ? 'required' : ''}`} required />
                                    </li>
                                    <li className="mb-3" id="field4">
                                        <label className='custom_label'>Salutation</label>
                                        <input type="text" placeholder="Enter field 4" name="field4" value={formData.field4} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field5">
                                        <label className='custom_label'>Entry Pass</label>
                                        <input type="text" placeholder="Enter field 5" name="field5" value={formData.field5} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-6">
                                <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                    {/* Second column of form fields */}
                                    <li className="mb-3" id="field6">
                                        <label className='custom_label'>FIN No</label>
                                        <input type="text" placeholder="Enter field 6" name="field6" value={formData.field6} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field7">
                                        <label className='custom_label'>DOB</label>
                                        <input type="text" placeholder="Enter field 7" name="field7" value={formData.field7} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field8">
                                        <label className='custom_label'>Gender</label>
                                        <input type="text" placeholder="Enter field 8" name="field8" value={formData.field8} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field9">
                                        <label className='custom_label'>Marital Status</label>
                                        <input type="text" placeholder="Enter field 9" name="field9" value={formData.field9} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field10">
                                        <label className='custom_label'>Preferred Language</label>
                                        <input type="text" placeholder="Enter field 10" name="field10" value={formData.field10} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                );

            case 6:
                return (
                    <form className='text-center mt-5'>
                        <div className="row">
                            <div className="col-xl-6">
                                <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                    {/* First column of form fields */}
                                    <li className="mb-3" id="field1">
                                        <label className='custom_label'>Consultant Name</label>
                                        <input type="text" placeholder="Enter field 1" name="field1" value={formData.field1} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field2">
                                        <label className='custom_label'>NRIC Number</label>
                                        <input type="text" placeholder="Enter field 2" name="field2" value={formData.field2} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field3">
                                        <label className='custom_label'>Name(As in NRIC)<span className="text-danger">*</span></label>
                                        <input type="text" placeholder="Enter field 3" name="field3" value={formData.field3} onChange={handleInputChange} className={`custom-input ${formData.field3 === '' ? 'required' : ''}`} required />
                                    </li>
                                    <li className="mb-3" id="field4">
                                        <label className='custom_label'>Salutation</label>
                                        <input type="text" placeholder="Enter field 4" name="field4" value={formData.field4} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field5">
                                        <label className='custom_label'>Entry Pass</label>
                                        <input type="text" placeholder="Enter field 5" name="field5" value={formData.field5} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-6">
                                <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                    {/* Second column of form fields */}
                                    <li className="mb-3" id="field6">
                                        <label className='custom_label'>FIN No</label>
                                        <input type="text" placeholder="Enter field 6" name="field6" value={formData.field6} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field7">
                                        <label className='custom_label'>DOB</label>
                                        <input type="text" placeholder="Enter field 7" name="field7" value={formData.field7} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field8">
                                        <label className='custom_label'>Gender</label>
                                        <input type="text" placeholder="Enter field 8" name="field8" value={formData.field8} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field9">
                                        <label className='custom_label'>Marital Status</label>
                                        <input type="text" placeholder="Enter field 9" name="field9" value={formData.field9} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                    <li className="mb-3" id="field10">
                                        <label className='custom_label'>Preferred Language</label>
                                        <input type="text" placeholder="Enter field 10" name="field10" value={formData.field10} onChange={handleInputChange} className="custom-input" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                );

            case 7:
                return (
                    <form className='text-center mt-4'>
                        <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                            <li className="mb-3" id="field1">
                                <label className='custom_label'>Consultant Name</label>
                                <input type="text" placeholder="Enter Consultant Name" name="field1" value={formData.field1} onChange={handleInputChange} className="custom-input" />
                            </li>
                            <li className="mb-3" id="field2">
                                <label className='custom_label'>NRIC Number</label>
                                <input type="text" placeholder="Enter NRIC Number" name="field2" value={formData.field2} onChange={handleInputChange} className="custom-input" />
                            </li>
                            <li className="mb-3" id="field3">
                                <label className='custom_label'>Name(As in NRIC)<span className="text-danger">*</span></label>
                                <input type="text" placeholder="Enter Name(As in NRIC)" name="field3" value={formData.field3} onChange={handleInputChange} className={`custom-input ${formData.field3 === '' ? 'required' : ''}`} required />
                            </li>
                            <li className="mb-3" id="field4">
                                <label className='custom_label'>Salutation</label>
                                <input type="text" placeholder="Enter Salutation" name="field4" value={formData.field4} onChange={handleInputChange} className="custom-input" />
                            </li>
                            <li className="mb-3" id="field5">
                                <label className='custom_label'>Entry Pass</label>
                                <input type="text" placeholder="Enter Entry Pass" name="field5" value={formData.field5} onChange={handleInputChange} className="custom-input" />
                            </li>
                            <li className="mb-3" id="field6">
                                <label className='custom_label'>FIN No</label>
                                <input type="text" placeholder="Enter FIN No" name="field6" value={formData.field6} onChange={handleInputChange} className="custom-input" />
                            </li>
                            <li className="mb-3" id="field7">
                                <label className='custom_label'>DOB</label>
                                <input type="text" placeholder="Enter DOB" name="field7" value={formData.field7} onChange={handleInputChange} className="custom-input" />
                            </li>
                            <li className="mb-3" id="field8">
                                <label className='custom_label'>Gender</label>
                                <input type="text" placeholder="Enter Gender" name="field8" value={formData.field8} onChange={handleInputChange} className="custom-input" />
                            </li>
                            <li className="mb-3" id="field9">
                                <label className='custom_label'>Marital Status</label>
                                <input type="text" placeholder="Enter Marital Status" name="field9" value={formData.field9} onChange={handleInputChange} className="custom-input" />
                            </li>
                            <li className="mb-3" id="field10">
                                <label className='custom_label'>Preferred Language</label>
                                <input type="text" placeholder="Enter Preferred Language" name="field10" value={formData.field10} onChange={handleInputChange} className="custom-input" />
                            </li>
                        </ul>
                    </form>
                );

            default:
                return null;
        }
    };

    return (
        <Modal show={show} onHide={() => setShowAddCRMForm(false)} size="xl">
            <Modal.Body style={{ height: 'auto', overflowY: 'auto' }}>
                <div className="tab-container">
                    <Tabs activeKey={activeTab} onSelect={handleTabChange} id="add-crm-tabs" className="mb-3">
                        <Tab eventKey="tab1" title="New Personal Info">
                            <div className="mt-3">
                                <div className="d-flex flex-wrap mt-3 grid-container">
                                    {[...Array(7)].map((_, index) => (
                                        <React.Fragment key={index + 1}>
                                            {index > 0 && (
                                                <div key={`dash-${index}`} className="dashes">
                                                    {Array.from({ length: (stepNames[index - 1].length + stepNames[index].length) / 2 }, (_, i) => '-').join('')}
                                                </div>
                                            )}
                                            <div key={index + 1} className="text-center">
                                                <Button
                                                    variant={step > index + 1 ? 'light' : 'primary'}
                                                    onClick={() => handleStepClick(index + 1)}
                                                    className={`step-btn ${step >= index + 1 ? 'completed' : ''}`}
                                                >
                                                    {index + 1}
                                                </Button>
                                                <div className='step_name'>Step {index + 1}: <br /> {stepNames[index]}</div>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                                {renderStepContent()}

                                <div className="text-end mt-3">
                                    {step > 1 && (
                                        <Button variant="secondary mr-4" onClick={() => handleBackButtonClick(step - 1)}>
                                            Back
                                        </Button>
                                    )}
                                    {step < 7 && (
                                        <Button variant="primary" onClick={handleSaveAndNext}>
                                            Save and Next
                                        </Button>
                                    )}
                                    {step === 7 && (
                                        <Button variant="success" onClick={handleSave}>
                                            Save
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="tab2" title="New Corporate Info">
                            <div className="mt-3">
                                <div className="d-flex flex-wrap justify-content-center mt-3">
                                    {[...Array(7)].map((_, index) => (
                                        <React.Fragment key={index + 1}>
                                            {index > 0 && (
                                                <div key={`dash-${index}`} className="dashes">
                                                    {Array.from({ length: (stepNames[index - 1].length + stepNames[index].length) / 2 }, (_, i) => '-').join('')}
                                                </div>
                                            )}
                                            <div key={index + 1} className="text-center">
                                                <Button
                                                    variant={step > index + 1 ? 'light' : 'primary'}
                                                    onClick={() => handleStepClick(index + 1)}
                                                    className={`step-btn ${step >= index + 1 ? 'completed' : ''}`}
                                                >
                                                    {index + 1}
                                                </Button>
                                                <div className='step_name'>Step {index + 1}: <br /> {stepNames[index]}</div>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                                {renderStepContent()}

                                <div className="text-end mt-3">
                                    {step > 1 && (
                                        <Button variant="secondary mr-4" onClick={() => handleBackButtonClick(step - 1)}>
                                            Back
                                        </Button>
                                    )}
                                    {step < 7 && (
                                        <Button variant="primary" onClick={handleSaveAndNext}>
                                            Save and Next
                                        </Button>
                                    )}
                                    {step === 7 && (
                                        <Button variant="success" onClick={handleSave}>
                                            Save
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default AddCRMForm;
