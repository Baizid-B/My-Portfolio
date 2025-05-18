
const SectionTitle = ({title,subTitle}) => {
    return (
        <div className="relative">
            <h1 className="text-9xl font-extrabold text-gray-300">{title}</h1>
            <p className="absolute top-12 -left-2 font-extrabold text-4xl text-black">{subTitle}</p>
        </div>
    );
};

export default SectionTitle;