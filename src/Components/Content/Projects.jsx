import { Grid, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";

const styles = {
  Paper: {
    padding: 20,
    margin: 10,
    height: 400
  }
};

class Projects extends Component {
  state = {};
  render() {
    return (
      <Grid container>
        <Grid item xs>
          <Paper style={styles.Paper}>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              Projects
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Projects;
