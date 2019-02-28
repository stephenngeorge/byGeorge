interface Institutions {
    location: string,
    headline: string,
    dateFrom: string,
    dateTo: string,
    summary: Qualification[]
}

interface Qualification {
    subject: string,
    grade: string
} 

const education: Institutions[] = [
    {
        location: 'University of Southampton',
        headline: 'BA (Hons)',
        dateFrom: '2008',
        dateTo: '2011',
        summary: [
            {
                subject: 'Music',
                grade: '2:1'
            }
        ]
    },
    {
        location: 'Trinity College London',
        headline: 'Associate of Trinity College London',
        dateFrom: '2009',
        dateTo: '2009',
        summary: [
            {
                subject: 'Recital Diploma, Classical Guitar',
                grade: 'pass'
            }
        ]
    },
    {
        location: 'Cirencester College',
        headline: '3 A Levels',
        dateFrom: '2005',
        dateTo: '2008',
        summary: [
            {
                subject: 'Philosophy',
                grade: 'A'
            },
            {
                subject: 'Music',
                grade: 'B'
            },
            {
                subject: 'Italian',
                grade: 'B'
            }
        ]
    },
    {
        location: 'Highworth Warneford School',
        headline: '13 GCSEs',
        dateFrom: '2000',
        dateTo: '2005',
        summary: [
            {
                subject: 'Grades',
                grade: 'A* - C'
            }
        ]
    }
]

export default education