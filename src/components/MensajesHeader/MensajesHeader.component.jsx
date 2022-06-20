import './MensajesHeader.component.css';
import { Formik,Form } from 'formik';
export default function MensajesHeader(props) {

  let initialValues = { asunto: '', email: '', mensaje: '' };

const manejarEnvio  = (e)=>{
 props.clickNuevo(e);
};


  return (
    <div className="MensajesHeader">

<Formik initialValues={initialValues} onSubmit={manejarEnvio}>
    {({ values, handleChange, handleSubmit, isSubmitting,errors}) => (
    <Form onSubmit={handleSubmit} className="Formulario">
      
      <input className="Elemento" placeholder="Introduce el asunto..." type="text"
             name="asunto" onChange={handleChange} value={values.asunto} />
   <input className="Elemento" placeholder="Introduce tu mail" type="text"
             name="email" onChange={handleChange} value={values.email} />
      <input className="Elemento" placeholder="Introduce el mensaje" type="text"
             name="mensaje" onChange={handleChange} value={values.mensaje} />
  
     
  
      <button className="Nuevo" type="submit">Nuevo</button>
    </Form>
    )}
  </Formik>

      
      <button onClick={props.clickEliminar} className="Vaciar">Vaciar</button>  
    </div> 
  );
}

/*no creamos un estado en este componente, pues el estado lo gestionará el controlador, Mensaje.*/