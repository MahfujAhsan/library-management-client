import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { ImEyePlus, ImEyeMinus } from 'react-icons/im';
import auth from '../../firebase.init';
import Loader from './Loader';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    let errorMessage;
    const [isShown, setIsSHown] = useState(false);
    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
        reset();
    };
    if (user) {
        navigate("/")
    }
    if (loading) {
        <Loader />
    }
    if (error) {
        errorMessage = <p className='text-accent block text-center'>{error.message}</p>
    }
    return (
        <div>
            <h2 className='text-center text-2xl lg:text-4xl uppercase tracking-wider mb-4 lg:mb-8 font-semibold text-accent'>Please LogIn</h2>
            <form className='w-3/4 lg:w-2/4 mx-auto' onSubmit={handleSubmit(onSubmit)}>
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
                        <button className='absolute right-2 top-14 text-xl lg:text-2xl' onClick={togglePassword}>{isShown ? <ImEyeMinus className='text-black' /> : <ImEyePlus className='text-black' />}</button>
                    </div>
                    <label className="label">
                        {errors.password?.type === 'pattern' && <span className="label-text-alt text-accent">{errors.password?.message}</span>}
                        {errors.password?.type === 'required' && <span className="label-text-alt text-accent">{errors.password?.message}</span>}
                    </label>
                </div>
                {errorMessage}
                <div className='w-full mx-auto max-w-xs lg:max-w-lg mt-6'>
                    <input className='btn btn-accent w-6/12 text-lg text-black font-bold' type="submit" value="Login" />
                </div>
            </form>
            <p className='w-3/4 lg:w-2/4 mx-auto text-center mt-6 lg:text-lg'>New to Library Management? <Link className='text-accent font-bold' to="/signup">Register Now</Link></p>
        </div>
    );
};

export default SignIn;