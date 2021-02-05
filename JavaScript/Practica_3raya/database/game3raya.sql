-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-01-2021 a las 00:23:25
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `game3raya`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidas`
--

CREATE TABLE `partidas` (
  `usuario` varchar(30) NOT NULL,
  `fecha` date NOT NULL,
  `vs` varchar(30) NOT NULL,
  `puntos` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `partidas`
--

INSERT INTO `partidas` (`usuario`, `fecha`, `vs`, `puntos`) VALUES
('sebas', '2020-12-28', 'luis', 5),
('sebas', '2020-12-28', 'luis', 0),
('luis', '2020-12-28', 'sebas', 15),
('sebas', '2020-12-28', 'pedro', -5),
('pedro', '2020-12-28', 'sebas', 10),
('sebas', '2020-12-28', 'pedro', -5),
('pedro', '2020-12-28', 'sebas', 10),
('sebas', '2020-12-28', 'luis', 5),
('luis', '2020-12-28', 'sebas', 5),
('sebas', '2020-12-28', 'luis', 10),
('luis', '2020-12-28', 'sebas', -5),
('sebas', '2020-12-28', 'luis', 10),
('luis', '2020-12-28', 'sebas', -5),
('sebas', '2020-12-28', 'luis', -5),
('luis', '2020-12-28', 'sebas', 10),
('sebas', '2020-12-28', 'luis', -5),
('luis', '2020-12-28', 'sebas', 10),
('sebas', '2020-12-28', 'luis', -5),
('luis', '2020-12-28', 'sebas', 10),
('sebas', '2020-12-28', 'luis', 10),
('luis', '2020-12-28', 'sebas', -5),
('sebas', '2020-12-28', 'luis', 25),
('luis', '2020-12-28', 'sebas', -5),
('sebas', '2021-01-01', 'pedro', 10),
('pedro', '2021-01-01', 'sebas', -5),
('sebas', '2021-01-01', 'pedro', -5),
('pedro', '2021-01-01', 'sebas', 10),
('sebas', '2021-01-02', 'pedro', 10),
('pedro', '2021-01-02', 'sebas', -5),
('sebas', '2021-01-02', 'pedro', 15),
('pedro', '2021-01-02', 'sebas', 0),
('sebas', '2021-01-02', 'pedro', 10),
('pedro', '2021-01-02', 'sebas', -5),
('sebas', '2021-01-02', 'pedro', 10),
('pedro', '2021-01-02', 'sebas', -5),
('sebas', '2021-01-02', 'pedro', 5),
('pedro', '2021-01-02', 'sebas', 5),
('angelagomac', '2021-01-02', 'sebas', 30),
('sebas', '2021-01-02', 'angelagomac', -15),
('sebas', '2021-01-02', 'pedro', 0),
('pedro', '2021-01-02', 'sebas', 0),
('sebas', '2021-01-03', 'luis', 0),
('luis', '2021-01-03', 'sebas', 0),
('sebas', '2021-01-03', 'pedro', 0),
('pedro', '2021-01-03', 'sebas', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `nombre` varchar(30) NOT NULL,
  `contraseña` varchar(50) NOT NULL,
  `partidas` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`nombre`, `contraseña`, `partidas`) VALUES
('angelagomac', 'angela', 0),
('antonio', 'an', 0),
('juan', 'ju', 0),
('luis', 'lu', 0),
('paqui macarro', 'la paca', 0),
('pedro', 'pe', 0),
('sebas', 'se', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`nombre`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
