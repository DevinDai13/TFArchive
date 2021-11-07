import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from './components/Typography';
import Modal from '@material-ui/core/Modal';
import Earth from './Images/bg2.jpg'
 
const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    position: 'relative',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '92vh',
      width: '500vh',
      minHeight: 500,
      maxHeight: 1300,
    },
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
        'https://images.chinahighlights.com/allpicture/2019/11/81223e71381b4ee99857c3c5_cut_800x500_61.jpg',
      title: '',
      width: '30%',},
    {url:
        'https://buddybits.com/wp-content/uploads/2017/04/10-Best-Chinese-Dishes-You-Must-Try-768x514.jpg',
      title: '',
      width: '30%',},
    {url:
        'https://images.indianexpress.com/2017/07/biryani1.jpg',
      title: '',
      width: '40%',},
    {url:
        'https://images.chinahighlights.com/allpicture/2020/03/a38353fbeb9148c688e44f45_cut_800x500_9.jpgttps://images.tokopedia.net/img/cache/900/product-1/2020/6/17/270760/270760_1bf9ca52-aef9-4030-b366-103dec5fed70_720_720.jpg',
      title: '',
      width: '40%',},
    {url:
        'https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700',
      title: '',
      width: '30%',},
    {url:
        'https://im.whatshot.in/img/2019/Jan/image-9-1546505789.jpg',
      title: '',
      width: '30%',},
    {url:
        'https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg',
      title: '',
      width: '25%',},
    {url:
        'https://images.latintimes.com/sites/latintimes.com/files/styles/picture_this/public/2015/05/01/mexican-food.jpg',
      title: '',
      width: '28%',},
    {url:
        'https://im.whatshot.in/img/2019/Jan/image-2-1546503378.jpg',
      title: '',
      width: '25%',},
      {url:
        'https://insanelygoodrecipes.com/wp-content/uploads/2021/02/Homemade-Borsch-Cabbage-Soup-with-Meat-683x1024.webp',
      title: '',
      width: '22%',},
      
  ];

  const handleclick0 =() => {setOpen0(true);};
  const handleclick1 =() => {setOpen1(true);};
  const handleclick2 =() => {setOpen2(true);};
  const handleclick3 =() => {setOpen3(true);};
  const handleclick4 =() => {setOpen4(true);};
  const handleclick5 =() => {setOpen5(true);};
  const handleclick6 =() => {setOpen6(true);};
  const handleclick7 =() => {setOpen7(true);};
  const handleclick8 =() => {setOpen8(true);};
  const handleclick9 =() => {setOpen9(true);};

  const [open0, setOpen0] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);

  const handleClose = () => {
    setOpen0(false);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
    setOpen5(false);
    setOpen6(false);
    setOpen7(false);
    setOpen8(false);
    setOpen9(false);
  };

  return (
    <Container className={classes.root} 
              component="section" 
              style={{height:'20%', width:'2000vh', backgroundImage: `url(${Earth})`, backgroundColor: 'black',backgroundPosition: 'center',backgroundSize: 'cover'}}>
      <Typography variant="h4" marked="center" align="center" component="h2" style={{color:"white"}}>
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
          <ButtonBase
            key={images[7].title}
            className={classes.imageWrapper}
            style={{width: images[7].width,}}
            onClick={handleclick7}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${images[7].url})`,
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
                {images[7].title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
          <ButtonBase
            key={images[8].title}
            className={classes.imageWrapper}
            style={{width: images[8].width,}}
            onClick={handleclick8}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${images[8].url})`,
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
                {images[8].title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
          <ButtonBase
            key={images[9].title}
            className={classes.imageWrapper}
            style={{width: images[9].width,}}
            onClick={handleclick9}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${images[9].url})`,
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
                {images[9].title}
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
            <img src={images[0].url} alt='' style={{height:'700px', width:'490px'}}/>
          </Modal>    

          <Modal
            open={open1}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <img src={images[1].url} alt=''/>
          </Modal>      

          <Modal
            open={open2}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <img src={images[2].url} alt='' style={{height:'800px', width:'800px'}}/>
          </Modal>      
  
          <Modal
            open={open3}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <img src={images[3].url} alt=''/>
          </Modal>      

          <Modal
            open={open4}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <img src={images[4].url} alt=''/>
          </Modal>   

          <Modal
            open={open5}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <img src={images[5].url} alt=''/>
          </Modal>

          <Modal
            open={open6}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <img src={images[6].url} alt=''/>
          </Modal>   

          <Modal
            open={open7}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <img src={images[7].url} alt=''/>
          </Modal>

          <Modal
            open={open8}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <img src={images[8].url} alt=''/>
          </Modal>

          <Modal
            open={open9}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <img src={images[9].url} alt=''/>
          </Modal>
      </div>
      </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
