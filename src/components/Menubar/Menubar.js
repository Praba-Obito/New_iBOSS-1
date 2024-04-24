import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';

import './Menubar.css'

const Menubar = () => {
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            sx={{ position: 'relative' }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adjust opacity here
                    pointerEvents: 'none',
                }}
                className="circle-overlay"
            />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 0, m: 0 }}>
                <CloseIcon onClick={toggleDrawer(anchor, false)} sx={{ cursor: 'pointer' }} />
            </Box>
<br />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2 offset-1">
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Dashboard</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>FAR Info</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Report</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Event Mgt</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Customer Servicing</Typography>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                        <Typography style={{ cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Policy Transfer</Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', marginTop: '10px', cursor: 'pointer', paddingLeft: '10px' }}>
                            <li style={{ marginBottom: '10px' }}>Internal Transfer</li>
                            <li style={{ marginBottom: '10px' }}>Bulk Transfer</li>
                            <li style={{ marginBottom: '10px' }}>Awaiting Approve</li>
                            <li style={{ marginBottom: '10px' }}>Success Transfer</li>
                            <li style={{ marginBottom: '10px' }}>Inprocess Transfer</li>
                        </ul>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                        <Typography style={{ cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Master Account</Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', marginTop: '10px', cursor: 'pointer', paddingLeft: '10px' }}>
                            <li style={{ marginBottom: '10px' }}>Life Insurance</li>
                            <li style={{ marginBottom: '10px' }}>General Insurance</li>
                            <li style={{ marginBottom: '10px' }}>Group Insurance</li>
                            <li style={{ marginBottom: '10px' }}>Investment</li>
                            <li style={{ marginBottom: '10px' }}>Other Services</li>
                        </ul>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                        <Typography style={{ cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Document Mgt.</Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', marginTop: '10px', cursor: 'pointer', paddingLeft: '10px' }}>
                            <li style={{ marginBottom: '10px' }}>AutoCUE</li>
                            <li style={{ marginBottom: '10px' }}>DMP</li>
                            <li style={{ marginBottom: '10px' }}>File Management</li>
                            <li style={{ marginBottom: '10px' }}>View Documents</li>
                        </ul>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                        <Typography style={{ cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Master CRM</Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', marginTop: '10px', cursor: 'pointer', paddingLeft: '10px' }}>
                            <li style={{ marginBottom: '10px' }}>Master CRM Index</li>
                            <li style={{ marginBottom: '10px' }}>Audit Info</li>
                            <li style={{ marginBottom: '10px' }}>Update Address</li>
                            <li style={{ marginBottom: '10px' }}>Update Contact</li>
                            <li style={{ marginBottom: '10px' }}>AML Index</li>
                            <li style={{ marginBottom: '10px' }}>Consultant Change</li>
                            <li style={{ marginBottom: '10px' }}>Move Document</li>
                        </ul>
                    </div>
                </div>
<br /> <br />
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2 offset-1">
                        <Typography style={{ cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Biz Tran.Register</Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', marginTop: '10px', cursor: 'pointer', paddingLeft: '10px' }}>
                            <li style={{ marginBottom: '10px' }}>Life Insurance</li>
                            <li style={{ marginBottom: '10px' }}>General Insurance</li>
                            <li style={{ marginBottom: '10px' }}>Group Insurance</li>
                            <li style={{ marginBottom: '10px' }}>Investment</li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                        <Typography style={{ cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Product Mgt.(Admin)</Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', marginTop: '10px', cursor: 'pointer', paddingLeft: '10px' }}>
                            <li style={{ marginBottom: '10px' }}>LI Product</li>
                            <li style={{ marginBottom: '10px' }}>GI Product</li>
                            <li style={{ marginBottom: '10px' }}>Group Product</li>
                            <li style={{ marginBottom: '10px' }}>Investment Product</li>
                            <li style={{ marginBottom: '10px' }}>ILP Product</li>
                            <li style={{ marginBottom: '10px' }}>Other product</li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Compliance & Audit</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Centralized Data</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Dictionaries</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Settings</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Feedback</Typography>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>eDOCU(FAR)</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>AutoSync LI</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>AutoSync INV</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>CommTrack</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>EFC</Typography>
                        <Typography style={{ marginBottom: '20px', cursor: 'pointer', color: '#22668d', fontWeight: '550' }}>Event Mgt</Typography>
                    </div>
                </div>
            </div>

            <br />
        </Box>
    );
    return (
        <React.Fragment>
            <ButtonGroup variant="outlined">
                <Button onClick={toggleDrawer('top', true)}>Menu</Button>
            </ButtonGroup>
            <Drawer
                anchor="top"
                open={state['top']}
                onClose={toggleDrawer('top', false)}
            >
                {list('top')}
            </Drawer>
        </React.Fragment>
    );
}

export default Menubar;
