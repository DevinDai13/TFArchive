import React from 'react';
import 'antd/dist/antd.css';
import { List } from 'antd';
import { white } from 'material-ui/styles/colors';

const data = [
    'Proficient Tableau utilization skills',
    'Linux / Unix',
    'Java, C, C#, C++, HTML, Bootstrap, JavaScript & Nodejs',
    'Heroku',
    'Google Apps & Google script',
    'Microsoft Office Suite',
    'MIPS / Computer Architecture / Computer Assembly',
    'Statistical analysis using SPSS',
    'Deterministic, stochastic modeling and optimization modeling',
    'Fluent in English and Mandarin',
    'Certificate of workplace safety system issues by Job Safety Skills Society (JSSS)',
  ];

class Qualification extends React.Component{
    render(){
        return(
          <List
            size="large"
            style={{backgroundColor:white, width: 1000}}
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
             
        )
    }
}

export default Qualification