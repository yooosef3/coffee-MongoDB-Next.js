import Footer from './Footer';
import Header from './Header';
import React from 'react';
import background from "../../public/images/Pattern.webp";

const Layout = ({children}:any) => {
    return (
        <div className='bg-no-repeat min-h-screen bg-cover' style={{backgroundImage: `url(${background.src})`}}>
            <Header />
            {children}
            <Footer /> 
        </div>
    );
};

export default Layout;