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
        icon: <FaUserGraduate />
    },
    {
        path: "adminDashboard",
        name: "Admin Dashboard",
        icon: <MdAdminPanelSettings />
    },
    {
        path: "studentDashboard",
        name: "Student Dashboard",
        icon: <RiShieldUserFill />
    },
]

const Navbar = ({ children }) => {
    const [isShown, setIsShown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const hover = () => setIsShown(!isShown);
    return (
        <div>
            <motion.div animate={{ width: isOpen || isShown ? "250px" : "45px" }} className='bg-slate-700 text-white h-screen' onMouseEnter={hover} onMouseLeave={hover}>
                <div className='flex items-center justify-between py-3 px-2'>
                    {isOpen && <h1>Library Management</h1>}
                    <div className='cursor-pointer'>
                        {!isOpen && <RiMenuUnfoldFill onClick={toggle} />}
                    </div>
                    <div className='cursor-pointer'>
                        {isOpen && <GiSkullCrossedBones onClick={toggle} />}
                    </div>
                </div>
                <section>
                    {
                        routes.map((route) => (
                            <NavLink className="flex gap-3 py-2 px-3 hover:border-l-4 hover:bg-black ease-in-out duration-150" to={route.path} key={route.name}>
                                <div>
                                    {route.icon}
                                </div>
                                <AnimatePresence>
                                    {isOpen | isShown &&
                                        <motion.div className='text-start'>
                                            {route.name}
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </NavLink>
                        ))
                    }
                </section>
            </motion.div>
            <main>{children}</main>
        </div>
    );
};

export default Navbar;