import Empleado from "../models/EmpleadoModel.js";
import { Sequelize } from "sequelize";



const crearEmpleado = async (req, res) => {
    try {
        await Empleado.create(req.body);
        res.json({
            message: "Empleado creado correctamente",
        })

    } catch (error) {
        res.json({
            message: "El empleado no se pudo crear " + error,
        });
    }

}

const mostrarEmpleados = async (req, res) => {
    try {
        const empleado = await Empleado.findAll();
        res.json(empleado)

    } catch (error) {
        res.json({
            message: "Los empleados no se pudieron mostrar " + error
        });

    }

}

const mostrarEmpleado = async (req, res) => {
    try {
        const { Op }= Sequelize
        const empleado = await Empleado.findOne({
            where: {
                [Op.or]: [
                {id: req.params.id},
                {nombre: req.params.id},
                ]
            }
        });
        res.json(empleado)

    } catch (error) {
        res.json({
            message: "El cliente no se puede mostrar " + error
        });
    }
}

const editarEmpleado = async (req, res) => {

    try {
        const { Op }= Sequelize
        await Empleado.update(req.body, {
            where: {
                [Op.or]: [
                {id: req.params.id},
                {nombre: req.params.id},
                ]
            }
        });
        res.json({
            message: "El empleado se ha actualizado correctamente "
        });

    } catch (error) {
        res.json({
            message: "El empleado no se puede editar " + error
        });
    }
}


export { crearEmpleado, mostrarEmpleado, mostrarEmpleados, editarEmpleado }