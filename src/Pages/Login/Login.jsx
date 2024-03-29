import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const authInfo = useContext(authContext)
    const { logInUser } = authInfo
    const navigate = useNavigate()
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        //firebae
        logInUser(email, password)
            .then(res => {
                console.log('LoggedIn Successfully', res.user)
                form.reset()
                // notify()
                navigate('/')
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Login your account</h1>
                        <hr className='my-4' />
                    </div>
                    <div className="card shrink-0 w-[500px] shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Login</button>
                            </div>
                            <p>Don't Have Account?  <Link className='text-orange-600 hover:underline' to="/register"> Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;