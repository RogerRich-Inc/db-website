import React from 'react'
import Icon1 from '../../images/win5.svg'
import Icon2 from '../../images/undraw_hacker_mind_6y85.svg'
import Icon3 from '../../images/creatividad.svg'
import {ProyectsContainer, ProyectsH1,ProyectsH2,ProyectsWrapper,ProyectsCard,ProyectsIcon,ProyectsP} from './ProyectsElements'

const Proyects = () => {
    return (
        <ProyectsContainer id="proyectos">
            <ProyectsH1>Nuestros Proyectos</ProyectsH1>
            <ProyectsWrapper>
                <ProyectsCard>
                    <ProyectsIcon src={Icon3} alt='React JS flat design'/>
                    <ProyectsH2>EZ learn APP</ProyectsH2>
                    <ProyectsP>Educación de calidad en Vaupés mediante app. </ProyectsP>
                </ProyectsCard>
                <ProyectsCard>
                    <ProyectsIcon src={Icon2} alt='hacker walking and a gigant window of code behind (flat design)'/>
                    <ProyectsH2>Learn Bot IA</ProyectsH2>
                    <ProyectsP>Inteligencia Artificial para la traducción de lenguas nativas.</ProyectsP>
                </ProyectsCard>
                <ProyectsCard>
                    <ProyectsIcon src={Icon1}/>
                    <ProyectsH2>EZ learn robot</ProyectsH2>
                    <ProyectsP>Robot profesor con todos los contenidos descargados para zonas muy remotas.</ProyectsP>
                </ProyectsCard>
            </ProyectsWrapper>
        </ProyectsContainer>
    )
}

export default Proyects
