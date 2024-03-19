import db from "../database/dataBase.js"
import { DataTypes } from "sequelize"

const Empleado = db.define('empleados', {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    fecha_ingreso: {
        type: DataTypes.DATE
    },
    nombre: {
        type: DataTypes.STRING
    },
    salario: {
        type: DataTypes.NUMBER
    },
    
})


export default Empleado