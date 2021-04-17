import React, {useState} from 'react'
import Video from '../../videos/video4.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
import {Button} from '../ButtonElement'


function HeroSection() {
    const [hover, setHover] = useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>db company</HeroH1>
                <HeroP>We create awesome React JS apps</HeroP>
                <HeroBtnWrapper>
                    <Button to='contacto' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true"
                    dark="true">
                        Contact {hover ? <ArrowForward /> :<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>

            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
