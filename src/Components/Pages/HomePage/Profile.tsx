import React from 'react'

// import assets
import { profile_pic } from '../../../assets'

export default () => (
    <div className='profile'>
        <div className='image-container__round'>
            <img src={ profile_pic } alt='profile picture' />
        </div>
        
        <div className='profile__details'>
            <h1>stephen george</h1>
            <h2>developer | designer | writer</h2>
            <p>
                I am passionate about building things for the web &amp; making them 
                beautiful in both their design &amp; the structure of their code. I 
                love patterns, problem-solving, creating &amp; learning.
            </p>
        </div>
    </div>
)