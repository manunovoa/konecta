import '../../App.css';
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/solicitudes'

const CompShowSolicitudes = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState ('')
    const navigate = useNavigate()

    const showData = async () => {
        const response = await fetch(URI)
        const data = await response.json()
        setUsers(data)
    }

    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    
    let results = []
    if (!search){
        results = users
    }else {
        results = users.filter((dato) => 
        dato.id.toString().toLowerCase().includes(search.toString().toLowerCase())
        )
       
    }

    const deleteSolicitud = async (id) =>{
       await axios.delete(`${URI}/${id}`)
        setUsers()
        navigate('/solicitudes')
    }

    useEffect( () => {
        showData()
    }, [])
    
    return(
        <div className='container'>
            <div className='row'>
                <div className='col empleados'>
                    <div className='search'>
                       <input value={search} onChange={searcher} type='text' placeholder='Buscar' className='form-control'/>
                        <Link to="/solicitudes/create" className='btn btn-dark mt-2 mb-2 create'><i className="fa-solid fa-user-plus"></i></Link>
                    </div>
                   
                    <table className='table'>
                        <thead className='table-secondary'>
                            <tr>
                                <th>Id</th>
                                <th>Código</th>
                                <th>Descripción</th>
                                <th>Resumen</th>
                                <th>Empleado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results?.map( (user) => (
                                <tr key={ user.id}>
                                    <td>
                                        {user.id}
                                    </td>
                                    <td>
                                        {user.código}
                                    </td>
                                    <td>
                                        {user.descripción}
                                    </td>
                                    <td>
                                        {user.resumen}
                                    </td>
                                    <td>
                                        {user.empleado}
                                    </td>
                                    <td>
                                       <button className='btn btn-danger ' onClick={()=>deleteSolicitud (user.id)}><i className="fa-solid fa-user-minus"></i></button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )

}

export default CompShowSolicitudes