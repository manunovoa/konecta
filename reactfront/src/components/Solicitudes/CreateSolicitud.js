import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/solicitudes'

const CompCreateSolicitudes = () => {
    const [código, setCódigo ] = useState('')
    const [descripción, setDescripcion ] = useState('')
    const [resumen, setResumen ] = useState('')
    const [id_empleado, setId_empleado ] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {código: código, descripción: descripción, resumen:resumen, id_empleado: id_empleado})
        navigate('/solicitudes')
    }

    return (
        <div>
            <h3 >Nueva Solicitud</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Código</label>
                    <input
                        value={código}
                        onChange={(e)=>{setCódigo(e.target.value)}}
                        type='text'
                        className='form-control'
                    />
                 </div>
                 <div className='mb-3'>
                    <label className='form-label'>Descripción</label>
                    <input
                        value={descripción}
                        onChange={(e)=>{setDescripcion(e.target.value)}}
                        type='string'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Resumen</label>
                    <input
                        value={resumen}
                        onChange={(e)=>{setResumen(e.target.value)}}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Id Empleado</label>
                    <input
                        value={id_empleado}
                        onChange={(e)=>{setId_empleado(e.target.value)}}
                        type='number'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-dark'>Agregar</button>
            </form>
        </div>
    )

}

export default CompCreateSolicitudes