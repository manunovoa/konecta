import express from "express";
import cors from 'cors'
import dataBase from "./database/dataBase.js";

import empleadoRouter from "./routes/EmpleadoRouter.js";
import solicitudRouter from "./routes/SolicitudesRouter.js";

const app = express();
app.use(cors())
app.use(express.json())
app.use('/empleados', empleadoRouter)
app.use('/solicitudes', solicitudRouter)

try {
    await dataBase.authenticate()
    console.log('conexion exitosa')
} catch (error) {
    console.log('error en la conexion', error)
}

app.listen(8000, ()=>{
    console.log('server up running in http://localhost:8000/')
})