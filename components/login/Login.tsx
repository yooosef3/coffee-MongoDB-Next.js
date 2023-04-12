import Image from 'next/image';
import LoginForm from './LoginForm';
import React from 'react';
import login from '../../public/images/photo-1519215498729-0abf8367b98c.avif'

const Login = () => {
    return (
        <div style={{backgroundImage: 'url(/images/Pattern.webp)'}} className='py-20 bg-cover bg-center lg:flex lg:gap-5 lg:justify-start'>
            <LoginForm />
            <div className='hidden lg:block lg:w-[600px] xl:w-[57%]'>
                <Image className='w-[90%] rounded-md' alt='register' width={550} height={550} src={login}/>
            </div>
        </div>
    );
};

export default Login;