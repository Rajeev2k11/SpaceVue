
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Login = ({setLoggedIn}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy data for login (replace with actual authentication logic)
    const dummyUsername = 'user';
    const dummyPassword = 'passwrd';

    if (username === dummyUsername && password === dummyPassword) {
      // Redirect to the dashboard on successful login
      setLoggedIn(true)
    } else {
      // Handle unsuccessful login (display an error message)
      alert('Invalid credentials');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div style={styles.paper}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form style={styles.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            style={styles.submit}
          >
            Log In
          </Button>
        </form>
      </div>
    </Container>
  );
};

const styles = {
  paper: {
    marginTop: 64,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 1,
  },
  submit: {
    marginTop: 2,
  },
};

export default Login;
