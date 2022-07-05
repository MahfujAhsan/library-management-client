import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader';

const Profile = () => {
    const [user] = useAuthState(auth);
    axios.get(`http://localhost:5000/userData/${user?.email}`)
    .then(function (response) {
        console.log(response)
    })
    return (
        <div className='flex justify-between items-center lg:container px-2 lg:px-12 py-4'>
            {
                
            }
        </div>
    );
};

export default Profile;