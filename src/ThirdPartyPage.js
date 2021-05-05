import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import { Card, Typography } from 'antd';
import Button from '@material-ui/core/Button';
import AppBar from './components/AppBar';
import homelogo from './Images/TF_Icon.jpg'
import Toolbar, { styles as toolbarStyles } from './components/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import {
  THIRD_PARTY_URL,
  OFFICIAL_URL,
  GOKIN_URL,
  HOME_URL,
} from "./URL"

const { Title } = Typography;

const styles = (theme) => ({
  root:{
    color: theme.palette.primary.dark,
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

class ThirdPartyPage extends React.Component{
    render(){
      const { classes } = this.props;
        return(
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
              <Card title={<Title level={4}>Skills</Title>} style={{height:980, width:1300}}> 
                <Card type="inner" title="Python	[4 Years]">
                  <ul>
                    <li>Implemented solutions and programs to complex problems and datasets</li>
                    <li>Demonstrated familiarity with the language by using it to build a 2048 game</li>
                    <li>Experienced with building GUIs</li>
                  </ul>
                </Card>
                <Card style={{ marginTop: 7 }} type="inner" title="Git	[3 Years]">
                  <ul>
                    <li>Experienced with version control and pair programming through Linux terminal</li>
                    <li>Projects can be viewed on <a href="https://github.com/DevinDai13"> my github </a></li>
                  </ul>
                </Card>
                <Card style={{ marginTop: 7 }} type="inner" title="SQL	[1.5 Year]">
                  <ul>
                    <li>Created connections for data extraction, enabling Python-created GUIs to manipulate datasets</li>
                    <li>Implemented various Tableau dashboards using Tableau SQL</li>
                  </ul>
                </Card>
                <Card style={{ marginTop: 7 }} type="inner" title="RESTful Web Application	[1 Year]">
                  <ul>
                    <li>Worked as a team to design, develop and implement a RESTful social networking web app using React & Django framework and deployed using Heroku </li>
                    <li>Gained strong understanding in REST API, frontend & backend design and implementation</li>
                    <li><a href="https://github.com/404-SpongeBob-SquarePants/CMPUT404-project-socialdistribution">Web Application view on Github </a></li>
                  </ul>
                </Card>
                <Card style={{ marginTop: 7 }} type="inner" title="Android Application	[1 Year]">
                  <ul>
                    <li>Worked as a team to develop an Android application for tracking medical data, demonstrating skills in UI design and functionality mapping </li>
                    <li>Created many other applications with capabilities including remote data connections and geodata displays</li>
                    <li><a href="https://github.com/CMPUT301F18T04/MedicalTracker">Android Application view on Github</a></li>
                  </ul>
                </Card>
              </Card>
          </div>    
        )
    }
}

ThirdPartyPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles)(styles)(ThirdPartyPage)