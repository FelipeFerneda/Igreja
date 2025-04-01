import Logo from "@/components/Layout/Header/Logo";
import { headerData } from "@/components/Layout/Header/Navigation/menuData";
import HeaderLink from "@/components/Layout/Header/Navigation/HeaderLink";
import MobileHeaderLink from "@/components/Layout/Header/Navigation/MobileHeaderLink";

export default function Header() {
    return (
        <header className='fixed top-0 left-1/2 transform -translate-x-1/2 w-full lg:w-full md:w-auto transition-all duration-300 z-50 bg-white/30 dark:bg-gray-500/50 backdrop-blur-lg backdrop-sepia py-4 px-8 rounde-t-lg'>
            <div className='container mx-auto flex items-center justify-between lg:gap-10'>
                <Logo />
                <nav className='hidden md:flex flex-grow items-center gap-8 lg:gap-20 justify-center'>
                    {headerData.map((item, index) => (
                        <HeaderLink key={index} item={item} />
                    ))}
                </nav>
                <div className='md:hidden'>
                    <MobileHeaderLink />
                </div>
            </div>
        </header>
    );
}