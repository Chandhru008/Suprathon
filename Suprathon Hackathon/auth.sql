-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Jul 20, 2025 at 08:58 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `discussionforum`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

CREATE TABLE `auth` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`id`, `name`, `username`, `password`) VALUES
(1, 'chandhru', 'cexynos1234@gmail.com', '$2b$10$XAUlESb2v1P5gT607XNRMOOokA1hSjC/un7cmiTq.5QxnyLytqXa.'),
(2, 'chandhrunadar', 'admin@gmail.com', '$2b$10$k358B5DgdHX85WXOpdJNTuBJ7nWUGIkl6TQro/IFu5W0zQCh.X5O2'),
(3, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$NtgPmEyOmCtG405Z/GbVReYfjJo1joax1anWYW1mSP5WbhmbZBdYm'),
(4, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$cY929Zl5fMTjmr9CFt07kuBdZE4sNPWR0VaQo6/IAdHu6V8vvld/i'),
(5, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$eGWmCiTio.uJFAFVPOPpme2n.vJKGJk/dxs2JQXBQH/2jkemDlq4a'),
(6, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$ASsVED7fCXjv.uhqfRZj1OnlhllhAlDVrXxSGJCY2dM.Mj9YK8JZ.'),
(7, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$IrbgOfuC2Xt2nBDI1Q7ZJOoTCdCNI73kvhszZHbFo6Oh0jRyYmzwa'),
(8, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$cLpJebeoBi4e0DOdI4.b9uvxUD3uC889jfiG8HuA2ZEoU6jKwK1RO'),
(9, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$3UgDd0u0/gunrNdoXWsNUeNty/02S6uT3dG4swcFWnrDXZLvbUBl2'),
(10, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$H32rRui2T8VI9PUNNmxiXu53kxSMQohZIQW5.Ra7RaMwOk0zr6oq2'),
(11, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$UU01XuVnSHNi2u32BhX/Z.hSXZrz3jFQ9ZUNz0O0Pynpl.Z7fNirG'),
(12, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$LUEsalpNbsXOSHO0aN0BR.hQ9l9SPMmQGhh8em388JmBKpYhxei5y'),
(13, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$0iwIK9V1KsMJ7F2LAB/9cuU24GxlVsEDKQDY6WcThcpsPWSmL6GE6'),
(14, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$N19zEOU7m2bzfJt9.h74wOEqUrcyGbCkBCzjCHiHJb5uq1l0NcrVa'),
(15, 'chandhru', 'chandhrukusalavan1234@gmail.com', 'chandhru'),
(16, 'chandhru', 'chandhrukusalavan1234@gmail.com', 'chandhru'),
(17, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$vECGt8m2DzkJecyIS9B/iukL3moJ1okTHmSclFhUblX6sPs2aaT4O'),
(18, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$k7bfz0FYSTWKC6V/R0lpPulP0rLpsgNrnpq6uD/R3oyKAJb6RcUMy'),
(19, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$IYvtHMxkU7IPyIp.wkA0W.hyiK7cak8XNwB36Rr8TraSdXJ1feJ86'),
(20, 'chandhru', 'chandhrukusalavan1234@gmail.com', '$2b$10$nTT7E89YE8wxZgafGiZGXuwOtk6LFIVaa5.RdMoryhShGE73O3sPC');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth`
--
ALTER TABLE `auth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
