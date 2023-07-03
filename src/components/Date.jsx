import React from 'react';

export default function Date() {
    return (
        <div className='container'>
            <div className='flex flex-col w-full items-center justify-center text-center mb-20'>
                <h1 className='font-semibold text-2xl text-primary'>
                    WAKTU MENUJU ACARA
                </h1>
                <div className='flex flex-row border-4 border-primary px-5 rounded-xl mt-3'>
                    <p className='mx-2 font-semibold text-primary text-lg'>
                        20 HARI
                    </p>
                    <p className='mx-2 font-semibold text-primary text-lg'>
                        20 JAM
                    </p>
                    <p className='mx-2 font-semibold text-primary text-lg'>
                        20 MENIT
                    </p>
                    <p className='mx-2 font-semibold text-primary text-lg'>
                        20 DETIK
                    </p>
                </div>
                <p className='font-semibold text-md text-primary mt-3 mx-5'>
                    Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala,
                    insyaAllah kami akan menyelenggarakan acara :
                </p>
                <div className='flex flex-col lg:flex-row items-center justify-center my-7'>
                    <div className='flex flex-col items-center justify-center mx-3 mt-3 lg:border-r-2 lg:border-l-2 lg:border-primary px-3'>
                        <h1 className='font-semibold text-xl text-third'>
                            Akad Nikah
                        </h1>
                        <p className='font-semibold text-primary'>
                            Pukul 09 : 00 - 10 : 00 WIB
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center mx-3 mt-3 lg:border-l-2 lg:border-r-2 lg:border-primary px-3'>
                        <h1 className='font-semibold text-xl text-third'>
                            Resepsi
                        </h1>
                        <p className='font-semibold text-primary'>
                            Pukul 10 : 00 WIB - Selesai
                        </p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-center mt-5 py-3 px-3 border-4 rounded-lg border-primary'>
                    <div className=''>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.031089583044!2d106.14551453595072!3d-6.129655378516627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418acc63d89d35%3A0x32a28de61ce8f9f!2sTaman%20Graha%20Asri!5e0!3m2!1sid!2sid!4v1688311607439!5m2!1sid!2sid'
                            className='border-2 border-primary rounded-lg'
                        ></iframe>
                    </div>
                    <div className='flex flex-col mt-3 items-center w-80 justify-center'>
                        <h1 className='font-semibold text-base text-third'>
                            Alamat :
                        </h1>
                        <p className='font-semibold text-primary text-sm'>
                            Jl. Atut Sulastri Raya, Serang, Kec. Serang, Kota
                            Serang, Banten 42116
                        </p>
                        <button className='mt-2 bg-primary text-secondary px-3 py-2 rounded-lg'>
                            <a href='' target={'_blank'}>
                                Buka Google Maps
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
