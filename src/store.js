export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contactList: [],                       //el estado global se declara en initialStore
    estadoPepito: { nombre: "Carlos", apellido: "Lorenzo" }
  }
}

export default function storeReducer(store, action = {}) {
  // { type: "la acción", payload: "La información que queremos enviar" }   //así se llama luego en otros archivos
  switch (action.type) {
    // case 'add_task':

    //   const { id, color } = action.payload

    //   return {
    //     ...store,
    //     todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
    //   };
    case 'get_contacts':

      return {
        ...store,
        contactList: action.payload
      };
    default:
      throw Error('Unknown action.');
  }
}
