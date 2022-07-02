import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ImEyePlus, ImEyeMinus } from 'react-icons/im';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../Shared/Loader';
import { toast } from 'react-toastify';

const SignUp = () => {
    const navigate = useNavigate();
    let errorMessage;
    const [isShown, setIsSHown] = useState(false);
    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    if (user) {
        console.log(user)
    }
    if (updating || loading) {
        return <Loader />
    }
    if (error || updateError) {
        errorMessage = <p className='text-accent block text-center'>{error.message || updateError.message}</p>
    };
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        axios.put(`http://localhost:5000/userData/${data.email}`, data)
            .then(function (response) {
                if(response.data.upsertedCount === 1) {
                    toast.success('You Have Created an Account.');
                    
                }
                if(response.data.upsertedCount === 0) {
                    toast.warning('You Have Already Registered')
                }
                reset();
                navigate('/signin')
            })

    };
    return (
        <div className='my-8'>
            <h2 className='text-center text-2xl lg:text-4xl uppercase tracking-wider mb-4 lg:mb-8 font-semibold text-accent'>Please Register</h2>
            <form className='w-3/4 lg:w-2/4 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control mx-auto max-w-xs lg:max-w-lg">
                    <label className="label font-bold">
                        <span className="label-text text-xl">Name :</span>
                    </label>
                    <input type="text" placeholder="Type Your Full Name" className="input input-bordered w-full max-w-xs lg:max-w-lg" {...register("name",
                        {
                            required: {
                                value: true,
                                message: "Name is Required",
                            },
                            minLength: {
                                value: 6,
                                message: "Min 6 Character"
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-accent">{errors.name?.message}</span>}
                        {errors.name?.type === 'minLength' && <span className="label-text-alt text-accent">{errors.name?.message}</span>}
                    </label>
                </div>
                <div className="form-control mx-auto w-full max-w-xs lg:max-w-lg">
                    <label className="label font-bold">
                        <span className="label-text text-xl">Email :</span>
                    </label>
                    <input type="email" placeholder="Type Your E-Mail" className="input input-bordered w-full max-w-xs lg:max-w-lg" {...register("email",
                        {
                            required: {
                                value: true,
                                message: "Email Required",
                            },
                            pattern: {
                                value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })} />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-accent">{errors.email?.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-accent">{errors.email?.message}</span>}
                    </label>
                </div>
                <div className="form-control mx-auto w-full max-w-xs lg:max-w-lg relative">
                    <label className="label font-bold">
                        <span className="label-text text-xl">SecretKeY :</span>
                    </label>
                    <div>
                        <input type={isShown ? "text" : "password"} placeholder="Type Your PassWord" className="input input-bordered w-full max-w-xs lg:max-w-lg" {...register("password",
                            {
                                required: {
                                    value: true,
                                    message: "Password Required"
                                },
                                pattern: {
                                    value: /(?=.*[!#$%&?^*@~() "])(?=.{8,})/,
                                    message: "At least 8 Character"
                                }
                            })} />
                        <button className='absolute right-2 top-14 text-xl lg:text-2xl' onClick={togglePassword}>{isShown ? <ImEyeMinus className='text-black' /> : <ImEyePlus className='text-black'/>}</button>
                    </div>
                    <label className="label">
                        {errors.password?.type === 'pattern' && <span className="label-text-alt text-accent">{errors.password?.message}</span>}
                        {errors.password?.type === 'required' && <span className="label-text-alt text-accent">{errors.password?.message}</span>}
                    </label>
                </div>
                <div className="form-control mx-auto w-full max-w-xs lg:max-w-lg">
                    <label htmlFor='role' className="label font-bold">
                        <span className="label-text text-xl">Role :</span>
                    </label>
                    <select className="select bg-slate-600 select-bordered text-lg w-full max-w-xs lg:max-w-lg" {...register("role",
                        {
                            required: {
                                value: true,
                                message: "Choose At least One",
                            }
                        })} >
                        <option value="" disabled selected>Pick one</option>
                        <option className="bg-accent text-black text-xl" value="student">Student</option>
                        <option className='bg-accent text-black text-xl' value="teacher">Teacher</option>
                    </select>
                    <label className="label">
                        {errors.role?.type === 'required' && <span className="label-text-alt text-accent">{errors.role.message}</span>}
                    </label>
                </div>
                {errorMessage}
                <div className='w-full mx-auto max-w-xs lg:max-w-lg mt-6'>
                    <input className='btn btn-accent w-6/12 text-lg text-black font-bold' type="submit" value="Register" />
                </div>
            </form>
            <p className='w-3/4 lg:w-2/4 mx-auto text-center mt-6 lg:text-lg'>Already have an Account? <Link className='text-accent font-bold' to="/signin">Please Login</Link></p>
        </div>
    );
};

export default SignUp;