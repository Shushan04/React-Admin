import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import { 
    Box,
    Container, 
    Typography,
    TextField,
    Button
 } from '@mui/material';


const Login = () => {
    const [loginValue, setLoginValue] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setLoginValue({
            ...loginValue,
            [name]: value
        })
    }


    const handleLogin = async () => {
        const {email, password} = loginValue;   
        try{
            createUserWithEmailAndPassword(auth, email, password);
        } catch(error){
            console.log(error);
        } finally{
            
        }    
        
    };
    return (
        <Container maxWidth="xs" >
            <Box sx={{
                display: 'grid', 
                gap: '20px',
                
            }}>
                
                <Typography  variant="h5" margin="20px" >
                    Sign in
                </Typography> 
            

                
                <Box 
                component="form"
                onSubmit={handleLogin}
                sx={{

                    display:'grid',
                    gap: '20px',
                    
                }}>
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
                       <Button variant="contained" onClick={handleLogin}>
                            Login
                       </Button>           
                    </div>

                </Box>
            </Box>
        </Container>
    )
};


export default Login;