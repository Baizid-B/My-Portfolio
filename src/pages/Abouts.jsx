import { span } from "framer-motion/client";
import SectionTitle from "../components/SectionTilte/SectionTilte";

const Abouts = () => {
    return (
        <div className="w-full min-h-screen pt-32 max-w-7xl mx-auto">
            <SectionTitle title={"01"} subTitle={"About Me."} />

            <h1 className="text-2xl text-left">I’m an aspiring front-end developer passionate about building responsive and 
            user-friendly web interfaces. Although I don’t have professional experience yet, I’ve been actively learning 
            and practicing key technologies, including {<span className="text-red-500 font-bold">HTML</span>}, {<span className="text-green-500 font-bold">CSS</span>}, {<span className="text-red-500 font-bold">Javascript</span>},{<span className="text-red-500 font-bold">Tailwind CSS</span>},{<span className="text-red-500 font-bold">React</span>},{<span className="text-red-500 font-bold">MongoDB</span>},{<span className="text-red-500 font-bold">ExpressJS</span>},{<span className="text-red-500 font-bold">NodeJS</span>}, and lastly {<span className="text-red-500 font-bold">Next.js</span>}.I enjoy turning design ideas into functional and visually appealing websites. Through personal projects, online tutorials, and hands-on practice, I’ve developed a good understanding of modern web development concepts such as component-based design, responsive layouts, and interactive UI behavior.
            I’m highly motivated to grow, learn from real-world challenges, and contribute to a team where I can apply and expand my skills in a practical environment.
            Let me know if you'd like to include details about personal projects or tools you’re familiar with (like GitHub ).</h1>
        </div>
    );
};

export default Abouts;