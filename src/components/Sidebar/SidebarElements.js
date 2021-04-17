import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
/* GLASS */
background: rgba( 0, 0, 0, 0.60 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 14.5px );
-webkit-backdrop-filter: blur( 14.5px );
border-radius: 0px;
border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );


 position: fixed;
 z-index:999;
 width:100%;
 height: 100%;
 display:grid;
 align-items: center;
 top: 0;
 left: 0;
 transition: 0.3s ease-in-out;
 opacity: ${({ isOpen }) => (isOpen ? '100%': '0')};
 top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
 `;

 export const CloseIcon =styled(FaTimes)`
 color: white;
 `;

 export const Icon = styled.div`
 position: absolute;
 top: 1.2rem;
 right: 1.5rem;
 background: transparent;
 font-size:2rem;
 cursor:pointer;
 outline: none;
 `
 export const SidebarWrapper =styled.div`
 color: white;`

 export const SidebarMenu = styled.ul`
 display:grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(6, 80px);
 text-align: center;
 
 @media screen and (max-width: 480px){
     grid-template-rows: repeat (6,60px);
 }`

 export const SidebarLink = styled (LinkS)`
 display: flex;
 align-elements: center;
 justify-content: center;
 font-size: 1.5rem;
 text-decoration:none;
 list-style:none;
 transition: 0.2s ease-in-out;
 text-decoration:none;
 color: white;
 cursor: pointer;
 
 &:hover{
     color: #01bf71;
     transition: 0.2s ease.in.out;
 }`
