import { useState } from "react";

export const Cards = () => {

    const [contactList, setContactList] = useState([
        { nombre: "Carlos Lorenzo", direccion: "Calle Falsa 123", tlf: "678 912 345", correo: "carloslorenzo@email.com" },
        { nombre: "Judith Ramírez", direccion: "Calle Verdadera 987", tlf: "987 654 321", correo: "judithramirez@email.com" },
        { nombre: "Luis Guilarte", direccion: "Calle 4Geeks 567", tlf: "463 385 404", correo: "luisprofe@email.com" }
    ])

    return (
        <div className="d-flex flex-column">
            {contactList.map((item, index) => (
                <div key={index} className="card my-2" >
                    < div className="row g-0" >
                        <div className="col-md-4">
                            <img style={{ maxHeight: "200px" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="img-fluid rounded-circle m-2 " alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-start">
                                <h5 className="card-title">{item.nombre}</h5>
                                <p className="card-text"><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;&nbsp;{item.direccion}</p>
                                <p className="card-text"><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;{item.tlf}</p>
                                <p className="card-text"><i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;{item.correo}</p>
                            </div>
                        </div>
                    </div >
                </div >
            ))}
        </div>
    );
};