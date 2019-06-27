import React from "react";
import Navbar from "./navbar";
import { withStyles } from "@material-ui/core";
import Tracker from "./PatchTracker";
import Contact from "./contact";

const styles = theme => ({
  homeLayout: {
    justifyContent: "center",
    textAlign: "left",
    display: "grid"
  },
  footer: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gridRowStart: "3"
  },
  aboutAstero: {
    gridRowStart: "2"
  }
});

const Home = props => {
  const { classes } = props;

  return (
    <div className={classes.homeLayout}>
      <Navbar />
      <div className={classes.aboutAstero}>
        <iframe
          title="test"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ITidiBe-0T0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <h2>About Astero</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis
          quam eget tellus tristique, in finibus massa suscipit. In hac
          habitasse platea dictumst. Curabitur vel nulla arcu. Nam interdum
          sagittis ipsum, nec feugiat ex dapibus at. Sed auctor vitae justo sit
          amet tincidunt. Pellentesque eu tortor enim. Cras pharetra dui lacus,
          at iaculis sem hendrerit id. Vivamus quam odio, tincidunt nec risus
          quis, pharetra volutpat turpis. Sed ullamcorper neque et tortor
          cursus, eu auctor arcu mollis. Cras sit amet ante eu sem hendrerit
          gravida ac vel lectus. Sed viverra non ligula non bibendum. Ut at
          volutpat mauris, sit amet auctor ipsum. Nam dapibus lacus quis nunc
          eleifend, vel volutpat arcu finibus. Donec vestibulum libero a dictum
          luctus. Aenean consectetur purus sem, a congue lacus molestie ac.
          Phasellus volutpat ipsum id fermentum pretium. Nulla scelerisque velit
          eros, in dapibus urna commodo pellentesque. Quisque interdum felis
          aliquam eros pharetra consequat. Fusce vitae egestas mi. Aliquam
          elementum hendrerit nulla, vel gravida massa. Fusce mollis ex ut purus
          consequat malesuada a pellentesque ipsum. Integer ac auctor nulla. Ut
          at arcu nec ipsum gravida dictum. Nunc eget dui et lectus pharetra
          fringilla nec non urna. Phasellus placerat nisi lacus, at sagittis
          orci congue scelerisque. Praesent leo ipsum, consectetur quis
          fringilla ultricies, congue non diam. Cras dapibus quis tellus quis
          dictum. Ut ullamcorper mi tellus. Aenean sollicitudin magna tellus, a
          iaculis eros feugiat id.
        </p>
      </div>
      <div className={classes.footer}>
        <Tracker />
        <Contact />
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
