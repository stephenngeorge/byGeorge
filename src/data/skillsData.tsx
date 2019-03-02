import {
    affinity_logo,
    css_logo,
    git_logo,
    github_logo,
    graphql_logo,
    html_logo,
    indesign_logo,
    js_logo,
    jquery_logo,
    less_logo,
    mongo_logo,
    node_logo,
    react_logo,
    sass_logo
} from '../assets'

interface Skill {
    name: string,
    logo: string
}

const skills: Skill[] = [
    {
        name: 'HTML 5',
        logo: html_logo
    },
    {
        name: 'CSS 3',
        logo: css_logo
    },
    {
        name: 'JavaScript',
        logo: js_logo
    },
    {
        name: 'React JS',
        logo: react_logo
    },
    {
        name: 'Node JS',
        logo: node_logo
    },
    {
        name: 'Sass',
        logo: sass_logo
    },
    {
        name: 'Less CSS',
        logo: less_logo
    },
    {
        name: 'Git',
        logo: git_logo
    },
    {
        name: 'GitHub',
        logo: github_logo
    },
    {
        name: 'GraphQL',
        logo: graphql_logo
    },
    {
        name: 'MongoDB',
        logo: mongo_logo
    },
    {
        name: 'jQuery',
        logo: jquery_logo
    },
    {
        name: 'Affinity Designer',
        logo: affinity_logo
    },
    {
        name: 'Adobe InDesign',
        logo: indesign_logo
    }
]

export default skills