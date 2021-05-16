import React from 'react'
import './Skill.css'

function Skill({ icon, children}) {
    return (
        <div className="skill">
            {icon && React.cloneElement(icon, {
                className: 'skill-icon'
            })}
            <div className="skill-content">{children}</div>
        </div>
    )
}

export default Skill
