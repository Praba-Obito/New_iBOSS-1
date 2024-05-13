import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Filter.css";
import TextField from "@mui/material/TextField";

const consultant = [
    {
        value: 'USD',
        label: 'All',
    },
    {
        value: 'EUR',
        label: 'Financial Alliance Pte Ltd - HQ & staff - Active',
    },
    {
        value: 'BTC',
        label: 'Financial Alliance Pte Ltd - Unknown FAR - Active',
    },
    {
        value: 'JPY',
        label: 'FAPL - Transfer-in Business - Active',
    },
];

const Filter = ({ showFilter, setShowFilter }) => {

    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary p-0">
                    <Container
                        fluid
                        className="d-flex justify-content-end"
                        style={{ backgroundColor: "#fff" }}
                    >
                        

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            style={{
                                width: "500px",
                                backgroundColor: "#fff",
                                marginTop: "80px",
                            }}
                            show={showFilter} // Use showFilter prop to control visibility
                            onHide={() => setShowFilter(false)} // Hide the filter when clicking outside
                        >
                            <div style={{ width: "480px" }}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title
                                        className="width:{10px }"
                                        id={`offcanvasNavbarLabel-expand-${expand}`}
                                    >
                                        <label className="ms-2 bold">Filter</label>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <hr className="divider" />
                                <span className="filterbtn">
                                    <button className="clearbtn"> clear </button>
                                    <button className="submitbtn"> submit </button>
                                </span>
                                <hr className="sec-divider" />
                                <div className="overflow-container ">
                                    <Offcanvas.Body className="d-flex flex-column p-0 ms-4 ">
                                        <TextField
                                            id="consultant"
                                            select
                                            label="Search By Consultant"
                                            SelectProps={{
                                                native: true,
                                            }}
                                            variant="standard"
                                            style={{ width: "90%", margin: "6px 8px" }}
                                        >
                                            {consultant.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>

                                        <TextField
                                            id="client name"
                                            type="search"
                                            label="Client Name"
                                            variant="standard"
                                            style={{ width: "90%", margin: "6px 8px" }}
                                        />

                                        <TextField
                                            id="NRIC number"
                                            type="search"
                                            label="NRIC Number"
                                            variant="standard"
                                            style={{ width: "90%", margin: "6px 8px" }}
                                        />

                                        <TextField
                                            id="passport number"
                                            type="search"
                                            label="Passport Number"
                                            variant="standard"
                                            style={{ width: "90%", margin: "6px 8px" }}
                                        />

                                        <TextField
                                            id="FIN No"
                                            type="search"
                                            label="FIN Number"
                                            variant="standard"
                                            style={{ width: "90%", margin: "6px 8px" }}
                                        />

                                        <TextField
                                            id="client id"
                                            type="search"
                                            label="Client ID"
                                            variant="standard"
                                            style={{ width: "90%", margin: "6px 8px" }}
                                        />
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
