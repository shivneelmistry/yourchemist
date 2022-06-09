import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const FooterContainer = styled.div`
    background-color: var(--white);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
const FooterLinksWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 786px){
        grid-template-columns: 1fr;
    }
`
const FooterDescription = styled.div`
    padding: 0 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
        margin-top: 2rem;
        margin-bottom: 0.5rem;
        color: black;
    }

    @media (max-width: 786px){
        padding: 1rem;
    }
`
const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`
const FooterRepresentation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 1rem;

    @media (max-width: 786px) {
        grid-template-columns: 1fr;
    }
`

const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
    height: 3px;

    @media (max-width: 400px){
        padding: 1rem;
    }
`
const FooterLink = styled(Link)`
    text-decoration: none;
    font-size: 11px;
`
const FooterItem = styled.div`
    justify-content: center;
    align-items: center;
    font-size: small;
`

const Footer = () => {
    return (
        <FooterContainer>

                <FooterDescription>
                    <h1> Yourchemist </h1>
                    <FooterRepresentation>
                    <FooterItem> Your Friendly Family Chemist </FooterItem>
                </FooterRepresentation>
                    <p>
                        &copy; {new Date().getFullYear()}
                        <span> Yourchemist. </span>
                    </p>
                </FooterDescription>

            <FooterLinksWrap>
                <FooterLinksItems>
                    <FooterLinkTitle> Contact Us </FooterLinkTitle>

                    <FooterLink to="">Address</FooterLink>
                    <FooterLink to="">Phone</FooterLink>
                    <FooterLink to="">Email</FooterLink>
                    <FooterLink to="">Linkedin</FooterLink>
                    <FooterLink to="">Facebook</FooterLink>
                </FooterLinksItems>
            </FooterLinksWrap>
        </FooterContainer>
    )
};

export default Footer