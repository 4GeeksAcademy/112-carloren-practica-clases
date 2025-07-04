import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";			//1. importar la funcion useGlobalReducer
import { getContactList } from "../services/contactServices";

export const Home = () => {

	const [load, setLoad] = useState("...Cargando")
	const { store, dispatch } = useGlobalReducer()					//2. ejecutar la funcion useGlobalReducer

	console.log(store.contactList);									//3. Para traer los estados globales se escriben así "store.miEstadoGlobal"

	useEffect(() => {
		getContactList()
			.then((data) => dispatch({ type: 'get_contacts', payload: data }))
	}, [])

	return (
		<div className="container text-center mt-5 w-50">
			<button className="btn btn-primary" onClick={() => setLoad("Componente cargado correctamente")}>Cargar</button>
			<p>{load}</p>
			<p>Hola! Me llamo {store.estadoPepito.nombre} {store.estadoPepito.apellido} y primer contacto es {store.contactList[0]?.name}</p>
		</div>
	);
}; 