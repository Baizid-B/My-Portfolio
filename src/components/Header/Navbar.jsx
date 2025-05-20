import { useEffect, useRef, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link, scrollSpy } from 'react-scroll';
import "../../components/Header/Navbar.css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    const handleMenuBar = () =>{
        setOpen(!isOpen)
    }
    
    const close = () => setOpen(false)

    const link = <>
        <li className='navLinkY'><Link onClick={close} to="home" activeClass="active-link" spy={true} smooth={true} duration={500}>home</Link></li>
        <li className='navLinkY'><Link onClick={close} to="about" activeClass="active-link" spy={true} smooth={true} duration={500}>about</Link></li>
        <li className='navLinkY'><Link onClick={close} to="works" activeClass="active-link" spy={true} smooth={true} duration={500}>works</Link></li>
        <li className='navLinkY'><Link onClick={close} to="contact" activeClass="active-link" spy={true} smooth={true} duration={500}>contact</Link></li>
        
    </>

    // animation part
    const navRef = useRef()

    useGSAP(() =>{
        var tl = gsap.timeline()
        tl.from(navRef.current,{
            y: -20,
            opacity:0,
            duration:0.60,
            delay:1
        })
        tl.from("#nav",{
           y: -20,
           opacity:0,
           duration:0.60,
        })
        tl.from('.navLinkY',{
            y:-20,
            opacity:0,
            duration:0.60,
            stagger:0.3
        })
    },{scope:navRef})

    useEffect(() => {
        const timeout = setTimeout(() => {
            scrollSpy.update();
        },1000)

        return () => clearTimeout(timeout)
    }, [])



    return (
        <div ref={navRef} className="fixed z-30 top-0 inset-x-0 flex items-center justify-between rounded-md lg:w-[96%] mx-auto py-5 lg:mt-8 px-5 bg-gradient-to-r from-black to-[#9dd290] shadow-sm">
            <div id='nav' className="navar-start">
                <a href='home' className="md:text-2xl text-white font-semibold">Baizid Bostami.</a>
            </div>

            <div className="navbar-end">
                <div className='hidden lg:flex text-white uppercase'>
                    <ul className='menu menu-horizontal text-2xl'>
                        {link}
                    </ul>
                </div>

                {/* Mobile Reponsive */}
                <div className="lg:hidden">
                    <div className='lg:hidden' onClick={handleMenuBar}>
                        {
                            isOpen ? (<FaTimes size={25} style={{ color: '#ffffff' }} />)
                            : (<FaBars size={25} style={{ color: '#ffffff' }} />)
                        }
                    </div>
                    <ul className={isOpen ? "nav-menu min-h-screen text-white pt-6 space-y-8 uppercase active" : "nav-menu min-h-screen text-white pt-6 space-y-8 uppercase"}>
                        {link}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


