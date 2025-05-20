import { useState, useEffect, Suspense } from "react";
import Footer from "../components/Header/Footer";
import Navbar from "../components/Header/Navbar";
import Loading from "../pages/LoadingPage/Loading";
import { Toaster } from 'react-hot-toast';
import { lazy } from "react";
import { Element } from "react-scroll";

const Home = lazy(() => import("../pages/Home"));
const Abouts = lazy(() => import("../pages/Abouts"));
const Works = lazy(() => import("../pages/Works"));
const Contact = lazy(() => import("../pages/Contact"));


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
            <Toaster />
            <Navbar />
            <div className="min-h-[calc(100vh-328px)]">
                <Suspense fallback={<Loading />}>
                    <Element name='home' id="home"><Home /></Element>
                    <Element name='about' id="about"><Abouts /></Element>
                    <Element name='works' id="works"><Works /></Element>
                    <Element name='contact' id="contact"><Contact /></Element>
                </Suspense>
            </div>

            <Footer />
        </>
    );
};

export default Main;