interface IInterest {
    title: string,
    info?: string
}

interface IPropsInterest {
    interest: IInterest
}

interface IPropsInterests {
    interests: Interest[],
    icon: string,
    closeDrawer(): any 
}

export {
    IInterest,
    IPropsInterest,
    IPropsInterests
}