import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaUserGraduate } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';
import { RiShieldUserFill, RiMenuUnfoldFill } from 'react-icons/ri';
import { GiSkullCrossedBones } from 'react-icons/gi';
import { NavLink } from "react-router-dom";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: <FaUserGraduate size="1.5em" />
    },
    {
        path: "adminDashboard",
        name: "Admin",
        icon: <MdAdminPanelSettings size="1.5em" />
    },
    {
        path: "studentDashboard",
        name: "Student",
        icon: <RiShieldUserFill size="1.5em" />
    },
]

const Navbar = ({ children }) => {
    const [isShown, setIsShown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const hover = () => setIsShown(!isShown);
    return (
        <div className='flex'>
            <motion.div animate={{ width: isOpen || isShown ? "250px" : "60px" }} className='bg-sky-700 text-white h-screen' onMouseEnter={hover} onMouseLeave={hover}>
                <div className='flex items-center justify-between py-3 px-2'>
                    {isOpen && <h1 className='font-bold uppercase text-sm'>Library Management</h1>}
                    <div className='cursor-pointer'>
                        {!isOpen && <RiMenuUnfoldFill size="2em" onClick={toggle} />}
                    </div>
                    <div className='cursor-pointer'>
                        {isOpen && <GiSkullCrossedBones size="2em" onClick={toggle} />}
                    </div>
                </div>
                <section>
                    {
                        routes.map((route) => (
                            <NavLink className="flex gap-3 py-2 px-3 hover:border-l-8 border-white z-10 btn-accent ease-in-out duration-150 my-1" to={route.path} key={route.name}>
                                <div className='text-black'>
                                    {route.icon}
                                </div>
                                <AnimatePresence>
                                    {isOpen | isShown &&
                                        <motion.div className='text-start font-semibold text-black tracking-wider'>
                                            {route.name}
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </NavLink>
                        ))
                    }
                </section>
            </motion.div>
            <main className='flex-grow'>{children}</main>
        </div>
    );
};

export default Navbar;