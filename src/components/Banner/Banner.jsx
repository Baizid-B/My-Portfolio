import bannerImg from '../../assets/banner/banner.png'
import { Typewriter } from 'react-simple-typewriter'
import SocialIcon from '../SocialIcon/SocialIcon';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

const Banner = () => {
    const bannerRef = useRef()

    useGSAP(() => {
        var tl = gsap.timeline()

        tl.from("#text",{
            x: -50,
            opacity:0,
            duration:1.80,
            delay:1.20
        })

        tl.from("#imgY",{
            opacity:0,
            duration:1.80,
            scale:0.5
        })
        
        tl.from("#socialX",{
            y: -100,
            opacity:0,
            duration:1.80,
        })
    },{scope:bannerRef})

    return (
            <div ref={bannerRef} className="relative grid md:grid-cols-2 items-center px-2 mx-auto">
                <div id='text' className="absolute z-10 -top-58 left-0 items-center md:static space-y-6 pl-12 pt-74">

                    <h1 className="uppercase ml-2 text-3xl font-bold text-[#9dd290]">hello</h1>

                    <div className=''>
                        <h1 className='text-6xl space-y-2'>
                            <p className='text-[#9dd290] md:text-black'>I'm Baizid Bostami{' '} </p>
                            <span className='text-gray-400 md:text-[#9dd290] '>
                                <Typewriter
                                    words={['Front-End Developer', 'UI/UX Designer', 'React']}
                                    loop={true}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={100}
                                    delaySpeed={2000}
                                />
                            </span>
                        </h1>
                    </div>

                    <div className='flex flex-col lg:flex-row items-baseline lg:items-center mt-20 gap-6 '>
                        <a href="#about" className='cursor-pointer text-xl px-5 py-4 hover:outline-1 hover:bg-transparent hover:text-black shadow-none bg-[#9dd290] text-white'>More About Me</a>
                        <a href="#contact" className='cursor-pointer outline-1 hover:bg-black hover:text-white font-bold rounded-xs shadow-none text-black text-xl px-5 py-4'>Get In Touch</a>
                    </div>
                </div>

                <div className=''>
                    <img id='imgY' className='w-[696px] md:h-[720px] lg:h-[1000px]' src={bannerImg} alt="" />

                    <div id='socialX' className='hidden md:flex absolute md:top-70 md:right-15 lg:top-105 lg:right-20'>
                        <SocialIcon />
                    </div>
                </div>
            </div>
    );
};

export default Banner;