import React from 'react';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
const { Meta } = Card;

class Experiences extends React.Component{
    render(){
        return(
            <Card
                justify="center"
                style={{ height: 900, width: 1300 }}
                cover={
                <img
                    alt="Devin Dai"
                    src="https://wallpaperaccess.com/full/810539.jpg"/>}
             >
            <Meta
              justify="center"
              style={{ height: 900, width: 1000 }}
              avatar={<Avatar src="https://wallpaperaccess.com/full/810539.jpg" />}
              title="Experinces"
              description="This is the description"
            />
          </Card>
        
        )
    }
}

export default Experiences