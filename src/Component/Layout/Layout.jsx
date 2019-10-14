import React, { Component, Fragment } from "react";
import styled from 'styled-components';
import BackgroundPic from '../../static/sp_main_bg.png'
const PageWrapper = styled.div`
    position: relative;   
    margin-left: 10%
    margin-right: 10%
    background-color: #fff;
    overflow: hidden;
    border-radius: 15px;
`;

const PageTop = styled.div`
    position: relative;
    background-color: #2eca7f;
    padding: 50px;
    margin-bottom: 25px;
    text-align: center;
    background-image: url(${BackgroundPic})
`;
const PageBottom = styled.div`
    padding: 30px 50px 50px;
`

class Layout extends Component {
    render(){
        return(
            <PageWrapper>
            <PageTop>
                {this.props.top}
            </PageTop>
            <PageBottom>
                {this.props.bottom}
            </PageBottom>
            </PageWrapper>
        )
    }
}
export default Layout