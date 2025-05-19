import SectionTitle from "../components/SectionTilte/SectionTilte";
import { SiMinutemailer } from "react-icons/si";
import { IoMdCall } from "react-icons/io";


const Contact = () => {
    const handlSubmitMessage = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const textare = e.target.textare.value;

        console.log("message:", name,email,textare);
        
        e.target.reset()
    }
    return (
        <div className="max-w-[1440px] mx-auto px-12 pt-30 mb-12">
            <SectionTitle title={"03"} subTitle={"Get In Teuch."}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-3.5">
                <div className="bg-white space-y-8 px-2 pt-4">
                    <p className="text-3xl font-bold">Feel free to reach out for any inquiries or feedback!</p>
                    <p className="flex items-center gap-2 text-xl"> <SiMinutemailer /> mdbaizidbostami196@gmail.com</p>
                    <p className="flex items-center gap-2 text-xl"> <IoMdCall /> +880130-4867-302</p>
                    <p className="flex items-center gap-2 text-xl"> <IoMdCall /> +880154-0128-636</p>
                </div>

                <div className="px-2 pt-4">
                    <h1 className="text-3xl pl-6">Message</h1>

                    <div className="card bg-base-100 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handlSubmitMessage} className="space-y-12">
                                <input type="text" name="name" className="w-full input border focus:outline-none focus:border-black" placeholder="Your Name" />

                                <input type="email" name="email" className="w-full input border focus:outline-none focus:border-black" placeholder="Your Email" />

                                <textarea className="w-full input py-2 border focus:outline-none focus:border-black" name="textare" placeholder="Type your message here..."></textarea>

                                <button className="btn btn-neutral mt-4">Push the button and send your message</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;