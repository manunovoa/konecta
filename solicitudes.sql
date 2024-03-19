-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 19-03-2024 a las 04:57:30
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `solicitudes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `fecha_ingreso` date NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `salario` int(11) NOT NULL,
  `updatedAt` date DEFAULT NULL,
  `createdAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `fecha_ingreso`, `nombre`, `salario`, `updatedAt`, `createdAt`) VALUES
(1, '2023-05-01', 'Juan Manuel', 2600001, '2024-03-19', NULL),
(2, '2022-02-08', 'Luis', 1500000, '2024-03-18', NULL),
(3, '2021-04-15', 'Juliana', 3000000, '2024-03-18', '2024-03-18'),
(4, '2024-01-12', 'Fredy', 2400000, '2024-03-18', '2024-03-18'),
(5, '2024-03-06', 'Diego', 1400000, '2024-03-18', '2024-03-18'),
(6, '2024-03-06', 'Camila', 1700000, '2024-03-18', '2024-03-18'),
(7, '2024-03-12', 'Natalia', 3000000, '2024-03-19', '2024-03-18'),
(8, '2024-03-03', 'Santiago', 2000000, '2024-03-18', '2024-03-18'),
(9, '2021-01-18', 'Helda', 2500000, '2024-03-19', '2024-03-19'),
(10, '2024-03-01', 'Fran', 2500000, '2024-03-19', '2024-03-19'),
(11, '2023-11-16', 'Luisa', 1200000, '2024-03-19', '2024-03-19'),
(12, '2023-12-05', 'Marta', 2500000, '2024-03-19', '2024-03-19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE `solicitudes` (
  `id` int(11) NOT NULL,
  `código` varchar(50) NOT NULL,
  `descripción` varchar(50) NOT NULL,
  `resumen` varchar(50) NOT NULL,
  `id_empleado` int(11) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `solicitudes`
--

INSERT INTO `solicitudes` (`id`, `código`, `descripción`, `resumen`, `id_empleado`, `createdAt`, `updatedAt`) VALUES
(10, '234j', 'Renuncia', '', 3, '2024-03-19', '2024-03-19');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_empleado` (`id_empleado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD CONSTRAINT `solicitudes_ibfk_1` FOREIGN KEY (`id_empleado`) REFERENCES `empleados` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
