import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import './Menubar.css';
import Topnavbar from '../Navbar/Topnavbar';

const Menubar = ({ open, onClose, path, setPath }) => {
    const toggleDrawer = onClose;
    const pathShow = (e) => {
        setPath(e.target.innerText);


    };
    const list = (
        <Box
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
            sx={{ position: 'relative', marginTop:'85px' }}
        >
            <Topnavbar />
            <div
                style={{
                    position: 'absolute',
                    top: '60px',
                    left: 0,
                    width: '100%',
                    height: 'calc(100% - 60px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    pointerEvents: 'none',
                }}
                className="circle-overlay"
            />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 0, m: 0, }}>
                <CloseIcon onClick={toggleDrawer}
                    sx={{ cursor: 'pointer', transition: 'color 0.3s' }}
                    className="close-icon" />
            </Box>

            <br />
            <div className="container-fluid" style={{ paddingLeft: '80px' }}>
                <div className="row pl-5" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div className="col-lg-2 col-md-2 col-sm-3 col-xs-4">
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Dashboard</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>FAR Info</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Report</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Event Mgt</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Customer Servicing</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Compliance & Audit</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Centralized Data</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Dictionaries</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Settings</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Feedback</Typography>

                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-3 col-xs-4">
                        <Typography style={{ cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Policy Transfer</Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', marginTop: '10px', cursor: 'pointer', paddingLeft: '10px' }}>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Internal Transfer</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Bulk Transfer</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Awaiting Approve</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Success Transfer</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Inprocess Transfer</li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-2 col-sm-3 col-xs-4">
                        <Typography style={{ cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Master CRM</Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', marginTop: '10px', cursor: 'pointer', paddingLeft: '10px' }}>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Master CRM Index</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Audit Info</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Update Address</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Update Contact</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>AML Index</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Consultant Change</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Move Document</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-3 col-xs-4">
                        <Typography style={{ cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Master Account</Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', marginTop: '10px', cursor: 'pointer', paddingLeft: '10px' }}>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Life Insurance</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>General Insurance</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Group Insurance</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Investment</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Other Services</li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-2 col-sm-3 col-xs-4">
                        <Typography style={{ cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Product Mgt.(Admin)</Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', marginTop: '10px', cursor: 'pointer', paddingLeft: '10px' }}>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>LI Product</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>GI Product</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Group Product</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Investment Product</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>ILP Product</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Other product</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-3 col-xs-4">
                        <Typography style={{ cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Biz Tran.Register</Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', marginTop: '10px', cursor: 'pointer', paddingLeft: '10px' }}>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Life Insurance</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>General Insurance</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Group Insurance</li>
                            <li style={{ marginBottom: '10px' }} onClick={pathShow}>Investment</li>
                        </ul>
                        <div >
                            <Typography style={{ cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Document Mgt.</Typography>
                            <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', marginTop: '10px', cursor: 'pointer', paddingLeft: '10px' }}>
                                <li style={{ marginBottom: '10px' }} onClick={pathShow}>AutoCUE</li>
                                <li style={{ marginBottom: '10px' }} onClick={pathShow}>DMP</li>
                                <li style={{ marginBottom: '10px' }} onClick={pathShow}>File Management</li>
                                <li style={{ marginBottom: '10px' }} onClick={pathShow}>View Documents</li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="col-lg-2 col-md-2 col-sm-3 col-xs-4">
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Compliance & Audit</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Centralized Data</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Dictionaries</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Settings</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }} onClick={pathShow}>Feedback</Typography>
                    </div> */}
                </div>
            </div>


            <br />
        </Box>

    );
    return (
        <div>
            <Drawer
                anchor="top"
                open={open}
                onClose={toggleDrawer}
                sx={{ zIndex: 1000 }}
            >
                {list}
            </Drawer>
        </div>
    );
}



export default Menubar;
