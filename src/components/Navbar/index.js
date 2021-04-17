import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem,NavLinks} from './NavbarElements';
const Navbar = ( {toggle} ) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='inicio'>db</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to ='nosotros'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ='portafolio'>Portafolio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ='proyectos'>Proyectos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ='contacto'>Contacto</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;
