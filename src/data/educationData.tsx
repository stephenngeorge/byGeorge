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
        headline: 'BA Hons Degree',
        dateFrom: 'Sep 2008',
        dateTo: 'Aug 2011',
        summary: [
            {
                subject: 'Music',
                grade: '2:1'
            }
        ]
    }
]

export default education