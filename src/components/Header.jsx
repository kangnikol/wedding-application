import React from 'react';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='flex flex-row'>
                    <div className='flex w-screen px-7 py-7 items-center justify-between bg-stone-800 text-stone-100 fixed shadow-lg'>
                        {/* logo */}
                        <div className=''>
                            <a
                                href=''
                                className='hover:shadow-md hover:shadow-slate-200'
                            >
                                <img
                                    className='w-32'
                                    src='https://media.discordapp.net/attachments/1118750353979080734/1118751631991918612/logo_pink.png?width=1238&height=222'
                                    alt='everlasting'
                                />
                            </a>
                        </div>
                        <nav>
                            <ul className='flex text-sm'>
                                <a href='' className='px-2'>
                                    Home
                                </a>
                                <a href='' className='px-2'>
                                    Mempelai
                                </a>
                                <a href='' className='px-2'>
                                    Tanggal
                                </a>
                                <a href='' className='px-2'>
                                    Galeri
                                </a>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
