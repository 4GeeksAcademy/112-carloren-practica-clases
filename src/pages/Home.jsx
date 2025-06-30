import { Cards } from "../components/Cards.jsx";
import { Link } from "react-router-dom";


export const Home = () => {


	return (
		<div className="container text-end mt-5 w-50">
			<Link to="/add-contact"><button className="btn btn-primary">Añadir Contacto</button></Link>
			<Cards />
		</div>
	);
}; 