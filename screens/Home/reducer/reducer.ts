import * as actionType from './actionsTypes'
import { IAction, IStateToDo } from '../../../interfaces'

const initialState = {
    lists: [],
}

const reducerToDo = (state:IStateToDo = initialState, action: IAction) => {
    switch (action.type) {
        case actionType.SET_TODO:
            return {...state, lists: action.payload}
        default: 
            return state;
    }
}

export default reducerToDo