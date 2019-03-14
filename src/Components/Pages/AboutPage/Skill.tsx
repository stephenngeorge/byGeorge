import React from 'react'
import { IPropsSkill } from './SkillsType'

export default (props: IPropsSkill) => {
    let { skill } = props

    return (
        <div className='skill'>
            <p>{ skill.name }</p>
            <img src={ skill.logo } alt={ skill.name } />
        </div>
    )
}