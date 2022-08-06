import React from "react";
import PropTypes from 'prop-types';

export const IconSVG = ({id, className}) => {
    switch(id) {
        case 'icon-diagram-tab-arrow-down':
        return (
            <svg id="icon-diagram-tab-arrow-down" className={className} viewBox="0 0 58 32" width="18" height="9">
                <path d="M3.938 1.881l-2.057 2.057 27.21 27.21 27.21-27.21-2.057-2.057-25.153 25.153z"></path>
            </svg>
        )
        default:
        return <svg></svg>
    }
}

IconSVG.propTypes = {
    id: PropTypes.string.isRequired,
}