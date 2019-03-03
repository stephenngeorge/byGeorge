import React, { useEffect } from 'react'

// import child components
import Job from './Job'

// import assets
import { close_icon } from '../../../assets'

interface Props {
    jobs: any[],
    icon: string,
    closeDrawer(): any
}

export default (props: Props) => {
    let { jobs, icon, closeDrawer } = props

    useEffect(() => {
        let drawer = document.querySelector('.about-page__drawer')
        if (drawer !== null) {
            drawer.classList.add('slide-in-from-left')
        }
    }, [])

    return (
        <div className='about-page__jobs about-page__drawer'>
            <button className='btn__close-drawer' onClick={ closeDrawer }>
                <img src={ close_icon } alt='close drawer' />
            </button>
            <img src={ icon } alt='work history' className='drawer-icon' />
            <h2 className='drawer-title'>Work History</h2>
            {
                jobs.map((job: any) => <Job job={ job } key={ job.title } />)
            }
        </div>
    )
}