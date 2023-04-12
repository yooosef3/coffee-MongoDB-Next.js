import ContactForm from '@/components/headerPages/contact/ContactForm';
import HeaderTemplate from '@/components/shared/HeaderTemplate';
import Information from '@/components/headerPages/contact/Information';
import React from 'react';

const contact = () => {
    return (
        <div>
            <HeaderTemplate 
                background='/images/contact-us-image.jpg' 
                header='تماس با ما'
                />
                <Information />
                <ContactForm />
        </div>
    );
};

export default contact;