import React from 'react';
import {Link} from "react-router-dom";

const Mascota = (props)=> {
    const { id, nombre_foto, nombre, descripcion, origen } = props.mascota;
    return(
        <div className="col-md-4">
            <div className="card">
                <img src={`http://c1320996.ferozo.com/mascotas/fotos/${nombre_foto}`} alt={nombre} className="card-img-top" />           
                <div className="card-body">
                    <h5 className="card-title" style={{ textTransform: 'uppercase'}}>{nombre}</h5>
                    <strong><span className="card-title bold">Origen: {origen}</span></strong>
                    <p className="card-text">{descripcion}</p>
                    <Link to={`/detalle/${id}`} className="btn btn-primary btn-detalle">Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Mascota;

