export interface IAction {
    type: string,
    payload?: any
}

export interface IThunk {
    dispatch: any
}

export interface IStateToDo {
    lists: IList[]
}

export interface IList {
    readonly id         : number
    title: string,
    todos: IToDo[]
}

export interface IToDo {
    readonly id         : number
    text:string
    checked: boolean
}