import React from 'react';
import { Helmet } from 'react-helmet-async';

const SetTitle = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{title} - Rayhan Portfolio</title>
            </Helmet>
        </div>
    );
};

export default SetTitle;