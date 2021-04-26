import styled from 'styled-components'

import img from '../../images/bakgroundCover.png'

import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer =styled.div`
 background: url(${img}),#0c0c0c;
 background-size: cover;
 background-position: 50%;
 background-repeat: no-repeat;

 width:100vw;
 height:90vh;
 top:0;
 right:0;
 bottom:0;
 left:0;
 
 display:flex;
 justify-content: center;
 align-items:center;
 padding: 0 30px;

 position: relative;
 z-index:1;

 overflow:hidden;
 
  :before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
          180deg, 
          rgba(0,0,0,0.2) 0%,
          rgba(0,0,0,0.6)100%),
          linear-gradient(180deg, rgba(0,0,0, 0.2) 0%, transparent 100%);
        z-index: 2;
  }

`

  export const HeroBg = styled.div`
   position: absolute;
   width:100vw;
   height: 100vh;
   left: 0;
   
   @media (max-aspect-ratio: 16 / 9){
    left: -100%;
    width: 300%;
}
   @media (min-aspect-ratio: 16 / 9){
    top: -100%;
    height: 300%;
}
@media (max-width: 500px){
  left: -140%;
  width: 400%;
}
   `
   export const VideoFondo =styled.iframe`
   position: relative;
   
       top: 0;
       left: 0;
       width:100%;
       height: 100%;
   
       border-top-width: 0px;
       border-right-width: 0px;
       border-bottom-width: 0px;
       border-left-width: 0px;
       
       border-width: 0px;
       border-style: inset;
       border-color: initial;
       border-image: initial;
       `
 export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flow-root;
  flex-direction: column;
  align-items: center;
  @media (max-height: 380px){
    padding:74px 0 0 0;
  }`

  export const HeroH1 = styled.h1`
  color: white;
  font-size:48px;
  text-align: center;
  
  @media screen and (max-width:768px){
      font-size:40px;
  }
  @media screen and (max-width:480px){
    font-size:32px;
}
`
export const HeroP=styled.p`
margin-top:24px;
color:white;
font-size:24px;
text-align:center;
max-width: 600px;

@media screen and (max-width:768px){
    font-size:24px;
}
@media screen and (max-width:480px){
  font-size:18px;
}`

export const HeroBtnWrapper = styled.div`
 margin-top:32px;
 display:flex;
 flex-direction:column;
 align-items:center;`

 export const ArrowForward = styled(MdArrowForward)`
 margin-left: 8px;
 font-size:20px;`

 export const ArrowRight = styled(MdKeyboardArrowRight)`
 margin-left: 8px;
 font-size:20px;`
