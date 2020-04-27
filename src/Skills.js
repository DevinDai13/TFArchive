import React from 'react';
import 'antd/dist/antd.css';
import { Card, Typography } from 'antd';

const { Title } = Typography;

class Skill extends React.Component{
    render(){
        return(
          <Card title={<Title level={4}>Skills</Title>} style={{height:900, width:1300}}> 
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
              
        )
    }
}

export default Skill