import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem,NavLinks} from './NavbarElements';
//scroll
import {animateScroll as scroll} from 'react-scroll'


const Navbar = ( {toggle} ) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo onClick={scroll.scrollToTop}>db</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to ='nosotros'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ='portafolio'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Portafolio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ='proyectos'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Proyectos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ='contacto'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Contacto</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;
