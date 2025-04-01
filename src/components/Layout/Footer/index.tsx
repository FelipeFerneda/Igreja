import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
    return (
        <footer className="pt-16 bg-darkmode">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="grid grid-cols-1 sm:grid-cols-5 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16">
                    <div className="col-span-2">
                        <Logo />
                        <p className="text-xs font-medium text-grey dark:text-white/50 mt-5 mb-16 max-w-70%">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae.
                        </p>
                        <div className="flex gap-6 items-center">
                            <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
                                <Icon
                                    icon="fa6-brands:facebook-f"
                                    width="16"
                                    height="16"
                                    className=" group-hover:text-white text-black"
                                />
                            </Link>
                            <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
                                <Icon
                                    icon="fa6-brands:instagram"
                                    width="16"
                                    height="16"
                                    className=" group-hover:text-white text-black"
                                />
                            </Link>
                            <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
                                <Icon
                                    icon="fa6-brands:x-twitter"
                                    width="16"
                                    height="16"
                                    className=" group-hover:text-white text-black"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <h4 className="text-black dark:text-white mb-9 font-semibold text-xl">Igreja</h4>
                        <ul>
                            <li className="pb-5">
                                <Link
                                    href="#"
                                    className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                                >
                                    Sobre.
                                </Link>
                            </li>
                            <li className="pb-5">
                                <Link
                                    href="#"
                                    className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                                >
                                    Contato.
                                </Link>
                            </li>
                            <li className="pb-5">
                                <Link
                                    href="#"
                                    className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                                >
                                    Ver Mapa.
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="text-black dark:text-white mb-9 font-semibold text-xl">Programacao</h4>
                        <ul>
                            <li className="pb-5">
                                <Link
                                    href="#"
                                    className="text-black/70 dark:text-white/70 dark:hover:text-primary hover:text-primary text-base"
                                >
                                    Cultos.
                                </Link>
                            </li>
                            <li className="pb-5">
                                <Link
                                    href="#"
                                    className="text-black/70 dark:text-white/70 dark:hover:text-primary hover:text-primary text-base"
                                >
                                    Células.
                                </Link>
                            </li>
                            <li className="pb-5">
                                <Link
                                    href="#"
                                    className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                                >
                                    Missões.
                                </Link>
                            </li>
                            <li className="pb-5">
                                <Link
                                    href="#"
                                    className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                                >
                                    Agendamentos.
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="text-black dark:text-white mb-9 font-semibold text-xl">Mais</h4>
                        <ul>
                            {headerData.map((item, index) => (
                                <li key={index} className="pb-4">
                                    <Link
                                        href={item.href}
                                        className="text-black/70 dark:text-white/70 dark:hover:text-primary hover:text-primary text-base"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
