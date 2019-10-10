import styled from 'styled-components'
import BackgroundPic from '../../static/sp_main_bg.png'
import PeoplePhoto from '../../static/photo.png'
import 'antd/dist/antd.css'
export const HomeWrapper = styled.div`
    position: relative;   
    margin-left: 10%
    margin-right: 10%
    background-color: #fff;
    overflow: hidden;
    border-radius: 15px;
`

export const HomeTop = styled.div`
    position: relative;
    background-color: #2eca7f;
    padding: 50px;
    margin-bottom: 25px;
    background-image: url(${BackgroundPic})
`;

export const HomePhoto = styled.div`
    max-width: 280px;
    margin-bottom: -75px;
    background-color: #fff
    vertical-align: bottom;
    .image{
        max-width: 100%;
        height: auto;
        norder: 0;
    }

`

export const HomeTitle = styled.div`
    display: block;
    text-align: center;
`