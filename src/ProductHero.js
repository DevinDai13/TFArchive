import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from './components/Typography';
import IntroBackground1 from './Images/homebackground.jpg'

import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { styles as toolbarStyles } from './components/Toolbar';


const styles = (theme) => ({
  placeholder: toolbarStyles(theme).root,
  background: {
    backgroundImage: `url(${IntroBackground1})`,
    backgroundColor: 'black', 
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(10),
  }
});

class ProductHero extends React.Component {
  render () {
    const {classes} = this.props;

    const Style1 = {
      height: '897px',
      color: '#1e1e1f',
      lineHeight: '160px',
      textAlign: 'center',
      backgroundImage: `url(${IntroBackground1})`,
      backgroundSize: 'cover',
    };

    return (
      <div> 
        <Carousel autoplay effect="fade" speed={10000} dots={false}>
            <div>
              <h3 style={Style1}>
                <Typography color="inherit" align="center" variant="h2" marked="center">
                  Anteiku
                </Typography>
                <Typography variant="h5" color="inherit" className={classes.more}>
      
                </Typography>
              </h3>
            </div>
          </Carousel>
      </div>
    );
  }
  
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
