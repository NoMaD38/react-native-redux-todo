export interface IAction {
    type: string,
    payload?: any
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
    list_id: number
}

export type StackParamList = {
    Home: undefined,
    AddToDo: undefined,
    EditToDo: {
        item: IToDo
    },
    EditCategory: {
        item: IList
    }
}