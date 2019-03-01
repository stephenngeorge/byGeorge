import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// import assets
import {
    about_icon,
    facebook_logo,
    instagram_logo,
    linkedin_logo,
    menu_icon,
    portfolio_icon,
    twitter_logo
} from '../../assets'

export default () => {

    const [active, setActive] = useState(false)

    useEffect(() => {
        let toggleNav = (e: any) => {
            if (e.key === "/") {
                setActive(!active)
            }
        }
        window.addEventListener('keypress', toggleNav)

        return () => window.removeEventListener('keypress', toggleNav)
    }, [active])

    let rotate :string = !!active ? 'rotate' : ''
    let active_nav :string = !!active ? 'active' : ''
    return (
        <div className='nav__wrapper'>
            <button className=' btn__main'
                    id='btn__toggle-menu'
                    onClick={ () => setActive(!active)}
            >
                <img src={ menu_icon } alt='menu' className={ rotate } />
            </button>
            <ul className={ `${active_nav} navigation` }>
                
                <li className='navigation__item'
                    onClick={ () => setActive(false) }
                >
                    <Link   to='/portfolio'
                            className='navigation__link'
                            id='portfolio-link'
                    >
                        <img src={ portfolio_icon } alt='portfolio' />
                    </Link>
                    <p className='tag navigation__item--tag' id='portfolio-tag'>portfolio</p>
                </li>
                
                <li className='navigation__item'
                    onClick={ () => setActive(false) }
                >
                    <Link   to='/about'
                            className='navigation__link'
                            id='about-link'
                    >
                        <img src={ about_icon } alt='about' />
                    </Link>
                    <p className='tag navigation__item--tag' id='about-tag'>about</p>
                </li>
                
                <li className='navigation__item'>
                    <a  href='https://www.facebook.com/stephen.n.george'
                        className='navigation__link'
                        id='facebook-link'
                        target='_blank'
                    >
                        <img src={ facebook_logo } alt='facebook' />
                    </a>
                    <p className='tag navigation__item--tag'>@stephen.n.george</p>
                </li>
                
                <li className='navigation__item'>
                    <a  href='https://twitter.com/StephennGeorge'
                        className='navigation__link'
                        id='twitter-link'
                        target='_blank'
                    >
                        <img src={ twitter_logo } alt='twitter' />
                    </a>
                    <p className='tag navigation__item--tag'>@stephenngeorge</p>
                </li>
                
                <li className='navigation__item'>
                    <a  href='https://www.instagram.com/stephengeorge1989/'
                        className='navigation__link'
                        id='instagram-link'
                        target='_blank'
                    >
                        <img src={ instagram_logo } alt='instagram' />
                    </a>
                    <p className='tag navigation__item--tag'>@stephengeorge1989</p>
                </li>
                
                <li className='navigation__item'>
                    <a  href='https://www.linkedin.com/in/stephen-george-1a7a1445/'
                        className='navigation__link'
                        id='linkedin-link'
                        target='_blank'
                    >
                        <img src={ linkedin_logo } alt='linkedin' />
                    </a>
                    <p className='tag navigation__item--tag'>stephengeorge</p>
                </li>
            </ul>
        </div>
    )
}