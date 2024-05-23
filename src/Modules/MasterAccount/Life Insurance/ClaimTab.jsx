import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { BsFillPersonPlusFill } from "react-icons/bs";
import EditNoteIcon from "@mui/icons-material/EditNote";


const ClaimTab = ({ value, setValue }) => {

  const handleNext = () => {
    setValue(value + 1);
  };

  const handleback = () =>{
    setValue(value - 1 );
  }
  const [claimInfo, setclaimInfo] = useState(true);
  const [upload, setUpload] = useState(false);
  return (
    <>
      <div
        className="main"
        style={{ maxHeight: "810px", minHeight: "780px", overflowY: "scroll" }}
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
          className="claimInfo"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => setclaimInfo(!claimInfo)}
          >
            {claimInfo ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            Claim Info
          </h6>
          <Button variant="text">
            Add New
            <BsFillPersonPlusFill
              style={{
                paddingLeft: "5px",
                paddingBottom: "5px",
                width: "24px",
                height: "24px",
                marginTop: "3px",
              }}
            />
          </Button>
        </div>
        <hr style={{ margin: "0px 0px 7px 0px" }} />
        <div
          style={{
            height: claimInfo ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 2s ease-in-out",
          }}
        >
          <Table hover>
            <thead>
              <tr>
                <th>Claim ID</th>
                <th>Client Name</th>
                <th>Claimant Name</th>
                <th>Claim No.</th>
                <th>Submission Date</th>
                <th>Product Type</th>
                <th>Claim Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <EditNoteIcon style={{ width: "28px", height: "28px" }} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div
          className="uploads"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => setUpload(!upload)}
          >
            {upload ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            Uploads
          </h6>
        </div>
        <div
          style={{
            height: upload ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 2s ease-in-out",
          }}
        >
          <Table hover>
            <thead>
              <tr>
                <th>Claim ID</th>
                <th>Document Type</th>
                <th>Submission Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> </td>
                <td></td>
                <td></td>
                <td></td>
                
                <td>
                  <EditNoteIcon style={{ width: "28px", height: "28px" }} />
                </td>
              </tr>
            </tbody>
          </Table>
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

    </>
  );
};

export default ClaimTab;
