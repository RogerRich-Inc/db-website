import React from 'react'
import Icon1 from '../../images/win5.svg'
import Icon2 from '../../images/undraw_hacker_mind_6y85.svg'
import Icon3 from '../../images/creatividad.svg'
import {ProyectsContainer, ProyectsH1,ProyectsH2,ProyectsWrapper,ProyectsCard,ProyectsIcon,ProyectsP} from './ProyectsElements'

const Proyects = () => {
    return (
        <ProyectsContainer id="proyectos">
            <ProyectsH1>Our Proyects</ProyectsH1>
            <ProyectsWrapper>
                <ProyectsCard>
                    <ProyectsIcon src={Icon1} alt='React JS flat design'/>
                    <ProyectsH2>React JS apps</ProyectsH2>
                    <ProyectsP>Best of the best, here in db developmers. </ProyectsP>
                </ProyectsCard>
                <ProyectsCard>
                    <ProyectsIcon src={Icon2} alt='hacker walking and a gigant window of code behind (flat design)'/>
                    <ProyectsH2>JuanBuitrago.com</ProyectsH2>
                    <ProyectsP>React JS, Gatsby JS and Google Cloud.</ProyectsP>
                </ProyectsCard>
                <ProyectsCard>
                    <ProyectsIcon src={Icon3}/>
                    <ProyectsH2>DaniSandoval.com</ProyectsH2>
                    <ProyectsP>React JS, Gatsby JS and Google Cloud.</ProyectsP>
                </ProyectsCard>
            </ProyectsWrapper>
        </ProyectsContainer>
    )
}

export default Proyects
