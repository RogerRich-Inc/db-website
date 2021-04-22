import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="aboutus"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={toggle}
          >
            Nosotros
          </SidebarLink>
          <SidebarLink
            to="portafolio"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={toggle}
          >
            Portafolio
          </SidebarLink>
          <SidebarLink
            to="proyectos"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={toggle}
          >
            Proyectos
          </SidebarLink>
          <SidebarLink
            to="contacto"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-10}
            activeClass="active"
            onClick={toggle}
          >
            Contacto
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
