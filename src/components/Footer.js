import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinkWrapper>
                <FooterDesc>
                    <h1>EXPLORIX</h1>
                    <p>W trive to create the best experiences for our customers</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to="/contact">Contact</FooterLink>
                    <FooterLink to="/support">Support</FooterLink>
                    <FooterLink to="/Destinations">Destinations</FooterLink>
                    <FooterLink to="/">Sposorships</FooterLink>
                </FooterLinkItems>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to="/contact">Submit Videos</FooterLink>
                    <FooterLink to="/support">Ambassadors</FooterLink>
                    <FooterLink to="/Destinations">Agency</FooterLink>
                    <FooterLink to="/">Influence</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="/contact">Instagram</FooterLink>
                    <FooterLink to="/support">Facebook</FooterLink>
                    <FooterLink to="/Destinations">Youtube</FooterLink>
                    <FooterLink to="/">Twitter</FooterLink>
                </FooterLinkItems>
            </FooterLinkWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1600px)/2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;
`;
const FooterLinkWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   @media screen and (max-width: 650px){
        grid-template-columns: 1fr;
   }
`;
const FooterDesc = styled.div`
 padding: 0 2rem;
    h1{
        margin-bottom: 3rem;
        color: #f26a2e;
    }
    @media screen and (max-width: 400px){
        padding: 1rem;
    }
`;
const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
    @media screen and (max-width: 400px){
        padding: 1rem;
    }
`;
const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;    
`;
const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3d3d4e;
    &:hover{
        color: #f26a2e;
        transition: 0.3s ease-out;
        cursor: pointer;
    }
`;