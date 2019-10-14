import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

const Text = styled.div`
  &.h1 {
    font-size: 56px;
    font-weight: 700;
    margin: 30px 0 0;
    color: #fff;
  }
  &.h2 {
    font-size: 18px;
    color: #fff;
    margin: 0;
  }
  &.h3 {
    margin-bottom: 10px;
    font-size: 21px;
    margin: 5px 0 25px;
  }
  &.p {
    font-size: 15px;
    margin: 0 0 10px;
    font-weight: 400;
  }
`;

const ContentWrapper = styled.div`
  display: inline-block;
  height: 100%;
`;

const PersonalInfo = styled.ul`
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const PersonalInfoItem = styled.li`
  margin: 10px;
  text-aline: left;
`;

const PersonalInfoTitle = styled.span`
  min-width: 120px;
  display: inline-block;
`;

const PersonalInfoValue = styled.span`
  display: inline-block;
  color: #9e9e9e;
`;

class HomeBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe:
        "A motivated and enthusiastic web developer with a true passion for web development, seeking Front-end developer where previous experience and skills can be put to efficient use. Keen to learn new technologies and look at ways to exceed company goals and expectations.",
      personalInfoContent: [
        {
          title: "Age",
          value: "21"
        },
        {
          title: "Residence",
          value: "Australia"
        },
        {
          title: "Address",
          value: "8 Waterside Place, Doclands, VIC"
        },
        {
          title: "Email",
          value: "liambenshuai@gmail.com"
        },
        {
          title: "Phone",
          value: "+61 478803176"
        }
      ]
    };
  }
  render() {
    return (
      <Row type="flex">
        <Col xl={12} lg={12} xs={24}>
          <ContentWrapper>
            <Text className="h3">About Me</Text>
            <Text className="p">{this.state.aboutMe}</Text>
          </ContentWrapper>
        </Col>
        <Col xl={12} lg={12} xs={24}>
          <PersonalInfo>
            {this.state.personalInfoContent.map(item => {
              return (
                <PersonalInfoItem>
                  <PersonalInfoTitle>{item.title}</PersonalInfoTitle>
                  <PersonalInfoValue>{item.value}</PersonalInfoValue>
                </PersonalInfoItem>
              );
            })}
          </PersonalInfo>
        </Col>
      </Row>
    );
  }
}

export default HomeBottom;
