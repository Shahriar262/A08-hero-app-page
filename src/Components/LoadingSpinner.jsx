import React from 'react';
import logoImg from '../assets/logo.png'

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center mt-25">
            <h1 className="text-3xl font-semibold flex items-center space-x-3">
                <span>L</span>
                <img src={logoImg} alt="logo" className="w-12 h-12 md:w-14 md:h-14 animate-spin" />
                <span>A D I N G...</span>
            </h1>
        </div>
    );
};

export default LoadingSpinner;