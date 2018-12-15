import { Paper, Tab, Tabs } from "@material-ui/core";
import React, { Component } from "react";

class Footer extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="primary"
          fullWidth
        >
          <Tab label="About Me" />
          <Tab label="Projects" />
          <Tab label="Accomplishments" />
        </Tabs>
      </Paper>
    );
  }
}

export default Footer;
