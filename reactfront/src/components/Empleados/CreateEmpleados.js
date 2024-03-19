import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/empleados'

const CompCreateEmpleado = () => {
    const [fecha_ingreso, setFecha_ingreso ] = useState('')
    const [nombre, setNombre ] = useState('')
    const [salario, setSalario ] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {fecha_ingreso: fecha_ingreso, nombre: nombre, salario:salario})
        navigate('/empleados')
    }

    return (
        <div>
            <h3 >Nuevo Empleado</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Fecha de ingreso</label>
                    <input
                        value={fecha_ingreso}
                        onChange={(e)=>{setFecha_ingreso(e.target.value)}}
                        type='date'
                        className='form-control'
                    />
                 </div>
                 <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e)=>{setNombre(e.target.value)}}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Salario</label>
                    <input
                        value={salario}
                        onChange={(e)=>{setSalario(e.target.value)}}
                        type='number'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-dark'>Agregar</button>
            </form>
        </div>
    )

}

export default CompCreateEmpleado