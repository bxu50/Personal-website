import styled from 'styled-components'
import BackgroundPic from '../../static/sp_main_bg.png'
import 'antd/dist/antd.css'
export const PageWrapper = styled.div`
    position: relative;   
    margin-left: 10%
    margin-right: 10%
    background-color: #fff;
    overflow: hidden;
    border-radius: 15px;
`;

export const PageTop = styled.div`
    position: relative;
    background-color: #2eca7f;
    padding: 50px;
    margin-bottom: 25px;
    text-align: center;
    background-image: url(${BackgroundPic})
`;
export const PageBottom = styled.div`
    padding: 30px 50px 50px;
`
export const Text = styled.div`
    color: #fff;
    font-size: 44px;
    margin: 0;
    font-weight: 600;
`