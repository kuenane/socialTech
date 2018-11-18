import React, { Component } from "react";
import { Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import SvgIcon from "@material-ui/core/SvgIcon";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  tab: {
    width: "33%"
  }
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;
    const value = this.state.value;
    return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          centered
          onChange={this.handleChange}
        >
          <Tab
            icon={
              <SvgIcon>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </SvgIcon>
            }
            className={classes.tab}
          />
          <Tab
            icon={
              <SvgIcon>
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </SvgIcon>
            }
            className={classes.tab}
          />
          <Tab
            icon={
              <SvgIcon>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </SvgIcon>
            }
            className={classes.tab}
          />
        </Tabs>
      </Paper>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
