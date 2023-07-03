import React from 'react';

function Lovegift() {
    return (
        <div className='container'>
            <div className='flex flex-col items-center justify-center mb-3'>
                <h1 className='font-semibold text-4xl text-gold mb-3'>
                    LOVE GIFT
                </h1>
                <p className='font-semibold text-primary mb-6'>
                    Tanpa mengurangi rasa hormat, bagi anda yang ingin
                    memberikan tanda kasih untuk kami, dapat melalui :
                </p>
                {/* bank */}
                <div className='flex flex-col lg:flex-row items-center justify-center '>
                    <div className='flex flex-col items-center justify-center border-4 border-primary rounded-xl px-20 py-3 lg:mb-0 lg:mr-3 mb-3'>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg'
                            alt='BRI'
                            className='w-[200px] mt-2'
                        />
                        <h1 className='font-semibold text-primary mt-2'>
                            No. Rekening : 08123495123
                        </h1>
                        <h1 className='font-semibold text-primary'>
                            A.N Lorem Ipsum
                        </h1>
                        <button className='bg-primary text-secondary px-5 py-1 rounded-xl mt-2'>
                            Salin
                        </button>
                    </div>
                    <div className='flex flex-col items-center justify-center border-4 border-primary rounded-xl px-20 py-3 lg:mt-0 lg:ml-3 mt-3'>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png'
                            alt='BNI'
                            className='w-[200px]'
                        />
                        <h1 className='font-semibold text-primary mt-2'>
                            No. Rekening : 08123495123
                        </h1>
                        <h1 className='font-semibold text-primary'>
                            A.N Lorem Ipsum
                        </h1>
                        <button className='bg-primary text-secondary px-5 py-1 rounded-xl mt-2'>
                            Salin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lovegift;
