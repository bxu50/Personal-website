import React, { Component } from 'react';
import { HeaderWrapper, NavItem, Nav } from './style'
import { Link } from "react-router-dom";
class Header extends Component {
    render(){
        return(
            <HeaderWrapper>
                <Nav>
                <NavItem className='left'>Benshuai Xu</NavItem>
                <NavItem className='right'>Contact</NavItem>
                <NavItem className='right'>Services</NavItem>
                <NavItem className='right'>Blog</NavItem>
                <NavItem className='right'>Resume</NavItem>
                <NavItem className='right'>Home</NavItem>
                
                </Nav>
            </HeaderWrapper>
        )
    }
}

export default Header;