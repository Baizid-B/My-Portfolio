import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import "../../components/Header/Navbar.css"

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    const handleMenuBar = () =>{
        setOpen(!isOpen)
    }
    
    const close = () => setOpen(false)

    const link = <>
        <li><Link onClick={close} to="home" activeClass="active-link" spy={true} smooth={true} duration={500}>home</Link></li>
        <li><Link onClick={close} to="about" activeClass="active-link" spy={true} smooth={true} duration={500}>about</Link></li>
        <li><Link onClick={close} to="works" activeClass="active-link" spy={true} smooth={true} duration={500}>works</Link></li>
        <li><Link onClick={close} to="contact" activeClass="active-link" spy={true} smooth={true} duration={500}>contact</Link></li>
        
    </>
    return (
        <div className="navbar px-5 bg-[#1A1A1A] shadow-sm fixed">
            <div className="navbar-start">
                <a href='home' className="text-xl text-white">Baizid Bostami.</a>
                {/* <Link to='home' className='cursor-pointer text-white'>Baizid Bostami.</Link> */}
            </div>

            <div className="navbar-end">
                <div className='hidden lg:flex text-white uppercase'>
                    <ul className='menu menu-horizontal '>
                        {link}
                    </ul>
                </div>

                <div className="md:hidden">
                    <div className='md:hidden' onClick={handleMenuBar}>
                        {
                            isOpen ? (<FaTimes size={25} style={{ color: '#ffffff' }} />)
                            : (<FaBars size={25} style={{ color: '#ffffff' }} />)
                        }
                    </div>
                    <ul className={isOpen ? "nav-menu text-white pt-6 space-y-8 uppercase active" : "nav-menu text-white pt-6 space-y-8 uppercase"}>
                        {link}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


