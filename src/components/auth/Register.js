// separated page for Register

import React, {useState} from 'react';
import axios from 'axios';
import Link from "react-router-dom"
const Register = () => {
    const [ registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        error_list: []
    })
    
    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value})
    }
    const registerSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
            passwordConfirm: registerInput.passwordConfirm,
            phone: registerInput.phone,
        }
        axios.get('/sanctum/csrf-cookie').then(response=>{
            axios.post('/api/register', data).then(res=> {
                if(res.data.status === 200){
                   localStorage.setItem('auth_token', res.data.token); 
                   localStorage.setItem('auth_name', res.data.username); 
                }
                else{
                    setRegister({...registerInput,error_list: res.data.validation_errors})
                }
            });
        })
    }

    
    

    return ( 
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form action="" onSubmit={registerSubmit}>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-0 mt-4"
                            name="name"
                            placeholder="Full Name"
                            onChange={handleInput}
                            value={registerInput.name}
                            />
                        <span className='text-red-500 text-base bg-red-100'>{registerInput.error_list.name}</span>

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-0 mt-4"
                            name="email"
                            placeholder="Email"
                            onChange={handleInput}
                            value={registerInput.email}
                            />
                        <span className='text-red-500 text-base bg-red-100'>{registerInput.error_list.email}</span>
                        <input
                            type="password"
                            name="password"
                            className='block border border-grey-light w-full p-3 rounded mb-0 mt-4'
                            placeholder='Enter Password'
                            onChange={handleInput}
                            value={registerInput.password}
                            />
                        <span className='text-red-500 text-base bg-red-100'>{registerInput.error_list.password}</span>
                        <input
                            type="password"
                            name="passwordConfirm"
                            className='block border border-grey-light w-full p-3 rounded mb-0 mt-4'
                            placeholder='Enter Confirm Password'
                            onChange={handleInput}
                            value={registerInput.passwordConfirm}
                            />
                        <span className='text-red-500 text-base bg-red-100'>{registerInput.error_list.passwordConfirm}</span>
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4 mt-4"
                            name="confirm_password"
                            placeholder="Phone number"
                            onChange={handleInput}
                            value={registerInput.phone}
                            />
                        <span className='text-red-500 text-base bg-red-100'>{registerInput.error_list.phone}</span>
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded text-white text-lg font-mono bg-yellow-500 hover:text-gray-200 focus:outline-none my-1"
                        >Create Account</button>
                    </form>
                    

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <Link to="/login" className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Register;