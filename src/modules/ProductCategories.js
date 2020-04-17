import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

import Container from '@material-ui/core/Container';
import Typography from './components/Typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://img1.goodfon.com/wallpaper/nbig/1/47/noutbuk-rabochee-mesto-zametki.jpg',
      title: 'About me',
      width: '40%',
    },
    {
      url:
        'https://wallpaperaccess.com/full/1986739.jpg',
      title: 'Hobbies',
      width: '20%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80',
      title: 'Skills',
      width: '40%',
    },
    {
      url:
        'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/165/165339/air-travel.jpg?w=1155&h=1541',
      title: 'Experiences',
      width: '100%',
    },
      
  ];

  const handleclick0 =() => {
    alert("GOT HERE 0");
  };

  const handleclick1 =() => {
    alert("GOT HERE 1");
  };

  const handleclick2 =() => {
    alert("GOT HERE 2");
  };


  const handleclick3 =() => {
    alert("GOT HERE 3");
  };


  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
          Get to know me
      </Typography>
      <div className={classes.images}>
          <ButtonBase
            key={images[0].title}
            className={classes.imageWrapper}
            style={{width: images[0].width,}}
            onClick={handleclick0}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${images[0].url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {images[0].title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
          <ButtonBase
            key={images[1].title}
            className={classes.imageWrapper}
            style={{width: images[1].width,}}
            onClick={handleclick1}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${images[1].url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {images[1].title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
          <ButtonBase
            key={images[2].title}
            className={classes.imageWrapper}
            style={{width: images[2].width,}}
            onClick={handleclick2}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${images[2].url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {images[2].title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
          <ButtonBase
            key={images[3].title}
            className={classes.imageWrapper}
            style={{width: images[3].width,}}
            onClick={handleclick3}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${images[3].url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {images[3].title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);