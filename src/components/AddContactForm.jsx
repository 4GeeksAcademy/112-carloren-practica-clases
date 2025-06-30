import { Link } from "react-router-dom";


export const AddContactForm = () => {


    return (
        <div className="text-center mt-5 container d-flex flex-column">
            <h1>Añade un contacto</h1>
            <form className="border rounded w-50 p-4 mx-auto d-flex flex-column text-start">
                <div className="mb-3 ">
                    <label htmlFor="fullName" className="form-label">Nombre Completo:</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Nombre y apellidos" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirección postal:</label>
                    <input type="text" className="form-control" id="address" placeholder="Calle, número, piso, puerta y CP" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono:</label>
                    <input type="text" className="form-control" id="phone" placeholder="Fijo o Móvil" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico:</label>
                    <input type="email" className="form-control" id="email" placeholder="correo@example.com" />
                </div>
                <button type="submit" className="btn btn-primary align-self-center mx-auto">Enviar</button>
            </form>
            <Link to="/">Volver a inicio</Link>
        </div>
    );
}; 