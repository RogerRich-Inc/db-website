import React, {useState} from 'react'
import Navbar from './index'
import Sidebar from '../Sidebar'

const NavbarFinal = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

return (

    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    </>
)
}
export default NavbarFinal

