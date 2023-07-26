import React, { useState } from 'react';
import { 
    Box,
    Container, 
    Typography,
    TextField,
    Button
} from '@mui/material';

const Register = () => {
    const [registerValue, setRegisterValue] = useState({
        firstName: '',
        lastName: '',
        age: '',
        phoneNumber: '',
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegisterValue({
            ...registerValue,
            [name]: value
        });
    }

    const handleRegister = () => {
        console.log(registerValue);
        
    };

    return (
        <Container maxWidth="xs">
            <Box sx={{}}>
                <Typography variant="h5" >
                    Sign Up
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleRegister}
                    sx={{
                        display: 'grid',
                        gap: '20px'
                    }}
                >
                    <div>
                        <TextField
                            name="firstName"
                            fullWidth
                            type="text"
                            label="First Name"
                            placeholder='First Name'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <TextField
                            name="lastName"
                            fullWidth
                            type="text"
                            label="Last Name"
                            placeholder='Last Name'
                            onChange={handleInputChange}
                        />
                    </div>
                     <div>
                        <TextField
                            name="age"
                            fullWidth
                            type="number"
                            label="Age"
                            placeholder='Age'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <TextField
                            name="phoneNumber"
                            fullWidth
                            type="tel"
                            label="Phone Number"
                            placeholder='Phone Number'
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <TextField
                            name="email"
                            fullWidth
                            type="email"
                            label="Email"
                            placeholder='Email'
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <TextField
                            name="password"
                            fullWidth
                            type="password"
                            label="Password"
                            placeholder='Password'
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <Button variant="contained" onClick={handleRegister}>
                            Next
                        </Button>
                    </div>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;