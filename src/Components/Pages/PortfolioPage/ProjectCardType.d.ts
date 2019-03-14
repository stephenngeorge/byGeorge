interface IProject {
    title?: string,
    description?: string,
    path?: string,
    repo?: string,
    img?: string,
    techStack?: string[],
    live?: boolean
}
interface IProps {
    project: IProject,
    focusProject: IProject,
    setFocusProject(project: IProject): any
}

export {
    IProject,
    IProps
}