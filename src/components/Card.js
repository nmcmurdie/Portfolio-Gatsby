import React from 'react'
import { ArrowForward } from '@material-ui/icons'
import './Card.css'

function Card({ iconURL, title, children, link, linkAlt}) {
    return (
        <a className={`card card-${title.toLowerCase()}`} href={link}>
            <img alt={title} className="card-icon" src={iconURL} />
            <div className="card-content">
                <div className="card-desc">{children}</div>
                <button className="card-link">
                    {linkAlt}<ArrowForward />
                </button>
            </div>
        </a>
    )
}

export default Card
