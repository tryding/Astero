import React, { useState } from "react";
import { withStyles } from "@material-ui/core";

const styles = themes => ({});

const Tracker = props => {
  const { classes } = props

  return (
    <div>
      <h3> Patch Tracker Section </h3>
      <ul>
        <li>Version 0.0.5</li>
        <li>Version 0.0.4</li>
        <li>Version 0.0.3</li>
        <li>Version 0.0.2</li>
        <li>Version 0.0.1</li>
      </ul>
    </div>
  );
};

export default withStyles(styles)(Tracker);
