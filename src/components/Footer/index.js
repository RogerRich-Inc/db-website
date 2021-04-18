import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'


import{FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink, SocialIconLink, SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="inicio">Inicio</FooterLink>
                                <FooterLink to="inicio">How it works</FooterLink>
                                <FooterLink to="inicio">Testimonials</FooterLink>
                                <FooterLink to="inicio">Careers</FooterLink>
                                <FooterLink to="inicio">Investors</FooterLink>
                                <FooterLink to="inicio">Terms of Service</FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Proyects</FooterLinkTitle>
                                <FooterLink to="inicio">danisando.com</FooterLink>
                                <FooterLink to="inicio">juanbui.com</FooterLink>
                                <FooterLink to="inicio">divisionesjl.com</FooterLink>
                                <FooterLink to="inicio">montacargasvalladolid</FooterLink>
                                <FooterLink to="inicio">Terms of Service</FooterLink> 
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contactanos</FooterLinkTitle>
                                <FooterLink to="contacto">Contacto</FooterLink>
                                <FooterLink to="inicio">Soporte</FooterLink>
                                <FooterLink to="inicio">Destinaciones</FooterLink>
                                <FooterLink to="inicio">Sponsorships</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Redes Sociales</FooterLinkTitle>
                                <FooterLink to="inicio">Intagram</FooterLink>
                                <FooterLink to="inicio">Git-Hub</FooterLink>
                                <FooterLink to="inicio">Youtube</FooterLink>
                                <FooterLink to="inicio">Twitter</FooterLink>
                                <FooterLink to="inicio">Discord</FooterLink>
                                <FooterLink to="inicio">Terms of Service</FooterLink> 
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>db</SocialLogo>
                        <WebsiteRights>db © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.instagram.com/db" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Git-Hub">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
