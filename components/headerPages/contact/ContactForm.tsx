import Form from './Form';
import FormDescription from './FormDescription';
import React from 'react';

const ContactForm = () => {
    return (
        <div className='w-[90%] md:w-[700px] lg:w-[920px] xl:w-[1200px] mx-auto py-14 flex flex-col gap-8 lg:gap-12 lg:flex-row lg:items-center'>
            <FormDescription />
            <Form />
        </div>
    );
};

export default ContactForm;