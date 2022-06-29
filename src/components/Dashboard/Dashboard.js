import React, { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import Admins from './Admins';

const Dashboard = () => {
    return (
        <div>
            <h2 className='text-center text-white'>This is Dashboard</h2>
        </div>
    );
};

export default Dashboard;