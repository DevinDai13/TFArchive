import React from 'react';
import 'antd/dist/antd.css';
import { Card, Typography } from 'antd';

const { Title } = Typography;

class Experiences extends React.Component{
    render(){
        return(
          <Card title={<Title level={4}>Experiences</Title>} style={{height:980, width:1300}}>
          <Card type="inner" title="City of Edmonton - Business Analyst Summer Student [May 2019 - August 2019]">
            <ul>
              <li>Demonstrated strong data visualizing and database skills through various Tableau visualization dashboards for the Project Management Office.</li>
              <li>Showed strong and efficient computer developing and Google Apps utilizations skills by assisting in the implementation of PMO Mailman program.</li>
              <li>Demonstrated strong organizational and innovative skills in assisting in the creation of an updated PMO framework overview and number of documents.</li>
            </ul>
          </Card>
          <Card style={{ marginTop: 20 }} type="inner" title="Dream Tea House	[2017 - Present]">
            <ul>
              <li>Demonstrated communication skills through interacting with customers.</li>
              <li>Practiced financial reconciliation skills by balancing the register.</li>
              <li>Assisted in coordinating workloads and resources.</li>
            </ul>
          </Card>
          <Card style={{ marginTop: 20 }} type="inner" title="University of Alberta Chinese Club	[2016 - 2018]">
            <ul>
              <li>Honed public speaking and presentation skills.</li>
              <li>Built interpersonal skills as a club recruiter.</li>
              <li>Demonstrated ability for planning and organizing events.</li>
            </ul>
          </Card>
          <Card style={{ marginTop: 20 }} type="inner" title="Edmonton Public Library	[2015 - 2017]">
            <ul>
              <li>Acclimated to working in a public sector organization on the donation book sorting team.</li>
              <li>Participated in various public EPL book sales.</li>
            </ul>
          </Card>
        </Card>
              
        )
    }
}

export default Experiences