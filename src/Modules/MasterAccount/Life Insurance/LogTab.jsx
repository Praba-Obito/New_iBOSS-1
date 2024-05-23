import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const LogTab = ({ value, setValue }) => {

  const handleNext = () => {
    setValue(value + 1);
  };

  const handleback = () =>{
    setValue(value - 1 );
  }
  const Insertcolumns = [
    {
      field: "ID",
      headerName: "Record ID",
      width: 400,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "pageName",
      headerName: "Page Name",
      width: 500,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "insertedBy",
      headerName: "Inserted By",
      width: 400,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "insertedOn",
      headerName: "Inserted On",
      width: 500,
      headerAlign: "center",
      align: "center",
    },
  ];
  const insertRows = [];

  const UpdateColumns = [
    {
      field: "ID",
      headerName: "Record ID",
      width: 260,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "pageName",
      headerName: "Page Name",
      width: 290,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "fc",
      headerName: "Field Changes",
      width: 260,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "oldVal",
      headerName: "Old Value",
      width: 260,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "changeVal",
      headerName: "Change Value",
      width: 260,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "changeBy",
      headerName: "Change By",
      width: 260,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "changeOn",
      headerName: "Change On",
      width: 260,
      headerAlign: "center",
      align: "center",
    },
  ];

  const DeleteColumns = [
    {
      field: "id",
      headerName: "Record ID",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "pageName",
      headerName: "Page Name",
      width: 350,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "deletedBy",
      headerName: "Deleted By",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "DeletedOn",
      headerName: "Deleted On",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "restoredOn",
      headerName: "Restored On",
      width: 300,
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

  const apiLogColumns = [
    {
      field: "apiName",
      headerName: "API Name",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "pageName",
      headerName: "Page Name",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "values",
      headerName: "Values",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "changeBy",
      headerName: "Change By",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "changeOn",
      headerName: "Change On",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
  ];

  const asLog = [
    {
      field: "action",
      headerName: "Action",
      width: 360,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "changeBy",
      headerName: "Change By",
      width: 360,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "changeOn",
      headerName: "Change On",
      width: 360,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "pageName",
      headerName: "Page Name",
      width: 360,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "insertValue",
      headerName: "Insert Value",
      width: 360,
      headerAlign: "center",
      align: "center",
    },
  ];
  const [insert, setInsert] = useState(true);
  const [update, setUpdate] = useState(false);
  const [Delete, setDelete] = useState(false);
  const [apilog, SetApilog] = useState(false);
  const [autosyncLog, setAutosyncLog] = useState(false)

  const dataAvailable = insertRows.length > 0;
  const rowsToShow = dataAvailable
    ? insertRows
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
          className="insert"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => setInsert(!insert)}
          >
            {insert ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            Insert
          </h6>
        </div>
        <hr style={{ margin: "0px 0px 7px 0px" }} />
        <div
          className="Table"
          style={{
            height: insert ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 2s ease-in-out",
          }}
        >
          <div style={{ height: "auto", width: "100%", overflowY: "scroll" }}>
            <DataGrid
              rows={rowsToShow}
              columns={Insertcolumns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[10, 25, 50, 100]}
            />
          </div>
        </div>

        <div style={{ height: "10px" }}></div>

        <div
          className="update"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => setUpdate(!update)}
          >
            {update ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            Update
          </h6>
        </div>
        <hr style={{ margin: "0px 0px 7px 0px" }} />
        <div
          className="Table"
          style={{
            height: update ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 2s ease-in-out",
          }}
        >
          <div style={{ height: "auto", width: "100%", overflowY: "scroll" }}>
            <DataGrid
              rows={rowsToShow}
              columns={UpdateColumns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                  labelRowsPerPage: "Show Entries",
                },
              }}
              pageSizeOptions={[10, 25, 50, 100]}
            />
          </div>
        </div>
        {/* ========================= */}
        <div style={{ height: "10px" }}></div>
        <div
          className="delete"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => setDelete(!Delete)}
          >
            {Delete ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            Delete
          </h6>
        </div>
        <hr style={{ margin: "0px 0px 7px 0px" }} />
        <div
          className="Table"
          style={{
            height: Delete ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 2s ease-in-out",
          }}
        >
          <div style={{ height: "auto", width: "100%", overflowY: "scroll" }}>
            <DataGrid
              rows={rowsToShow}
              columns={DeleteColumns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                  labelRowsPerPage: "Show Entries",
                },
              }}
              pageSizeOptions={[10, 25, 50, 100]}
            />
          </div>
        </div>

        {/* ========================= */}
        <div style={{ height: "10px" }}></div>
        <div
          className="apiLog"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => SetApilog(!apilog)}
          >
            {Delete ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            API Log
          </h6>
        </div>
        <hr style={{ margin: "0px 0px 7px 0px" }} />
        <div
          className="Table"
          style={{
            height: apilog ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 2s ease-in-out",
          }}
        >
          <div style={{ height: "auto", width: "100%", overflowY: "scroll" }}>
            <DataGrid
              rows={rowsToShow}
              columns={apiLogColumns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                  labelRowsPerPage: "Show Entries",
                },
              }}
              pageSizeOptions={[10, 25, 50, 100]}
            />
          </div>
        </div>

        {/* ========================= */}
        <div style={{ height: "10px" }}></div>
        <div
          className="autosyncLog"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => setAutosyncLog(!autosyncLog)}
          >
            {Delete ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            AutoSync Log
          </h6>
        </div>
        <hr style={{ margin: "0px 0px 7px 0px" }} />
        <div
          className="Table"
          style={{
            height: autosyncLog ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 2s ease-in-out",
          }}
        >
          <div style={{ height: "auto", width: "100%", overflowY: "scroll" }}>
            <DataGrid
              rows={rowsToShow}
              columns={asLog}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                  labelRowsPerPage: "Show Entries",
                },
              }}
              pageSizeOptions={[10, 25, 50, 100]}
            />
          </div>
        </div>
        {/* =================== */}

        <div
          className="buttons"
          style={{ marginTop: "20px", marginBottom: "60px" }}
        >
          <Button variant="outlined" style={{ margin: " 0px 5px" }} onClick={handleback}>
            Back
          </Button>

          <Button variant="outlined" style={{ margin: " 0px 5px" }} onClick={handleNext}>
            Foremost
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
            .buttons :nth-child(2){
                transition: 0.7s background-color ;
                color: #f8ac59;
                border: 2px solid;
            }
            .buttons :nth-child(1):hover{
                background-color: #1c84c6;
                color: #fff;
            }
            .buttons :nth-child(2):hover{
                background-color: #f8ac59;
                color: #fff;
            }

        `}
      </style>
    </>
  );
};

export default LogTab;
