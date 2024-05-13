import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState } from "react";
import "./ReportTable.css";



const columns = [

  { id: "RecordID", label: " Record ID", maxwidth: "auto", fontWeight: '600 !important' },
  { id: "PageName", label: "Page Name", maxwidth: "100px" },
  { id: "InsertedBy", label: "Inserted By", maxwidth: "200px" },
  { id: "InsertedOn", label: "Inserted On", maxwidth: "auto" },
  

];


function createData(
  RecordID,
  PageName,
  InsertedBy,
  InsertedOn,
  
) {
  return {
    RecordID,
    PageName,
    InsertedBy,
    InsertedOn,
   
  };
}

const rows = [
  createData(
    123456,
    "Iboss Crm Contact Info",
    "main staff",
    "07-May-2024 13:02:01",
  ),
  createData(
    123456,
    "Iboss Crm Contact Info",
    "main staff",
    "07-May-2024 13:02:01",
  ),
  createData(
    123456,
    "Iboss Crm Contact Info",
    "main staff",
    "07-May-2024 13:02:01",
  ),

];

function InsertTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [search, setSearch] = useState("")


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
};
const handleSearchIconClick = () => {
    };

  return (
    <Paper sx={{ width: "100%", }}>
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
            variant="standard" onChange={handleSearch}
            style={{
              marginBottom: "8px",
              width: "230px",
              paddingRight: "30px",


            }}
            InputProps={{
              endAdornment: (
                <SearchRoundedIcon style={{ color: "rgba(0, 0, 0, 0.54)", width: '24px', height: '26px' }} />
              ),
            }}
            onClick={handleSearchIconClick}
          />
        </div>
      </div>
      <TableContainer
        sx={{ marginTop: "10px" }}
      >

        <Table stickyHeader aria-label="DataTable">
          <TableHead >
            <TableRow style={{ backgroundColor: "#f5f5f5" }}>
              {columns.map((column, index) => (
                <TableCell
                  key={column.id}
                  align="center"
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: "bold",
                    color: "#333",
                    border: "1px solid #ddd",
                    borderBottom: "2px solid #ddd",
                    borderRight: index === columns.length - 1 ? "1px solid #ddd" : "none",
                    padding: "12px",     textAlign: 'start',
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.filter((row) => {
              return search === "" ? row : row.faProductName.toLowerCase().includes(search.toLowerCase()) ||
                row.ID.toString().includes(search.toString())
            })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      return (
                        <TableCell
                          key={column.id}
                          align="center"
                          style={{ padding: "12px",     textAlign: 'start', }}
                        >
                          {column.id !== "actions" ? (
                            row[column.id]
                          ) : (
                            <div>
                              <IconButton
                                aria-label="actions"
                                aria-controls="actions-menu"
                                aria-haspopup="true"
                                onClick={handleMenuOpen}
                              >
                                <MoreVertIcon style={{ width: '24px', height: '24px' }} />
                              </IconButton>
                              <Menu
                                id="actions-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                PaperProps={{
                                  elevation: 2,
                                }}
                              >
                              </Menu>
                            </div>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>

      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={rows.length}
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
export default InsertTable;