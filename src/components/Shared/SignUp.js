import React from 'react';
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" {...register("name", {required: "Type Your Name"})} />
                    <label class="label">
                        {errors.name.type === 'required' && <span class="label-text-alt">{errors.name.message}</span>}
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
    );
};

export default SignUp;