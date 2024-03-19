import Solicitud from "../models/SolicitudModel.js";
import { Sequelize } from "sequelize";



const crearSolicitud = async (req, res) => {
    try {
        await Solicitud.create(req.body);
        res.json({
            message: "Solicitud creada correctamente",
        })

    } catch (error) {
        res.json({
            message: "La Solicitud no se pudo crear " + error,
        });
    }

}

const mostrarSolicitudes = async (req, res) => {
    try {
        const solicitud = await Solicitud.findAll();
        res.json(solicitud)

    } catch (error) {
        res.json({
            message: "Los empleados no se pudieron mostrar " + error
        });

    }

}

const mostrarSolicitud = async (req, res) => {
    try {
        const { Op }= Sequelize
        const solicitud = await Solicitud.findOne({
            where: {
                [Op.or]: [
                {id: req.params.id}
                ]
            }
        });
        res.json(solicitud)

    } catch (error) {
        res.json({
            message: "La solicitud no se puede mostrar " + error
        });
    }
}

const borrarSolicitud = async (req, res) => {
    try {

        await Solicitud.destroy({
            where: { id: req.params.id }
        });
        res.json({
            message: "La solicitud se ha borrado correctamente "
        });

    } catch (error) {
        res.json({
            message: "La solicitud no se puede borrar " + error
        });

    }

}


export { crearSolicitud, mostrarSolicitud, mostrarSolicitudes, borrarSolicitud }