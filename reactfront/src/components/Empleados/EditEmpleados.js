import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/empleados'

const CompEditEmpleado = () => {
    const [fecha_ingreso, setFecha_ingreso ] = useState('')
    const [nombre, setNombre ] = useState('')
    const [salario, setSalario ] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${URI}/${id}`, {
            fecha_ingreso: fecha_ingreso, 
            nombre: nombre, 
            salario:salario
        })
        navigate('/empleados')
    }

    useEffect( () => {
        getEmpleadoById()
    }, [])

    const getEmpleadoById = async () => {
        const res = await axios.get(`${URI}/${id}`)
        setFecha_ingreso(res.data.fecha_ingreso)
        setNombre(res.data.nombre)
        setSalario(res.data.salario)
    }

    return (
        <div>
        <h3>Editar Empleado</h3>
        <form onSubmit={update}>
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
            <button type='submit' className='btn btn-dark'>Actualizar</button>
        </form>
    </div>
    )
}

export default CompEditEmpleado
