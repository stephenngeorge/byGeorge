import React from 'react'

// import childcompo
import ProjectCard from './ProjectCard'

// import assets
import {
    esther_screenshot,
    ngphoto_screenshot,
    portfolio_screenshot
} from '../../../assets'

export default () => {
    const projects :{ title :string, url :string, img :string }[] = [
        { title: 'esther ministry', url:'http://estherministry.org.uk/', img: esther_screenshot },
        { title: 'neil george photography', url: 'http://www.neilgeorgephotography.co.uk/', img: ngphoto_screenshot },
        { title: 'stephen george portfolio', url: '/', img: portfolio_screenshot }
    ]
    return (
        <div className='portfolio-page'>
            {
                projects.map(project => <ProjectCard key={ project.title } project={ project } />)
            }
        </div>
    )
}