import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem, withStyles } from "@material-ui/core";

/* This component will have the Astero name/logo on the top 
of the header bar with links to different website sections below it, 
and a larger link to the steam page below those */

const styles = {
  button: {
    margin: "10px"
  },
  navbar: {
    textAlign: "center",
    gridRowStart: "1"
  },
};

const Navbar = props => {
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const { classes } = props;

  const onHover = event => {
    setAnchor(event.target);
    setOpen(true);
  };

  return (
    <div className={classes.navbar}>
        <h1>ASTERO</h1>
      <div className="header-buttons">
        <Button component={Link} to="/" variant="contained" className={classes.button} onMouseLeave={() => setOpen(false)}>
          Home
        </Button>
        <Button component={Link} to="/team" variant="contained" className={classes.button} onMouseLeave={() => setOpen(false)}>
          Team
        </Button>
        <Button
          onMouseEnter={onHover}
          variant="contained"
          className={classes.button}
        >
          Game
        </Button>
        <Menu
          id="game-menu"
          anchorEl={anchor}
          open={open}
          MenuListProps={{ onMouseLeave: () => setOpen(false) }}
        >
          <MenuItem component={Link} to="/game/media">
            Media
          </MenuItem>
          <MenuItem component={Link} to="/game/patches">
            Patch Notes
          </MenuItem>
          <MenuItem component={Link} to="/game/roadmap">
            Roadmap
          </MenuItem>
        </Menu>
        <Button component={Link} to="/blog" variant="contained" className={classes.button}>
          Blog
        </Button>
        <Button variant="contained" className={classes.button} onMouseLeave={() => setOpen(false)}>
          Forums
        </Button>
      </div>
      <div>
        <Button variant="contained" className={classes.button} onMouseLeave={() => setOpen(false)}>
          Buy
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(Navbar);
