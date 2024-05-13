import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./ReportTable.css";

const columns = [
  { id: "AIClient", label: "AI Client", maxWidth: "auto", fontWeight: '600 !important' },
  { id: "OIClient", label: "OI Client", maxWidth: "100px" },
  { id: "PEP", label: "PEP", maxWidth: 170 },
  { id: "CDDDateofSearch", label: "CDD Date of Search", maxWidth: 170 },
  { id: "CDDNumberofHit", label: "CDD Number of Hit", maxWidth: 170 },
  { id: "CDDOutcome", label: "CDD Outcome", maxWidth: 170 },
  { id: "ECDDOutcome", label: "ECDD Outcome", maxWidth: 170 },
  { id: "Action", label: "Action", maxWidth: 170 },
];

function createData(
  AIClient,
  OIClient,
  PEP,
  CDDDateofSearch,
  CDDNumberofHit,
  CDDOutcome,
  ECDDOutcome,
  Action
) {
  return {
    AIClient,
    OIClient,
    PEP,
    CDDDateofSearch,
    CDDNumberofHit,
    CDDOutcome,
    ECDDOutcome,
    Action
  };
}

const rows = [
  createData(
    87685,
    "06/08/2024",
    "HSBC Life",
    "China Life SaveForward Endowment Plan",
    "Financial Alliance Pte Ltd",
    "S8765432Z",
    "Test Chow Keng",
  ),
  createData(
    87685,
    "06/08/2024",
    "HSBC Life",
    "China Life SaveForward Endowment Plan",
    "Financial Alliance Pte Ltd",
    "S8765432Z",
    "Test Chow Keng",
  ),
  
];

function ColumnGroupingTable({ value, onChange }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [search, setSearch] = React.useState('');
  const [filteredRows, setFilteredRows] = React.useState(rows);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };

  // const handleMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredRows = rows.filter((row) => {
      return columns.some((column) => {
        const value = row[column.id];
        return value && value.toString().toLowerCase().includes(searchTerm);
      });
    });
    setFilteredRows(filteredRows);
  };
  

  return (
    <Paper sx={{ width: "100%", marginTop: '35px'}}>
      
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          position: "sticky !important",
          height: '25px', paddingBottom: "20px"
        }}
      >
        <div
          className="td-search"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            style={{
              marginTop: "0px",
              width: "230px",
              paddingRight: "30px",
            }}
            InputProps={{
              endAdornment: (
                <SearchRoundedIcon style={{ color: "rgba(0, 0, 0, 0.54)", width: '24px', height: '26px' }} />
              ),
            }}
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
      <TableContainer sx={{ marginTop: "10px" }}>
        <Table stickyHeader aria-label="DataTable">
          <TableHead >
            <TableRow style={{ backgroundColor: "#f5f5f5", textAlign:'start' }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: "bold",
                    color: "#333",
                    border: "1px solid #ddd",
                    borderBottom: "2px solid #ddd",
                    padding: "12px"
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) =>{
                  const value = row[column.id];
                  return (
                    <TableCell
                      key={column.id}
                      align="center"
                      style={{ padding: "12px", textAlign:"start" }}
                    >
                      {column.format && typeof value === "number"
                        ? column.format(value)
                        : value}
                    </TableCell>
                  )})}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage={`Show Entities`}
        labelDisplayedRows={({ from, to, count }) =>
          `Showing ${from}-${to} of ${count} Entities`
        }
      />
      <style>
        {`
    .css-pdct74-MuiTablePagination-selectLabel,
    .css-levciy-MuiTablePagination-displayedRows {
      margin-bottom: 0 !important;
      display: flex;
      align-items: center;
      justify-content: space-between !important;
    }
    .css-pdct74-MuiTablePagination-actions{
      display:flex;
      align-items: center;
      text-Align:flex-start;
    }
  `}
      </style>
    </Paper>
  );
}

export default ColumnGroupingTable;
