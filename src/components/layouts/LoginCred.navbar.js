import React from 'react';
import { Link } from 'react-router-dom';

const LoginCred = () => {
    return ( 
        <div className='md:ml-8 text-xl md:my-0 my-9'>
        
            <Link to="/login" className='text-gray-100 hover:text-black font-mono mx-2'>Login</Link>
            <Link to="/register" className='text-gray-100 hover:text-black font-mono mx-2'>Register</Link>
        </div>
     );
}
 
export default LoginCred;