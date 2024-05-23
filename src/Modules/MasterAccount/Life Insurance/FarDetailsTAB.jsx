import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Button, Table } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";

import EditNoteIcon from "@mui/icons-material/EditNote";

const FarDetailsTAB = ({ value, setValue }) => {

  const handleNext = () => {
    setValue(value + 1);
  };
  const handleback = () =>{
    setValue(value - 1 );
  }
  const [farDetail, setfarDetail] = useState(true);
  const [vestDetails, setvestDetails] = useState(false);
  const [BizIntroducerDetails, setBizIntroducerDetails] = useState(false);
  const [PolicyTransfer, setPolicyTransfer] = useState(false);
  const [ProductionExclusion, setProductionExclusion] = useState(false);
  const [ViewDocument, setViewDocument] = useState(false);
  return (
    <>
      <div className="main" style={{maxHeight:'810px', minHeight: "780px",overflowY:'scroll'}}>
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
            AutoSync FAR Name :
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
          className="farDetails"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => setfarDetail(!farDetail)}
          >
            {farDetail ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            FAR Details
          </h6>
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
        <hr style={{ margin: "0px 0px 7px 0px" }} />
        <div
          className="FDTable"
          style={{
            height: farDetail ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 0.5s ease-in-out",
          }}
        >
          <Table hover>
            <thead>
              <tr>
                <th>FAR Type</th>
                <th>FAR Name</th>
                <th>FAR Status</th>
                <th>Type Of Sharing</th>
                <th>Percentage</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>BI Sharing Start</th>
                <th>BI Sharing End</th>
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
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <EditNoteIcon style={{ width: "28px", height: "28px" }} />
                </td>
              </tr>

              <tr>
                <td>Writing FAR</td>
                <td>Financial Alliance Pte Ltd</td>
                <td>Active</td>
                <td>Normal</td>
                <td>100</td>
                <td>04/09/2006</td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <EditNoteIcon style={{ width: "28px", height: "28px" }} />
                </td>
              </tr>
         
         
              <tr>
                <td>Writing FAR</td>
                <td>Financial Alliance Pte Ltd</td>
                <td>Active</td>
                <td>Normal</td>
                <td>100</td>
                <td>04/09/2006</td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <EditNoteIcon style={{ width: "28px", height: "28px" }} />
                </td>
              </tr>
              
              <tr>
                <td>Writing FAR</td>
                <td>Financial Alliance Pte Ltd</td>
                <td>Active</td>
                <td>Normal</td>
                <td>100</td>
                <td>04/09/2006</td>
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
          className="vestDetails"
          style={{
            textAlign: "left",
            backgroundColor: "#fff",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => setvestDetails(!vestDetails)}
          >
            {vestDetails ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            Vesting Details
          </h6>
        </div>
        <hr style={{ margin: "0px 0px 7px 0px" }} />
        <div
          className="VDTable"
          style={{
            height: vestDetails ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 0.5s ease-in-out",
          }}
        >
          <Table hover>
            <thead>
              <tr>
                <th>FAR Type</th>
                <th>FAR Name</th>
                <th>FAR Status</th>
                <th>Percentage</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Action</th>
              </tr>
            </thead>
          </Table>
        </div>

        <div
          className="BizIntroducerDetails"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => setBizIntroducerDetails(!BizIntroducerDetails)}
          >
            {BizIntroducerDetails ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            Biz Introducer Details
          </h6>
          <Button variant="text">
            Add New Biz Introducer
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
          className="BIDTable"
          style={{
            height: BizIntroducerDetails ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 0.5s ease-in-out",
          }}
        >
          <Table hover>
            <thead>
              <tr>
                <th>FAR Name</th>
                <th>FAR Status</th>
                <th>Account Number</th>
                <th>Introducer Name</th>
                <th>NRIC</th>
                <th>Type Of Biz Sharing</th>
                <th>TR Sharing Format</th>
                <th>Percentage</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Action</th>
              </tr>
            </thead>
          </Table>
        </div>
        <div
          className="PolicyTransfer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => setPolicyTransfer(!PolicyTransfer)}
          >
            {PolicyTransfer ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            Policy Transfer
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
          className="PTTable"
          style={{
            height: PolicyTransfer ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 0.5s ease-in-out",
          }}
        >
          <Table hover>
            <thead>
              <tr>
                <th>Type Of Transfer</th>
                <th>New Servicing FAR</th>
                <th>FAR Status</th>
                <th> Type of BI Sharing</th>
                <th>Sharing Percentage</th>
                <th>Transfer Effective Date</th>
                <th>Period of Sharing Start</th>
                <th>Period of Sharing End</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
          </Table>
        </div>

        <div
          className="ProductionExclusion"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => setProductionExclusion(!ProductionExclusion)}
          >
            {ProductionExclusion ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            Production Exclusion
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
          className="PETable"
          style={{
            height: ProductionExclusion ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 0.5s ease-in-out",
          }}
        >
          <Table hover>
            <thead>
              <tr>
                <th>Production Exclusion</th>
                <th>Exclusion FAR</th>
                <th>FAR Status</th>
                <th>Exclusion Period Start Date</th>
                <th>Exclusion Period End Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
          </Table>
        </div>

        <div
          className="ViewDocument"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
          }}
        >
          <h6
            style={{ cursor: "pointer", margin: "0px", color: "#22668d" }}
            onClick={() => setViewDocument(!ViewDocument)}
          >
            {ViewDocument ? (
              <ArrowDropDownIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            ) : (
              <ArrowRightIcon
                style={{ width: "32px", height: "32px", marginBottom: "3px" }}
              />
            )}
            View Document
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
          className="ViewDocTable"
          style={{
            height: ViewDocument ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 0.5s ease-in-out",
          }}
        >
          <Table hover>
            <thead>
              <tr>
                <th>To View Document</th>
                <th>View By FAR</th>
                <th>FAR Status</th>
                <th>Type of Document</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
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
          <style>{`
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
                border: 2px solid ;
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

export default FarDetailsTAB;
