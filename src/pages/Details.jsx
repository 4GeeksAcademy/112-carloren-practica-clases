import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useParams } from "react-router-dom";						//1. importamos la funcion useParams

export const Details = () => {

	const { store, dispatch } = useGlobalReducer()

	console.log(useParams())										//2. Obtenemos el parámetro dinámico de la url. En este caso details/2 devuelve {id: 2} (id se lo pusimos en routes)
	console.log(store.people);


	return (
		<div className="container text-center mt-5 w-50">
			<h1>Detalles {useParams().id}</h1>						{/*3. Podemos usar el parámetro dinámico */}
			<Link to="/">Volver a Inicio</Link>
		</div>
	);
}; 