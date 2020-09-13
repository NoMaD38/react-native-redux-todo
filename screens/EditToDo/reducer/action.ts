import { loadData } from "../../Home/reducer/actions"

//обновление дела
export const updateToDo = (list_id: Number, todo_id: Number, todo: {}) => (dispatch: any) => {

    fetch(`http://mobile-dev.oblakogroup.ru/candidate/IvanRyzhov/list/${list_id}/todo/${todo_id}`,{
      method: 'PATCH',
      body: JSON.stringify({
        ...todo
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(() => dispatch(loadData()))
  }
  