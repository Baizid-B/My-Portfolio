import { Typewriter } from 'react-simple-typewriter'


const Loading = () => {

  return (
        <div className='fixed top-0 left-0 w-full h-screen text-black flex justify-center bg-gradient-to-r from-[#9dd290] to-gray-300'>
            
                <h1 style={{ margin: 'auto 0', fontWeight: '500', fontSize: '24px', fontFamily: 'monospace'}}>
                Life is simple{' '}
                <Typewriter
                    words={['Eat', 'Sleep', 'Code', 'Repeat!','Prayer']}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={30}
                    deleteSpeed={100}
                    delaySpeed={1000}
                />
                </h1>
            </div>

    );
};

export default Loading;
