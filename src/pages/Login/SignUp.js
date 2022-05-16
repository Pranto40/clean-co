import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className='flex justify-center items-center h-screen mt-16'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
               <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center font-bold text-2xl'>Sign Up</h1>
               <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input 
                type="text" 
                placeholder="Your Name" 
                className="input input-bordered w-full max-w-xs" 
                {...register("name", {
                    required: {
                        value: true,
                        message: "Name Required"
                    }
                })}
                />
                <label className="label">
                {errors.name?.type === 'required' && <span className="text-error label-text-alt">{errors.name.message}</span>}
                </label>
                </div>
               <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input 
                type="email" 
                placeholder="Your Email" 
                className="input input-bordered w-full max-w-xs" 
                {...register("email", {
                    required: {
                        value: true,
                        message: "Email Required"
                    },
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Provide a valid Email"
                    }
                })}
                />
                <label className="label">
                {errors.email?.type === 'required' && <span className="text-error label-text-alt">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="text-error label-text-alt">{errors.email.message}</span>}
                </label>
                </div>
               <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input 
                type="password" 
                placeholder="Password" 
                className="input input-bordered w-full max-w-xs" 
                {...register("password", { 
                    required: {
                        value: true,
                        message: "Password is Required"
                    },
                    minLength: {
                        value: 6,
                        message: "must be 6 characters or longer"
                    }
                 })}
                />
                <label className="label">
                {errors.password?.type === 'required' && <span className="text-error label-text-alt">{errors.email.message}</span>}
                {errors.password?.type === 'minLength' && <span className="text-error label-text-alt">{errors.email.message}</span>}
                </label>
                </div>
                <label className="label">
                        <span className="label-text">Forgot Password ?</span>
                </label>
                <input className='btn btn-primary w-full' type="submit" value="Sign Up" />
                </form>

                <p>New to Doctors Portal? <Link style={{color: '#F59E0B'}} to="/login">Already Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
        </div>
    );
};

export default SignUp;