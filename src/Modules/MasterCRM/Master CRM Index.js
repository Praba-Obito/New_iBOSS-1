import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Button } from 'react-bootstrap';
import AddCRMForm from './AddCRMForm';
import Filter from '../../Modules/MasterCRM/Filter.js';
import { DataGrid } from '@mui/x-data-grid';
import './Master CRM Index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const columns = [
    { field: 'farCode', headerName: 'FAR Code', width: 200 },
    { field: 'farName', headerName: 'FAR Name', width: 450 },
    { field: 'nric', headerName: 'NRIC No/Passport No/FIN No', width: 350 },
    { field: 'nricName', headerName: 'NRIC Name/Business Name', width: 450 },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 300,
        renderCell: (params) => (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <Dropdown >
                            <Dropdown.Toggle variant="outline-primary" className="no-toggle">
                                Action
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                <Dropdown.Item eventKey="viewCRM" className="dd-action m-0 p-0 ps-3 text-start">View CRM</Dropdown.Item>
                                <Dropdown.Item eventKey="edit" className="dd-action m-0 ps-3 p-0 text-start">Edit</Dropdown.Item>
                                <Dropdown.Item eventKey="copy" className="dd-action m-0 p-0 ps-3 text-start">Copy</Dropdown.Item>
                                <Dropdown.Item eventKey="accountSummary" className="dd-action m-0 p-0 ps-3 pe-2 text-start">Account Summary</Dropdown.Item>
                                <Dropdown.Item eventKey="log" className="dd-action m-0 p-0 ps-3 text-start">Log</Dropdown.Item>
                                <Dropdown.Item eventKey="delete" className="dd-action m-0 p-0 ps-3 text-start">Delete</Dropdown.Item>
                                <Dropdown.Item eventKey="viewDocuments" className="dd-action m-0 p-0 ps-3 text-start">View Documents</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="col-lg-6">
                        <Dropdown >
                            <Dropdown.Toggle variant="outline-success" className="no-toggle">
                                Add New
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                <Dropdown.Item href="#" className="dd-add-new m-0 p-0 ps-3 text-start">Life Insurance</Dropdown.Item>
                                <Dropdown.Item href="#" className="dd-add-new m-0 p-0 ps-3 pe-2 text-start">General Insurance</Dropdown.Item>
                                <Dropdown.Item href="#" className="dd-add-new m-0 p-0 ps-3 text-start">Group Insurance</Dropdown.Item>
                                <Dropdown.Item href="#" className="dd-add-new m-0 p-0 ps-3 text-start">Investment</Dropdown.Item>
                                <Dropdown.Item href="#" className="dd-add-new m-0 p-0 ps-3 text-start">Other Services</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        ),
    },
];

const rows = [
    { id: 0, farCode: '123456', farName: 'Company A', nric: '111-222-333', nricName: 'Customer A' },
    { id: 1, farCode: '789012', farName: 'Company B', nric: '444-555-666', nricName: 'Customer B' },
    { id: 2, farCode: '345678', farName: 'Company C', nric: '777-888-999', nricName: 'Customer C' },
    { id: 3, farCode: '901234', farName: 'Company D', nric: '123-456-789', nricName: 'Customer D' },
    { id: 4, farCode: '567890', farName: 'Company E', nric: '987-654-321', nricName: 'Customer E' },
    { id: 5, farCode: '234567', farName: 'Company F', nric: '135-792-468', nricName: 'Customer F' },
    { id: 6, farCode: '890123', farName: 'Company G', nric: '246-813-579', nricName: 'Customer G' },
    { id: 7, farCode: '456789', farName: 'Company H', nric: '369-258-147', nricName: 'Customer H' },
    { id: 8, farCode: '012345', farName: 'Company I', nric: '987-654-321', nricName: 'Customer I' },
    { id: 9, farCode: '678901', farName: 'Company J', nric: '753-159-264', nricName: 'Customer J' },
    { id: 10, farCode: '678901', farName: 'Company J', nric: '753-159-264', nricName: 'Customer J' },
    { id: 11, farCode: '678901', farName: 'Company J', nric: '753-159-264', nricName: 'Customer J' },
    { id: 12, farCode: '678901', farName: 'Company J', nric: '753-159-264', nricName: 'Customer J' },
    { id: 13, farCode: '678901', farName: 'Company J', nric: '753-159-264', nricName: 'Customer J' },
    { id: 14, farCode: '678901', farName: 'Company J', nric: '753-159-264', nricName: 'Customer J' },
];

const MasterCRMIndex = () => {
    const [searchValue, setSearchValue] = useState('');
    const [showAddCRMForm, setShowAddCRMForm] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [sortModel, setSortModel] = useState([{ field: 'farCode', sort: 'asc' }]);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleAddCRMButtonClick = () => {
        setShowAddCRMForm(true);
    };

    const handleSortModelChange = (newSortModel) => {
        setSortModel(newSortModel);
    };

    const filteredRows = rows.filter(row =>
        row.farCode.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.farName.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.nric.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.nricName.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div style={{ marginTop: '90px' }}>
            <div className="container-fluid custom_design p-0">
                <div className="row g-0" style={{ backgroundColor: "#fff", borderBottom: "1px solid #dad7d7", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                    <div className="col-12 d-flex align-items-center">
                        <div className="input-group search-container ps-4 mb-1 p-2">
                            <div style={{ position: "relative" }}>
                                <div className="search-container">
                                    <input
                                        type="search"
                                        className="search-input"
                                        placeholder="Type a Keyword..."
                                        value={searchValue}
                                        onChange={handleSearchChange}
                                    />
                                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                                </div>
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
                <div className="table-container text-start">
                    <DataGrid
                        rows={filteredRows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        sortingOrder={['asc', 'desc']}
                        sortModel={sortModel}
                        onSortModelChange={handleSortModelChange}
                        disableSelectionOnClick classes={{ selectedRowCount: "hidden-selected-row-count" }}
                    />
                </div>
            </div>

            {/* Add CRM Form */}
            <AddCRMForm show={showAddCRMForm} setShowAddCRMForm={setShowAddCRMForm} />
        </div>
    );
};

export default MasterCRMIndex;
