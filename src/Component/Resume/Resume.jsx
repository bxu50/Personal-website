import React, { Component } from "react";
import Layout from '../Layout'
import ResumeBottom from './components/ResumeBottom'
import { PageWrapper,
         PageTop,
         PageBottom,
         Text } from "./style";

class Resume extends Component {
  render() {
    return (
        <Layout top = {<Text>Resume</Text>} bottom = {<ResumeBottom />} />
    );
  }
}
export default Resume;
