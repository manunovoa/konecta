import express from "express";
import { crearSolicitud, 
    mostrarSolicitudes, 
    mostrarSolicitud, 
    borrarSolicitud, 
} from "../controllers/SolicitudControllers.js"


const solicitudRouter = express.Router();

solicitudRouter.post('/', crearSolicitud);
solicitudRouter.get('/', mostrarSolicitudes);
solicitudRouter.get('/:id', mostrarSolicitud);
solicitudRouter.delete('/:id', borrarSolicitud);

export default solicitudRouter;