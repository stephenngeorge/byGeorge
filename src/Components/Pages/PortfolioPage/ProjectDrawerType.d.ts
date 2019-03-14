import { IProject } from './ProjectCardType'

interface IProps {
    project: IProject,
    setFocusProject({}: IProject): any
}

export {
    IProps
}