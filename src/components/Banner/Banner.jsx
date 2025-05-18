import bannerImg from '../../assets/banner/banner.png'
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
            <div className="relative grid md:grid-cols-2 items-center mx-auto">
                <div className="absolute -top-58 left-0 items-center md:static space-y-6 pl-12 pt-74">

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
                        <button className='btn border-none shadow-none bg-[#9dd290] text-white text-xl p-8'><a href="#about">More About Me</a></button>
                        <button className='btn border-none shadow-none bg-black text-white text-xl p-8'><a href="#contact">Get In Touch</a></button>
                    </div>
                </div>

                <div className=''>
                    <img className='w-[696px] md:h-[720px] lg:h-[900px]' src={bannerImg} alt="" />
                </div>
            </div>
    );
};

export default Banner;