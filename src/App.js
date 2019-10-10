import styled from 'styled-components'
import backgroundPic from './static/main_bg.png'
export const PageWrapper = styled.div`
  positopn: relative;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  background-image: url(${backgroundPic});
  background-size: cover;
  -webkit-background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #f5f5f5;
`