import React from 'react'
import './/ProjectsSection.css'
import { Zoom } from 'react-reveal'

function ProjectsSection() {
    return (
        <div className='projects-container'>
            <div className='projects-section'>
                <Zoom>
                    <a href='https://github.com/JaviAlonsoH' target='_blank' className='github'>
                        <h1><i className='fas fa-dice-d20' id='icon-container' />Projects</h1>
                    </a>
                </Zoom>
            </div>
        </div>
    )
}

export default ProjectsSection
