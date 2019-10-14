import React, { Component } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styled from 'styled-components'
import {Row, Col} from 'antd'
import Photo from "../../../static/photo.png";
import 'antd/dist/antd.css'

const HomePhoto = styled.div`
    max-width: 280px;
    margin-bottom: -75px;
    background-color: #fff
    vertical-align: bottom;
    .image{
        max-width: 100%;
        height: auto;
        norder: 0;
    }
`;

const TitleWrapper = styled.div`
    text-align: center;
    display: block;
`;

const Text = styled.div`
    &.h1{
        font-size: 56px;
        font-weight: 700;
        margin: 30px 0 0;
        color: #fff;
    }
    &.h2{
        font-size: 18px;
        color: #fff;
        margin: 0
    }
    &.h3{
        margin-bottom: 10px;
        font-size: 21px;
        margin: 5px 0 25px;
    }
    &.p{
        font-size: 15px;
        margin: 0 0 10px;
        font-weight: 400;
    }
`;

const SocialWrapper = styled.div`
    position: relativel
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;

`
const SocialIcon = styled.a`
    display: inline-block;
    width: 36px;
    height: 36px;
    border-radius: 24px;
    background-color: #fff;
    margin: 0 1px;
    color: #9e9e9e;
    text-align: center;
    .icon{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        }
`

class HomeTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "Benshuai Xu",
          position: "Front-End Developer"
        }
    }
    render() {
        return (
              <Row>
                <Col xl={8} lg={8} sm={24}>
                  <HomePhoto>
                    <img className="image" src={Photo}></img>
                  </HomePhoto>
                </Col>
                <Col xl={16} lg={16} sm={24}>
                  <TitleWrapper>
                    <Text className="h1">{this.state.name}</Text>
                    <Text className="h2">{this.state.position}</Text>
                  </TitleWrapper>
                  <SocialWrapper>
                    <SocialIcon href="https://www.linkedin.com/in/benshuai-xu-81561aba/">
                      <LinkedInIcon className="icon" />
                    </SocialIcon>
                  </SocialWrapper>
                </Col>
              </Row>
        )
    }
}

export default HomeTop