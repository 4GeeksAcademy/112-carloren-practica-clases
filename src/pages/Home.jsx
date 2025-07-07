import useGlobalReducer from "../hooks/useGlobalReducer";			//1. importar la funcion useGlobalReducer
import { Cards } from "../components/Cards";
import { useEffect, useState } from "react";
import { getCharacters, getPlanets } from "../services/starWarsServices";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()					//2. ejecutar la funcion useGlobalReducer

	useEffect(() => {
		console.log(getCharacters())

		getCharacters().then((data) => dispatch({ type: "update_people", payload: data }))		//3. actualizar el estado global
		console.log(store.people);

		// getPlanets()
	}, [])

	return (
		<div className="container text-center mt-5 w-50">
			<h1>Personajes</h1>
			<div className="row row-cols-3 gx-3">
				{store.people.map((item) => <Cards key={item.uid} name={item.name} uid={item.uid} />)}
			</div>
		</div>
	);
}; 