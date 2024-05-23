import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import "./ReportTable.css";

const rows = [
  { id: 1, RecordID: 123456, PageName: 'Iboss Crm Contact Info', InsertedBy: 'main staff', InsertedOn: '07-May-2024 13:02:01' },
  { id: 2, RecordID: 100054, PageName: 'Faith Consultancy', InsertedBy: 'admin', InsertedOn: '09-May-2024 15:02:01' },
  { id: 3, RecordID: 199956, PageName: 'Thinkbig Infotech', InsertedBy: 'new staff', InsertedOn: '13-May-2024 11:02:01' },
];

const columns = [
  { field: 'RecordID', headerName: 'Record ID', width: 150 },
  { field: 'PageName', headerName: 'Page Name', width: 350 },
  { field: 'InsertedBy', headerName: 'Inserted By', width: 350 },
  { field: 'InsertedOn', headerName: 'Inserted On', width: 200 },
];

function DelTable() {
  const [searchValue, setSearchValue] = useState('');
  const [filteredRows, setFilteredRows] = useState(rows);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    filterRows(value);
  };

  const filterRows = (searchQuery) => {
    const filtered = rows.filter(row => {
      return Object.values(row).some(val =>
        typeof val === 'string' && val.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredRows(filtered);
  };
  const initialSortModel = columns.map(column => ({ field: column.field, sort: 'asc' })); // Set initial sort configuration for each column

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

export default DelTable;
