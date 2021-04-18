import React from 'react'
import Icon1 from '../../images/app.svg'
import Icon2 from '../../images/app.svg'
import Icon3 from '../../images/app.svg'
import {ProyectsContainer, ProyectsH1,ProyectsH2,ProyectsWrapper,ProyectsCard,ProyectsIcon,ProyectsP} from './ProyectsElements'

const Proyects = () => {
    return (
        <ProyectsContainer id="proyectos">
            <ProyectsH1>Our Proyects</ProyectsH1>
            <ProyectsWrapper>
                <ProyectsCard>
                    <ProyectsIcon src={Icon1}/>
                    <ProyectsH2>React JS apps</ProyectsH2>
                    <ProyectsP>Best of the best, here.</ProyectsP>
                </ProyectsCard>
                <ProyectsCard>
                    <ProyectsIcon src={Icon2}/>
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
