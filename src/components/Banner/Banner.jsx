import bannerImg from '../../assets/banner/banner.png'
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div>
            <div className="relative grid md:grid-cols-2">
                <div className="absolute bg-[#9dd290] md:static space-y-6 pl-12 pt-74">
                    <h1 className="uppercase ml-2 text-3xl font-bold text-white">hello</h1>
                    <div>
                        <h1 className='text-6xl space-y-2'>
                            <p>I'm Baizid Bostami{' '} </p>
                            <span className='text-white '>
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

                    <div className='flex items-center mt-20 gap-6 '>
                        <button className='btn bg-white text-xl p-8'><a href="#about">More About Me</a></button>
                        <button className='btn bg-black text-white text-xl p-8'><a href="#contact">Get In Touch</a></button>
                    </div>
                </div>

                <div className=''>
                    <img className='w-[696px] h-[1000px]' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;