import Image from 'next/image';
import Link from 'next/link';
import { FeaturesData } from "@/app/api/data";
import { Icon } from "@iconify/react";

const Cards = ()=> {
    return(
        <section className="bg-gray-700">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md pb-5' id='donate-section'>
                <div className='text-center mb-14 py-10'>
                    <p className='dark:text-sky-200 font-normal mb-9 tracking-[0.8rem] uppercase'>Sobre</p>
                    <h2 className='text-3xl lg:text-5xl font-semibold text-black dark:text-white lg:max-w-60% mx-auto'>Lorem ipsum dolor sit amet, consectetur.</h2>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-15 gap-x-5 mt-15'>
                    {FeaturesData.map((items, i) =>(
                        <div className='p-8 relative rounded-3xl bg-gradient-to-b from-black/5 to-gray-400 dark:from-gray-600 dark:to-gray-800' key={i}>
                            <h3 className='text-2xl text-black dark:text-white font-semibold text-center mt-16'>{items.heading}</h3>
                            <p className='text-lg font-normal text-black/50 dark:text-white/50 text-center mt-2'>{items.subheading}</p>
                            <div className='flex items-center justify-center'>
                                <Link href='/' className='text-center text-lg group duration-300 ease-in-out font-medium text-primary mt-2 overflow-hidden flex items-center relative after:absolute after:w-full after:h-px after:bg-primary after:bottom-0 after:right-0 after:translate-x-full hover:after:translate-x-0'>
                                    Saiba Mais
                                    <Icon
                                        icon="tabler:chevron-right"
                                        width="24"
                                        height="24"
                                        className="text-primary "
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cards;