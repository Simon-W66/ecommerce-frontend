import React, {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"

const Register = () => {
    const [ loginInput, setLogin] = useState({
        name: '',
        email: '',
        password: '',
        error_list: []
    })
    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value})
    }
    const loginSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            name: loginInput.name,
            email: loginInput.email, //HOW to check if input is name or email :D ? 
            password: loginInput.password,
        }
        axios.get('/sanctum/csrf-cookie').then(response=>{
            axios.post('/api/login', data).then(res=> {
                if(res.data.status === 200){
                   localStorage.setItem('auth_token', res.data.token); 
                   localStorage.setItem('auth_name', res.data.username); 
                }
                else{
                    setLogin({...loginInput,error_list: res.data.validation_errors})
                }
            });
        })
    }
    return ( 
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign in</h1>
                    <form action="" onSubmit={loginSubmit}>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-0 mt-4"
                            name="name"
                            placeholder="Full Name or Email"
                            value={loginInput.name}
                            onChange={handleInput}
                            />
                        <span className='text-red-500 text-base bg-red-100'>{loginInput.error_list.name}</span>
                        <input
                            type="password"
                            name="password"
                            className='block border border-grey-light w-full p-3 rounded mb-0 mt-4'
                            placeholder='Enter Password'
                            onChange={handleInput}
                            value={loginInput.password}
                            />
                        <span className='text-red-500 text-base bg-red-100'>{loginInput.error_list.password}</span>
                        <div className='mx-2 my-1 '>
                            <input type="checkbox" name="remember_me" id="remember_me" />
                            <span className='mx-2 text-md text-gray-500'>Remember me</span>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded text-white text-lg font-mono bg-yellow-500 hover:text-gray-200 focus:outline-none my-1"
                        >Sign in</button>
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
                <div className="text-grey-dark mt-6 ">
                    Already have an account? 
                    <Link to="/register" className="no-underline border-b border-blue text-blue mx-1" href="../login/">
                        Register in
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Register;