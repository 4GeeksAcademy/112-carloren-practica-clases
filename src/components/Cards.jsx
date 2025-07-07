import { Link } from "react-router-dom";

export const Cards = ({ name, uid }) => {

    return (
        <div className="card col">
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <Link to={"/details/" + uid} className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    );
};