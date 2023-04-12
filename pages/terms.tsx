import HeaderTemplate from '@/components/shared/HeaderTemplate';
import React from 'react';
import Terms from '@/components/headerPages/terms/Terms';

const terms = () => {
    return (
        <div>
            <HeaderTemplate 
                background='/images/Headervisual-terms.jpg' 
                header='شرایط و ضوابط'
                />
            <Terms />
        </div>
    );
};

export default terms;