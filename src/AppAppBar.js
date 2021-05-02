import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './components/AppBar';
import homelogo from './Images/TF_Icon.jpg'
import Toolbar, { styles as toolbarStyles } from './components/Toolbar';
import Button from '@material-ui/core/Button';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import AboutMe from "./AboutMe"
import Skills from "./Skills"
import Hobby from "./Hobby"
import {
  THIRD_PARTY_URL,
  OFFICIAL_URL,
  GOKIN_URL,
  HOME_URL,
} from "./URL"


const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'flex-start',
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});


function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}/>
              <a href={HOME_URL}>
                <img src={homelogo} alt='' style={{height:'60px', width:'60px'}} onClick={HOME_URL} />
              </a>
          <div className={classes.right}/>
            <Router>
              <Button color="inherit" href={OFFICIAL_URL}>Official</Button>
              <Button color="inherit" href={THIRD_PARTY_URL}>Third Party</Button>
              <Button color="inherit" href={GOKIN_URL}>Gokin</Button>
              <Switch>
                <Route exact path={OFFICIAL_URL} component={AboutMe} />
                <Route exact path={THIRD_PARTY_URL} component={Skills} />
                <Route exact path={GOKIN_URL} component={Hobby} />
              </Switch>
            </Router>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
