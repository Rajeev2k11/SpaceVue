
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // If you are using React Router

const Header = () => {
  return (
    <AppBar position="static" style={styles.appBar}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SpaceVue
        </Typography>
        <div>
          
          <Button component={Link} to="/dashboard" color="inherit" style={styles.button}>
            Dashboard
          </Button>
          <Button component={Link} to="/charts" color="inherit" style={styles.button}>
            Charts
          </Button>
          {/* Add more buttons as needed */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  appBar: {
    background: '#333',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  button: {
    margin: '0 10px',
  },
};

export default Header;
