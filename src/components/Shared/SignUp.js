import React from 'react';
import { useForm } from "react-hook-form";

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='my-8'>
            <h2 className='text-center text-2xl lg:text-4xl uppercase tracking-wider mb-4 lg:mb-8 font-semibold text-accent'>Please Register</h2>
            <form className='w-3/4 lg:w-2/4 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control mx-auto max-w-xs lg:max-w-lg">
                    <label class="label font-bold">
                        <span class="label-text text-xl">Name :</span>
                    </label>
                    <input type="text" placeholder="Type Your Full Name" class="input input-bordered w-full max-w-xs lg:max-w-lg" {...register("name",
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
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-accent">{errors.name?.message}</span>}
                        {errors.name?.type === 'minLength' && <span class="label-text-alt text-accent">{errors.name?.message}</span>}
                    </label>
                </div>
                <div class="form-control mx-auto w-full max-w-xs lg:max-w-lg">
                    <label class="label font-bold">
                        <span class="label-text text-xl">Email :</span>
                    </label>
                    <input type="email" placeholder="Type Your E-Mail" class="input input-bordered w-full max-w-xs lg:max-w-lg" {...register("email",
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
                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-accent">{errors.email?.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-accent">{errors.email?.message}</span>}
                    </label>
                </div>
                <div class="form-control mx-auto w-full max-w-xs lg:max-w-lg">
                    <label class="label font-bold">
                        <span class="label-text text-xl">SecretKeY :</span>
                    </label>
                    <input type="password" placeholder="Type Your PassWord" class="input input-bordered w-full max-w-xs lg:max-w-lg" {...register("password",
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
                    <label class="label">
                        {errors.password?.type === 'pattern' && <span class="label-text-alt text-accent">{errors.password?.message}</span>}
                        {errors.password?.type === 'required' && <span class="label-text-alt text-accent">{errors.password?.message}</span>}
                    </label>
                </div>
                <div class="form-control mx-auto w-full max-w-xs lg:max-w-lg">
                    <label htmlFor='role' class="label font-bold">
                        <span class="label-text text-xl">Role :</span>
                    </label>
                    <select class="select bg-slate-600 select-bordered text-lg w-full max-w-xs lg:max-w-lg" {...register("role",
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
                    <label class="label">
                        {errors.role?.type === 'required' && <span class="label-text-alt text-accent">{errors.role.message}</span>}
                    </label>
                </div>
                <div className='w-full mx-auto max-w-xs lg:max-w-lg mt-6'>
                    <input className='btn btn-accent w-6/12 text-lg text-black font-bold' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default SignUp;