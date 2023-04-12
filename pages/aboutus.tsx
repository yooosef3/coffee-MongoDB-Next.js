import About from '@/components/headerPages/about/About';
import Growing from '@/components/headerPages/about/Growing';
import HeaderTemplate from '@/components/shared/HeaderTemplate';
import People from '@/components/headerPages/about/People';
import React from 'react';
import Standards from '@/components/headerPages/about/Standards';
import Story from '@/components/headerPages/about/Story';
import Values from '@/components/headerPages/about/Values';

const AboutUs = () => {
    return (
        <div>
            <HeaderTemplate 
                background='/images/2-min_575x380_crop_center.webp' 
                header='درباره ما'
                />
            <About />
            <Standards />
            <Story />
            <Growing />
            <Values />
            <People />
        </div>
    );
};

export default AboutUs;