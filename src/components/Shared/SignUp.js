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
                        <span class="label-text">Name :</span>
                    </label>
                    <input type="text" placeholder="Type Your Name" class="input input-bordered pr-24" {...register("name",
                        {
                            required: {
                                value: true,
                                message: "Name is Required",
                            }
                        })} />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-accent">{errors.name.message}</span>}
                    </label>
                </div>
                <div class="form-control">
                    <label class="label font-bold">
                        <span class="label-text">Email :</span>
                    </label>
                    <input type="email" placeholder="Type Your E-Mail" class="input input-bordered pr-24" {...register("email",
                        {
                            required: {
                                value: true,
                                message: "Provide a Valid Email",
                                pattern: /^([A-Za-z]|[0-9])+$/
                            }
                        })} />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-accent">{errors.email.message}</span>}
                    </label>
                </div>
                <div class="form-control">
                    <label class="label font-bold">
                        <span class="label-text">SecretKeY :</span>
                    </label>
                    <input type="password" placeholder="Type Your PassWord" class="input input-bordered pr-24" {...register("password",
                        {
                            required: {
                                value: true,
                                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/,
                                message: "At least 8 Character",
                            }
                        })} />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-accent">{errors.password.message}</span>}
                    </label>
                </div>
                <div class="form-control">
                    <label htmlFor='role' class="label font-bold">
                        <span class="label-text">Role :</span>
                    </label>
                    <select className='text-white bg-gray-700' name="role" id="role">
                        <option disabled value="select">Choose Your Role</option>
                        <option value="student">Student</option>
                        <option value="student">Teacher</option>
                    </select>
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-accent">{errors.name.message}</span>}
                    </label>
                </div>
                <input className='btn btn-secondary' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SignUp;