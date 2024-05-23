import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "react-bootstrap";

const AutosyncRaw = ({value,setValue}) => {

  const handleback = () =>{
    setValue(value - 1);
  }
  const [rawData, setRawdata] = useState(true);
  const columns = [
    {
      field: "ID",
      headerName: "ID",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "insurerName",
      headerName: "Insurer Name",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "policyNumber",
      headerName: "Policy Number",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "planName",
      headerName: "Plan Name",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "dt",
      headerName: "Date / Time",
      width: 250,
      headerAlign: "center",
      align: "center",
      type:Date
    },
    {
      field: "uuid",
      headerName: "UUID",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
  ];
  const rows = [];
  const DataAvailable = rows.length>0;
  const rowsToShow = DataAvailable
  ? rows
  : [{ id: 1, ID: "No Data Found" }];
  return (
    <>
      <div className="main" style={{ maxHeight: "700px", minHeight: "700px" }}>
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
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => setRawdata(!rawData)}
          >
            {rawData ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            Raw Data Info
          </h6>
        </div>
        <hr style={{ margin: "0px 0px 7px 0px" }} />
        <div
          className="Table"
          style={{
            height: rawData ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 2s ease-in-out",
          }}
        >
          <div style={{ height: "auto", width: "100%", overflowY: "scroll" }}>
            <DataGrid
              rows={rowsToShow}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[10, 25, 50, 100]}
            />
          </div>
        </div>

        <div
          className="buttons"
          style={{ marginTop: "20px", marginBottom: "60px" }}
        >
          <Button variant="outlined" style={{ margin: " 0px 5px" }} onClick={handleback}>
            Back
          </Button>

       
        </div>
      </div>
      <style>
        {`
        
           p{
            margin-bottom: 0 !important;
            }
            .buttons :nth-child(1){
                transition: 0.7s background-color ;
                color: #1c84c6;
                border: 2px solid;
            }
           
            .buttons :nth-child(1):hover{
                background-color: #1c84c6;
                color: #fff;
            }
        

        `}
      </style>
    </>
  );
};

export default AutosyncRaw;
