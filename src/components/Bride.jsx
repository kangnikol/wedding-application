import React from 'react';

function Bride() {
    return (
        <div className='container'>
            <div className='flex flex-col w-full items-center justify-center text-center mb-8'>
                <h1 className='font-semibold text-third text-2xl border-b-[4px] px-4 border-primary'>
                    WITH GREAT PLEASURE
                </h1>
                <h1 className='font-semibold text-7xl text-primary'>
                    INVITE YOU
                </h1>
                <h1 className='font-semibold text-2xl text-third'>
                    TO SELEBRATE OUR MARRIAGE
                </h1>
                <h1 className='font-semibold text-2xl mt-4 text-third px-3'>
                    Assalamalaikum Warahmatullahi Wabarakatuh
                </h1>
                <p className='font-semibold text-sm text-primary px-6'>
                    Maha suci Allah yang telah menciptakan makhluk-Nya berpasang
                    - pasangan. Ya Allah, perkenankanlah kami merangkaikan kasih
                    sayang yang Kau ciptakan diantara kami
                </p>
                <div className='flex flex-col lg:flex-row items-center text-center justify-center mt-7 border-b-[4px] pb-3 lg:border-b-[4px] border-primary '>
                    <div className='lg:w-1/2 mx-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='border-2 border-primary rounded-full mb-4'>
                                <img
                                    src='assets/women.png'
                                    className='rounded-full px-1 py-1 w-80'
                                    alt=''
                                />
                            </div>
                            <h1 className='font-semibold text-2xl text-primary mb-4'>
                                Ummi Azizah, M.Pd
                            </h1>
                            <p className='font-semibold text-xl text-primary mb-1'>
                                Putri Pertama
                            </p>
                            <p className='font-semibold text-base text-primary w-60'>
                                Bpk. H. Iswanudin, M.Kom & Ibu Sarniah, M.Pd
                            </p>
                        </div>
                    </div>
                    <div className='px-10'>
                        <br />
                    </div>
                    <div className='lg:w-1/2 mx-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='border-2 border-primary rounded-full mb-4'>
                                <img
                                    src='assets/men.png'
                                    className='rounded-full px-1 py-1 w-80'
                                    alt=''
                                />
                            </div>
                            <h1 className='font-semibold text-2xl text-primary mb-4'>
                                Aziz Abidin, M.Kom
                            </h1>
                            <p className='font-semibold text-xl text-primary mb-1'>
                                Putra Pertama
                            </p>
                            <p className='font-semibold text-base text-primary w-60'>
                                Bpk. H. Mumu Najmudin, S.Pd & Ibu Siti Sarah,
                                M.Pd
                            </p>
                        </div>
                    </div>
                </div>
                <p className='font-semibold text-sm text-primary px-7'>
                    untuk melaksanakan syariat agama-Mu, mengikuti sunnah
                    rasul-Mu dalam membentuk rumah tangga Sakinah Mawaddah Wa
                    Rahmah dalam ikatan pernikahan
                </p>
            </div>
        </div>
    );
}

export default Bride;
