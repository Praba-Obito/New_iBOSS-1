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
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { useState } from "react";
import Filter from './Filter'
import './ReportTable.css'
import LiEdit from "./LiEdit";


const columns = [

  { id: "ID", label: "ID", maxwidth: "auto", fontWeight:'600 !important' },
  { id: "submissionDate", label: "Submission Date", maxwidth: "100px" },
  { id: "preferredCompanyName", label: "Preferred Company Name", maxwidth: 170 },
  { id: "faProductName", label: "FA Product Name / Autosync product Name", maxwidth: 170 },
  { id: "servicingfar", label: "Servicing FAR", maxwidth: 170 },
  { id: "nricNumber", label: "NRIC Number / Biz Reg No", maxwidth: 170 },
  { id: "clientName", label: "Client Name / Biz Name", maxwidth: 170 },
  { id: "lifeinsuredName", label: "Life Insured Name", maxwidth: 170 },
  { id: "policyNumber", label: "Policy Number", maxwidth: 170 },
  { id: "policyStatus", label: "Policy Status", maxwidth: 170 },
  { id: "actions", label: "Actions", maxwidth: 170 },
];


function createData(
  ID,
  submissionDate,
  preferredCompanyName,
  faProductName,
  servicingfar,
  nricNumber,
  clientName,
  lifeinsuredName,
  policyNumber,
  policyStatus,
  actions
) {
  return {
    ID,
    submissionDate,
    preferredCompanyName,
    faProductName,
    servicingfar,
    nricNumber,
    clientName,
    lifeinsuredName,
    policyNumber,
    policyStatus,
    actions,
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
    "Test Chow Keng",
    "Test_123",
    "Inforce"
  ),
  createData(
    87685,
    "06/08/2024",
    "HSBC Life",
    "Josi",
    "Financial Alliance Pte Ltd",
    "S8765432Z",
    "Test Chow Keng",
    "Test Chow Keng",
    "Test_123",
    "Inforce"
  ),
  createData(
    87685,
    "06/08/2024",
    "HSBC Life",
    "Renuka",
    "Financial Alliance Pte Ltd",
    "S8765432Z",
    "Test Chow Keng",
    "Test Chow Keng",
    "Test_123",
    "Inforce"
  ),
  createData(
    87685,
    "06/08/2024",
    "HSBC Life",
    "Sriram",
    "Financial Alliance Pte Ltd",
    "S8765432Z",
    "Test Chow Keng",
    "Test Chow Keng",
    "Test_123",
    "Inforce"
  ),
  createData(
    87685,
    "06/08/2024",
    "HSBC Life",
    "Nallai",
    "Financial Alliance Pte Ltd",
    "S8765432Z",
    "Test Chow Keng",
    "Test Chow Keng",
    "Test_123",
    "Inforce"
  ),
  createData(
    87685,
    "06/08/2024",
    "HSBC Life",
    "TOBI",
    "Financial Alliance Pte Ltd",
    "S8765432Z",
    "Test Chow Keng",
    "Test Chow Keng",
    "Test_123",
    "Inforce"
  ),
  createData(
    87685,
    "06/08/2024",
    "HSBC Life",
    "YUTA",
    "Financial Alliance Pte Ltd",
    "S8765432Z",
    "Test Chow Keng",
    "Test Chow Keng",
    "Test_123",
    "Inforce"
  ),
  createData(
    87685,
    "06/08/2024",
    "HSBC Life",
    "Nallai",
    "Financial Alliance Pte Ltd",
    "S8765432Z",
    "Test Chow Keng",
    "Test Chow Keng",
    "Test_123",
    "Inforce"
  ),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [search,setSearch]=useState("")
  // const [rows, setRows] = useState([rows]);
  const [isEditing, setIsEditing] = useState(false);

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

  // const handleDeleteClick = (id) => {
    
  //   const updatedRows = rows.filter(row => row.ID !== id);
  //   setRows(updatedRows);
  //   handleMenuClose(); 
  // };
  
  const handleEditClick = () => {
    // Handle edit action
    handleMenuClose();
    setIsEditing(true);
  };

 
  const handleViewClick = () => {
    // Handle view action
    handleMenuClose();
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));


  return (
    <Paper sx={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#EEF5FF",
          position: "sticky !important", 
          height:'70px'
        }}
      >
        <h5 style={{ margin: "0 0 0 30px", color: "#22668D",  fontSize: "24px !important"}}>Life Insurance / Index</h5>
       
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
              marginBottom: "8px",
              width: "300px",
              paddingRight: "30px",
            
            }}
            InputProps={{
              endAdornment: (
                <SearchRoundedIcon style={{ color: "rgba(0, 0, 0, 0.54)", width:'24px', height:'26px'}} />
              ),
            }}
            onChange={(e)=>setSearch(e.target.value)}
          />
          <ColorButton variant="contained" style={{ marginRight:'30px'}}>Export</ColorButton>

        <Filter/>
        </div>
      </div>
      <TableContainer
        sx={{ maxHeight: 700, minHeight: 700, marginTop: "10px" }}
      >
   
        <Table stickyHeader aria-label="DataTable">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                  style={{ minWidth: column.minWidth}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.filter((row)=>{
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
                          style={{ padding: "12px"}}
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
                                <MoreVertIcon style={{width:'24px', height:'24px'}}/>
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
                                <MenuItem onClick={handleViewClick}>
                                  <VisibilityIcon
                                    style={{ paddingRight: "5px" , width:'24px', height:'24px' }}
                   
                                  />
                                  View
                                </MenuItem>
                                <MenuItem onClick={handleEditClick}>
                                  <EditIcon
                                    style={{ paddingRight: "5px" , width:'24px', height:'24px' }}
                                    />
                                   
                                  Edit
                                </MenuItem>
                                <MenuItem>
                                  <DeleteIcon
                                    style={{ paddingRight: "5px" , width:'24px', height:'24px' }}
                                 
                                  />
                                  Delete
                                </MenuItem>
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
          .css-pdct74-MuiTablePagination-selectLabel,.css-levciy-MuiTablePagination-displayedRows {
            margin-bottom: 0 !important;
          }
         
        `}
      </style>
    </Paper>
  );
}
