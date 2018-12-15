import { Card, Grid, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 400
  }
};

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <Grid container>
        <Grid item xs>
          <Paper style={styles.Paper}>
            <Card>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                Welcome to my place. My Name is Jake Jordan Feel free to click
                around to see more
              </Typography>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default AboutMe;
