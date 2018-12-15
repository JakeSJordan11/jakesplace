import { Grid, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";

const styles = {
  Paper: {
    padding: 20,
    margin: 10,
    height: 175,
    backgroundColor: "#0afebd"
  }
};

class Accomplishments extends Component {
  state = {};
  render() {
    return (
      <Grid container>
        <Grid item xs>
          <Paper style={styles.Paper}>
            <Typography>Top Left</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper style={styles.Paper}>
            <Typography>Top Middle</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper style={styles.Paper}>
            <Typography>Top Right</Typography>
          </Paper>
        </Grid>
        <Grid container>
          <Grid item xs>
            <Paper style={styles.Paper}>
              <Typography>Bottom Left</Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper style={styles.Paper}>
              <Typography>Bottom Middle</Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper style={styles.Paper}>
              <Typography>Bottom Left</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Accomplishments;
