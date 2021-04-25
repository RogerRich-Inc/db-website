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
            <VideoFondo src="https://www.youtube.com/embed/mFschwzjxC4?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=mFschwzjxC4&mute=1"
                frameborder="0"
                allowfullscreen
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allow="autoplay"
                title="youtube video player astronaut"/>/>
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
