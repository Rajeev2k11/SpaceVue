import { Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <Container maxWidth="md">
        <Typography variant="body2" color="white" align="center">
          © {new Date().getFullYear()} SpaceVue. All rights reserved.
        </Typography>
        <Typography variant="body2" color="white" align="center">
          Powered by Space Vue
        </Typography>
        <Typography variant="body2" color="white" align="center">
          Icons made by <Link href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik</Link> from <Link href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">www.flaticon.com</Link>
        </Typography>
      </Container>
    </footer>
  );
};

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    padding: '15px 0',
    textAlign: 'center',
  },
};

export default Footer;
