import { IAction, IList } from '../../../interfaces'
import * as actionType from './actionsTypes'

export const setLists = (lists:IList[]):IAction => ({
    type: actionType.SET_TODO,
    payload: lists
})

//загрузка списка дел
export const loadData = () => (dispatch:any) => {
    fetch('http://mobile-dev.oblakogroup.ru/candidate/IvanRyzhov/list')
    .then(response => response.json())
    .then(json => {
      dispatch(setLists(json))
  })
}

//добавление категории
export const addList = (category: IList) => (dispatch:any) => {
  fetch('http://mobile-dev.oblakogroup.ru/candidate/IvanRyzhov/list',{
    method: 'POST',
    body:JSON.stringify(category),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res=>res.json())
    .then(()=>dispatch(loadData()))
}

//удаление категории
export const deleteList = (id: Number) => (dispatch:any) =>{
  fetch(`http://mobile-dev.oblakogroup.ru/candidate/IvanRyzhov/list/${id}`,{
    method: 'DELETE',
    headers: {
     'Content-Type': 'application/json'
    }
  })
    .then(() => dispatch(loadData()))
}

//удаление дела
export const deleteToDo = (id: Number) => (dispatch: any) => {
  console.log(id);
  
  fetch(`http://mobile-dev.oblakogroup.ru/candidate/IvanRyzhov/todo/${id}`,{
    method:' DELETE'
  })
    .then((res)=> res.text())
    .then(text=>{
      console.log(text)
    dispatch(loadData())
    }
    )
}

//завершение дела
export const checkedToDo = (todo_id: Number, list_id: Number, status: boolean) => (dispatch: any) => {
  fetch(`http://mobile-dev.oblakogroup.ru/candidate/IvanRyzhov/list/${list_id}/todo/${todo_id}`,{
    method: 'PATCH',
    body: JSON.stringify({
      checked: !status
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(res => res.json())
    .then(()=> dispatch(loadData()))
}