import React from 'react';

const DetalleMascota = (props)=> {
    const {nombre_foto, nombre, descripcion, origen, esperanza_vida, temperamento, peso, altura, colores } = props.mascota;
    return(
        <div className="container-fluid card cards-detalle">
            <h1 id="logo-header" className="titulo2">Detalle de la Mascota</h1>
            <div className="row">
                <div className="col-5 card-title card-detalle-img">
                    <img src={`http://c1320996.ferozo.com/mascotas/fotos/${nombre_foto}`} alt={nombre} className="card-img-top" />  
                    <a href="/" className="btn btn-primary btn-volver">Volver</a>
                </div>
                <div className="col-5 card-body card-detalle">
                    <h5 className="card-title" style={{ textTransform: 'uppercase'}}>{nombre}</h5>
                    <strong><span className="card-title bold">Origen: {origen}</span></strong>
                    <p>{descripcion}</p>
                    <p><strong>Esperanza de vida: </strong>{esperanza_vida}</p>
                    <p><strong>Temperamento:</strong> {temperamento}</p>
                    <p><strong>Peso:</strong> {peso}</p>
                    <p><strong>Altura:</strong> {altura}</p>
                    <p><strong>Colores:</strong> {colores}</p>
                </div>
                
            </div>
           
        </div>
    )
}

export default DetalleMascota;