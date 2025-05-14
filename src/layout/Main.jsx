import { useState, useEffect } from "react";
import Footer from "../components/Header/Footer";
import Navbar from "../components/Header/Navbar";
import Abouts from "../pages/Abouts";
import Home from "../pages/Home";
import Works from "../pages/Works";
import Contact from "../pages/Contact";
import Loading from "../pages/LoadingPage/Loading";



const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        const time = setTimeout(() => {
            setIsLoading(false)
        }, 8500)

        return () => clearTimeout(time)
    },[])

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <div>
                <div className="">
                    <Navbar />
                </div>

                <div className="min-h-[calc(100vh-328px)]">
                    <section className="pt-18" id="home"><Home /></section>
                    <section className="pt-18" id="about"><Abouts /></section>
                    <section className="pt-18" id="works"><Works /></section>
                    <section className="pt-18" id="contact"><Contact /></section>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Main;