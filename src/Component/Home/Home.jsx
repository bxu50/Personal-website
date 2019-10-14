import React, { Component, Fragment } from "react";
import Layout from "../Layout/Layout";
import HomeTop from "./components/HomeTop";
import HomeBottom from "./components/HomeBottom";

class Home extends Component {
  render() {
    return <Layout top={<HomeTop />} bottom={<HomeBottom />} />;
  }
}

export default Home;
