import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import SectionTitle from "../components/SectionTilte/SectionTilte";
import SwiperSkill from "../components/SwiperSkill/SwiperSkill";
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const Abouts = () => {

    const aboutRef = useRef()

    useGSAP(() =>{

        gsap.from(aboutRef.current,{
            y:100,
            opacity: 0,
            duration:0.60,
            delay:0.50,
            scrollTrigger:{
                trigger:aboutRef.current,
                toggleActions: "play none none reset",
            }
        })
    },{scope:aboutRef})

    return (
        <div ref={aboutRef} className="pt-30 max-w-[1440px] mx-auto px-8 space-y-5 md:px-8">
            <SectionTitle title={"01"} subTitle={"About Me."} />

            <h1 className="text-xl md:text-3xl text-left md:px-0 ">I’m an aspiring front-end developer passionate about building responsive and user-friendly web interfaces. Although
                I don’t have professional experience yet, I’ve been actively learning and practicing key technologies, including HTML, CSS, JavaScript, Tailwind CSS, React.js, MongoDB, Express.js, Node.js, and lastly, Next.js.I enjoy turning design ideas into functional and visually appealing websites. Through personal projects, online tutorials,and hands-on practice, I’ve developed a good understanding of modern web development concepts such as component-based design, responsive layouts, and interactive UI behavior.
                I’m highly motivated to grow, learn from real-world challenges, and contribute to a team where I can apply and expand my skills in a practical environment.
                Let me know if you'd like to include details about personal projects or tools you’re familiar with (like GitHub ). 
            </h1>
            <div className="my-20 flex items-center">
                <button className="bg-[#9dd290] text-black font-extralight rounded-sm text-xl px-8 py-4 uppercase cursor-pointer"><a href="https://drive.google.com/file/d/1H9laBE_yKOahK9JdH5TEF4MSHX2iDmJC/view?usp=sharing" target="_blank">Get my cv</a></button>
                <div className="border bg-black w-48"></div>
            </div>

            <div className="">
                <SwiperSkill />
            </div>
        </div>
    );
};

export default Abouts;