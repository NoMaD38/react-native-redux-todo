import { loadData } from "../../Home/reducer/actions"

//добавление дела
export const addTodo = (buttonValue: String, todo: {}) => (dispatch:any) => {
    fetch(`http://mobile-dev.oblakogroup.ru/candidate/IvanRyzhov/list/${parseInt(buttonValue)}/todo`,{
      method: 'POST',
      body:JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res=>res.json())
      .then(()=>dispatch(loadData()))
  }