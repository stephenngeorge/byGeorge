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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum placerat at nisi sit amet semper.
                Mauris feugiat leo vel sodales sagittis.
                Morbi semper vitae velit et consequat.
                Donec vestibulum neque sed tristique elementum.
                Integer ultrices mi ut velit facilisis laoreet.
                Nunc gravida neque ut ligula aliquet volutpat.
                Maecenas at purus auctor nisi rhoncus volutpat eget vel tellus.
                Suspendisse tempus, ligula sit amet feugiat pellentesque,
                massa lorem tempor elit, a tristique felis diam vitae libero.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Etiam eget euismod est.
            </p>
        </div>
    </div>
)