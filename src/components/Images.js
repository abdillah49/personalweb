import React from 'react';
import PropTypes from 'prop-types';

const Images = ({ src, alt, className }) => {
    return (
        <img src={src} alt={alt} className={className} />
    );
}

Images.propType = {
    src : PropTypes.string.isRequired,
    alt : PropTypes.string,
    className : PropTypes.string
}

export default Images;