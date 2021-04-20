import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from  './SidebarElements'
const Sidebar= ( { isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="nosotros" onClick={toggle}>Nosotros</SidebarLink>  
                    <SidebarLink to='portafolio' onClick={toggle}>Portafolio</SidebarLink>  
                    <SidebarLink to='proyectos' onClick={toggle}>Proyectos</SidebarLink>  
                    <SidebarLink to='contacto' onClick={toggle}>Contacto</SidebarLink>  
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
