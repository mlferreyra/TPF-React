import React, {Component} from 'react';
import Mascota from './Mascota';

class Mascotas extends Component{

    state={
        mascotas : [],
        busqueda: '',
        mascotaSearch: [],
        terminaDeCargar: false
      }
    
    onChange=async e=>{
        e.persist();
        await this.setState({busqueda: e.target.value});
        this.searchMascota()
      }
    componentDidMount(){
        this.consultarMascotas();

    }
    
    searchMascota = ()=>{
        let url = `http://c1320996.ferozo.com/mascotas/api.php?action=getSearchRaceByName&name=${this.state.busqueda}`;
        this.setState.mascotas = [];

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
    consultarMascotas = () =>{
        let url ='http://c1320996.ferozo.com/mascotas/api.php?action=getRaceAll';

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
        <div>
          <div className="subtitulo">
              <h3>Bienvenidos a la App Mascotas</h3>
              <div className="subtitulo-tamanio" >Nuestra App te permite Listar y hacer una búsqueda por "Raza" de perros.<br/>
              También te permite ver un detalle de tu raza favorita.</div>
          </div>
          <div className="main-content">                                
            <div className="buscador">
              <input type="text" placeholder="Busca tu mascota por raza" className="textField" id="Buscador" name="busqueda" value={this.state.busqueda} onChange={this.onChange}/>
            </div>    
            <div className="row">


              {this.state.terminaDeCargar ? (
                  this.state.mascotas.map(mascota => (
                    <Mascota key={mascota.id} mascota = {mascota}/>
                  ))  
              ) : (
                <div className="cargando"><p>Cargando...</p></div>
              )}

              {this.state.mascotas.length===0  && this.state.terminaDeCargar &&
                  <div className="cargando"><p>No encontramos tu mascota...</p></div> 
              }

            </div> 
          </div>    
        </div>  
      )        
    } 
}

export default Mascotas;