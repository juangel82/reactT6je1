import MensajesHeader from '../components/MensajesHeader/MensajesHeader.component';
import MensajesTable from '../components/MensajesTable/MensajesTable.component';
import './Mensajes.view.css';

import { useState } from 'react';


export default function Mensajes() {
  const [mensajes, setMensajes] = useState([]);
   /*
 * Método para crear un nuevo mensaje e
 * incluirlo en el estado, mensaje que será un 
 * objeto con las propiedades: asunto, email y mensaje
*/ 
  let nuevoMensaje = () => {
    let nuevo = {
      "asunto": "Prueba",
      "email": "email@email.com",
      "mensaje": `Este es un mensaje de pruebas... ${Math.random()}`,
      "leido": false
    };
    
    setMensajes(mensajes => [...mensajes, nuevo]);
  };
    
  let leerMensaje = (index) => {
    mensajes[index].leido = !mensajes[index].leido;
    setMensajes([...mensajes]);
  }
/* Eliminamos todos los mensajes del listado mensajes,
 * estableciendo su valor como una lista vacía.
 * */ 
    
  let eliminarMensajes = () => {
    setMensajes([]);
  };
  	
/* Pasándole el índice como argumento,
 * eliminamos el mensaje concreto de la lista y 
 * actualizamos su valor en el estado. */
  let eliminarMensaje = (index) => {
    mensajes.splice(index, 1);
    setMensajes([...mensajes]);
  };

  return (
    <div class="Mensajes">
      <MensajesHeader clickNuevo={nuevoMensaje} clickEliminar={eliminarMensajes}>
      </MensajesHeader>
      
      <MensajesTable mensajes={mensajes} clickEliminarUno={eliminarMensaje}
      clickMarcarLeido={leerMensaje}></MensajesTable>
      
    </div>
  );
}