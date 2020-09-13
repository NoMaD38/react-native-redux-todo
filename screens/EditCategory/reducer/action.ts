import { loadData } from "../../Home/reducer/actions"

export const updateCategory = (list_id: Number, category: string) => (dispatch: any) => {
    fetch(`http://mobile-dev.oblakogroup.ru/candidate/IvanRyzhov/list/${list_id}`,{
      method: 'PATCH',
      body: JSON.stringify({
        title: category
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(() => dispatch(loadData()))
  }
  