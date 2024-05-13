import React, { useState, useEffect } from 'react';
import { Modal, Button, Nav, NavItem, CloseButton } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ColumnGroupingTable from './Table.js';
import Popupform from './Popupform.js';
import InsertTable from './InsertTable.js';
import UpdateTable from './UpdateTable.js';
import DelTable from './DelTable.js';
import AutoSyncTable from './AutoSyncTable.js';
import './AddCRMForm.css';




const AddCRMForm = ({ show, setShowAddCRMForm }) => {
    const [activeTab, setActiveTab] = useState(0);
    const ariaLabel = { 'aria-label': 'description' };
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(true);
    // const [value, setValue] = React.useState(0);

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
        field11: '',
        field11Dnc: 'No',
        field11Date: '',
        field12: '',
        field12Dnc: 'No',
        field12Date: '',
        field13: '',
        field13Dnc: 'No',
        field13Date: '',
        field14: '',
        field14Dnc: 'No',
        field14Date: '',
        field15: '',
        field15Dnc: 'No',
        field15Date: '',
        field16: '',
        field16Dnc: 'No',
        field16Date: '',
        field17: '',
        field17Dnc: 'No',
        field17Date: '',
        phoneNumber: '',
        countryCode: ''
        // Add more fields as needed for each step
    });

    // Define your step names array
    const stepNames = [
        "Add Personal Info",
        "Contact Info",
        "Education & Employment Info",
        "Compliance Info",
        "AML Info",
        "Marketing Info",
        "Log"
    ];

    useEffect(() => {
        if (!show) {
            setActiveTab(0);
        }
    }, [show]);
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSearchIconClick = () => {
    };
    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleSaveAndNext = () => {
        if (activeTab < 6) {
            setActiveTab(activeTab + 1);
        }
    };

    const handleSave = () => {
        setActiveTab(0);
        setShowAddCRMForm(false);
    };

    // const handleStepClick = (nextStep) => {
    //     if (activeTab < nextStep) {
    //         setActiveTab(nextStep);
    //     }
    // };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleBackButtonClick = () => {
        if (activeTab > 0) {
            setActiveTab(activeTab - 1);
        }
    };
    // const handlePhoneNumberChange = (event) => {
    //     const { name, value } = event.target;

    //     // Validate if the input is numeric
    //     if (/^\d*$/.test(value) || value === '') {
    //         setFormData(prevFormData => ({
    //             ...prevFormData,
    //             [name]: value
    //         }));
    //     }
    // };
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
    const [isThirdContentVisible, setIsThirdContentVisible] = useState(true);
    const [isFourthContentVisible, setIsFourthContentVisible] = useState(true);
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
    const toggleThirdContentVisibility = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsThirdContentVisible(!isThirdContentVisible);
    };
    const toggleFourthContentVisibility = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFourthContentVisible(!isFourthContentVisible);
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

    // const isField3Required = () => {
    //     return formData.field1 !== '' && formData.field2 === '';
    // };
    const consultant = [
        {
            value: 'select',
            label: 'Select FAR',
        },
        {
            value: 'male',
            label: '80000 - Financial Alliance Pte Ltd - Active',
        },
        {
            value: 'female',
            label: '80000 - Financial Alliance Pte Ltd -Unknown FAR - Active',
        },
        {
            value: 'married female',
            label: '80000 - Financial Alliance Pte Ltd - HQ & Staff - Active',
        },
    ];
    const salutation = [
        {
            value: 'select',
            label: 'Select an Option',
        },
        {
            value: 'male',
            label: 'Mr.',
        },
        {
            value: 'female',
            label: 'Ms.',
        },
        {
            value: 'married female',
            label: 'Mrs.',
        },
    ];
    const language = [
        {
            value: 'select',
            label: 'Select an Option',
        },
        {
            value: 'eng',
            label: 'English',
        },
        {
            value: 'fre',
            label: 'French',
        },
        {
            value: 'ger',
            label: 'Germany',
        },
        {
            value: 'span',
            label: 'Spanish',
        },
    ]
    const religion = [
        {
            value: 'select',
            label: 'Select an Option',
        },
        {
            value: 'hindu',
            label: 'Hinduism',
        },
        {
            value: 'islam',
            label: 'Islam',
        },
        {
            value: 'chris',
            label: 'Christianity',
        },
        {
            value: 'catho',
            label: 'Catholic',
        },
        {
            value: 'others',
            label: 'Others',
        },
    ]
    const crmstatus = [
        {
            value: 'select',
            label: 'Select an Option',
        },
        {
            value: 'active',
            label: 'Active',
        },
        {
            value: 'clientreq',
            label: 'Archived(Client Request)',
        },
        {
            value: 'farreq',
            label: 'Archived(far Request)',
        },
        {
            value: 'inactive',
            label: 'Inactive',
        },

    ]
    const entry = [
        {
            value: 'select',
            label: 'Select an Option',
        },
        {
            value: 'active',
            label: 'Long-term visit pass',
        },
        {
            value: 'clientreq',
            label: "Student's Pass",
        },
        {
            value: 'farreq',
            label: 'Singapore Permanent resident',
        },
        {
            value: 'inactive',
            label: 'Not Applicable',
        },
        {
            value: 'inactive',
            label: 'Employment Pass',
        },
        {
            value: 'inactive',
            label: 'Work Permit',
        },
        {
            value: 'inactive',
            label: 'S-Pass',
        },
        {
            value: 'inactive',
            label: 'Other',
        },
    ]
    const gender = [
        {
            value: 'select',
            label: 'Select an Option',
        },
        {
            value: 'male',
            label: 'Male',
        },
        {
            value: 'female',
            label: 'Female',
        },
        {
            value: 'other',
            label: 'Other',
        },
    ]
    const status = [
        {
            value: 'select',
            label: 'Select an Option',
        },
        {
            value: 'single',
            label: 'Single',
        },
        {
            value: 'maried',
            label: 'Married',
        },
        {
            value: 'divorced',
            label: 'Divorced',
        },
        {
            value: 'widowed',
            label: 'Widowed',
        },
    ]
    const nation = [
        {
            value: 'select',
            label: 'Select an Option',
        },
        {
            value: 'singapore',
            label: 'Singapore Citizen',
        },
        {
            value: 'malaysia',
            label: 'Malaysian',
        },
        {
            value: 'india',
            label: 'Indian',
        },
        {
            value: 'china',
            label: 'China',
        },
    ]
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
    const race = [
        {
            value: 'select',
            label: 'Select an Option',
        },
        {
            value: 'chinese',
            label: 'Chinese',
        },
        {
            value: 'malay',
            label: 'Malay',
        },
        {
            value: 'indian',
            label: 'Indian',
        },
        {
            value: 'chinese',
            label: 'Chinese',
        },
    ]
    const pc = [
        {
            value: 'select',
            label: 'Select an Option',
        },
        {
            value: 'india',
            label: 'India(+91)',
        },
        {
            value: 'singapore',
            label: 'Singapore(+65)',
        },
        {
            value: 'malaysia',
            label: 'Malaysia(+60)',
        },
    ]


    const renderStepContent = () => {
        switch (activeTab) {
            case 0:
                return (
                    <form className='text-center mt-4'>
                        <div style={{ textAlign: 'start', paddingLeft: '50px' }}>
                            <div className="row pb-1">
                                <div className="col-xl-8">
                                    <TextField
                                        id="consultant"
                                        select
                                        label="Consultant Name"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="standard"
                                        style={{ width: "91.5%", margin: "6px 8px" }} onChange={handleInputChange}
                                        inputProps={{
                                            style: { paddingLeft: "0px" },
                                        }}
                                    >
                                        {consultant.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="col-xl-4 p-0 ">
                                    <TextField
                                        id="Name (As in NRIC)"
                                        type="search"
                                        label="Name (As in NRIC)"
                                        variant="standard"
                                        placeholder='Enter Name (As in NRIC)'
                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row pb-1">
                                <div className='col-xl-4 '>
                                    <TextField
                                        id="NRIC Number"
                                        type="search"
                                        label="NRIC Number"
                                        variant="standard"
                                        placeholder='Enter NRIC Number'
                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-xl-4 p-0">
                                    <TextField
                                        id="salutation"
                                        select
                                        label="Salutation"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="standard"
                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                        inputProps={{
                                            style: { paddingLeft: "0px" },
                                        }}
                                    >
                                        {salutation.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="col-xl-4 p-0">
                                    <TextField
                                        id="Preferred Name"
                                        type="search"
                                        label="Preferred Name"
                                        variant="standard"
                                        placeholder='Enter Preferred Name'
                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className='row pb-1'>
                                <div className='col-xl-4'>
                                    <TextField
                                        id="nationality"
                                        select
                                        label="Nationality"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="standard"
                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                        inputProps={{
                                            style: { paddingLeft: "0px" },
                                        }}
                                    >
                                        {nation.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                                <div className='col-xl-4 p-0'>
                                    <TextField
                                        id="country of residence"
                                        select
                                        label="Country of Residence"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="standard"
                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
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
                                <div className='col-xl-4 p-0'>
                                    <TextField
                                        id="Race"
                                        select
                                        label="Race"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="standard"
                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                        inputProps={{
                                            style: { paddingLeft: "0px" },
                                        }}
                                    >
                                        {race.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                            </div>
                            <div className='row pb-1'>
                                <div className='col-xl-4'>
                                    <TextField
                                        id="dob"
                                        type="date"
                                        label="DOB"
                                        variant="standard"
                                        style={{ width: "80%", margin: "6px 8px" }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <div className='col-xl-4 p-0'>
                                    <TextField
                                        id="Preferred Language"
                                        select
                                        label="Preferred Language"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="standard"
                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                        inputProps={{
                                            style: { paddingLeft: "0px" },
                                        }}
                                    >
                                        {language.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                                <div className='col-xl-4 p-0'>
                                    <TextField
                                        id="Religion"
                                        select
                                        label="Religion"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="standard"
                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                        inputProps={{
                                            style: { paddingLeft: "0px" },
                                        }}
                                    >
                                        {religion.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                            </div>
                            <div className='row pb-1'>
                                <div className='col-xl-4'>
                                    <TextField
                                        id="Entry Pass"
                                        select
                                        label="Entry Pass"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="standard"
                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                        inputProps={{
                                            style: { paddingLeft: "0px" },
                                        }}
                                    >
                                        {entry.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                                <div className='col-xl-4 p-0'>

                                    <TextField
                                        id="FIN No"
                                        type="search"
                                        label="FIN No"
                                        variant="standard"
                                        placeholder='Enter FIN Number'
                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                    />
                                </div>
                                <div className='col-xl-4 p-0'>
                                    <TextField
                                        id="Passport No"
                                        type="search"
                                        label="Passport No"
                                        variant="standard"
                                        placeholder='Enter Passport Number'
                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className='row pb-2'>
                                <div className='col-xl-4'>
                                    <TextField
                                        id="CRM Status"
                                        select
                                        label="CRM Status"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="standard"
                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                        inputProps={{
                                            style: { paddingLeft: "0px" },
                                        }}
                                    >
                                        {crmstatus.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                                <div className='col-xl-4 p-0'>
                                    <TextField
                                        id="Gender"
                                        select
                                        label="Gender"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="standard"
                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                        inputProps={{
                                            style: { paddingLeft: "0px" },
                                        }}
                                    >
                                        {gender.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                                <div className='col-xl-4 p-0'>
                                    <TextField
                                        id="GeMarital Statusnder"
                                        select
                                        label="Marital Status"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="standard"
                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                        inputProps={{
                                            style: { paddingLeft: "0px" },
                                        }}
                                    >
                                        {status.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                            </div>
                            <div className="col-xl-10 ml-2 p-0">
                                <TextField className="mb-3" id="remarks"
                                    label="Remarks" placeholder='Enter Remarks Here...' multiline rows={3} style={{ width: "73%", height: "100px" }}
                                    value={formData.remarks} onChange={handleInputChange}
                                />
                            </div>
                        </div >
                    </form >
                );
            case 1:
                return (
                    <form className='text-center mt-4'>
                        <div>
                            <div className="d-flex align-items-center justify-content-between" >
                                <div>
                                    <button
                                        className="btn btn-link custom-btn pb-0"
                                        onClick={toggleFirstContentVisibility}
                                        aria-expanded={isFirstContentVisible ? "true" : "false"}
                                        aria-controls="contInfoContent"
                                    >
                                        <i className={`bi bi-caret-${isFirstContentVisible ? 'down' : 'right'}`}></i>
                                        <span className="contact-info-text">Contact Info</span>
                                    </button>
                                </div>
                            </div>
                            <hr style={{ borderTop: '2px solid #000000', width: '96%', marginTop: '0', marginBottom: '0.5rem', marginLeft: '35px' }} />

                            {isFirstContentVisible && (
                                <div className="row">
                                    <div className="col-xl-6" style={{ paddingLeft: "50px", paddingRight: '0' }}>
                                        <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                            {/* First column of form fields */}
                                            <li className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
                                                <TextField
                                                    id="primary contact"
                                                    select
                                                    label="Primary Contact(HP)"
                                                    SelectProps={{
                                                        native: true,
                                                    }}
                                                    variant="standard"
                                                    style={{ width: "40%", margin: "6px 0px" }}
                                                    onChange={handleInputChange}
                                                    inputProps={{
                                                        style: { paddingLeft: "0px" },
                                                    }}
                                                >
                                                    {pc.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </TextField>
                                                <Box
                                                    component="form"
                                                    sx={{
                                                        '& > :not(style)': { m: 1 },
                                                    }}
                                                    noValidate
                                                    autoComplete="off"
                                                >
                                                    <Input
                                                        type="text"
                                                        pattern="[0-9]*"
                                                        placeholder="Enter Primary Contact"
                                                        name="primaryphoneNumber" inputProps={ariaLabel}
                                                        style={{ flex: 1, marginLeft: "20px", paddingTop: '14px', width: "100%", boxShadow: "none!important" }}
                                                    />
                                                </Box>
                                            </li>
                                            {/* Second column of form fields */}
                                            <li className="mb-3" id="field2">
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <TextField
                                                        id="Secondary contact"
                                                        select
                                                        label="Secondary Contact(HP)"
                                                        SelectProps={{
                                                            native: true,
                                                        }}
                                                        variant="standard"
                                                        style={{ width: "40%", margin: "6px 0px" }}
                                                        onChange={handleInputChange}
                                                        inputProps={{
                                                            style: { paddingLeft: "0px" },
                                                        }}
                                                    >
                                                        {pc.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                    <Box
                                                        component="form"
                                                        sx={{
                                                            '& > :not(style)': { m: 1 },
                                                        }}
                                                        noValidate
                                                        autoComplete="off"
                                                    >
                                                        <Input
                                                            type="text"
                                                            pattern="[0-9]*"
                                                            placeholder="Enter Primary Contact"
                                                            name="primaryphoneNumber" inputProps={ariaLabel}
                                                            style={{ flex: 1, marginLeft: "20px", paddingTop: '14px', width: "100%" }}
                                                        />
                                                    </Box>
                                                </div>
                                            </li>
                                            {/* Third column of form fields */}
                                            <li className="mb-3" id="field3">
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <TextField
                                                        id="home contact"
                                                        select
                                                        label="Home Contact"
                                                        SelectProps={{
                                                            native: true,
                                                        }}
                                                        variant="standard"
                                                        style={{ width: "40%", margin: "6px 0px" }}
                                                        onChange={handleInputChange}
                                                        inputProps={{
                                                            style: { paddingLeft: "0px" },
                                                        }}
                                                    >
                                                        {pc.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                    <Box
                                                        component="form"
                                                        sx={{
                                                            '& > :not(style)': { m: 1 },
                                                        }}
                                                        noValidate
                                                        autoComplete="off"
                                                    >
                                                        <Input
                                                            type="text"
                                                            pattern="[0-9]*"
                                                            placeholder="Enter Primary Contact"
                                                            name="primaryphoneNumber" inputProps={ariaLabel}
                                                            style={{ flex: 1, marginLeft: "20px", paddingTop: '14px', width: "100%" }}
                                                        />
                                                    </Box>
                                                </div>
                                            </li>
                                            {/* Fourth column of form fields */}
                                            <li className="mb-3" id="field4">
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <TextField
                                                        id="office contact"
                                                        select
                                                        label="Office Contact"
                                                        SelectProps={{
                                                            native: true,
                                                        }}
                                                        variant="standard"
                                                        style={{ width: "40%", margin: "6px 0px" }}
                                                        onChange={handleInputChange}
                                                        inputProps={{
                                                            style: { paddingLeft: "0px" },
                                                        }}
                                                    >
                                                        {pc.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                    <Box
                                                        component="form"
                                                        sx={{
                                                            '& > :not(style)': { m: 1 },
                                                        }}
                                                        noValidate
                                                        autoComplete="off"
                                                    >
                                                        <Input
                                                            type="text"
                                                            pattern="[0-9]*"
                                                            placeholder="Enter Primary Contact"
                                                            name="primaryphoneNumber" inputProps={ariaLabel}
                                                            style={{ flex: 1, marginLeft: "20px", paddingTop: '14px', width: "100%" }}
                                                        />
                                                    </Box>
                                                </div>
                                            </li>
                                            {/* Fifth column of form fields */}
                                            <div style={{ width: '51ch' }}>
                                                <TextField
                                                    id="primary email address"
                                                    type="search"
                                                    label="Primary Email Address"
                                                    variant="standard"
                                                    placeholder='Ex: test@example.com'
                                                    style={{ width: "100%", marginBottom: 16 }}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div style={{ width: '51ch' }}>
                                                <TextField
                                                    id="secondary email address"
                                                    type="search"
                                                    label="Secondary Email Address"
                                                    variant="standard"
                                                    placeholder='Ex: test@example.com'
                                                    style={{ width: "100%", marginBottom: 16 }}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="col-xl-6">
                                        <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                            {/* First form field */}
                                            <li className="mb-3" id="field6">
                                                <div className="dnc-container ">
                                                    <div className='col-5 p-0'>
                                                        <div className="dnc-label-container">
                                                            <label className="custom_label">DNC</label>
                                                        </div>
                                                        <div className="radio-buttons">
                                                            <div className='p-2'>
                                                                <label htmlFor="yes" className="round-radio">Yes</label>
                                                                <input
                                                                    type="radio"
                                                                    name="field6Dnc"
                                                                    value="Yes"
                                                                    checked={formData.field6Dnc === 'Yes'}
                                                                    onChange={handleRadioChange('field6Dnc', 'field6Date')}
                                                                    id="yes"
                                                                />
                                                            </div>
                                                            <div className='p-2'>
                                                                <label htmlFor="no" className="round-radio">No</label>
                                                                <input
                                                                    type="radio"
                                                                    id="no"
                                                                    name="field6Dnc"
                                                                    value="No"
                                                                    checked={formData.field6Dnc === 'No'}
                                                                    onChange={handleRadioChange('field6Dnc', 'field6Date')}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="effective-date-container col-5 p-0">
                                                        <TextField
                                                            id="effective date"
                                                            type="date"
                                                            label="Effective Date"
                                                            variant="standard"
                                                            name="field6Date"
                                                            value={formData.field6Date}
                                                            onChange={handleInputChange}
                                                            style={{ width: "100%", margin: "6px 8px" }}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                            {/* Second form field */}
                                            <li className="mb-3" id="field7">
                                                <div className="dnc-container ">
                                                    <div className='col-5 p-0'>
                                                        <div className="dnc-label-container">
                                                            <label className="custom_label">DNC</label>
                                                        </div>
                                                        <div className="radio-buttons">
                                                            <div className='p-2'>
                                                                <label htmlFor="yes" className="round-radio">Yes</label>
                                                                <input
                                                                    type="radio"
                                                                    name="field7Dnc"
                                                                    value="Yes"
                                                                    checked={formData.field7Dnc === 'Yes'}
                                                                    onChange={handleRadioChange('field7Dnc', 'field7Date')}
                                                                    id="yes"
                                                                />
                                                            </div>
                                                            <div className='p-2'>
                                                                <label htmlFor="no" className="round-radio">No</label>
                                                                <input
                                                                    type="radio"
                                                                    id="no"
                                                                    name="field7Dnc"
                                                                    value="No"
                                                                    checked={formData.field7Dnc === 'No'}
                                                                    onChange={handleRadioChange('field7Dnc', 'field7Date')}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="effective-date-container col-5 p-0">
                                                        <TextField
                                                            id="effective date"
                                                            type="date"
                                                            label="Effective Date"
                                                            variant="standard"
                                                            name="field7Date"
                                                            value={formData.field7Date}
                                                            onChange={handleInputChange}
                                                            style={{ width: "100%", margin: "6px 8px" }}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-3" id="field8">
                                                <div className="dnc-container ">
                                                    <div className='col-5 p-0'>
                                                        <div className="dnc-label-container">
                                                            <label className="custom_label">DNC</label>
                                                        </div>
                                                        <div className="radio-buttons">
                                                            <div className='p-2'>
                                                                <label htmlFor="yes" className="round-radio">Yes</label>
                                                                <input
                                                                    type="radio"
                                                                    name="field8Dnc"
                                                                    value="Yes"
                                                                    checked={formData.field8Dnc === 'Yes'}
                                                                    onChange={handleRadioChange('field8Dnc', 'field8Date')}
                                                                    id="yes"
                                                                />
                                                            </div>
                                                            <div className='p-2'>
                                                                <label htmlFor="no" className="round-radio">No</label>
                                                                <input
                                                                    type="radio"
                                                                    id="no"
                                                                    name="field8Dnc"
                                                                    value="No"
                                                                    checked={formData.field8Dnc === 'No'}
                                                                    onChange={handleRadioChange('field8Dnc', 'field8Date')}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="effective-date-container col-5 p-0">
                                                        <TextField
                                                            id="effective date"
                                                            type="date"
                                                            label="Effective Date"
                                                            variant="standard"
                                                            name="field8Date"
                                                            value={formData.field8Date}
                                                            onChange={handleInputChange}
                                                            style={{ width: "100%", margin: "6px 8px" }}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-3" id="field9">
                                                <div className="dnc-container ">
                                                    <div className='col-5 p-0'>
                                                        <div className="dnc-label-container">
                                                            <label className="custom_label">DNC</label>
                                                        </div>
                                                        <div className="radio-buttons">
                                                            <div className='p-2'>
                                                                <label htmlFor="yes" className="round-radio">Yes</label>
                                                                <input
                                                                    type="radio"
                                                                    name="field9Dnc"
                                                                    value="Yes"
                                                                    checked={formData.field9Dnc === 'Yes'}
                                                                    onChange={handleRadioChange('field9Dnc', 'field9Date')}
                                                                    id="yes"
                                                                />
                                                            </div>
                                                            <div className='p-2'>
                                                                <label htmlFor="no" className="round-radio">No</label>
                                                                <input
                                                                    type="radio"
                                                                    id="no"
                                                                    name="field9Dnc"
                                                                    value="No"
                                                                    checked={formData.field9Dnc === 'No'}
                                                                    onChange={handleRadioChange('field9Dnc', 'field9Date')}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="effective-date-container col-5 p-0">
                                                        <TextField
                                                            id="effective date"
                                                            type="date"
                                                            label="Effective Date"
                                                            variant="standard"
                                                            name="field9Date"
                                                            value={formData.field9Date}
                                                            onChange={handleInputChange}
                                                            style={{ width: "100%", margin: "6px 8px" }}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-3" id="field11">
                                                <div className="dnc-container ">
                                                    <div className='col-5 p-0'>
                                                        <div className="dnc-label-container">
                                                            <label className="custom_label">DNC</label>
                                                        </div>
                                                        <div className="radio-buttons">
                                                            <div className='p-2'>
                                                                <label htmlFor="yes" className="round-radio">Yes</label>
                                                                <input
                                                                    type="radio"
                                                                    name="field11Dnc"
                                                                    value="Yes"
                                                                    checked={formData.field11Dnc === 'Yes'}
                                                                    onChange={handleRadioChange('field11Dnc', 'field11Date')}
                                                                    id="yes"
                                                                />
                                                            </div>
                                                            <div className='p-2'>
                                                                <label htmlFor="no" className="round-radio">No</label>
                                                                <input
                                                                    type="radio"
                                                                    id="no"
                                                                    name="field11Dnc"
                                                                    value="No" defaultChecked
                                                                    checked={formData.field11Dnc === 'No'}
                                                                    onChange={handleRadioChange('field11Dnc', 'field11Date')}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="effective-date-container col-5 p-0">
                                                        <TextField
                                                            id="effective date"
                                                            type="date"
                                                            label="Effective Date"
                                                            variant="standard"
                                                            name="field11Date"
                                                            value={formData.field11Date}
                                                            onChange={handleInputChange}
                                                            style={{ width: "100%", margin: "6px 8px" }}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="d-flex align-items-center justify-content-between" >
                                <div>
                                    <button
                                        className="btn btn-link custom-btn pb-0"
                                        onClick={toggleSecondContentVisibility}
                                        aria-expanded={isSecondContentVisible ? "true" : "false"}
                                        aria-controls="contInfoContent"
                                    >
                                        <i className={`bi bi-caret-${isSecondContentVisible ? 'down' : 'right'}`}></i>
                                        <span className="contact-info-text">Address Info</span>
                                    </button>
                                </div>
                            </div>
                            <hr style={{ borderTop: '2px solid black', width: '96%', marginTop: '0', marginBottom: '0.5rem', marginLeft: '35px' }} />

                            {
                                isSecondContentVisible && (
                                    <div>
                                        <div className="d-flex align-items-center justify-content-between  ml-3 ">
                                            <div style={{ marginLeft: '15px' }}>
                                                <button
                                                    className="btn btn-link custom-btn pb-0"
                                                    onClick={(e) => { e.stopPropagation(); e.preventDefault(); toggleLocalAddressVisibility(); }}
                                                    aria-expanded={isLocalAddressVisible ? "true" : "false"}
                                                    aria-controls="LocalAddressContent"

                                                >
                                                    <i className={`bi bi-caret-${isLocalAddressVisible ? 'down' : 'right'} custom-green`}></i>
                                                    <span className="local-address-text  custom-green">Local Address</span>
                                                </button>
                                            </div>
                                        </div>
                                        <hr style={{ borderTop: '2px solid black', width: '95%', marginTop: '0', marginBottom: '0.5rem', marginLeft: '45px' }} />
                                        {isLocalAddressVisible && (
                                            <div className="row nested-dropdown">
                                                <div className="col-xl-4">
                                                    <ul className="form-list" style={{ listStyleType: 'none', padding: 0, }}>
                                                        {/* First column of form fields */}
                                                        <TextField
                                                            id="postal code"
                                                            type="search"
                                                            label="Postal Code"
                                                            variant="standard"
                                                            placeholder='Enter postal code'
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                        />
                                                        <TextField
                                                            id="building"
                                                            type="search"
                                                            label="Building"
                                                            variant="standard"
                                                            placeholder='Building'
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                        />

                                                        <TextField
                                                            id="state"
                                                            type="search"
                                                            label="State"
                                                            variant="standard"
                                                            placeholder='Enter State'
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                        />
                                                    </ul>
                                                </div>
                                                <div className="col-xl-4">
                                                    <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                                        {/* Second column of form fields */}
                                                        <TextField
                                                            id="unit number"
                                                            type="search"
                                                            label="Unit Number"
                                                            variant="standard"
                                                            placeholder='Enter Unit Number'
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                        />
                                                        <TextField
                                                            id="street name"
                                                            type="search"
                                                            label="Street Name"
                                                            variant="standard"
                                                            placeholder='Enter Street Name'
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                        />
                                                        <TextField
                                                            id="country"
                                                            select
                                                            label="Country"
                                                            SelectProps={{
                                                                native: true,
                                                            }}
                                                            variant="standard"
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
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
                                                    </ul>
                                                </div>
                                                <div className='col-xl-4'>
                                                    <TextField
                                                        id="block"
                                                        type="search"
                                                        label="Block"
                                                        variant="standard"
                                                        placeholder='Enter block'
                                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                    />
                                                    <TextField
                                                        id="city"
                                                        type="search"
                                                        label="City"
                                                        variant="standard"
                                                        placeholder='Enter City'
                                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            }

                            {
                                isSecondContentVisible && (
                                    <div>
                                        <div className="d-flex align-items-center justify-content-between ml-3 ">
                                            <div style={{ marginLeft: '15px' }}>
                                                <button
                                                    className="btn btn-link custom-btn pb-0"
                                                    onClick={(e) => { e.stopPropagation(); e.preventDefault(); toggleOverseasAddressVisibility(); }}
                                                    aria-expanded={isOverseasAddressVisible ? "true" : "false"}
                                                    aria-controls="OverseasAddressContent"
                                                >
                                                    <i className={`bi bi-caret-${isOverseasAddressVisible ? 'down' : 'right'} custom-green`}></i>
                                                    <span className="overseas-address-text  custom-green">Overseas Residential Address</span>
                                                </button>
                                            </div>
                                        </div>
                                        <hr style={{ borderTop: '2px solid black', width: '95%', marginTop: '0', marginBottom: '0', marginLeft: '45px' }} />
                                        {isOverseasAddressVisible && (
                                            <div className="row nested-dropdown">
                                                <div className="col-xl-4">
                                                    <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                                        {/* First column of form fields */}
                                                        <TextField
                                                            id="postal code"
                                                            type="search"
                                                            label="Postal Code"
                                                            variant="standard"
                                                            placeholder='Enter postal code'
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                        />
                                                        <TextField
                                                            id="building"
                                                            type="search"
                                                            label="Building"
                                                            variant="standard"
                                                            placeholder='Building'
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                        />

                                                        <TextField
                                                            id="state"
                                                            type="search"
                                                            label="State"
                                                            variant="standard"
                                                            placeholder='Enter State'
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                        />
                                                    </ul>
                                                </div>
                                                <div className="col-xl-4">
                                                    <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                                        {/* Second column of form fields */}
                                                        <TextField
                                                            id="unit number"
                                                            type="search"
                                                            label="Unit Number"
                                                            variant="standard"
                                                            placeholder='Enter Unit Number'
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                        />
                                                        <TextField
                                                            id="street name"
                                                            type="search"
                                                            label="Street Name"
                                                            variant="standard"
                                                            placeholder='Enter Street Name'
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                        />
                                                        <TextField
                                                            id="country"
                                                            select
                                                            label="Country"
                                                            SelectProps={{
                                                                native: true,
                                                            }}
                                                            variant="standard"
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
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
                                                    </ul>
                                                </div>
                                                <div className='col-xl-4'>
                                                    <TextField
                                                        id="block"
                                                        type="search"
                                                        label="Block"
                                                        variant="standard"
                                                        placeholder='Enter block'
                                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                    />
                                                    <TextField
                                                        id="city"
                                                        type="search"
                                                        label="City"
                                                        variant="standard"
                                                        placeholder='Enter City'
                                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            }
                            {
                                isSecondContentVisible && (
                                    <div>
                                        <div className="d-flex align-items-center  ml-3">
                                            <div style={{ marginLeft: '15px' }}>
                                                <button
                                                    className="btn btn-link custom-btn pb-0"
                                                    onClick={(e) => { e.stopPropagation(); e.preventDefault(); toggleMailingAddressVisibility(); }}
                                                    aria-expanded={isMailingAddressVisible ? "true" : "false"}
                                                    aria-controls="MailingAddressContent"
                                                >
                                                    <i className={`bi bi-caret-${isMailingAddressVisible ? 'down' : 'right'} custom-green`}></i>
                                                    <span className="mailing-address-text  custom-green">Mailing Address</span>
                                                </button>
                                            </div>
                                            <div className="d-flex justify-content-start align-items-center">
                                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                                    <label className="custom_label w-auto">DNC</label>
                                                    <div className="radio-buttons">
                                                        <div className='p-2'>
                                                            <label htmlFor="yes" className="round-radio">Yes</label>
                                                            <input
                                                                type="radio"
                                                                name="field10Dnc"
                                                                value="Yes"
                                                                checked={formData.field10Dnc === 'Yes'}
                                                                onChange={handleRadioChange('field10Dnc', 'field10Date')}
                                                                id="yes"
                                                            />
                                                        </div>
                                                        <div className='p-2'>
                                                            <label htmlFor="no" className="round-radio">No</label>
                                                            <input
                                                                type="radio"
                                                                id="no"
                                                                name="field10Dnc"
                                                                value="No"
                                                                defaultChecked
                                                                checked={formData.field10Dnc === 'No'}
                                                                onChange={handleRadioChange('field10Dnc', 'field10Date')}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ms-4">
                                                    <TextField
                                                        id="effective date"
                                                        type="date"
                                                        label="Effective Date"
                                                        variant="standard"
                                                        name="field10Date"
                                                        value={formData.field10Date}
                                                        onChange={handleInputChange}
                                                        style={{ width: "100%", margin: "6px 8px" }}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                        <hr style={{ borderTop: '2px solid black', width: '95%', marginTop: '0', marginBottom: '0.5rem', marginLeft: '45px' }} />
                                        {isMailingAddressVisible && (
                                            <div className="row nested-dropdown">
                                                <div className="col-xl-4">
                                                    <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                                        {/* First column of form fields */}
                                                        <TextField
                                                            id="postal code"
                                                            type="search"
                                                            label="Postal Code"
                                                            variant="standard"
                                                            placeholder='Enter postal code'
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                        />
                                                        <TextField
                                                            id="building"
                                                            type="search"
                                                            label="Building"
                                                            variant="standard"
                                                            placeholder='Building'
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                        />

                                                        <TextField
                                                            id="state"
                                                            type="search"
                                                            label="State"
                                                            variant="standard"
                                                            placeholder='Enter State'
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                        />
                                                    </ul>
                                                </div>
                                                <div className="col-xl-4">
                                                    <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                                        {/* Second column of form fields */}
                                                        <TextField
                                                            id="unit number"
                                                            type="search"
                                                            label="Unit Number"
                                                            variant="standard"
                                                            placeholder='Enter Unit Number'
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                        />
                                                        <TextField
                                                            id="street name"
                                                            type="search"
                                                            label="Street Name"
                                                            variant="standard"
                                                            placeholder='Enter Street Name'
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                        />
                                                        <TextField
                                                            id="country"
                                                            select
                                                            label="Country"
                                                            SelectProps={{
                                                                native: true,
                                                            }}
                                                            variant="standard"
                                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
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
                                                    </ul>
                                                </div>
                                                <div className='col-xl-4'>
                                                    <TextField
                                                        id="block"
                                                        type="search"
                                                        label="Block"
                                                        variant="standard"
                                                        placeholder='Enter block'
                                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                    />
                                                    <TextField
                                                        id="city"
                                                        type="search"
                                                        label="City"
                                                        variant="standard"
                                                        placeholder='Enter City'
                                                        style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            }
                        </div >
                    </form >
                );

            case 2:
                return (
                    <form className='text-center mt-5'>
                        <div>
                            <div className="d-flex align-items-center justify-content-between" >
                                <div>
                                    <button
                                        className="btn btn-link custom-btn pb-0"
                                        onClick={toggleFirstContentVisibility}
                                        aria-expanded={isFirstContentVisible ? "true" : "false"}
                                        aria-controls="contInfoContent"
                                    >
                                        <i className={`bi bi-caret-${isFirstContentVisible ? 'down' : 'right'}`}></i>
                                        <span className="contact-info-text m-0">Educational Info</span>
                                    </button>
                                </div>
                            </div>
                            <hr style={{ borderTop: '2px solid black', width: '96%', marginTop: '0', marginBottom: '0.5rem', marginLeft: '30px' }} />

                            {isFirstContentVisible && (
                                <div className='row m-0 p-0'>
                                    <div className='col-xl-4 p-0'>
                                        <TextField
                                            id="highest education"
                                            type="search"
                                            label="Highest Education :"
                                            variant="standard"
                                            placeholder='Enter Your Highest level of education'
                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className='col-xl-4 p-0'>
                                        <TextField
                                            id="school"
                                            type="search"
                                            label="School :"
                                            variant="standard"
                                            placeholder='Enter Your school name'
                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className='col-xl-4 p-0'>
                                        <TextField
                                            id="qualification"
                                            type="search"
                                            label="Qualification :"
                                            variant="standard"
                                            placeholder='Enter Your Qualification'
                                            style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <button
                                        className="btn btn-link custom-btn pb-0"
                                        onClick={toggleSecondContentVisibility}
                                        aria-expanded={isSecondContentVisible ? "true" : "false"}
                                        aria-controls="eduInfoContent"
                                    >
                                        <i className={`bi bi-caret-${isSecondContentVisible ? 'down' : 'right'}`}></i>
                                        <span className="employment-info-text">Employment Info</span>
                                    </button>
                                </div>
                            </div>
                            <hr style={{ borderTop: '2px solid black', width: '96%', marginTop: '0', marginBottom: '0.5rem', marginLeft: '30px' }} />
                            {isSecondContentVisible && (
                                <div>
                                    <div className='row'>
                                        <div className='col-8'>
                                            <TextField
                                                id="employer"
                                                type="search"
                                                label="Employer :"
                                                variant="standard"
                                                placeholder='Enter your Employer Name'
                                                style={{ width: "90%", margin: "6px 8px" }} onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className='col-4'>
                                            <TextField
                                                id="nature of business"
                                                type="search"
                                                label="Nature of Business"
                                                variant="standard"
                                                placeholder='Enter Nature of Business'
                                                style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <TextField
                                                id="occupation"
                                                type="search"
                                                label="Occupation"
                                                variant="standard"
                                                placeholder='Enter Your Occupation'
                                                style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className='col-4'>
                                            <TextField
                                                id="nature of employment"
                                                type="search"
                                                label="Nature of Employment"
                                                variant="standard"
                                                placeholder='Nature of Employment'
                                                style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className='col-4'>
                                            <TextField
                                                id="designation"
                                                type="search"
                                                label="Designation"
                                                variant="standard"
                                                placeholder='Enter Your Designation'
                                                style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <TextField
                                                id="length of service"
                                                type="search"
                                                label="Length of Service"
                                                variant="standard"
                                                placeholder='Length of Service'
                                                style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className='col-4'>
                                            <TextField
                                                id="annual income"
                                                type="search"
                                                label="Annual Income"
                                                variant="standard"
                                                placeholder='Enter Annual Income'
                                                style={{ width: "80%", margin: "6px 8px" }} onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div> <br />
                    </form>
                );

            case 3:
                return (
                    <div style={{ margin: '12px' }}>
                        <form className='text-center  '>
                            <div className="d-flex align-items-center justify-content-between">

                                <button
                                    className="btn btn-link custom-btn p-0 pb-0"
                                    onClick={toggleFirstContentVisibility}
                                    aria-expanded={isFirstContentVisible ? "true" : "false"}
                                    aria-controls="eduInfoContent"
                                >
                                    <i className={`bi bi-caret-${isFirstContentVisible ? 'down' : 'right'}`}></i>
                                    <span className="education-info-text">Compliance Info</span>
                                </button>
                                <div style={{ padding: '0', margin: '0', paddingBottom: '5px' }}>
                                    <Popupform id="exampleModal1" />
                                </div>
                            </div>
                            <hr style={{ borderTop: '2px solid #000000', width: '98.5%', marginTop: '-5px', marginBottom: '0.5rem', marginLeft: '18px' }} />
                        </form>


                        {isFirstContentVisible && (
                            <ColumnGroupingTable />
                        )}
                    </div>
                );

            case 4:
                return (
                    <div style={{ marginTop: '50px', marginLeft: '25px', marginBottom: '30px' }}>
                        <label htmlFor="name">Name</label><br />
                        <div className="search-boxes">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Search Here..."
                                value={searchTerm}
                                onChange={handleSearch}
                                aria-label="Search"
                            />
                            <i
                                className="bi bi-search search_icon"
                                aria-hidden="true"
                                onClick={handleSearchIconClick}
                                style={{ cursor: 'pointer' }}
                            ></i>
                        </div>
                    </div>

                );

            case 5:
                return (
                    <form className='text-center mt-2'>
                        <div className="d-flex align-items-center justify-content-between pb-0 ">
                            <div>
                                <button
                                    className="btn btn-link custom-btn"
                                    onClick={toggleFirstContentVisibility}
                                    aria-expanded={isFirstContentVisible ? "true" : "false"}
                                    aria-controls="eduInfoContent"
                                >
                                    <i className={`bi bi-caret-${isFirstContentVisible ? 'down' : 'right'}`}></i>
                                    <span className="education-info-text">Marketing Info</span>
                                </button>
                            </div>
                        </div>
                        <hr style={{ borderTop: '2px solid #000000', width: '98%', marginTop: '-5px', marginBottom: '0.5rem', marginLeft: '29px' }} />
                        {isFirstContentVisible && (
                            <div className="row ms-5">
                                <div className="col-xl-6">
                                    <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>
                                        <li className="mb-3" id="field12">
                                            <div className="dnc-container ">
                                                <div className='col-4 p-0'>
                                                    <div className="dnc-label-container">
                                                        <label className="custom_label">CALL</label>
                                                    </div>
                                                    <div className="radio-buttons">
                                                        <div className='p-2'>
                                                            <label htmlFor="yes" className="round-radio">Yes</label>
                                                            <input
                                                                type="radio"
                                                                name="field12Dnc"
                                                                value="Yes"
                                                                checked={formData.field12Dnc === 'Yes'}
                                                                onChange={handleRadioChange('field12Dnc', 'field12Date')}
                                                                id="yes"
                                                            />
                                                        </div>
                                                        <div className='p-2'>
                                                            <label htmlFor="no" className="round-radio">No</label>
                                                            <input
                                                                type="radio"
                                                                id="no"
                                                                name="field12Dnc"
                                                                value="No"
                                                                checked={formData.field12Dnc === 'No'}
                                                                onChange={handleRadioChange('field12Dnc', 'field12Date')}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="effective-date-container col-6 p-0">
                                                    <TextField
                                                        id="Consent date"
                                                        type="date"
                                                        label="Consent Date"
                                                        variant="standard"
                                                        name="field12Date"
                                                        value={formData.field12Date}
                                                        onChange={handleInputChange}
                                                        style={{ width: "100%", margin: "6px 8px" }}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-3" id="field13">
                                            <div className="dnc-container ">
                                                <div className='col-4 p-0'>
                                                    <div className="dnc-label-container">
                                                        <label className="custom_label">SMS</label>
                                                    </div>
                                                    <div className="radio-buttons">
                                                        <div className='p-2'>
                                                            <label htmlFor="yes" className="round-radio">Yes</label>
                                                            <input
                                                                type="radio"
                                                                name="field13Dnc"
                                                                value="Yes"
                                                                checked={formData.field13Dnc === 'Yes'}
                                                                onChange={handleRadioChange('field13Dnc', 'field13Date')}
                                                                id="yes"
                                                            />
                                                        </div>
                                                        <div className='p-2'>
                                                            <label htmlFor="no" className="round-radio">No</label>
                                                            <input
                                                                type="radio"
                                                                id="no"
                                                                name="field13Dnc"
                                                                value="No"
                                                                checked={formData.field13Dnc === 'No'}
                                                                onChange={handleRadioChange('field13Dnc', 'field13Date')}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="effective-date-container col-6 p-0">
                                                    <TextField
                                                        id="consent date"
                                                        type="date"
                                                        label="Consent Date"
                                                        variant="standard"
                                                        name="field13Date"
                                                        value={formData.field13Date}
                                                        onChange={handleInputChange}
                                                        style={{ width: "100%", margin: "6px 8px" }}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-3" id="field14">
                                            <div className="dnc-container ">
                                                <div className='col-4 p-0'>
                                                    <div className="dnc-label-container">
                                                        <label className="custom_label">Letter</label>
                                                    </div>
                                                    <div className="radio-buttons">
                                                        <div className='p-2'>
                                                            <label htmlFor="yes" className="round-radio">Yes</label>
                                                            <input
                                                                type="radio"
                                                                name="field14Dnc"
                                                                value="Yes"
                                                                checked={formData.field14Dnc === 'Yes'}
                                                                onChange={handleRadioChange('field14Dnc', 'field14Date')}
                                                                id="yes"
                                                            />
                                                        </div>
                                                        <div className='p-2'>
                                                            <label htmlFor="no" className="round-radio">No</label>
                                                            <input
                                                                type="radio"
                                                                id="no"
                                                                name="field14Dnc"
                                                                value="No"
                                                                checked={formData.field14Dnc === 'No'}
                                                                onChange={handleRadioChange('field14Dnc', 'field14Date')}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="effective-date-container col-6 p-0">
                                                    <TextField
                                                        id="consent date"
                                                        type="date"
                                                        label="Consent Date"
                                                        variant="standard"
                                                        name="field14Date"
                                                        value={formData.field14Date}
                                                        onChange={handleInputChange}
                                                        style={{ width: "100%", margin: "6px 8px" }}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-6">
                                    <ul className="form-list" style={{ listStyleType: 'none', padding: 0 }}>

                                        <li className="mb-3" id="field15">
                                            <div className="dnc-container ">
                                                <div className='col-4 p-0'>
                                                    <div className="dnc-label-container">
                                                        <label className="custom_label">Email</label>
                                                    </div>
                                                    <div className="radio-buttons">
                                                        <div className='p-2'>
                                                            <label htmlFor="yes" className="round-radio">Yes</label>
                                                            <input
                                                                type="radio"
                                                                name="field15Dnc"
                                                                value="Yes"
                                                                checked={formData.field15Dnc === 'Yes'}
                                                                onChange={handleRadioChange('field15Dnc', 'field15Date')}
                                                                id="yes"
                                                            />
                                                        </div>
                                                        <div className='p-2'>
                                                            <label htmlFor="no" className="round-radio">No</label>
                                                            <input
                                                                type="radio"
                                                                id="no"
                                                                name="field15Dnc"
                                                                value="No"
                                                                checked={formData.field15Dnc === 'No'}
                                                                onChange={handleRadioChange('field15Dnc', 'field15Date')}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="effective-date-container col-6 p-0">
                                                    <TextField
                                                        id="Consent date"
                                                        type="date"
                                                        label="Consent Date"
                                                        variant="standard"
                                                        name="field15Date"
                                                        value={formData.field15Date}
                                                        onChange={handleInputChange}
                                                        style={{ width: "100%", margin: "6px 8px" }}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-3" id="field16">
                                            <div className="dnc-container ">
                                                <div className='col-4 p-0'>
                                                    <div className="dnc-label-container">
                                                        <label className="custom_label">Fax</label>
                                                    </div>
                                                    <div className="radio-buttons">
                                                        <div className='p-2'>
                                                            <label htmlFor="yes" className="round-radio">Yes</label>
                                                            <input
                                                                type="radio"
                                                                name="field16Dnc"
                                                                value="Yes"
                                                                checked={formData.field16Dnc === 'Yes'}
                                                                onChange={handleRadioChange('field16Dnc', 'field16Date')}
                                                                id="yes"
                                                            />
                                                        </div>
                                                        <div className='p-2'>
                                                            <label htmlFor="no" className="round-radio">No</label>
                                                            <input
                                                                type="radio"
                                                                id="no"
                                                                name="field16Dnc"
                                                                value="No"
                                                                checked={formData.field16Dnc === 'No'}
                                                                onChange={handleRadioChange('field16Dnc', 'field16Date')}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="effective-date-container col-6 p-0">
                                                    <TextField
                                                        id="consent date"
                                                        type="date"
                                                        label="Consent Date"
                                                        variant="standard"
                                                        name="field16Date"
                                                        value={formData.field16Date}
                                                        onChange={handleInputChange}
                                                        style={{ width: "100%", margin: "6px 8px" }}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-3" id="field17">
                                            <div className="dnc-container ">
                                                <div className='col-4 p-0'>
                                                    <div className="dnc-label-container">
                                                        <label className="custom_label">Only Receive Electronic Version</label>
                                                    </div>
                                                    <div className="radio-buttons">
                                                        <div className='p-2'>
                                                            <label htmlFor="yes" className="round-radio">Yes</label>
                                                            <input
                                                                type="radio"
                                                                name="field17Dnc"
                                                                value="Yes"
                                                                checked={formData.field17Dnc === 'Yes'}
                                                                onChange={handleRadioChange('field17Dnc', 'field17Date')}
                                                                id="yes"
                                                            />
                                                        </div>
                                                        <div className='p-2'>
                                                            <label htmlFor="no" className="round-radio">No</label>
                                                            <input
                                                                type="radio"
                                                                id="no"
                                                                name="field17Dnc"
                                                                value="No"
                                                                checked={formData.field17Dnc === 'No'}
                                                                onChange={handleRadioChange('field17Dnc', 'field17Date')}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="effective-date-container col-6 p-0">
                                                    <TextField
                                                        id="consent date"
                                                        type="date"
                                                        label="Consent Date"
                                                        variant="standard"
                                                        name="field17Date"
                                                        value={formData.field17Date}
                                                        onChange={handleInputChange}
                                                        style={{ width: "100%", margin: "6px 8px" }}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                    </form>
                );

            case 6:
                return (
                    <form className='text-center mt-3 p-3 pt-0'>
                        <div>
                            <div className="d-flex align-items-center justify-content-between  pb-0">
                                <div>
                                    <button
                                        className="btn btn-link custom-btn"
                                        onClick={toggleFirstContentVisibility}
                                        aria-expanded={isFirstContentVisible ? "true" : "false"}
                                        aria-controls="contInfoContent"
                                    >
                                        <i className={`bi bi-caret-${isFirstContentVisible ? 'down' : 'right'}`}></i>
                                        <span className="contact-info-text m-0">Insert</span>
                                    </button>
                                </div>
                            </div>
                            <hr style={{ borderTop: '2px solid #000000', width: '98%', marginTop: '-5px', marginBottom: '0.5rem', marginLeft: '30px' }} />
                            {isFirstContentVisible && (
                                <InsertTable />
                            )}
                        </div>
                        <div>
                            <div className="d-flex align-items-center justify-content-between pb-0">
                                <div>
                                    <button
                                        className="btn btn-link custom-btn"
                                        onClick={toggleSecondContentVisibility}
                                        aria-expanded={isSecondContentVisible ? "true" : "false"}
                                        aria-controls="contInfoContent"
                                    >
                                        <i className={`bi bi-caret-${isSecondContentVisible ? 'down' : 'right'}`}></i>
                                        <span className="contact-info-text m-0">Update</span>
                                    </button>
                                </div>
                            </div>
                            <hr style={{ borderTop: '2px solid #000000', width: '98%', marginTop: '-5px', marginBottom: '0.5rem', marginLeft: '30px' }} />
                            {isSecondContentVisible && (
                                <UpdateTable />
                            )}
                        </div>
                        <div>
                            <div className="d-flex align-items-center justify-content-between pb-0">
                                <div>
                                    <button
                                        className="btn btn-link custom-btn"
                                        onClick={toggleThirdContentVisibility}
                                        aria-expanded={isThirdContentVisible ? "true" : "false"}
                                        aria-controls="contInfoContent"
                                    >
                                        <i className={`bi bi-caret-${isThirdContentVisible ? 'down' : 'right'}`}></i>
                                        <span className="contact-info-text m-0">Delete</span>
                                    </button>
                                </div>
                            </div>
                            <hr style={{ borderTop: '2px solid #000000', width: '98%', marginTop: '-5px', marginBottom: '0.5rem', marginLeft: '30px' }} />
                            {isThirdContentVisible && (
                                <DelTable />
                            )}
                        </div>
                        <div>
                            <div className="d-flex align-items-center justify-content-between pb-0">
                                <div>
                                    <button
                                        className="btn btn-link custom-btn"
                                        onClick={toggleFourthContentVisibility}
                                        aria-expanded={isFourthContentVisible ? "true" : "false"}
                                        aria-controls="contInfoContent"
                                    >
                                        <i className={`bi bi-caret-${isFourthContentVisible ? 'down' : 'right'}`}></i>
                                        <span className="contact-info-text m-0">AutoSync</span>
                                    </button>
                                </div>
                            </div>
                            <hr style={{ borderTop: '2px solid #000000', width: '98%', marginTop: '-5px', marginBottom: '0.5rem', marginLeft: '30px' }} />
                            {isFourthContentVisible && (
                                <AutoSyncTable />
                            )}
                        </div>
                    </form>
                );

            default:
                return null;
        }
    };

    return (
        <Modal show={show} onHide={() => setShowModal(false)} className="custom-modal" size="xl"
            aria-labelledby="contained-modal-title-vcenter" centered backdrop="static">
            <Modal.Header style={{ backgroundColor: '#22668d', color: '#fff', padding: '1rem' }}>
                <Modal.Title id="contained-modal-title-vcenter">
                    NEW PERSONAL INFO
                </Modal.Title>
                <CloseButton onClick={() => setShowAddCRMForm(false)} aria-label="Close" variant="white" />
            </Modal.Header>
            <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto', overflowX: 'hidden', margin: '-5px 0 0 0', padding: '0' }}>
                <Box sx={{ position: 'sticky', top: 0, zIndex: 1, bgcolor: 'background.paper' }}>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                            },
                        }}
                    >
                        {stepNames.map((name, index) => (
                            <Tab key={index} label={name} />
                        ))}
                    </Tabs>
                </Box>
                {renderStepContent()}
            </Modal.Body>
            <Modal.Footer style={{ position: 'sticky', bottom: 0, zIndex: 999 }}>
                <Button variant="outline-secondary" onClick={handleBackButtonClick}>Back</Button>
                {activeTab < 6 && <Button variant="outline-primary" onClick={handleSaveAndNext} >Save & Next</Button>}
                {activeTab === 6 && <Button variant="outline-primary" onClick={handleSave}>Save</Button>}
            </Modal.Footer>

        </Modal>
    );
};

export default AddCRMForm;
