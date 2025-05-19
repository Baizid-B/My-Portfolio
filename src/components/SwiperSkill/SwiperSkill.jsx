import Marquee from "react-fast-marquee";
import html from '../../assets/skills/html.webp'
import css from '../../assets/skills/CSS3.webp'
import js from '../../assets/skills/js.webp'
import tailwindcss from '../../assets/skills/tailwindcss.webp'
import react from '../../assets/skills/react.webp'
import firebase from '../../assets/skills/firebase.webp'
import github from '../../assets/skills/github.webp'
import photoShop from '../../assets/skills/photoShop.webp'
import mongodb from '../../assets/skills/mongodb.webp'
import express from '../../assets/skills/express.webp'
import nodeJS from '../../assets/skills/nodeJS.webp'
import next from '../../assets/skills/next.webp'

const SwiperSkill = () => {
    return (
        <div>
            <h1 className="border-l-2 border-[#9dd290] text-3xl font-extrabold pl-1"> Skill</h1>

            <div className="space-y-15 my-12">
                <Marquee 
                    pauseOnHover
                    speed={60}
                    gradient
                    gradientWidth={20}
                    gradientColor={['#ffffff', '#ffffff']}  
                    >
                   <div className="mr-10 md:mr-20 lg:mr-40 bg-white border text-center ">
                        <img className="w-20 md:w-30 lg:w-40" src={html} alt="html" />
                   </div>

                   <div className="mr-10 md:mr-20 lg:mr-40 bg-white border text-center ">
                        <img className="w-20 md:w-30 lg:w-40" src={css} alt="css" />
                   </div>

                   <div className="mr-10 md:mr-20 lg:mr-40 bg-white border text-center ">
                        <img className="w-20 md:w-30 lg:w-40" src={js} alt="js" />
                   </div>

                   <div className="mr-10 md:mr-20 lg:mr-40 bg-white border text-center ">
                        <img className="w-20 md:w-30 lg:w-40" src={tailwindcss} alt="tailwindcss" />
                   </div>

                   <div className="mr-10 md:mr-20 lg:mr-40 bg-white border text-center ">
                        <img className="w-20 md:w-30 lg:w-40" src={react} alt="react" />
                   </div>

                   <div className="mr-10 md:mr-20 lg:mr-40 bg-white border text-center ">
                        <img className="w-20 md:w-30 lg:w-40" src={firebase} alt="firebase" />
                   </div>

                </Marquee>

                <Marquee
                    direction="right"
                    pauseOnHover
                    speed={60}
                    gradient
                    gradientWidth={20}
                    gradientColor={['#ffffff', '#ffffff']}  
                    >
                   <div className="mr-10 md:mr-20 lg:mr-40 bg-white border text-center ">
                        <img className="w-20 md:w-30 lg:w-40" src={github} alt="github" />
                   </div>

                   <div className="mr-10 md:mr-20 lg:mr-40 bg-white border text-center ">
                        <img className="w-20 md:w-30 lg:w-40" src={photoShop} alt="photoShop" />
                   </div>

                   <div className="mr-10 md:mr-20 lg:mr-40 bg-white border text-center ">
                        <img className="w-20 md:w-30 lg:w-40" src={mongodb} alt="mongodb" />
                   </div>

                   <div className="mr-10 md:mr-20 lg:mr-40 bg-white border text-center ">
                        <img className="w-20 md:w-30 lg:w-40" src={express} alt="express" />
                   </div>

                   <div className="mr-10 md:mr-20 lg:mr-40 bg-white border text-center ">
                        <img className="w-20 md:w-30 lg:w-40" src={nodeJS} alt="nodeJS" />
                   </div>

                   <div className="mr-10 md:mr-20 lg:mr-40 bg-white border text-center ">
                        <img className="w-20 md:w-30 lg:w-40" src={next} alt="next" />
                   </div>

                </Marquee>
            </div>

        </div>
    );
};

export default SwiperSkill;