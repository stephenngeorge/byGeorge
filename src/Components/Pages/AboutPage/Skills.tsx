import React from 'react'

// import child components
import Skill from './Skill'

export default (props: any) => {
    let { skills, icon } = props

    return (
        <div className='about-page__skills about-page__drawer'>
            <img src={ icon } alt='skills' />
            <h2>Skills</h2>
            {
                skills.map((skill: any, i: number) => <Skill key={ i } skill={ skill } />)
            }
        </div>
    )
}