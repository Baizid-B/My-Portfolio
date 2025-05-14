import { Typewriter } from 'react-simple-typewriter';

const Loading = () => {

  return (
        <div className="flex items-center justify-center h-screen bg-black text-white flex-col">
            <h2 className="text-2xl font-medium">
                Welcome to my website and I'm a{' '}
                <span className="text-yellow-300">
                    <Typewriter
                    words={['Frontend Developer', 'UI/UX Designer', 'Problem Solver']}
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={60}
                    deleteSpeed={80}
                    delaySpeed={1000}
                    />
                </span>
            </h2>
        </div>
    );
};

export default Loading;
