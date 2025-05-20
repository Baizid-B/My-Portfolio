import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import SectionTitle from "../components/SectionTilte/SectionTilte";
import { SiMinutemailer } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const contactRef = useRef()
    const form = useRef()

    const handlSubmitMessage = (e) =>{
        e.preventDefault()
       
        emailjs
        .sendForm('service_z5zi9rr', 'template_pdy44sh', form.current, 'ykOAjPE1qalwH_0HL')
        .then(
        (result) => {
          console.log('Success:', result.text);
          toast.success('Email sent successfully!');
        },
        (error) => {
          console.log('Error:', error.text);
          toast.error('Email not sent!');
        }
      );

        e.target.reset()
    }

    useGSAP(() =>{
        gsap.from(contactRef.current,{
            y:100,
            opacity:0,
            duration:0.80,
            delay:0.50,
            scrollTrigger:{
                trigger:contactRef.current,
                toggleActions: "play none none reset",
                start:"top+=100 center",
            }
        })
    },{scope:contactRef})

    return (
        <div ref={contactRef} className="max-w-[1440px] mx-auto px-12 pt-30 mb-12">
            
            <SectionTitle title={"03"} subTitle={"Get In Teuch."}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-3.5">
                <div className="bg-white space-y-8 px-2 pt-4">
                    <p className="text-3xl font-bold">Feel free to reach out for any inquiries or feedback!</p>
                    <p className="flex items-center gap-2 text-xl"> <SiMinutemailer /> mdbaizidbostami196@gmail.com</p>
                    <p className="flex items-center gap-2 text-xl"> <IoMdCall /> +880130-4867-302</p>
                    <p className="flex items-center gap-2 text-xl"> <IoMdCall /> +880154-0128-636</p>
                </div>

                <div className="px-2 pt-4 border border-[#98b35d]">
                    <h1 className="text-3xl pl-6">Message</h1>

                    <div className="card bg-base-100">
                        <div className="card-body">
                            <form ref={form}  onSubmit={handlSubmitMessage} className="space-y-12">
                                <input type="text" name="user_name" className="w-full input border focus:outline-none focus:border-black p-6 text-xl" placeholder="Your Name"  required/>

                                <input type="email" name="user_email" className="w-full input border focus:outline-none focus:border-black p-6 text-xl" placeholder="Your Email"  required/>

                                <textarea name="message" className="w-full h-[150px] input border focus:outline-none focus:border-black px-5 py-2 text-xl" placeholder="Type your message here..." required></textarea>

                                <button type="submit" className="bg-black text-white border-none cursor-pointer hover:bg-[#000000d7] mt-4 md:text-xl p-4">send your message</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;