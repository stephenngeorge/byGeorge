import {
    affinity_logo,
    graphql_logo,
    indesign_logo,
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
        name: 'GraphQL',
        logo: graphql_logo
    },
    {
        name: 'MongoDB',
        logo: mongo_logo
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