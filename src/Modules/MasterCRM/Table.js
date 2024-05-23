import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Menu, MenuItem, InputAdornment, TextField } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./ReportTable.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const initialRows = [
  { id: 1, AIClient: 123456, OIClient: '06-May-2024', PEP: 'HSBC Life', CDDDateofSearch: 'China Life SaveForward Plan', CDDNumberofHit: 'Financial Alliance Pte Ltd', CDDOutcome: 'S0123432Z', ECDDOutcome: 'Test Chow Keng' },
  { id: 2, AIClient: 100054, OIClient: '10-Jun-2024', PEP: 'ITC', CDDDateofSearch: 'Hindustan Uniliever', CDDNumberofHit: 'Financial Alliance', CDDOutcome: 'S8765432Z', ECDDOutcome: 'Test Chow Keng' },
  { id: 3, AIClient: 199956, OIClient: '26-Apr-2024', PEP: 'HSB', CDDDateofSearch: 'ITC Product', CDDNumberofHit: 'FAPL', CDDOutcome: 'SAK50132Z', ECDDOutcome: 'Test Chow Keng' },
];

const columns = [
  { field: 'AIClient', headerName: 'AI Client', width: 150, sortable: true },
  { field: 'OIClient', headerName: 'OI Client', width: 170, sortable: true },
  { field: 'PEP', headerName: 'PEP', width: 120, sortable: true },
  { field: 'CDDDateofSearch', headerName: 'CDD Date of Search', width: 270, sortable: true },
  { field: 'CDDNumberofHit', headerName: 'CDD Number of Hit', width: 250, sortable: true },
  { field: 'CDDOutcome', headerName: 'CDD Outcome', width: 150, sortable: true },
  { field: 'ECDDOutcome', headerName: 'ECDD Outcome', width: 200, sortable: true },
  { field: 'Action', headerName: 'Action', width: 100, renderCell: (params) => <ActionCell {...params} /> },
];

function ActionCell(params) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-controls="action-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="action-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </div>
  );
}

function ColumnGroupingTable() {
  const [searchValue, setSearchValue] = useState('');
  const [filteredRows, setFilteredRows] = useState(initialRows);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    filterRows(value);
  };

  const filterRows = (searchQuery) => {
    const filtered = initialRows.filter(row => {
      return Object.values(row).some(val =>
        typeof val === 'string' && val.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredRows(filtered);
  };
  const initialSortModel = columns.map(column => ({ field: column.field, sort: 'asc' }));

  const [sortModel, setSortModel] = React.useState(initialSortModel);

  return (
    <div>
      <div className="input-group search-container" >
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
      <div style={{ height: 'auto', width: '97%', marginTop: '15px', marginLeft: '20px' }}>
        <DataGrid rows={filteredRows} columns={columns} sortModel={sortModel} onSortModelChange={setSortModel} classes={{ selectedRowCount: "hidden-selected-row-count" }} />
      </div>
    </div>
  );
}

export default ColumnGroupingTable;
