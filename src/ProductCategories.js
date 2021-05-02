import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from './components/Typography';
import Modal from '@material-ui/core/Modal';
import MPMRachet from './Images/mpm_rachet.jpg'
 
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
    backgroundPosition: 'center 8%',
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
    {url:
        'https://media.karousell.com/media/photos/products/2020/01/22/legendary_toys_lt02_optimus_prime_mpm4_1579701182_71f571b4_progressive.jpg',
      title: 'MPM Optimus Prime',
      width: '30%',},
    {url:
        'https://hobbykorner.com/wp-content/uploads/2020/03/b51dac8e5b.jpg',
      title: 'MPM Bumbelbee',
      width: '30%',},
    {url:
        'https://news.tfw2005.com/wp-content/uploads/sites/10/2019/01/MPM6-Ironhide-022.jpg',
      title: 'MPM Ironhide',
      width: '40%',},
    {url:
        'https://images.tokopedia.net/img/cache/900/product-1/2020/6/17/270760/270760_1bf9ca52-aef9-4030-b366-103dec5fed70_720_720.jpg',
      title: 'MPM Jazz',
      width: '40%',},
    {url:
        MPMRachet,
      title: 'MPM Ratchet',
      width: '30%',},
    {url:
        'https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.6435-9/70039363_2512032202416638_6982035789999767552_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=973b4a&_nc_ohc=ywCFmr_0e88AX-1b3dR&_nc_ht=scontent.fyyc2-1.fna&oh=2ead77a29c9621f1b8bb1faf3aab50c8&oe=60B4E6F5',
      title: 'MPM Megatron',
      width: '30%',},
    {url:
        'https://www.thechosenprime.com/assets/images/hasbro%20masterpiece/movie%20masterpiece/mpm10%20starscream/mpm10-starscream-10.jpg',
      title: 'MPM Starscream',
      width: '35%',},
    {url:
        'https://www.thechosenprime.com/assets/images/hasbro%20masterpiece/movie%20masterpiece/mpm10%20starscream/mpm10-starscream-10.jpg',
      title: 'MPM Starscream',
      width: '35%',},
  ];

  const handleclick0 =() => {setOpen0(true);};
  const handleclick1 =() => {setOpen1(true);};
  const handleclick2 =() => {setOpen2(true);};
  const handleclick3 =() => {setOpen3(true);};
  const handleclick4 =() => {setOpen4(true);};
  const handleclick5 =() => {setOpen5(true);};
  const handleclick6 =() => {setOpen6(true);};

  const [open0, setOpen0] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);

  const handleClose = () => {
    setOpen0(false);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
    setOpen5(false);
    setOpen6(false);
  };

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
          Gallery
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
          <ButtonBase
            key={images[4].title}
            className={classes.imageWrapper}
            style={{width: images[4].width}}
            onClick={handleclick4}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${images[4].url})`,
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
                {images[4].title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
          <ButtonBase
            key={images[5].title}
            className={classes.imageWrapper}
            style={{width: images[5].width,}}
            onClick={handleclick5}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${images[5].url})`,
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
                {images[5].title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
          <ButtonBase
            key={images[6].title}
            className={classes.imageWrapper}
            style={{width: images[6].width,}}
            onClick={handleclick6}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${images[6].url})`,
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
                {images[6].title}
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
            <img src='https://media.karousell.com/media/photos/products/2020/01/22/legendary_toys_lt02_optimus_prime_mpm4_1579701182_71f571b4_progressive.jpg' alt='' />
          </Modal>    

          <Modal
            open={open1}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <img src={MPMRachet} alt=''/>
          </Modal>      

          <Modal
            open={open2}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <img src={MPMRachet} alt=''/>
          </Modal>      
  
          <Modal
            open={open3}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <img src={MPMRachet} alt=''/>
          </Modal>      

          <Modal
            open={open4}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <img src={MPMRachet} alt=''/>
          </Modal>   

          <Modal
            open={open5}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <img src={MPMRachet} alt=''/>
          </Modal>

          <Modal
            open={open6}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <img src={MPMRachet} alt=''/>
          </Modal>   


      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
