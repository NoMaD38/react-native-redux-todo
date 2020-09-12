import {createStore, applyMiddleware} from 'redux'
import reducerToDo from '../screens/Home/reducer/reducer'
import thunk from 'redux-thunk'

const store = createStore(reducerToDo, applyMiddleware(thunk))

export default store