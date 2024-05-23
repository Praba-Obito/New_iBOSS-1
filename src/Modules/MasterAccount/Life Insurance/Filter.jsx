import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./filter.css";
import TextField from "@mui/material/TextField";

// import { useState } from "react";


const Filter = () => {


  // const [selectedDate, setSelectedDate] = useState("");

  // const handleDateChange = (event) => {
  //   setSelectedDate(event.target.value);
  // };

  // const formatDate = (dateString) => {
  //   const dateObj = new Date(dateString);
  //   const year = dateObj.getFullYear();
  //   const month = String(dateObj.getMonth() + 1).padStart(2, "0"); 
  //   const day = String(dateObj.getDate()).padStart(2, "0"); 
  //   return `${year}-${month}-${day}`;
  // };

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary p-0" style={{backgroundColor:'transparent'}}>
          <Container
            fluid
            className="d-flex justify-content-end"
            style={{ backgroundColor: "#EEF5FF "}}
            >
            
       
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              style={{ backgroundColor: "#EEF5FF !important"}}
              
            />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{
                width: "360px",
                backgroundColor: "#fff",
                marginTop: "80px",
              }}
            > 
              <div style={{ width: "350px" }}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    className="width:{10px }"
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  >
                    <label className="ms-2 FilterHead">Filter</label>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <hr className="divider" />
                <span className="filterbtn">
                  <button className="clearbtn"> clear </button>
                  <button className="submitbtn"> submit </button>
                </span>
                <hr className="sec-divider" />
                <div className="overflow-container">
                  <Offcanvas.Body className="d-flex flex-column p-0 ms-4 ">
                    <TextField
                      id="writingFAR"
                      type="search"
                      label="Search By Writing FAR"
                      variant="standard"
                      style={{ width: "90%", margin: "6px 8px" }}
                    />

                    <TextField
                      id="servicingFAR"
                      type="search"
                      label="Search By Servicing FAR"
                      variant="standard"
                      style={{ width: "90%", margin: "6px 8px" }}
                    />

                    <TextField
                      id="clientNameorBusinessName"
                      type="search"
                      label="Client Name or Business Name"
                      variant="standard"
                      style={{ width: "90%", margin: "6px 8px" }}
                    />

                    <TextField
                      id="NRICnoOrBusinessRegno"
                      type="search"
                      label="NRIC No or Business Reg No"
                      variant="standard"
                      style={{ width: "90%", margin: "6px 8px" }}
                    />

                    <TextField
                      id="ID"
                      type="search"
                      label="ID"
                      variant="standard"
                      style={{ width: "90%", margin: "6px 8px" }}
                    />

                    <TextField
                      id="lifeInsuredName"
                      type="search"
                      label="Life Insured Name"
                      variant="standard"
                      style={{ width: "90%", margin: "6px 8px" }}
                    />

                    <TextField
                      id="preferredCompanyName"
                      type="search"
                      label="Preferred Company Name"
                      variant="standard"
                      style={{ width: "90%", margin: "6px 8px" }}
                    />

                    <TextField
                      id="policyStatus"
                      type="search"
                      label="Policy Status"
                      variant="standard"
                      style={{ width: "90%", margin: "6px 8px" }}
                    />

                    <TextField
                      id="PolicyNumber"
                      type="search"
                      label="Policy Number"
                      variant="standard"
                      style={{ width: "90%", margin: "6px 8px" }}
                    />

                    <TextField
                      id="sourceFrom"
                      type="search"
                      label="Source From"
                      variant="standard"
                      style={{ width: "90%", margin: "6px 8px" }}
                    />

                    <div className="input-dates">
                      <div className="inputdate-title">Submission Date</div>
                      <div className="date">
                        <TextField
                          id="submissionDate"
                          label="From"
                          type="date"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="standard"
                          style={{ width: "90%", margin: "6px 8px" }}
                        />
                        <TextField
                          id="submissionDate"
                          label="To"
                          type="date"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="standard"
                          style={{ width: "90%", margin: "6px 8px" }}
                        />
                      </div>
                    </div>

                    <div className="input-dates">
                      <div className="inputdate-title">Inforce Date</div>
                      <div className="date">
                        <TextField
                          id="inforeDate"
                          label="From"
                          type="date"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="standard"
                          style={{ width: "90%", margin: "6px 8px" }} 
                           InputProps={{
                            inputProps: {
                              dateFormat: "yyyy-mm-dd",
                            },
                          }}
                        />

                        <TextField
                          id="inforeDate"
                          label="To"
                          type="date"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="standard"
                          style={{ width: "90%", margin: "6px 8px" }}
                        />
                      </div>
                    </div>
                  </Offcanvas.Body>
                </div>
              </div>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Filter;
