interface ISkill {
    name: string,
    logo: string
}

interface IPropsSkill {
    skill: ISkill
}

interface IPropsSkills {
    skills: ISkill[],
    icon: string,
    closeDrawer(): any
}

export {
    IPropsSkill,
    IPropsSkills,
    ISkill
}