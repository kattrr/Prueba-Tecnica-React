import React from 'react';

const NoPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <img 
                src='/assets/images/colombia-404.jpg' // Updated path
                alt="Page Not Found" 
                style={{ width: '300px', height: 'auto', marginTop: '20px' }} 
            />
        </div>
    );
};

export default NoPage;
