import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../assets/library_logo.png'
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { GoVerified } from 'react-icons/go';
import { RiLogoutBoxRLine, RiLogoutBoxLine } from 'react-icons/ri';


const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const logOut = () => {
        navigate("/signin")
        signOut(auth);
    }
    return (
        <div className='flex justify-between items-center lg:container mx-auto px-2 lg:px-12 py-4'>
            <div className=''>
                <img className='w-32' src={logo} alt="brand_logo" />
            </div>
                <h1 className='text-center font-semibold uppercase text-xs lg:text-4xl flex-grow font-mono px-2'><span className='text-yellow-600'>🅻🅸🅱🆁🅰🆁🆈</span> <span className='text-pink-500'>🅼🅰🅽🅰🅶🅴🅼🅴🅽🆃</span></h1>
            <div className='flex justify-end gap-x-4'>
                {/* Responsive Menu */}
                {!user ? <Link className='lg:hidden border border-accent px-1 w-8 rounded-md bg-slate-600 hover:bg-transparent hover:text-white shadow-lg font-bold text-white flex items-center gap-x-2' to="/signup"><GoVerified size="large"/></Link> : ""}
                {user ? <button className='lg:hidden border px-1 w-8 py-2 rounded-md hover:bg-slate-600 shadow-lg font-bold text-white flex items-center gap-x-2' onClick={logOut}><RiLogoutBoxRLine size="large"/></button> : <Link className='lg:hidden border px-1 w-8 py-2 rounded-md hover:bg-slate-600 shadow-lg font-bold text-white flex items-center gap-x-2' to="/signin"><RiLogoutBoxLine size="large"/></Link>}
                {/* Responsive Menu */}

                <Link className='hidden border border-accent px-5 py-2 rounded-md bg-slate-600 hover:bg-transparent hover:text-white shadow-lg font-bold text-white lg:flex items-center gap-x-2' to="/signup"><GoVerified /> SignUp</Link>
                {user ? <button className='hidden border px-5 py-2 rounded-md hover:bg-slate-600 shadow-lg font-bold text-white lg:flex items-center gap-x-2' onClick={logOut}><RiLogoutBoxRLine /> Logout</button> : <Link className='hidden border px-5 py-2 rounded-md hover:bg-slate-600  shadow-lg font-bold text-white lg:flex items-center gap-x-2' to="/signin"><RiLogoutBoxLine /> Login</Link>}
            </div>
        </div>
    );
};

export default Header;