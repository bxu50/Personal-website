import React, { Component } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import {
  HomeWrapper,
  HomeTop,
  HomePhoto,
  TitleWrapper,
  Heading,
  SocialWrapper,
  SocialIcon,
  HomeBottom,
  ContentWrapper,
  ListWrapper,
  ListItem,
  ListValue
} from "./style";
import Photo from "../../static/photo.png";
import { Row, Col } from "antd";
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            ListInfo:[{
                title: 'Age',
                value: '21'
            },{
                title: 'Residence',
                value: 'Australia'
            },{
                title: 'Address',
                value: '8 Waterside Place, Doclands, VIC'
            },{
                title: 'Email',
                value: 'liambenshuai@gmail.com'
            },{
                title: 'Phone',
                value: '+61 478803176'
            }]
        }
    }
  render() {
    return (
      <HomeWrapper>
        <HomeTop>
          <Row>
            <Col span={8}>
              <HomePhoto>
                <img className="image" src={Photo}></img>
              </HomePhoto>
            </Col>
            <Col span={16}>
              <TitleWrapper>
                <Heading className="h1">Benshuai Xu</Heading>
                <Heading className="h2">Front-End Developer</Heading>
              </TitleWrapper>
              <SocialWrapper>
                <SocialIcon href="https://www.linkedin.com/in/benshuai-xu-81561aba/">
                  <LinkedInIcon className="icon" />
                </SocialIcon>
              </SocialWrapper>
            </Col>
          </Row>
        </HomeTop>
        <HomeBottom>
          <Row>
            <Col span={12}>
              <ContentWrapper>
                  <Heading className='h3'>
                      About Me
                  </Heading>
                  <Heading className='p'>
                  A motivated and enthusiastic web developer with a true passion for web development, seeking Front-end developer where previous experience and skills can be put to efficient use. Keen to learn new technologies and look at ways to exceed company goals and expectations.
                  </Heading>
              </ContentWrapper>
            </Col>
            <Col span={12}>
                <ListWrapper>
                    {
                        this.state.ListInfo.map((item)=>{
                            return(
                            <ListItem>
                            <ListValue className='title'>{item.title}</ListValue>
                            <ListValue className='value'>{item.value}</ListValue>
                            </ListItem>
                            )
                        })
                    }
                </ListWrapper>
            </Col>
          </Row>
        </HomeBottom>
      </HomeWrapper>
    );
  }
}

export default Home;
