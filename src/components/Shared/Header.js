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
                <Link to="signup">SignUp</Link>
            </div>
        </div>
    );
};

export default Header;