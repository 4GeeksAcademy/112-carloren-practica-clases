export const initialStore = () => {
  return {
    message: null,
    people: [],                       //el estado global se declara en initialStore
  }
}

export default function storeReducer(store, action = {}) {
  // { type: "la acción", payload: "La información que queremos enviar" }   //así se llama luego en otros archivos
  switch (action.type) {
    case 'update_people':

      return {
        ...store,
        people: action.payload
      };
    default:
      throw Error('Unknown action.');
  }
}
