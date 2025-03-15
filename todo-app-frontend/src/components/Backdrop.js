import React from 'react';
import '../styles/Backdrop.css';

const Backdrop = ({ onClick }) => {
    return <div className="backdrop" onClick={onClick}></div>;
};

export default Backdrop;
