import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { ImUpload } from 'react-icons/im';

const Profile = () => {
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState({});
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {

    };
    useEffect(() => {
        axios.get(`http://localhost:5000/userData/${user?.email}`)
            .then(function (response) {
                setUserData(response.data)
                console.log(userData)
            })
    }, [user?.email]);
    return (
        <div className='flex justify-center flex-col items-center lg:container px-2 lg:px-12 py-4 gap-y-8'>
            <form className='w-3/4 lg:w-2/4 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control mx-auto w-full max-w-xs lg:max-w-lg">
                    <input type="file" id='photo' className="input input-bordered w-full max-w-xs lg:max-w-lg text-2xl text-center overflow-hidden opacity-0 absolute -z-10 inline-block bg-slate-800" {...register("photo")} />
                    <label htmlFor='photo' className="label inline-block  text-center mx-auto cursor-pointer"><ImUpload className='mx-auto rounded-full bg-slate-800 w-24 h-24 p-6' size="3em"/>
                    <p className='text-xl font-bold mt-3'>Upload Photo</p>
                    </label>
                </div>
                <h2 className="font-bold text-center text-2xl my-6">🅰🅱🅾🆄🆃</h2>
                <div className="form-control mx-auto w-full max-w-xs lg:max-w-lg">
                    <sub className='text-center text-xs font-bold uppercase ml-52 text-accent'>{userData.role}</sub>
                    <input type="text" className="w-full active:border-0 max-w-xs lg:max-w-lg text-2xl text-center bg-transparent font-semibold" disabled value={userData.name} {...register("name")} />
                </div>
                <div className="form-control mx-auto w-full max-w-xs lg:max-w-lg relative my-4">
                    <div>
                        <input type="email" className=" w-full max-w-xs lg:max-w-lg text-2xl text-center bg-transparent font-semibold" disabled value={userData.email} {...register("email")} />
                    </div>
                </div>
                <div className='w-full mx-auto max-w-xs lg:max-w-lg mt-6 text-center'>
                    <input className='btn btn-accent text-lg text-black font-bold' type="submit" value="Update Profile" />
                </div>
            </form>
        </div>
    );
};

export default Profile;