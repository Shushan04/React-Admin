import { 
    Box,
    Container, 
    Typography,
    TextField,
    Button
 } from '@mui/material';

const Login = () => {
    const handleLogin = (values) => {
        console.log(handleLogin)
    }
    return (
        <Container maxWidth="xs">
            <Box sx={{}}>
                
                <Typography  variant="h5">
                    Sign in
                </Typography> 
            

                
                <Box 
                component="form"
                onSubmit={handleLogin}
                sx={{

                    display:'grid',
                    gap: '20px'
                }}>
                     <div>
                        <TextField
                            name="email"
                           fullWidth
                            type="email"
                            label="Email"
                            placeholder='Email'
                        />                   

                    </div>

                    <div>
                       <TextField
                       name="password"
                       fullWidth
                        type="password"
                        label="Password"
                        placeholder='Password'
                        />                     
                    </div>

                    <div>
                       <Button variant="contained">
                            Login
                       </Button>           
                    </div>

                </Box>
            </Box>
        </Container>
    )
};


export default Login;