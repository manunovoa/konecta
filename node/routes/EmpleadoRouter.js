import express from "express";
import { crearEmpleado, 
    mostrarEmpleados, 
    mostrarEmpleado, 
    editarEmpleado, 
} from "../controllers/EmpleadoControllers.js"


const empleadoRouter = express.Router();

empleadoRouter.post('/', crearEmpleado);
empleadoRouter.get('/', mostrarEmpleados);
empleadoRouter.get('/:id', mostrarEmpleado);
empleadoRouter.put('/:id', editarEmpleado);

export default empleadoRouter;