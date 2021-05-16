import React from 'react'
import Section from '../Section'
import Profile from '../../components/Profile'
import SquareButton from '../../components/SquareButton'
import { EmailOutlined } from '@material-ui/icons'
import GithubIcon from '../../res/github.svg'
import LinkedInIcon from '../../res/linkedin.svg'
import './TitleSection.css'

function TitleSection() {
    return (
        <Section type="title" title="Nicholas McMurdie">
            <Profile />
            <div className="links-container">
                <SquareButton alt="Email" icon={<EmailOutlined />} link="mailto:nickmcmurdie@gmail.com" />
                <SquareButton alt="Github" iconURL={GithubIcon} link="https://www.github.com/nmcmurdie" />
                <SquareButton alt="LinkedIn" iconURL={LinkedInIcon} link="https://www.linkedin.com/in/nick-mcmurdie" />
            </div>
        </Section>
    )
}

export default TitleSection
