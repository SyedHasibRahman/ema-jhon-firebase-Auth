import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './shipping.css';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth({})
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />

                <input placeholder="address"  {...register("address", { required: true })} />
                <input placeholder="Email" {...register("email", { required: true })} />
                {errors.address && <span className="error">Address is required</span>}
                {errors.email && <span className="error">Email is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;