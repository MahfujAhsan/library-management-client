import React from 'react';
import loader from "../../assets/css-car-preloader.gif"

const Loader = () => {
    return (
        <div>
            <img className='w-screen' src={loader} alt="" />
        </div>
    );
};

export default Loader;