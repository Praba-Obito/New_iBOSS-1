import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./LiEdit.css";
import FarDetailsTAB from "./FarDetailsTAB";
import PolicyInfo from "./PolicyInfo";
import AuditDataTab from "./AuditDataTab";
import FinancialInfoTab from "./FinancialInfoTab";
import DocumentTab from "./DocumentTab";
import ClaimTab from "./ClaimTab";
import LogTab from "./LogTab";
import AutosyncRaw from "./AutosyncRaw";

const LiEdit = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div sx={{width:'100%'}}>
        <Box
          sx={{
            maxWidth: {
              xs: 375,
              sm: 768,
              md: 1024,
              lg: 1440,
              xl: 1920,
              xxl: 2560,
            },
            bgcolor: "#fff",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            <Tab style={{ fontWeight: "600" }} label="Policy Info" />
            <Tab style={{ fontWeight: "600" }} label="FAR Details" />
            <Tab style={{ fontWeight: "600" }} label="Audit Data" />
            <Tab style={{ fontWeight: "600" }} label="Financial Info" />
            <Tab style={{ fontWeight: "600" }} label="Documents" />
            <Tab style={{ fontWeight: "600" }} label="Claim" />
            <Tab style={{ fontWeight: "600" }} label="Log" />
            <Tab style={{ fontWeight: "600" }} label="AutoSync RawData" />
          <div className="title">
            <span>Life Insurance</span>
            <span>/ Add Edit Policy</span>
          </div>
          </Tabs>
        </Box>
        <div style={{height:'10px'}}></div>
        {value === 0 && <PolicyInfo value={value} setValue={setValue} />}
        {value === 1 && <FarDetailsTAB value={value} setValue={setValue} />}
        {value === 2 && <AuditDataTab value={value} setValue={setValue} />}
        {value === 3 && <FinancialInfoTab value={value} setValue={setValue} />}
        {value === 4 && <DocumentTab value={value} setValue={setValue} />}
        {value === 5 && <ClaimTab value={value} setValue={setValue} />}
        {value === 6 && <LogTab value={value} setValue={setValue} />}
        {value === 7 && <AutosyncRaw value={value} setValue={setValue} />}
       
      </div>
    </>
  );
};

export default LiEdit;
