import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCircleArrowDown } from "react-icons/fa6";



const SocialIcon = () => {
    return (
        <div className="flex flex-col text-3xl items-center space-y-12 text-black">
            <div><a href="https://www.facebook.com/baizidbr/" target="_blank"><FaFacebookSquare /></a></div>
            <div><a href="https://x.com/Baizid_Bostami2" target="_blank"><FaTwitter /></a></div>
            <div><a href="https://www.instagram.com/baizid_bostami21/" target="_blank"><FaInstagram /></a></div>
            <div><a href="https://github.com/Baizid-B" target="_blank"><FaGithub /></a></div>
            <div><a href="https://www.linkedin.com/in/baizid-bostami-36962b292/" target="_blank"><FaLinkedin /></a></div>

            <div className="border border-white h-28"></div>

            <a href="#about" className="text-white text-5xl"><FaCircleArrowDown /></a>
        </div>
    );
};

export default SocialIcon;