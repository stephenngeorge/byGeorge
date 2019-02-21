import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <div className='home-button__wrapper'>
        <button className='btn__main' id='home-button'>
            <Link to='/'>SG</Link>
        </button>
        <p id='home-button--tag' className='tag'>home</p>
    </div>
)