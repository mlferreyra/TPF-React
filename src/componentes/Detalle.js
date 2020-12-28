import React, {Component} from 'react';
import DetalleMascota from './DetalleMascota';


class Detalle extends Component{
    state = {
        mascotas : {},
        terminaDeCargar: false
        
    }
    
 
    componentDidMount(){
        this.getMascotas();
    }
    
    getMascotas = () =>{
        const { id } = this.props.match.params
        let url =`http://c1320996.ferozo.com/mascotas/api.php?action=getRaceById&id=${id}`;
    
        fetch(url)
            .then(respuesta =>{  
            return respuesta.json();
            })
        .then(mascotas => {
            this.setState({
            mascotas: mascotas,
            terminaDeCargar: true
            })
        })   
    }
    render(){
        return(
            <div className="card">
                {this.state.terminaDeCargar ? (
                    <DetalleMascota mascota={this.state.mascotas}/>  
                ) : (
                <div className="cargando"><p>Cargando...</p></div>
                )}
            </div> 
        )      
    }
}

export default Detalle;
