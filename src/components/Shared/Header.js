import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/library_logo.png'
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    }
    return (
        <div className='flex justify-between items-center lg:container mx-auto lg:px-12 py-4'>
            <div>
                <img style={{height: "60px"}} src={logo} alt="brand_logo" />
            </div>
            <div>

            </div>
            <div>
                <Link className='border border-accent px-5 py-2 rounded-md hover:bg-slate-600 hover:text-white shadow-lg' to="/signup">SignUp</Link>
                {user ? <button className='border px-5 py-2 rounded-md hover:bg-slate-600 hover:text-white shadow-lg ml-4 font-bold' onClick={logOut}>Logout</button> : <Link className='border px-5 py-2 rounded-md hover:bg-slate-600 hover:text-white shadow-lg ml-4 font-bold' to="/signin">Login</Link>}
            </div>
        </div>
    );
};

export default Header;