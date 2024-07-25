import React from 'react'
import {motion} from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import Image from '../../assets/images/one-life-logo-white.png'

const Header = () => {
    return (
        <motion.header className="shadow sticky z-50 top-0 absolute"
        initial={{
            y:-200,
        }}
        animate={{
            y:0,
        }}
        transition={{
            ease:"easeInOut",
            delay:1.5,
        }}
        >
            <nav className="bg-slate-950 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={Image}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-white hover:bg-indigo-600 focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none hover:scale-105 transition-all 300"
                        >
                            Login
                        </Link>
                        <Link
                            to="#"
                            className="text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl font-semibold focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-900  text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-gradient-to-r from-fuchsia-900 to-violet-900 hover:bg-gradient-to-l hover:scale-105 200"
                        >
                            Sign up
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-400 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-400 lg:p-0`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-400 lg:p-0`
                                    }
                                >
                                    Space
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/gallery"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-400 lg:p-0`
                                    }
                                >
                                    Blogs
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Header;
