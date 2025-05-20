import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCircleArrowUp } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center py-8 px-8">
            <aside className="grid-flow-col text-lg items-center">
                
                <h1><a href="#home">Baizid Bostami.</a></h1>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl items-center">
                <a href="https://www.facebook.com/baizidbr/" target="_blank"><FaFacebookSquare /></a>
                <a href="https://x.com/Baizid_Bostami2" target="_blank"><FaTwitter /></a>
                <a href="https://www.instagram.com/baizid_bostami21/" target="_blank"><FaInstagram /></a>
                <a href="https://github.com/Baizid-B" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/baizid-bostami-36962b292/" target="_blank"><FaLinkedin /></a>
            </nav>
        </footer>
    );
};

export default Footer;