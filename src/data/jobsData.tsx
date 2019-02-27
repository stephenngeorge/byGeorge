interface Job {
    title: string,
    location: string,
    dateFrom: string,
    dateTo: string,
    summary: string[]
}

const jobs: Job[] =  [
    {
        title: 'Worship Leader',
        location: 'Holy Trinity Claygate',
        dateFrom: 'May 2017',
        dateTo: 'Present',
        summary: [
            'I oversee several teams of volunteers totalling about 35 people.',
            'I am the lead staff member for all of the church\'s graphic design and online content.'
        ]
    },
    {
        title: 'Web Developer & Designer',
        location: 'Freelance',
        dateFrom: 'Jul 2018',
        dateTo: 'Present',
        summary: [

        ]
    },
    {
        title: 'Worship Pastor',
        location: 'St Saviour\'s, Sunbury',
        dateFrom: 'Dec 2014',
        dateTo: 'May 2017',
        summary: [
            'I oversaw several teams of volunteers'
        ]
    },
    {
        title: 'Musician',
        location: 'Self-Employed',
        dateFrom: 'Mar 2012',
        dateTo: 'Dec 2014',
        summary: [
            
        ]
    }
]

export default jobs