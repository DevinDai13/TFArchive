import React from 'react';
import 'antd/dist/antd.css';
import { Card, Avatar, Typography } from 'antd';

const { Meta } = Card;
const { Title } = Typography;

class AboutMe extends React.Component{
    render(){
        return(
            <Card
                justify="center"
                style={{ height: 1000, width: 1300 }}
                cover={
                <img
                    alt="Devin Dai"
                    src="https://wallpaperaccess.com/full/810539.jpg"/>}
             >
            <Meta
              justify="center"
              style={{ height: 800, width: 1000 }}
              avatar={<Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQFpCsaCmsvP6Q/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=vc7KosBE92YNhZxAE1eWuRjLiHLyCs7CNM8mRVqsPs0" />}
              title={<Title level={4}>About me</Title>}
              description="My name is Devin and I am a recent graduate from the University of Alberta specializing in computer science with a business minor.
              I am experienced with Python, SQL, React, Django framework, HTML, CSS and Git along with other various other programming languages applicable to the 
              development and implementation of business intelligence reports, applications and software. I also have years of experience with Microsoft Office Suite 
              and Google Apps along with proficient knowledge of Tableau for data visualization. I can problem-solve using algorithms, suggest innovative solutions to 
              potential problems and contribute to product design/implementation and business dataset management and visualization. I am familiar with public-sector 
              tasks and government operations from my experience working for the City of Edmonton. I have honed my problem-solving, interpersonal and communication 
              skills through various team projects at the municipal government, university club events and customer service experiences."
            />
          </Card>
        
        )
    }
}

export default AboutMe