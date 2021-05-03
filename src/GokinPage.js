import React from 'react';
import 'antd/dist/antd.css';
import { Card, Typography } from 'antd';

const { Title } = Typography;

class Hobby extends React.Component{
    render(){
        return(
        <Card title={<Title level={4}>Hobbies</Title>} style={{height:980, width:1300}}> 
          <Card type="inner" title="Badminton">
            <ul>
            </ul>
          </Card>
          <Card style={{ marginTop: 20 }} type="inner" title="jogging">
            <ul>
            </ul>
          </Card>
          <Card style={{ marginTop: 20 }} type="inner" title="Climbing">
            <ul>
            </ul>
          </Card>
          <Card style={{ marginTop: 20 }} type="inner" title="Plastic Modeling">
            <ul>
            </ul>
          </Card>
          <Card style={{ marginTop: 20 }} type="inner" title="Photography">
            <ul>
            </ul>
          </Card>

        </Card>
              
        )
    }
}

export default Hobby