import { useState } from "react";
import { Link } from "react-router-dom";


export const AddContactForm = () => {

    const [name, setName] = useState("")            //es recomendable tener estados que guarden constantemente los input para que React los pueda manipular
    const [email, setEmail] = useState("")


    // function createContact(event) {
    //     event.preventDefault()
    //     console.log("funciona");
    //     console.log(name, email);

    //     fetch('https://playground.4geeks.com/contact/agendas/carloren/contacts', {
    //         method: 'POST',
    //         body: JSON.stringify(
    //             {
    //                 "name": name,
    //                 "phone": "654321987",
    //                 "email": email,
    //                 "address": "Calle Falsa 123"
    //             }
    //         )
    //     })                                                                              //se puede mejorar esta funcion fetch con un try-catch en lugar de then-catch ↓
    //         .then((response) => {
    //             console.log(response);

    //             response.json()
    //         })
    //         .then((data) => console.log(data))
    //         .catch((error) => console.log(error))


    // }

    async function createContact(event) {
        event.preventDefault()
        try {
            let response = await fetch('https://playground.4geeks.com/contact/agendas/carloren/contacts', { //esperamos la respuesta y la guardamos en response
                method: 'POST',
                body: JSON.stringify(
                    {
                        "name": name,
                        "phone": "654321987",                                  //el fetch en sí mismo es exactamente igual
                        "email": email,
                        "address": "Calle Falsa 123"
                    }
                )
            })
            let data = await response.json()                                  //esperamos el formateo json y lo guardamos en data
            console.log(data);                                                //mostramos los datos


        } catch (error) {

        }
    }


    return (
        <div className="text-center mt-5 container d-flex flex-column">
            <h1>Añade un contacto</h1>
            <form className="border rounded w-50 p-4 mx-auto d-flex flex-column text-start" onSubmit={createContact}>
                <div className="mb-3 ">
                    <label htmlFor="fullName" className="form-label">Nombre Completo:</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Nombre y apellidos" onChange={(event) => setName(event.target.value)} /> {/* vamos guardando el estado */}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico:</label>
                    <input type="email" className="form-control" id="email" placeholder="correo@example.com" onChange={(event) => setEmail(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary align-self-center mx-auto">Enviar</button>
            </form>
            <Link to="/">Volver a inicio</Link>
        </div>
    );
}; 