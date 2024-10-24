import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Reception = () => {
    return (

        <>
            <div className='flex flex-col justify-center items-center space-y-5 mt-10'>

                <h1 className='font-bold text-4xl justify-center text-center italic'>Walimat</h1>
                <div className='mx-20 flex justify-between gap-10 items-center p-2 md:p-10'>
                    <div>
                        <Image src='/images/invite.jpg' alt=''
                            width={300}
                            height={300}
                            className='object-cover md:h-[360px]'
                        />
                        <h1 className='flex font-light text-2xl justify-center items-center'>Ceremony</h1>
                        <div className='flex flex-col justify-center items-center '>
                            <p className='text-xs'>Dec 7-12-2024</p>
                            <p className='text-xs'>Federal Capital Teritorry</p>
                        </div>
                    </div>
                    <div>
                        <Link href={'https://www.google.com/maps/dir//Maje-Dikko+By-Pass,+Diko+910102,+Niger/@9.2745031,7.1151361,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104dd17b9fe28cd9:0xf95798a8fe40413b!2m2!1d7.2095451!2d9.2715049?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D'}>
                            <Image src='/images/waza.jpg' alt=''
                                width={300}
                                height={300}
                            />
                        </Link>
                        <h1 className='flex font-light text-2xl justify-center items-center'>Reception</h1>
                        <div className='flex flex-col justify-center items-center '>
                            <p className='text-xs'>Dec 8-12-2024</p>
                            <p className='text-xs whitespace-nowrap'>Mwaza Guest Inn Dikko</p>
                            <Link href={'https://www.google.com/maps/dir//Maje-Dikko+By-Pass,+Diko+910102,+Niger/@9.2745031,7.1151361,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104dd17b9fe28cd9:0xf95798a8fe40413b!2m2!1d7.2095451!2d9.2715049?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D'}><span className='text-sm text-yellow-800'>Directions 🛣️🛣️</span></Link>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Reception