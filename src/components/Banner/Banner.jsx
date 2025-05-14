import bannerImg from '../../assets/banner/banner.jpg'

const Banner = () => {
    return (
        <>
            <div className="flex items-center">
                <div className="bg-base-200">
                    <h1 className="uppercase">hello</h1>
                    <h1 className="capitalize">I'm Baizid Bostami a Front-End Developer base in Somewhere.</h1>
                </div>

                <div className='w-[50%]'>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;