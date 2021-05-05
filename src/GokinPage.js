import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './components/AppBar';
import homelogo from './Images/TF_Icon.jpg'
import Toolbar, { styles as toolbarStyles } from './components/Toolbar';
import Button from '@material-ui/core/Button';
import Gallery from 'react-photo-gallery';
import {
  THIRD_PARTY_URL,
  OFFICIAL_URL,
  GOKIN_URL,
  HOME_URL,
} from "./URL"

const PHOTO_SET = [
  {
    src: 'https://c4.wallpaperflare.com/wallpaper/870/684/882/transformers-the-last-knight-optimus-prime-hd-wallpaper-preview.jpg',
  },
  {
    src: 'https://wallpapercave.com/wp/wp6544587.jpg',
  }
];

const styles = (theme) => ({
  root:{
    color: theme.palette.secondary.dark,
  },
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


class AppAppBar extends React.Component {

  render () {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <div className={classes.left}/>
                <a href={HOME_URL}>
                  <img src={homelogo} alt='' style={{height:'60px', width:'60px'}} onClick={HOME_URL} />
                </a>
            <div className={classes.right}/>
              <Button color="inherit" href={OFFICIAL_URL}>Official</Button>
              <Button color="inherit" href={THIRD_PARTY_URL}>Third Party</Button>
              <Button color="inherit" href={GOKIN_URL}>Gokin</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.placeholder} />
        <Gallery photos={PHOTO_SET} />
      </div> 
    );

  }
  
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
