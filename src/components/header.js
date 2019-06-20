import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem, WithStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

/* This component will have the Astero name/logo on the top 
of the header bar with links to different website sections below it, 
and a larger link to the steam page below those */

const styles = {
  button: {
    margin: "5px"
  }
};

const Header = props => {
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const { classes } = props;

  const onHover = event => {
    setAnchor(event.target);
    setOpen(true);
  };

  return (
    <div className="header">
      <div>
        <h1>ASTERO</h1>
      </div>
      <div className="header-buttons">
        <Button containerElement={<Link to="/" />} variant="contained" className={classes.button}>
          Home
        </Button>
        <Button containerElement={<Link to="/team" />} variant="contained" className={classes.button}>
          Team
        </Button>
        <Button onMouseEnter={onHover} variant="contained" className={classes.button}>
          Game
        </Button>
        <Menu
          id="game-menu"
          anchorEl={anchor}
          open={open}
          MenuListProps={{ onMouseLeave: () => setOpen(false) }}
        >
          <MenuItem containerElement={<Link to="/game/media" />}>
            Media
          </MenuItem>
          <MenuItem containerElement={<Link to="/game/patches" />}>
            Patch Notes
          </MenuItem>
          <MenuItem containerElement={<Link to="/game/roadmap" />}>
            Roadmap
          </MenuItem>
        </Menu>
        <Button containerElement={<Link to="/blog" />} variant="contained" className={classes.button}>
          Blog
        </Button>
        <Button variant="contained" className={classes.button}>Forums</Button>
      </div>
      <div>
        <Button variant="contained" className={classes.button}>Buy</Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
