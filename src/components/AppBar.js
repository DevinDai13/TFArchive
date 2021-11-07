import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';


const styles = (theme) => ({
  root: {
    color: '#1e1e1f',
  },
});

class AppBar extends React.Component {
  render(){
    return(
      <MuiAppBar elevation={0} position="static" style={{backgroundColor:'#FAEBD7'}}{...this.props}/>
    );
  }
  
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);
