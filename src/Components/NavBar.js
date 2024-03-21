import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button} from '@mui/material';

const NavBar = () => {
    const location = useLocation();
    const isSubmitCodePage = location.pathname === '/';
    const isSubmissionsPage = location.pathname === '/submissions';
  
    return (
      <AppBar position="static" style={{ marginBottom: '20px' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Take-U-Forward
          </Typography>
          {isSubmitCodePage && (
            <Button color="inherit" component={Link} to="/submissions">
              See Submissions
            </Button>
          )}
          {isSubmissionsPage && (
            <Button color="inherit" component={Link} to="/">
              Submit Code
            </Button>
          )}
        </Toolbar>
      </AppBar>
    );
  };
  

export default NavBar;