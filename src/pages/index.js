import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Proyects from '../components/Proyectos'
import Sidebar from '../components/Sidebar'

const Inicio = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection{...homeObjOne}/>
        <InfoSection{...homeObjTwo}/>
        <Proyects />
        <InfoSection{...homeObjThree}/>
        <Footer/>
        </>
    )
}

export default Inicio
