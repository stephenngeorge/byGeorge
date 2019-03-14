interface IJob {
    title: string,
    location: string,
    summary: string[],
    dateFrom: string,
    dateTo: string
}

interface IPropsJob {
    job: IJob
}

interface IPropsWorkHistory {
    jobs: IJob[],
    icon: string,
    closeDrawer(): any
}

export {
    IJob,
    IPropsJob,
    IPropsWorkHistory
}