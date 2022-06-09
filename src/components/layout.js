import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import GlobalStyle from "../styles/GlobalStyle"

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;


const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div id="root">
                <GlobalStyle />
                <StyledContent>
                    <div id="content">
                        {children}
                        <Footer />
                    </div>
                </StyledContent>
            </div>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;