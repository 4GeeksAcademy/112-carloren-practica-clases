import { Cards } from "../components/Cards.jsx";
import { Link } from "react-router-dom";


export const Home = () => {


	return (
		<div className="container text-end mt-5 w-50">
			<Link to="/add-contact" className="btn btn-primary">Añadir Contacto</Link>  {/* Basta con poner una clase de botón en la etiqueta link, no hace falta añadir etiqueta botón */}
			<Cards />
		</div>
	);
}; 