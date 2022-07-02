import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between lg:container mx-auto px-12 py-4'>
            <div>

            </div>
            <div>

            </div>
            <div>
                <Link className='border border-accent px-5 py-2 rounded-md hover:bg-slate-600 hover:text-white shadow-lg' to="/signup">SignUp</Link>
                <Link className='border px-5 py-2 rounded-md hover:bg-slate-600 hover:text-white shadow-lg ml-4 font-bold' to="/signin">Login</Link>
            </div>
        </div>
    );
};

export default Header;