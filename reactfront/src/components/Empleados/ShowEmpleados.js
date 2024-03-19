import '../../App.css';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/empleados'

const CompShowEmpleados = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState ('')
    

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
        dato.nombre.toLowerCase().includes(search.toLowerCase())
        )
       
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
                        <Link to="/empleados/create" className='btn btn-dark mt-2 mb-2 create'><i className="fa-solid fa-user-plus"></i></Link>
                    </div>
                   
                    <table className='table'>
                        <thead className='table-secondary'>
                            <tr>
                                <th>Id</th>
                                <th>Fecha de ingreso</th>
                                <th>Nombre</th>
                                <th>Salario</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map( (user) => (
                                <tr key={ user.id}>
                                    <td>
                                        {user.id}
                                    </td>
                                    <td>
                                        {user.fecha_ingreso}
                                    </td>
                                    <td>
                                        {user.nombre}
                                    </td>
                                    <td>
                                        {user.salario}
                                    </td>
                                    <td>
                                        <Link to={`/empleados/edit/${user.id}`} className='btn btn-dark'><i className="fa-solid fa-user-pen"></i></Link>
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

export default CompShowEmpleados