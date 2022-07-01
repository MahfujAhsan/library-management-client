import React from 'react';
import { useForm } from "react-hook-form";

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='max-w-screen-lg flex justify-center ml-96'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control">
                    <label class="label font-bold">
                        <span class="label-text text-xl">Name :</span>
                    </label>
                    <input type="text" placeholder="Type Your Full Name" class="input input-bordered pr-24" {...register("name",
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
                        {errors.name?.type === 'required' && <span class="label-text-alt text-accent text-xl">{errors.name?.message}</span>}
                        {errors.name?.type === 'minLength' && <span class="label-text-alt text-accent text-xl">{errors.name?.message}</span>}
                    </label>
                </div>
                <div class="form-control">
                    <label class="label font-bold">
                        <span class="label-text text-xl">Email :</span>
                    </label>
                    <input type="email" placeholder="Type Your E-Mail" class="input input-bordered pr-24" {...register("email",
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
                        {errors.email?.type === 'required' && <span class="label-text-alt text-accent text-xl">{errors.email?.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-accent text-xl">{errors.email?.message}</span>}
                    </label>
                </div>
                <div class="form-control">
                    <label class="label font-bold">
                        <span class="label-text text-xl">SecretKeY :</span>
                    </label>
                    <input type="password" placeholder="Type Your PassWord" class="input input-bordered pr-24" {...register("password",
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
                    {/* {passwordType==="password" ? <span onClick={togglePassword} ></span> : <span onClick={togglePassword} className='absolute top-12 right-2 text-2xl cursor-pointer'><ImEyePlus /></span>} */}

                    <label class="label">
                        {errors.password?.type === 'pattern' && <span class="label-text-alt text-accent text-xl">{errors.password?.message}</span>}
                        {errors.password?.type === 'required' && <span class="label-text-alt text-accent text-xl">{errors.password?.message}</span>}
                    </label>
                </div>
                <div class="form-control">
                    <label htmlFor='role' class="label font-bold">
                        <span class="label-text text-xl">Role :</span>
                    </label>
                    <select class="select bg-slate-600 select-bordered text-lg" {...register("role",
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
                <input className='btn btn-secondary' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SignUp;