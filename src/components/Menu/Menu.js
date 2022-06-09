import React, { useState, useRef, useEffect } from 'react'
import { Link } from "gatsby"
import { FaTimes, FaBars } from "react-icons/fa"
import styled from "styled-components"
import { navLinks } from '../../config'

const SideMenu = styled.div`
    display: none;
    @media (max-width: 768px){
        display: block;
    }
`

const MenuHamburgerButton = styled.div`
    display: none;
    @media (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

const MenuSideContainer = styled.div`
    width: 100%;
    flex-direction: column;
    text-align: center;
`

const MenuSideBar = styled.aside`
    display: none;
    @media (max-width: 768px){
        position: fixed;
        top: 0%;
        border: 0;
        right: 0;
        padding: 50px 10px;
        width: min(75vw, 400px);
        height: 100vh;
        outline: 0;
        background-color: gray;
        z-index: 20;
        visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
        transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    }

    ol {
        padding: 0;
        margin: 0;
        list-style: 0;
        width: 100%;
        
        li {
            position: relative;
            margin: 0 auto 20px;   
            @media (max-width: 600px) {
                margin: 0 auto 1-px;
            }
        }
    }
`


const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const clickOutside = useRef();

    {/* https://usehooks.com/useOnClickOutside/ */ }
    const useOnClickOutside = (ref, handler) => {
        useEffect(() => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
            [ref, handler]
        );
    }



    useOnClickOutside(clickOutside, () => setMenuOpen(false));

    return (
        <SideMenu>
            <div ref={clickOutside}>
                <MenuHamburgerButton onClick={toggleMenu} aria-label="Menu">
                    {menuOpen ? <FaBars /> : <FaTimes />}
                </MenuHamburgerButton>
                <MenuSideBar menuOpen={menuOpen}>
                    <MenuSideContainer>
                        {navLinks && (
                            <ol>
                                {navLinks.map(({ url, name }, index) => (
                                    <li key={index}>
                                        <Link to={url}>{name}</Link>
                                    </li>
                                ))}
                            </ol>)}
                    </MenuSideContainer>
                </MenuSideBar>
            </div>
        </SideMenu>
    )
}

export default Menu