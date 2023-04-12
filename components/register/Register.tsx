import Image from 'next/image';
import React from 'react';
import RegisterForm from './RegisterForm';
import register from '../../public/images/christiann-koepke-7HUDNDNkxRk-unsplash.jpg'

const Register = () => {
    
    
    return (
        <div style={{backgroundImage: 'url(/images/Pattern.webp)'}} className='py-20 bg-cover bg-center lg:flex lg:gap-5'>
            <RegisterForm />
            <div className='hidden lg:block lg:w-[600px] xl:w-[57%]'>
                <Image className='w-[90%] rounded-md' alt='register' width={550} height={550} src={register}/>
            </div>
        </div>
    );
};

export default Register;