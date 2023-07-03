import React from 'react';

const Home = () => {
    return (
        <div className='container my-56'>
            <div className='flex flex-col items-center justify-center '>
                <img
                    src='assets/flower/new/1.png'
                    alt=''
                    className='max-w-xs absolute top-44'
                />

                <div className='flex flex-col items-center justify-center my-14 border-t-[8px] border-b-[8px] py-7 border-primary '>
                    <h1 className=' text-3xl text-primary font-semibold'>
                        THE WEDDING
                    </h1>
                    <div className='border-primary border-[2px] my-7 mx-5 rounded-full'>
                        <img
                            src='assets/cp.png'
                            alt=''
                            className='rounded-full w-80 mx-1 my-1'
                        />
                    </div>
                    <h1 className='font-semibold text-gold font-estetik text-5xl'>
                        Aziz & Ummi
                    </h1>
                    <p className='text-primary font-semibold my-2'>
                        Appreciate For Your Coming
                    </p>
                    <button className='bg-primary text-secondary px-4 py-2 rounded-2xl mb-3 mt-1'>
                        <a href='#' target={'_blank'}>
                            SAVE THE DATE
                        </a>
                    </button>
                </div>
                <img
                    src='assets/flower/new/2.png'
                    alt=''
                    className='max-w-xs absolute bottom-40'
                />
            </div>
        </div>
    );
};

export default Home;
