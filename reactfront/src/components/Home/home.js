import '../../App.css';
import {Link} from 'react-router-dom'

export const Home = () => {

    return (
      <section className='buttons'>
         <a href="/empleados" onclick="alert('Haz clic en el enlace')" className='button'> Empleados
        </a> 
        <a href="/solicitudes" onclick="alert('Haz clic en el enlace')" className='button'> Solicitudes
        </a> 
      </section>
    );
}