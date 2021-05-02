import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from './components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import IntroBackground0 from './Images/TF_Movie_0.jpg'
import IntroBackground1 from './Images/TF_Movie_1.jpg'
import IntroBackground2 from './Images/TF_Movie_2.jpg'
import IntroBackground3 from './Images/TF_Movie_3.jpg'


const backgroundImage = [
  IntroBackground0,
  IntroBackground1,
  IntroBackground2,
  IntroBackground3
];


/*const backgroundImage = IntroBackground;*/

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${IntroBackground1})`,
    backgroundColor: '#7fc7d9', 
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

function ProductHero(props) {
  const {classes} = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
        <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
        <Typography color="inherit" align="center" variant="h2" marked="center">
          TF ARKIVE 
        </Typography>
        <Typography variant="h5" color="inherit" className={classes.more}>
          Welcome to The TF Collection Archive
        </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
