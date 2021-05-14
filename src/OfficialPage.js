import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import AppBar from './components/AppBar';
import homelogo from './Images/TF_Icon.jpg'
import Toolbar, { styles as toolbarStyles } from './components/Toolbar';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import Earth from './Images/earth.jpg' 
import {
  THIRD_PARTY_URL,
  OFFICIAL_URL,
  GOKIN_URL,
  HOME_URL,
} from "./URL"

const styles = theme => (
  {
    placeholder: toolbarStyles(theme).root,
    toolbar: {
      justifyContent: 'flex-start',
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
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    card: {
      minWidth: 275,
      maxWidth: 400,
      marginRight: 20,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }
);



class SimpleCard extends React.Component {
  render () {
    const { classes } = this.props;

    const contentStyle = {
      height: '897px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      backgroundImage: `url(${Earth})`,
    };

    return (
      <div>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <div className={classes.left} style={{backgroundColor:'black'}}/>
                <a href={HOME_URL}>
                  <img src={homelogo} alt='' style={{height:'60px', width:'60px'}} onClick={HOME_URL} />
                </a>
            <div className={classes.right}/>
              <Button color="inherit" href={OFFICIAL_URL}>Official</Button>
              <Button color="inherit" href={THIRD_PARTY_URL}>Third Party</Button>
              <Button color="inherit" href={GOKIN_URL}>Gokin</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.placeholder}/>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
      </div>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard)