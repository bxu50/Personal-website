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
`;

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
`;

export const HomeTitle = styled.div`
    display: block;
    text-align: center;
`;

export const TitleWrapper = styled.div`
    text-align: center;
    display: block;
`;

export const Heading = styled.div`
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

export const SocialWrapper = styled.div`
    position: relativel
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;

`
export const SocialIcon = styled.a`
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
export const HomeBottom = styled.div`
    padding: 30px 50px 50px;
`
export const ContentWrapper = styled.div`
    display: inline-block;
    height: 100%;
`


export const ListWrapper = styled.ul`
    display: inline-block;
    margin: 0;
    padding: 0;
    List-style: none;
`

export const ListItem = styled.li`
    margin: 10px;
    text-aline: left;
`

export const ListValue = styled.span`
    &.title{
        min-width: 120px;
        display: inline-block
    }
    &.value{
        display: inline-block;
        color: #9e9e9e;
    }
`