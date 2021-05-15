import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from './components/Typography';
import IntroBackground0 from './Images/TF_Movie_0.jpg'
import IntroBackground1 from './Images/TF_Movie_1.jpg'
import IntroBackground2 from './Images/TF_Movie_2.jpg'
import IntroBackground3 from './Images/TF_Movie_3.jpg'
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
});

class ProductHero extends React.Component {
  render () {
    const {classes} = this.props;

    const Style1 = {
      height: '897px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      backgroundImage: `url(${IntroBackground0})`,
      backgroundSize: 'cover',
    };

    const Style2 = {
      height: '897px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      backgroundImage: `url(${IntroBackground3})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };

    const Style3 = {
      height: '897px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      backgroundImage: `url(${IntroBackground1})`,
      backgroundSize: 'cover',
    };

    const Style4 = {
      height: '897px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      backgroundImage: `url(${IntroBackground2})`,
      backgroundSize: 'cover',
    };

    return (
      <div>
        <Carousel autoplay effect="fade">
            <div>
              <h3 style={Style1}>
                <Typography color="inherit" align="center" variant="h2" marked="center">
                  TF ARKIVE 
                </Typography>
                <Typography variant="h5" color="inherit" className={classes.more}>
                  Welcome to The Collection Archive
                </Typography>
              </h3>
            </div>
            <div>
              <h3 style={Style2} >
                <Typography color="inherit" align="center" variant="h2" marked="center">
                    TF ARKIVE 
                  </Typography>
                  <Typography variant="h5" color="inherit" className={classes.more}>
                    Welcome to The Collection Archive
                </Typography>
              </h3>
            </div>
            <div>
              <h3 style={Style3}>
                <Typography color="inherit" align="center" variant="h2" marked="center">
                    TF ARKIVE 
                  </Typography>
                  <Typography variant="h5" color="inherit" className={classes.more}>
                    Welcome to The Collection Archive
                </Typography>
              </h3>
            </div>
            <div>
              <h3 style={Style4}>
                <Typography color="inherit" align="center" variant="h2" marked="center">
                    TF ARKIVE 
                  </Typography>
                  <Typography variant="h5" color="inherit" className={classes.more}>
                    Welcome to The Collection Archive
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
