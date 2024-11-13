import { Box, Typography, Link, Stack } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={4}
          className="footer-links"
        >
          <Link
            href="https://github.com/bryanvela98"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaGithub className="icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/bryanedinsonvelan/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaLinkedin className="icon" />
          </Link>
        </Stack>

        <Typography variant="body2" className="footer-copyright">
          &copy; {new Date().getFullYear()} Artesanía Peruana. Todos los
          derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
