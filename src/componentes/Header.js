import React from 'react';

const Header = () =>{
    return(
        <header id="main-header">  
            <table>
                <tr>
                    <td><img className="img-perro" src="perro.png" alt="imagen"/> </td>
                    <td><h1 id="logo-header" className="titulo">Mascotas</h1>    </td>
                </tr>
            </table>                  
        </header>
    )    
}

export default Header;