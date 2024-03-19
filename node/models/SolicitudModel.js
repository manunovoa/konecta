import db from "../database/dataBase.js"
import { DataTypes } from "sequelize"

const Solicitud = db.define('solicitudes', {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    código: {
        type: DataTypes.STRING
    },
    descripción: {
        type: DataTypes.STRING
    },
    resumen: {
        type: DataTypes.STRING
    },
    id_empleado: {
        type: DataTypes.NUMBER,
    },
    
})


export default Solicitud