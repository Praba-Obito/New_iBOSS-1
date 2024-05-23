import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import PageviewIcon from "@mui/icons-material/Pageview";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Button } from "react-bootstrap";

const DocumentTab = ({ value, setValue }) => {

  const handleNext = () => {
    setValue(value + 1);
  };
  
  const handleback = () =>{
    setValue(value - 1 );
  }
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "#333",
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));

  const columns = [
    {
      field: "docName",
      headerName: "Document name",
      width: 500,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "PolicyNumber",
      headerName: "Policy Number",
      type: "number",
      width: 190,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "servicingFAR",
      headerName: "Servicing FAR",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "docType",
      headerName: "Document Type",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "uploadedOn",
      headerName: "Uploaded On",
      width: 200,
      type: "date",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "view",
      headerName: "View",
      width: 130,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <LightTooltip
          title="View "
          placement="right-start"
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -14],
                  },
                },
              ],
            },
          }}
        >
          <button
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
            onClick={() => handleView(params.id)}
          >
            <PageviewIcon style={{ width: "28px", height: "32px" }} />
          </button>
        </LightTooltip>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 130,

      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <LightTooltip
          title="Edit "
          placement="right-start"
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -14],
                  },
                },
              ],
            },
          }}
        >
          <button
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
            onClick={() => handleAction(params.id)}
          >
            <DriveFileRenameOutlineIcon
              style={{ width: "28px", height: "32px" }}
            />
          </button>
        </LightTooltip>
      ),
    },
  ];

  const handleView = (id) => {
    // Handle view action
    console.log(`View clicked for row ID: ${id}`);
  };

  const handleAction = (id) => {
    // Handle action action
    console.log(`Action clicked for row ID: ${id}`);
  };
  const rows = [
    { id: 1, servicingFAR: "Snow", docName: "Jon", PolicyNumber: 35 },
    { id: 2, servicingFAR: "Roxie", docName: "Harvey", PolicyNumber: null },
    { id: 3, servicingFAR: "Roxie", docName: "Harvey", PolicyNumber: null },

  ];

  const [viewUploadDOC,setviewUploadDOC]=useState(true)

  return (
    <>
      <div
        className="main"
        style={{ maxHeight: "700px", minHeight: "700px" }}
      >
        <div
          className="title"
          style={{
            display: "flex",
            padding: "0px",
            alignItems: "center",
          }}
        >
             <p
            style={{
              fontSize: "14px",
              color: "#ec7c15", 
              fontStyle: "italic",
              marginBottom: "0px",
              marginLeft: "10px",
            }}
          >
            Consultant Name :
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "#ec7c15",
              fontStyle: "italic",
              marginBottom: "0px",
              marginLeft: "10px",
            }}
          >
            Policy Number :
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#ec7c15",
              fontStyle: "italic",
              marginBottom: "0px",
              marginLeft: "10px",
            }}
          >
            NRIC Name :
          </p>

        </div>

        <div style={{ height: "10px" }}></div>
        <div
          className="PolicyAuditReference"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => setviewUploadDOC(!viewUploadDOC)}
          >
            {viewUploadDOC ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            Policy Audit Reference
          </h6>
        </div>
        <hr style={{ margin: "0px 0px 7px 0px" }} />
        <div className="Table"  style={{
            height: viewUploadDOC ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 2s ease-in-out",
          }}>
          <div style={{ height: 620, width: "100%", overflowY:'scroll' }}>
            <DataGrid
              rows={rows}
              columns={columns}
    
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                  labelRowsPerPage: 'Show Entries',
                },
              }}
              pageSizeOptions={[10, 25, 50, 100]}
            />
          </div>
          <div
          className="buttons"
          style={{ marginTop: "20px", marginBottom: "60px" }}
        >
          <Button variant="outlined" style={{ margin: " 0px 5px" }} onClick={handleback}>
            Back
          </Button>
          <Button variant="outlined" style={{ margin: " 0px 5px" }}>
            Save
          </Button>
          <Button variant="outlined" style={{ margin: " 0px 5px" }} onClick={handleNext}>
            Save & Next
          </Button>
        </div>
        </div>
        <style>
          {`  
           p{
            margin-bottom: 0 !important;
            }
            .main th{
              font-weight: 500;
              background-color: #22668d;
              color: #fff;
          }
          .main td{ 
              padding: 3px;
          }
          .buttons :nth-child(1){
              transition: 0.7s background-color ;
              color: #1c84c6;
              border: 2px solid;
          }
          .buttons :nth-child(2){
              transition: 0.7s background-color ;
              color: #2e7d32;
              border: 2px solid;
          }
          .buttons :nth-child(3){
              transition: 0.7s background-color ;
              color: #9c27b0;
              border: 2px solid;
          }
          .buttons :nth-child(1):hover{
              background-color: #1c84c6;
              color: #fff;
          }
          .buttons :nth-child(2):hover{
              background-color: #2e7d32;
              color: #fff;
          }
          .buttons :nth-child(3):hover{
              background-color: #9c27b0;
              color: #fff;
          }
          
          
          
          `}
        </style>

        
      </div>
    </>
  );
};

export default DocumentTab;
