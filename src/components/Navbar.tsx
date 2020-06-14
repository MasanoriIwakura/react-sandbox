import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const linkStyle = {
  color: "white",
  marginLeft: "1rem"
};

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Home</Typography>
          <a
            href="https://github.com/MasanoriIwakura/react-sandbox"
            target="blank"
            style={linkStyle}
          >
            <GitHubIcon />
          </a>
        </Toolbar>
      </AppBar>
    </>
  )
};

export default Navbar;