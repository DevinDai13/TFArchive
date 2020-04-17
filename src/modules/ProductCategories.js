import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from './components/Typography';
import Modal from '@material-ui/core/Modal';
import AboutMe from './AboutMe';
import Experiences from './Experiences';

 
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
        'https://img.huffingtonpost.com/asset/5b9e41861f00002c0021eee7.jpeg?ops=scalefit_720_noupscale',
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
    setOpen0(true);
  };

  const handleclick1 =() => {
    setOpen1(true);
  };

  const handleclick2 =() => {
    setOpen2(true);
  };

  const handleclick3 =() => {
    setOpen3(true);
  };

  const [open0, setOpen0] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);


  const handleClose = () => {
    setOpen0(false);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
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

          <Modal
            open={open0}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            >
            <AboutMe />
          </Modal>    

          <Modal
            open={open1}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <Experiences />
          </Modal>      

          <Modal
            open={open2}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <Experiences />
          </Modal>      
  
          <Modal
            open={open3}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <Experiences />
          </Modal>      

      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
