import { Typewriter } from 'react-simple-typewriter'


const Loading = () => {

  return (
        <div className='fixed top-0 left-0 w-full h-screen text-white flex justify-center bg-gradient-to-r from-blue-500 to-black'>
            <h1 style={{ margin: 'auto 0', fontWeight: '500', fontSize: '25px', fontFamily: 'monospace'}}>
                Life is simple{' '}
                {/* Style will be inherited from the parent element */}
                <Typewriter
                    words={['Eat', 'Sleep', 'Code', 'Repeat!','Prayer']}
                    loop={5}
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
