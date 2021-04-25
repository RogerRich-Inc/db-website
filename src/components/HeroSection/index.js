import React, {useState} from 'react'
import { HeroContainer, HeroBg, HeroContent, HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight, VideoFondo} from './HeroElements'
import {Button} from '../ButtonElement'
//524748179
//524797150
//524796593
//vertical
//524797791
//524797697
function HeroSection() {
    const [hover, setHover] = useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
            <VideoFondo src="https://player.vimeo.com/video/342658137?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=true&dnt=true&background=1"
                frameborder="0"
                allowfullscreen
                title="vimeo video astronaut"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>db company</HeroH1>
                <HeroP>We create awesome React JS apps</HeroP>
                <HeroBtnWrapper>
                    <Button to='contacto' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >
                        Contact {hover ? <ArrowForward /> :<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>

            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
