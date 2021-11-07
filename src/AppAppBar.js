import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './components/AppBar';
import homelogo from './Images/noodle.png'
import Toolbar, { styles as toolbarStyles } from './components/Toolbar';
import Button from '@material-ui/core/Button';
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
    color: '#1e1e1f',
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: '#1e1e1f',
  },
});


class AppAppBar extends React.Component {

  render () {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <div className={classes.left}/>
                <a href={HOME_URL}>
                  <img src={homelogo} alt='' style={{height:'60px', width:'100px'}} onClick={HOME_URL} />
                </a>
            <div className={classes.right}/>
                <Button color="inherit" href={OFFICIAL_URL}>Menu</Button>
                <Button color="inherit" href={THIRD_PARTY_URL}>Third Party</Button>
                <Button color="inherit" href={GOKIN_URL}>Gokin</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.placeholder} />
      </div>
    );

  }
  
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
