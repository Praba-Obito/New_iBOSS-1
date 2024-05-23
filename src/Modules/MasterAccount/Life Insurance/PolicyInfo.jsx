import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BsFillPersonPlusFill } from "react-icons/bs";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Table from "react-bootstrap/Table";
import { Checkbox } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { ButtonGroup } from "react-bootstrap";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const PolicyInfo = ({ value, setValue }) => {
  const handleNext = () => {
    setValue(value + 1);
  };

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const bool = [
    {
      value: "Yes",
      label: "Yes",
    },
    {
      value: "No",
      label: "No",
    },
  ];

  const [isBackdatedEnabled, setIsBackdatedEnabled] = useState(false);
  const [date, setDate] = useState("");
  const handleRadioChange = (event) => {
    const value = event.target.value;
    setIsBackdatedEnabled(event.target.value === "yes");
    if (value === "no") {
      setDate("");
    }
  };

  const [showTable, setShowTable] = useState(true);
  const [LiTable, setLiTable] = useState(false);
  const [PDform, setPDForm] = useState(false);
  return (
    <>
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
        className="ownerDetailsFrom"
        style={{
          backgroundColor: "#fff",
          height: showTable ? "150px" : "60px",
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6
            style={{ margin: "10px", color: "#22668D", cursor: "pointer" }}
            onClick={() => setShowTable(!showTable)}
          >
            Policy Owner Details
            {showTable ? (
              <ArrowDropUpIcon style={{ width: "32px", height: "32px" }} />
            ) : (
              <ArrowDropDownIcon style={{ width: "32px", height: "32px" }} />
            )}
          </h6>
          <div>
            <Button
              color="secondary"
              style={{ fontWeight: "600", margin: "10px" }}
            >
              Change Policy owner
              <BsFillPersonPlusFill
                style={{
                  paddingLeft: "5px",
                  paddingBottom: "5px",
                  width: "24px",
                  height: "24px",
                }}
              />
            </Button>

            <Button
              color="secondary"
              style={{ fontWeight: "600", margin: "10px" }}
            >
              Add Joint owner
              <BsFillPersonPlusFill
                style={{
                  paddingLeft: "5px",
                  paddingBottom: "5px",
                  width: "24px",
                  height: "24px",
                }}
              />
            </Button>
          </div>
        </div>
        <hr style={{ margin: "0" }} />
        {showTable && (
          <div>
            <Table responsive="sm" striped style={{ marginTop: "5px" }}>
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>NRIC/PP/FIN/Biz Reg No</th>
                  <th>Date of Birth/Date of Reg</th>
                  <th>Relationship</th>
                  <th>Preferred Contact Nos</th>
                  <th>Is a Life Insured</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>
                    <Checkbox
                      defaultChecked
                      color="success"
                      style={{ padding: "0px" }}
                    />
                  </td>
                  <td>
                    <ButtonGroup variant="contained">
                      <Button
                        aria-label="fingerprint"
                        color="warning"
                        style={{ padding: "0px" }}
                      >
                        <VisibilityIcon />
                      </Button>
                      <Button
                        aria-label="fingerprint"
                        color="info"
                        style={{ padding: "0px " }}
                      >
                        <ModeEditIcon />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
      </div>

      <div style={{ height: "10px" }}></div>

      <div
        className="ownerDetailsFrom"
        sx={{
          maxWidth: {
            xs: 375,
            sm: 768,
            md: 1024,
            lg: 1440,
            xl: 1920,
            xxl: 2560,
          },
        }}
        style={{
          backgroundColor: "#fff",
          height: LiTable ? "270px" : "60px",
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6
            style={{ margin: "10px", color: "#22668D", cursor: "pointer" }}
            onClick={() => setLiTable(!LiTable)}
          >
            Life Insured Details
            {LiTable ? (
              <ArrowDropUpIcon style={{ width: "32px", height: "32px" }} />
            ) : (
              <ArrowDropDownIcon style={{ width: "32px", height: "32px" }} />
            )}
          </h6>
          <div>
            <Button
              color="secondary"
              style={{ fontWeight: "600", margin: "10px" }}
            >
              Add Joint Insured
              <BsFillPersonPlusFill
                style={{
                  paddingLeft: "5px",
                  paddingBottom: "5px",
                  width: "24px",
                  height: "24px",
                }}
              />
            </Button>
          </div>
        </div>
        <hr style={{ margin: "0" }} />

        {LiTable && (
          <div>
            <Table responsive="sm" striped style={{ marginTop: "5px" }}>
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>NRIC/PP/FIN/Biz Reg No</th>
                  <th>Date of Birth/Date of Reg</th>
                  <th>Relationship</th>
                  <th>Preferred Contact Nos</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>

                  <td>
                    <ButtonGroup variant="contained">
                      <Button
                        aria-label="fingerprint"
                        color="warning"
                        style={{ padding: "0px" }}
                      >
                        <VisibilityIcon />
                      </Button>
                      <Button
                        aria-label="fingerprint"
                        color="info"
                        style={{ padding: "0px " }}
                      >
                        <ModeEditIcon />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>

                  <td>
                    <ButtonGroup variant="contained">
                      <Button
                        aria-label="fingerprint"
                        color="warning"
                        style={{ padding: "0px" }}
                      >
                        <VisibilityIcon />
                      </Button>
                      <Button
                        aria-label="fingerprint"
                        color="info"
                        style={{ padding: "0px " }}
                      >
                        <ModeEditIcon />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>

                  <td>
                    <ButtonGroup variant="contained">
                      <Button
                        aria-label="fingerprint"
                        color="warning"
                        style={{ padding: "0px" }}
                      >
                        <VisibilityIcon />
                      </Button>
                      <Button
                        aria-label="fingerprint"
                        color="info"
                        style={{ padding: "0px " }}
                      >
                        <ModeEditIcon />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>

                  <td>
                    <ButtonGroup variant="contained">
                      <Button
                        aria-label="fingerprint"
                        color="warning"
                        style={{ padding: "0px" }}
                      >
                        <VisibilityIcon />
                      </Button>
                      <Button
                        aria-label="fingerprint"
                        color="info"
                        style={{ padding: "0px " }}
                      >
                        <ModeEditIcon />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
      </div>

      <div style={{ height: "10px" }}></div>

      <div
        className="form"
        sx={{
          maxWidth: {
            xs: 375,
            sm: 768,
            md: 1024,
            lg: 1440,
            xl: 1920,
            xxl: 2560,
          },
          height: "100%",
        }}
        style={{
          backgroundColor: "#fff",
          height: PDform ? "auto" : "60px",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5
            style={{ margin: "10px", cursor: "pointer" }}
            onClick={() => setPDForm(!PDform)}
          >
            {" "}
            Policy Details
            {PDform ? (
              <ArrowDropUpIcon style={{ width: "32px", height: "32px" }} />
            ) : (
              <ArrowDropDownIcon style={{ width: "32px", height: "32px" }} />
            )}
          </h5>
          <Button
            color="secondary"
            style={{ fontWeight: "600", margin: "10px" }}
          >
            Add Rider
            <BsFillPersonPlusFill
              style={{
                paddingLeft: "5px",
                paddingBottom: "5px",
                width: "24px",
                height: "24px",
              }}
            />
          </Button>
        </div>
        <hr style={{ margin: "0" }} />

        <div
          style={{
            width: "100%",
            marginTop: "15px",
          }}
        >
          {PDform && (
            <Row
              style={{
                marginBottom: "10px",
                width: "99%",
                marginLeft: "5px",
                transition: "height 0.3s ease-in-out",
              }}
            >
              <Col>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "35ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Writing FAR"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Life Insured"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <TextField
                    id="standard-select-currency-native"
                    label="commencement Date"
                    variant="standard"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    id="standard-select-currency-native"
                    label="Application Date"
                    variant="standard"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Preferred Company Name"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Basic Product Name (Autosync)"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Product Sub Type (FA)"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <TextField
                    id="standard"
                    label="Sum Assured / Benefit"
                    variant="standard"
                  />

                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Payment Method"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Frequency"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <TextField
                    id="standard"
                    label="Basic Premium ( Original )"
                    variant="standard"
                  />

                  <TextField
                    id="standard"
                    label="Loading Premium ( SGD )"
                    variant="standard"
                  />
                </Box>
              </Col>

              <Col>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "35ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Servicing FAR"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <TextField
                    id="standard"
                    label="Policy Number"
                    type="number"
                    variant="standard"
                  />

                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Policy Status"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <TextField
                    id="standard"
                    label="Policy Term"
                    variant="standard"
                  />
                  <TextField
                    id="standard"
                    label="Premium Term"
                    variant="standard"
                  />

                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Currency"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <TextField
                    id="standard"
                    label="Basic Premium ( SGD )"
                    variant="standard"
                  />

                  <TextField
                    id="standard"
                    label="Discounted premium ( Original )"
                    variant="standard"
                  />

                  <TextField
                    id="standard"
                    label="Basic Modal Premium"
                    variant="standard"
                  />

                  <TextField
                    id="standard"
                    label="Total Modal Premium (Basic + All Rider)"
                    variant="standard"
                    type="number"
                  />

                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Upgrade / Downgrade"
                    defaultValue="No"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {bool.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <TextField
                    id="standard"
                    label="Premium Due Date"
                    variant="standard"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </Col>

              <Col>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "35ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                    }}
                  >
                    <TextField
                      disabled={!isBackdatedEnabled}
                      id="standard-disabled"
                      label="Backdated"
                      variant="standard"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      style={{
                        width: "18ch",
                        marginLeft: "35px",
                      }}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={isBackdatedEnabled ? "yes" : "no"}
                      onChange={handleRadioChange}
                    >
                      <div
                        className="backDatedRadio"
                        style={{ display: "flex", paddingLeft: "20px" }}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="No"
                        />
                      </div>
                    </RadioGroup>
                  </div>
                  <TextField
                    id="standard"
                    variant="standard"
                    label="Inforce Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Business Status"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    id="standard"
                    variant="standard"
                    label="Registration Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Product Name (Insurer Policy)"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Product Type (FA)"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <TextField
                    id="standard"
                    label="Submission Date"
                    type="date"
                    variant="standard"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Product Name (Insurer BI)"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Product Name (FA)"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <TextField
                    id="standard"
                    label="Issue Age"
                    type="number"
                    variant="standard"
                  />
                  <TextField
                    id="standard"
                    label="GST ( SGD )"
                    variant="standard"
                    type="number"
                  />

                  <TextField
                    id="standard"
                    label="Basic Shield Plan Premium"
                    variant="standard"
                  />
                </Box>
              </Col>

              <Col>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "35ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard"
                    variant="standard"
                    label="Status Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="standard"
                    variant="standard"
                    label="Policy End Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="standard"
                    variant="standard"
                    label="Premium End Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    id="standard"
                    variant="standard"
                    label="Exchange Rate"
                    type="number"
                  />
                  <TextField
                    id="standard"
                    variant="standard"
                    label="Loading Premium ( Original )"
                  />
                  <TextField
                    id="standard"
                    variant="standard"
                    label="Discounted premium ( SGD )"
                  />
                  <TextField
                    id="standard"
                    variant="standard"
                    label="Basic Total Premium ( SGD )"
                  />
                  <TextField
                    id="standard"
                    variant="standard"
                    label="Total Premium (Basic + All Rider) ( SGD )"
                  />

                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Add Rider"
                    defaultValue="No"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {bool.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Reference Number"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-multiline-static"
                    label="Case Note"
                    multiline
                    rows={4}
                    variant="filled"
                  />
                </Box>
              </Col>
            </Row>
          )}
        </div>
      </div>
      <div
        className="buttons"
        style={{ marginTop: "20px", marginBottom: "70px" }}
      >
        <Button variant="outlined" style={{ margin: " 0px 5px" }} className="save">
          Save
        </Button>
        <Button
          variant="outlined"
          style={{ margin: " 0px 5px" }} 
          className="sn"
          onClick={handleNext}
        >
          Save & Next
        </Button>
      </div>
      <style>{`
        
      
      .save{
          transition: 0.7s background-color ;
          color: #2e7d32;
          border: 2px solid;
      }
      .sn{
          transition: 0.7s background-color ;
          color: #9c27b0;
          border: 2px solid;
      }
   
      .save:hover{
          background-color: #2e7d32;
          color: #fff;
      }
      .sn:hover{
          background-color: #9c27b0;
          color: #fff;
      }
th{
  font-weight: 500;
  font-size: 14px;
  background-color: #22668D !important;
  color: #fff !important;
}
td{
  font-size: 16px ;
}

      `}</style>
    </>
  );
};

export default PolicyInfo;
