
import BistroBossImg from '../../src/assets/work/BistroBoss.webp'
import coffeStoreImg from '../../src/assets/work/coffeStore.webp'
import coinImg from '../../src/assets/work/coin.webp'
import gadgetHeavenImg from '../../src/assets/work/gadgetHeaven.webp'
import { useState } from 'react'
import SectionTitle from '../components/SectionTilte/SectionTilte'
import CardEffect from '../components/CardEffect/CardEffect'
import { FaArrowLeft, FaArrowRight} from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const images = [
    {
        src: BistroBossImg,
        title:'Bistro-Boss',
        description: "Delighting your taste buds with every bite – Bistro Boss Restaurant!",
        link:"https://bistro-boss-6694b.web.app/"
    },
    {
        src: coffeStoreImg,
        title:'coffee_store',
        description: "Brewing happiness in every cup – Coffee Store!",
        link:"https://coffeestore-vibe.netlify.app/"
    },
    {
        src: coinImg,
        title:'Dream 11',
        description: "Create your fantasy team and win big with Dream11!",
        link:"https://gorgeous-creponne-174715.netlify.app/"
    },
    {
        src: gadgetHeavenImg,
        title:'Gadget Heaven',
        description: "Where technology meets desire – Gadget Heaven!",
        link:"https://magnificent-boba-e4e74c.netlify.app/"
    }
]

const Works = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [imgCurrent, setImgCurrent] = useState(0)

    const handleOpenModalAt = (index) =>{
        setImgCurrent(index)
        setIsOpenModal(true)
    }

    const close = () => setIsOpenModal(false)

    const imgBack = () => {
        setImgCurrent((i) => (
            i === 0 ? images.length - 1 : i - 1
        ))
    }

    const imgNext = () => {
        setImgCurrent((i) =>(
            i === images.length - 1 ? 0 : i + 1
        ))
    }

    return (
        <div className='pt-30 max-w-[1440px] mx-auto px-12'>
            <SectionTitle title={"02"} subTitle={"Selected Works."}></SectionTitle>

            <div className='grid grid-cols-1 justify-center md:grid-cols-2 gap-8 my-24'>
                {
                    images.map((img,idx) =>(
                        <div key={idx} className='outline cursor-pointer' onClick={() => handleOpenModalAt(idx)}>
                            <CardEffect title={img.title}>
                                <img src={img.src} alt={img.title} />
                            </CardEffect>
                        </div>
                    ))
                }
            </div>

            {
                isOpenModal && (
                    <div className='fixed inset-0 z-30 bg-[#000000ee] flex justify-center items-center'>
                        <button className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer" onClick={close}><IoClose /></button>

                        <button onClick={imgBack} className='absolute left-4 text-white text-3xl cursor-pointer'><FaArrowLeft /></button>
                        <button onClick={imgNext} className='absolute right-4 text-white text-3xl cursor-pointer'>< FaArrowRight/></button>

                        <div className="max-w-6xl text-center px-4">

                            <img src={images[imgCurrent].src} alt="" />

                            <h3 className="text-white text-4xl font-semibold my-2">
                                {images[imgCurrent].title}
                            </h3>

                            <p className="text-white text-2xl my-4">
                                {images[imgCurrent].description}
                            </p>

                            <a href={images[imgCurrent].link} target='_blank' className="text-[#97c65a] font-bold underline hover:text-green-500 transition">
                                Project Link
                            </a>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Works;