import React from 'react'
import Skill from '../../components/Skill'
import Section from '../Section'
import { SchoolOutlined, CodeOutlined, Android, DeveloperBoardOutlined, BusinessCenterOutlined } from '@material-ui/icons'

function AboutSection() {
    return (
        <Section type="about" title="About Me">
            <div className="skills-container">
                <Skill icon={<SchoolOutlined />}>
                    <span className="skill-title">BS in Computer Engineering</span>
                    <br />
                    <i>Minor in Computer Science</i>
                    <br />
                    Brigham Young University
                    <br />
                    Graduating in <span className="highlight">April 2023</span>
                    <br />
                    <span className="highlight">3.76</span> Cumulative GPA
                    <br />
                    <span className="highlight">4.00</span> GPA in Core Java / C++ Courses
                </Skill>
                <Skill icon={<CodeOutlined />}>
                    <span className="skill-title">Web Experience</span>
                    <br />
                    Experienced with <span className="highlight">HTML</span>, <span className="highlight">CSS</span>, and <span className="highlight">JavaScript</span>
                    <br />
                    Designed and developed several websites and Chrome extensions
                    <br />
                    Currently experimenting with <span className="highlight">React.js</span>
                </Skill>
                <Skill icon={<Android />}>
                    <span className="skill-title">Java Experience</span>
                    <br />
                    Built a genealogy web server in Java, <br />
                    using a <span className="highlight">REST API</span> and <span className="highlight">SQLite</span> database <span className="spacer" />
                    Developed an <span className="highlight">Android</span> app to interface with the server, <br />
                    using the <span className="highlight">Google Maps API</span> to display geo-information
                </Skill>
                <Skill icon={<DeveloperBoardOutlined />}>
                    <span className="skill-title">C++ Experience</span>
                    <br />
                    Built a recursive descent parser and executor for <span className="highlight">DataLog</span> code
                    <br />
                    Constructed a <span className="highlight">Relational Database</span> using user defined statements,
                    <br />
                    and efficiently executed a user's queries on the database
                </Skill>
                <Skill icon={<BusinessCenterOutlined />}>
                    <span className="skill-title">Other Skills</span>
                    <br />
                    RLC Circuit Design with <span className="highlight">LTSpice</span>
                    <br />
                    Designing circuits with <span className="highlight">SystemVerilog HDL</span><span className="spacer" />
                    Good Listener <span className="highlight">|</span> Detail Oriented <span className="highlight">|</span> Teamwork
                </Skill>
            </div>
        </Section> 
    )
}

export default AboutSection
