import React from 'react';
import { Link } from 'react-router-dom';
import { 
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box
} from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Admin App
                </Typography>
                <Box>
                    <Link to="/login" style={{ textDecoration: 'none'}}>
                        <Button color='inherit'>
                            Sign In
                        </Button>
                    </Link>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <Button color="inherit">
                            Sign Up
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

const Home = () => {
    return (
        <div>
            <Navbar />

        </div>
    );
};

export default Home;


