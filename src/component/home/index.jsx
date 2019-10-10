import React, { Component } from 'react'
import { HomeWrapper, HomeTop, HomePhoto } from './style'
import Photo from '../../static/photo.png'
import { Row, Col } from 'antd'
class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeTop>
                    <Row>
                        <Col span = {8}>
                            <HomePhoto>
                            <img className = "image" src={Photo}></img>
                            </HomePhoto>
                        </Col>
                        <Col span = {16}></Col>
                    </Row>

                </HomeTop>
            </HomeWrapper>
        )
    }
}

export default Home