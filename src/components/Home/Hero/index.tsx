import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section>
            <div id='home-section' className='bg-gray-50 dark:bg-gray-700'>
                <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-30'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
                        <div className='col-span-12 lg:col-span-6'>
                            <h1 className='text-4xl lg:text-7xl font-semibold mb-5 text-black dark:text-white text-center lg:text-start'>
                                Lorem ipsum dolor sit amet, consectetur.
                            </h1>
                            <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 text-center lg:text-start'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            </p>
                            <div className='flex flex-row md:flex-row items-center justify-center lg:justify-start space-x-6 md:space-x-6'>
                                <Link href='' className='text-xl font-medium rounded-full text-white py-5 px-6 bg-sky-600 hover:text-primary border-primary hover:bg-transparent'>
                                    Lorem
                                </Link>
                                <Link href='' className='flex border border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:text-white hover:bg-primary'>
                                    Ipsum
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6 flex justify-center relative mt-10 lg:mt-0'>
                            <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
                                <Image src={'/Images/Hero/booklet.png'} alt='church-image' width={68} height={68} />
                                <p className='text-lg font-normal dark:text-black'>Lorem ipsum dolor <br /> sit amet.</p>
                            </div>
                            <Image src={'/Images/Hero/Jesus.png'} alt='Jesus' width={400} height={300} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero