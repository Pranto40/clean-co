import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    if (googleLoading || loading) {
        return <p>loading......</p>
    }
    return (
        <div className='flex justify-center items-center h-screen mt-16'>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className='text-center font-bold text-2xl'>Login</h1>

                <form onSubmit={handleSubmit(onSubmit)}>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input
                    type="text" 
                    placeholder="Your Email" 
                    class="input input-bordered w-full"
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
                    <label class="label">
                    {errors.email?.type === 'required' && <span class="text-error label-text-alt">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span class="text-error label-text-alt">{errors.email.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input
                    type="text" 
                    placeholder="Password" 
                    class="input input-bordered w-full"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Password Required"
                        },
                        pattern: {
                            value: 6,
                            message: "must be 6 characters or longer"
                        }
                      })}
                    />
                    <label class="label">
                    {errors.password?.type === 'required' && <span class="text-error label-text-alt">{errors.password.message}</span>}
                    {errors.password?.type === 'pattern' && <span class="text-error label-text-alt">{errors.password.message}</span>}
                    </label>
                </div>
                <label class="label">
                        <span class="label-text">Forgot Password ?</span>
                </label>
                    
                    <input className='btn btn-primary w-full' type="submit" value="LOGIN" />
                </form>

                    <h1>New to Doctors Portal? <Link style={{color: '#F59E0B'}} to="/">Create new account</Link></h1>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;  