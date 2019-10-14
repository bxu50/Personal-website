import React, { Component } from 'react';
import { HeaderWrapper, NavItem, Nav } from './style'
import { Link } from "react-router-dom";
class Header extends Component {
    render(){
        return(
            <HeaderWrapper>
                <Nav>
                <Link to="/">
                <NavItem className='left'>Benshuai Xu</NavItem>
                </Link>
                <NavItem className='right'>Contact</NavItem>
                <NavItem className='right'>Services</NavItem>
                <NavItem className='right'>Blog</NavItem>
                <Link to="/resume">
                <NavItem className='right'>Resume</NavItem>
                </Link>
                <Link to="/">
                <NavItem className='right'>Home</NavItem>
                </Link>
                
                </Nav>
            </HeaderWrapper>
        )
    }
}

export default Header;