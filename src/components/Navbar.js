import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

class Navbar extends Component{
    render(){
        return(
            <NavbarStyle className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="homeIcon" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Продукти
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className = "ml-auto">
                    <StyledButton>
                        My Cart
                    </StyledButton>
                </Link>
                <Link to="/profile" className="px-3">
                    <StyledButton>
                        My Profile
                    </StyledButton>
                </Link>
            </NavbarStyle>
        )
    }
}

const StyledButton = styled.button`
    text-transform: capitalize;
    font-size: 1.3rem;
    color: var(--mainWhite) !important;
    background: transparent;
    border: 0.05rem solid #A9A9A9;
    border-radius: 0.5rem;
    padding: 0.2rem 0.4rem;
    margin: 0.2 0.4 0.2 0;
    transition: all 0.3s ease-in-out;
    &:hover{
     background: #C0C0C0
    }
    &:focus{
     outline: none;
     background: #C0C0C0
    }
`;


const NavbarStyle = styled.nav`
    .nav-link{
      color: var(--mainWhite) !important;
      font-size: 1.2rem;
      &:hover{
        color: #C0C0C0 !important;
      }
      &:focus{
        color: #C0C0C0 !important;
      }
    }
`;

export default Navbar;