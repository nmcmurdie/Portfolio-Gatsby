import React from 'react'
import Card from '../../components/Card'
import Section from '../Section'
import QuickPageIcon from '../../res/quickpage.png'
import ChemtoolsIcon from '../../res/chemtools.png'
import ProjectsIcon from '../../res/projects.png'

function ProjectsSection() {
    return (
        <Section type="projects" title="Projects">
            <div className="cards-container">
                <Card iconURL={QuickPageIcon} title="QuickPage" link="https://quickpage.sweepkey.net/" linkAlt="Details">
                    <span className="card-title">QuickPage</span>
                    A modern new tab page with powerful widgets
                </Card>
                <Card iconURL={ChemtoolsIcon} title="ChemTools" link="https://chemtools.sweepkey.net/" linkAlt="Open">
                    <span className="card-title">ChemTools</span>
                    Visualize chemistry with this suite of useful tools
                </Card>
                <Card iconURL={ProjectsIcon} title="Github" link="https://www.github.com/nmcmurdie" linkAlt="Open">
                    <span className="card-title">More Projects</span>
                    More of my personal projects can be found on my Github, linked below
                </Card>
            </div>
        </Section>
    )
}

export default ProjectsSection
