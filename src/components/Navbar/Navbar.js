import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';
import { navLinks } from "../../config"
import IconLogo from "../Logo/IconLogo"
import NavMenu from "../Menu/Menu"

const Nav = styled.header`
    position: fixed;
    top: 0;
    z-index: 11;
    width: 100%;
    padding: 0px 50px ;
    justify-content: space-between;
    background-color: var(--white);
    box-shadow: 0 10px 28px 0 #0000000d;


    @media (max-width: 1080px) {
        padding: 0 40px;
    }

    @media (max-width: 768px) {
        padding: 0 25px;
    }
`

const NavContainer = styled.nav`
    display: flex;
    position: relative;
    padding: 0.5rem calc((100vw - 1300px)/2);
    justify-content: space-between;
    z-index: 13;
`
const NavTitle = styled.h3`
    padding-top: 0.5rem;
    padding-left: 1rem;
`
const NavLogoContainer = styled.div`
    display: flex;
    align-items: center;
    
`

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px){
        display: none;
    }

    ol{
        display: flex;

        margin: 0;
        list-style: none;

        li{
            margin: 0px 5px;
            position: relative;
            
        }
    }
`


const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogoContainer>
                    <Link to="/" aria-label="home">
                        <IconLogo />
                    </Link>
                    <Link to="/" aria-label='home'>
                        <NavTitle>Sonjay Ltd Trading as Your Chemist</NavTitle>
                    </Link>
                </NavLogoContainer>

                <NavLinks>
                    {navLinks && (
                        <ol>
                            {navLinks.map(({ url, name }, index) => (
                                <li key={index}>
                                    <Link to={url}>{name}</Link>
                                </li>
                            ))}
                        </ol>
                    )}
                </NavLinks>
                <NavMenu />
            </NavContainer>
        </Nav>
    )
};

export default Navbar