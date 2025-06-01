"use client";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RiCloseCircleFill } from "react-icons/ri";

// import Link from "next/link";

const NaveBar = () => {
    const [nav, setnav] = useState(false);
    const handleNave = () => {
        setnav(!nav);
    };
    return (
        <div >
            <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b">
                <div className="max-w-screen-xl flex justify-between px-4 py-3 mx-auto">
                    <div>
                        <a href="#" className="text-indigo-600 text-3xl font-bold">
                            Mashood<span className="text-yellow-600">Ali</span>
                            <span className="text-indigo-600 text-4xl">.</span>
                        </a>
                    </div>

                    <div className="flex items-center justify-center ">
                        <ul className=" hidden md:flex flex-row font-bold uppercase mt-0 space-x-12 rtl:space-x-reverse text-sm">
                            <li>
                                <a
                                    href="home"
                                    className="text-indigo-600 hover:text-yellow-500 hover:border-b hover:border-yellow-500"
                                    aria-current="page"
                                >
                                    HOME
                                </a>
                            </li>
                            <li>
                                <a
                                    href="home"
                                    className="text-indigo-600 hover:text-yellow-500 hover:border-b hover:border-yellow-500"
                                    aria-current="page"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="about"
                                    className="text-indigo-600 hover:text-yellow-500 hover:border-b hover:border-yellow-500"
                                >
                                    ABOUT
                                </a>
                            </li>

                            <li>
                                <a
                                    href="contact"
                                    className="text-indigo-600 hover:text-yellow-500 hover:border-b hover:border-yellow-500"
                                >
                                    Contect
                                </a>
                            </li>
                            <button className="bg-gray-400">Signup</button>
                            <button className="bg-gray-400">Login</button>

                        </ul>
                        {!nav ? (<div onClick={handleNave} className="md:hidden cursor-pointer">
                            <IoMdMenu size={25} />
                        </div>) : (<div
                            onClick={handleNave}
                            className=" rounded-full md:hidden  cursor-pointer"
                        >
                            <RiCloseCircleFill size={35} />
                        </div>)}
                    </div>
                </div>
            </nav>
            {/* MOBILE Nave */}
            <div className={`${nav && "md:hidden p-6 w-1/2"}`}>
                <div
                    className={`${nav
                        ? " w-[80%] sm:w-[70%] md:w-[85%]   ease-in duration-500"
                        : "fixed left-[-100%] p-10 ease-in duration-1000"
                        }`}
                >
                    {/* <div className=" p-8    flex item-center justify-between"> */}
                    {/* <div>
                            <a href="#" className="text-yellow-500 text-3xl font-bold">
                                Port<span className="text-indigo-600">folio</span>
                                <span className="text-yellow-500 text-4xl">.</span>
                            </a>
                        </div> */}
                    {/* <div
                            onClick={handleNave}
                            className=" rounded-full  cursor-pointer"
                        >
                            <RiCloseCircleFill size={35} />
                        </div> */}
                    {/* </div> */}
                    <ul className="flex flex-col uppercase space-y-2 mt-12 font-bold text-gray-600 ml-8 ">
                        <li>
                            <a
                                href="#"
                                className="text-indigo-600 hover:text-yellow-600 hover:border-b hover:border-yellow-500  "
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-indigo-600 hover:text-yellow-600 hover:border-b hover:border-yellow-500  "
                            >
                                BLOG
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-indigo-600 hover:text-yellow-600 hover:border-b hover:border-yellow-500  "
                            >
                                ABOUT
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="text-indigo-600 hover:text-yellow-600 hover:border-b hover:border-yellow-500  "
                            >
                                COUNTECT
                            </a>
                        </li>
                        <button className="bg-gray-400">Signup</button>
                        <button className="bg-gray-400">Login</button>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NaveBar;
