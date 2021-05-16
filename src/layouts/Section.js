import React from 'react'
import './Section.css'

function Section({ children, type, title }) {
    return (
        <div className={`section ${type}`}>
            {
                title && <>
                    <h1 className={`section-title ${type}`}>{title}</h1>
                    <br />
                </>
            }
            {children}
        </div>
    )
}

export default Section
