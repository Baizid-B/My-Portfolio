
import html from '../../src/assets/skills/html.webp'
import css from '../../src/assets/skills/CSS3.webp'
import js from '../../src/assets/skills/js.webp'
import react from '../../src/assets/skills/react.webp'
import { useState } from 'react'
import SectionTitle from '../components/SectionTilte/SectionTilte'
import CardEffect from '../components/CardEffect/CardEffect'

const images = [
    {
        src: html,
        title:'white kait cap',
        description: "Lorem ipsum dolor sit amet.",
        link:"#"
    },
    {
        src: css,
        title:'white kait cap',
        description: "Lorem ipsum dolor sit amet.",
        link:"#"
    },
    {
        src: js,
        title:'white kait cap',
        description: "Lorem ipsum dolor sit amet.",
        link:"#"
    },
    {
        src: react,
        title:'white kait cap',
        description: "Lorem ipsum dolor sit amet.",
        link:"#"
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
        <div className='min-h-screen pt-30 max-w-[1440px] mx-auto px-12'>
            <SectionTitle title={"02"} subTitle={"Aboout Me."}></SectionTitle>

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
                        <button className="absolute top-4 right-4 text-white text-3xl font-bold" onClick={close}>x</button>

                        <button onClick={imgBack} className='absolute left-4 text-white'>back</button>
                        <button onClick={imgNext} className='absolute right-4 text-white'>next</button>

                        <div className="max-w-4xl text-center px-4">

                            <img src={images[imgCurrent].src} alt="" />

                            <h3 className="text-white text-2xl font-semibold mb-2">
                                {images[imgCurrent].title}
                            </h3>

                            <p className="text-gray-300 mb-4">
                                {images[imgCurrent].description}
                            </p>

                            <a href={images[imgCurrent].link} className="text-red-400 underline hover:text-red-600 transition">
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