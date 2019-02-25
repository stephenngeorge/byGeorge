import React, { useState } from 'react'

// import childcomponents
import ProjectCard from './ProjectCard'
import ProjectDrawer from './ProjectDrawer'

// import assets
import {
    esther_screenshot,
    ngphoto_screenshot,
    portfolio_screenshot
} from '../../../assets'

export default () => {

    let [focusProject, setFocusProject] = useState({})

    interface Project {
        title: string,
        path: string,
        img: string
    }
    const projects: Project[] = [
        { title: 'esther ministry', path: 'http://estherministry.org.uk/', img: esther_screenshot },
        { title: 'neil george photography', path: 'http://www.neilgeorgephotography.co.uk/', img: ngphoto_screenshot },
        { title: 'stephen george portfolio', path: '/', img: portfolio_screenshot }
    ]
    return (
        <div className='portfolio-page'>
            {
                projects.map(project => <ProjectCard    key={ project.title }
                                                        project={ project }
                                                        setFocusProject={ setFocusProject }
                                        />)
            }
            {
                Object.keys(focusProject).length !== 0 &&
                <ProjectDrawer project={ focusProject } />
            }
        </div>
    )
}