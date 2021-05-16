import React from 'react'
import './SquareButton.css'

function SquareButton({ icon, iconURL, alt, link, simple }) {
    return (
        <a href={link} title={alt} className={`button button-square button-${alt.toLowerCase()}${simple ? ' button-simple' : ''}`}>
            {icon && React.cloneElement(icon, {
                className: 'button-icon'
            })}
            {iconURL && <img className="button-icon" alt={alt} src={iconURL} />}
        </a>
    )
}

export default SquareButton
