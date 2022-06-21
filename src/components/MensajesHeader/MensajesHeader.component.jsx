import './MensajesHeader.component.css';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
export default function MensajesHeader(props) {




  const validaciones = Yup.object().shape({
    asunto: Yup.string()
      
      .required('Por favor, escribe el asunto.'),
        
    email: Yup.string()
    .email('formato invalido')
      .required('Por favor, escribe el email.'),
  
    mensaje: Yup.string()
      .required("Por favor, escribe el mensaje")
      .min(10,'Mínimo 10 caracteres'),
      
  });

  const errors ={
    asunto: 'asunto obligatorio.',
    email: 'formato incorrecto|email obligatorio',
    mensaje: 'mensaje obligatorio' | '10 caracteres mínimo'
  }

  let initialValues = { asunto: '', email: '', mensaje: '' };

const manejarEnvio  = (e)=>{
 props.clickNuevo(e);
};


  return (
    <div className="MensajesHeader">

<Formik initialValues={initialValues} onSubmit={manejarEnvio} validationSchema={validaciones}>
    {({ values, handleChange, handleSubmit, isSubmitting,errors}) => (
    <Form onSubmit={handleSubmit} className="Formulario">
      
      <input className="Elemento" placeholder="Introduce el asunto..." type="text"
             name="asunto" onChange={handleChange} value={values.asunto} />
             {errors.asunto ? (<div>{errors.asunto}</div>) : null}
   <input className="Elemento" placeholder="Introduce tu mail" type="text"
             name="email" onChange={handleChange} value={values.email} />
             {errors.email ? (<div>{errors.email}</div>) : null}
      <input className="Elemento" placeholder="Introduce el mensaje" type="text"
             name="mensaje" onChange={handleChange} value={values.mensaje} />
             {errors.mensaje ? (<div>{errors.mensaje}</div>) : null}
  
     
  
      <button className="Nuevo" type="submit">Nuevo</button>
    </Form>
    )}
  </Formik>

      
      <button onClick={props.clickEliminar} className="Vaciar">Vaciar</button>  
    </div> 
  );
}

/*no creamos un estado en este componente, pues el estado lo gestionará el controlador, Mensaje.*/