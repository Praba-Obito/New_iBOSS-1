import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { BsFillPersonPlusFill } from "react-icons/bs";
import EditNoteIcon from "@mui/icons-material/EditNote";


const AuditDataTab = ({ value, setValue }) => {

  const handleNext = () => {
    setValue(value + 1);
  };
  const handleback = () =>{
    setValue(value - 1 );
  }
  const [PolicyAuditReference, setPolicyAuditReference] = useState(true);
  const [AuditingReport, setAuditingReport] = useState(false);
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
            onClick={() => setPolicyAuditReference(!PolicyAuditReference)}
          >
            {PolicyAuditReference ? (
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
        <div
          style={{
            height: PolicyAuditReference ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 2s ease-in-out",
          }}
        >
          <div style={{display:"flex" }}>
            <Button variant="text">
              Add New FAR
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
          <Table hover>
            <thead>
              <tr>
                <th>Class of Biz</th>
                <th>Client</th>
                <th>Reference No</th>
                <th>Submission Date</th>
                <th>Policy No</th>
                <th>Inforced Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Writing FAR</td>
                <td>Financial Alliance Pte Ltd</td>
                <td>Active</td>
                <td>Normal</td>
                <td>100</td>
                <td>04/09/2006</td>
                <td>
                  <EditNoteIcon style={{ width: "28px", height: "28px" }} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div
          className="AuditingReport"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => setAuditingReport(!AuditingReport)}
          >
            {AuditingReport ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            Auditing Report
          </h6>
        </div>
        <hr style={{ margin: "0px 0px 15px 0px" }} />
        <div
          style={{
            height: AuditingReport ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 0.5s ease-in-out",
          }}
        >
          <div className="subheading">
            <h6 style={{ textAlign: "left", paddingLeft: "15px" }}>
              Auditing Report
            </h6>
          </div>
          <hr
            style={{ margin: "0px 0px 3px 0px", border: "1px dashed #000" }}
          />
          <Table hover>
            <thead>
              <tr>
                <th>Reference No</th>
                <th>Audit Date</th>
                <th>Client</th>
                <th>Audit Report Nos</th>
                <th>Online Submission</th>
                <th>Audit Outcome</th>
                <th>Infraction Summary</th>
                <th>Audit Officer</th>
              </tr>
            </thead>
          </Table>
          <p>No Data Available</p>
        </div>

        <div
          style={{
            height: AuditingReport ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 0.5s ease-in-out",
          }}
        >
          <div className="subheading">
            <h6 style={{ textAlign: "left", paddingLeft: "15px" }}>
              Post-Transaction Survey
            </h6>
          </div>
          <hr
            style={{ margin: "0px 0px 3px 0px", border: "1px dashed #000" }}
          />
          <Table hover>
            <thead>
              <tr>
                <th>Audit Report Nos</th>
                <th>Date of Issue</th>
                <th>Mode</th>
                <th>Date of Reply / Lapse</th>
                <th>Survey Outcome</th>
              </tr>
            </thead>
          </Table>
          <p>No Data Available</p>
        </div>

        <div
          style={{
            height: AuditingReport ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 0.5s ease-in-out",
          }}
        >
          <div className="subheading">
            <h6 style={{ textAlign: "left", paddingLeft: "15px" }}>
              Acknowledgement Status
            </h6>
          </div>
          <hr
            style={{ margin: "0px 0px 3px 0px", border: "1px dashed #000" }}
          />
          <Table hover>
            <thead>
              <tr>
                <th>Audit Report Nos</th>
                <th>Consultant</th>
                <th>Supervisor</th>
                <th>Compliance Dept</th>
                <th>Remark</th>
              </tr>
            </thead>
          </Table>
          <p>No Data Available</p>
        </div>

        <div
          style={{
            height: AuditingReport ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 0.5s ease-in-out",
          }}
        >
          <div className="subheading">
            <h6 style={{ textAlign: "left", paddingLeft: "15px" }}>Appeal</h6>
          </div>
          <hr
            style={{ margin: "0px 0px 3px 0px", border: "1px dashed #000" }}
          />
          <Table hover>
            <thead>
              <tr>
                <th>Audit Report Nos</th>
                <th>Appeal Date</th>
                <th>Appeal Outcome</th>
                <th>Successful Appeal Result</th>
                <th>Appeal Outcome Date</th>
              </tr>
            </thead>
          </Table>
          <p>No Data Available</p>
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

export default AuditDataTab;
