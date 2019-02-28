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
            'I oversee multiple teams of volunteers, totalling about 35 people, who are responsible for the provision of sung worship at HTC, including the Audio-Visual teams & all related equipment & administration',
            'I am responsible for communicating the vision of the church with the team & developing the teams both technically & spiritually',
            'I am the lead staff member for creating & managing all of the church\'s graphic design & online content'
        ]
    },
    {
        title: 'Web Developer & Designer',
        location: 'Freelance',
        dateFrom: 'Jul 2018',
        dateTo: 'Present',
        summary: [
            'I have designed & built neilgeorgephotograph.co.uk & estherministry.org.uk single-handedly & from scratch, taking full responsibility for the entire process from conception to deployment, & learning a lot along the way'
        ]
    },
    {
        title: 'Worship Pastor',
        location: 'St Saviour\'s, Sunbury',
        dateFrom: 'Dec 2014',
        dateTo: 'May 2017',
        summary: [
            'I oversaw the volunteer worship & audio-visual teams at St Saviour\'s, with responsibility for their musical development, engagement with church & pastoral care',
            'I also took on responsibility for all graphic design work & the church\'s online presence'
        ]
    },
    {
        title: 'Musician',
        location: 'Self-Employed',
        dateFrom: 'Mar 2012',
        dateTo: 'Dec 2014',
        summary: [
            'Private & peripatetic music teacher (inc. contracted work for Swindon Borough Council)',
            'Professional performer, composer, & guitar technician'
        ]
    }
]

export default jobs