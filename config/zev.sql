-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 05, 2019 at 02:38 PM
-- Server version: 5.7.28-0ubuntu0.18.04.4
-- PHP Version: 7.0.33-10+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zev`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `space_id` int(11) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `reports` text NOT NULL,
  `status` enum('Sent','Opened','Completed') NOT NULL DEFAULT 'Sent',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `firstname`, `lastname`, `space_id`, `email`, `phone`, `message`, `reports`, `status`, `created_at`, `updated_at`) VALUES
(1, 'First', 'Last', 12, 'hello@demo.com', '7894561230', 'Hello, I would like to but this property.', '', 'Sent', '2019-11-26 14:22:57', '2019-11-26 14:22:57'),
(2, 'sadf', 'sadf', 3, 'new@mailc.ocm', '4561231025', 'sdf', '', 'Sent', '2019-11-26 18:51:38', '2019-11-26 18:51:38'),
(3, 'new', 'sdgfdsf', 1, 'sameer@mailinator.com', '1215465453', 'sdfsd', '', 'Sent', '2019-11-26 19:12:23', '2019-11-26 19:12:23'),
(4, 'sfd', 'kjhk', 1, 'hi@my.com', '4785465122', 'dsfsdg', '', 'Sent', '2019-11-27 17:28:39', '2019-11-27 17:28:39'),
(5, 'dsdfg', 'lkhlhf', 3, 'he@fdsg.com', '4534354355', 'dsgsg', '', 'Opened', '2019-11-27 17:31:09', '2019-11-27 17:31:09'),
(6, 'fdgs', 'dsg', 1, 'sdgs@gsd.cpo', '1233213313', 'sdg', '', 'Sent', '2019-11-27 17:33:15', '2019-11-27 17:33:15'),
(7, 'fdgs', 'dsg', 1, 'sdgs@gsd.cpo', '1233213313', 'sdg', '', 'Sent', '2019-11-27 17:33:18', '2019-11-27 17:33:18'),
(8, 'fdgs', 'dsg', 1, 'sdgs@gsd.cpo', '1233213313', 'sdg', '', 'Sent', '2019-11-27 17:34:08', '2019-11-27 17:34:08'),
(9, 'sfgg', '', 12, 'new@mailc.ocm', '4561231025', '', '', 'Sent', '2019-11-27 17:34:31', '2019-11-27 17:34:31'),
(10, 'New', 'applicant', 1, 'my@email.com', '7894561230', 'test message for space', '', 'Sent', '2019-11-28 18:25:24', '2019-11-28 18:25:24'),
(11, 'hgello', 'hi', 3, 'my@email.com', '4561278004', 'yegkjsdbsjkd fjks', '', 'Sent', '2019-11-28 18:29:25', '2019-11-28 18:29:25');

-- --------------------------------------------------------

--
-- Table structure for table `spaces`
--

CREATE TABLE `spaces` (
  `id` int(11) NOT NULL,
  `space_name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `lat_long` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image_url` text NOT NULL,
  `gallery` text NOT NULL,
  `space_status` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `space_type` varchar(255) NOT NULL,
  `floor_space` decimal(8,2) DEFAULT NULL,
  `no_of_balconies` int(11) NOT NULL,
  `balconies_space` decimal(8,2) DEFAULT NULL,
  `no_of_bedrooms` int(11) NOT NULL,
  `no_of_bathrooms` int(11) NOT NULL,
  `no_of_garages` int(11) NOT NULL,
  `no_of_parkings` int(11) NOT NULL,
  `pets_allowed` tinyint(1) NOT NULL,
  `pool` tinyint(1) NOT NULL,
  `views` int(11) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `spaces`
--

INSERT INTO `spaces` (`id`, `space_name`, `description`, `city`, `lat_long`, `price`, `image_url`, `gallery`, `space_status`, `user_id`, `space_type`, `floor_space`, `no_of_balconies`, `balconies_space`, `no_of_bedrooms`, `no_of_bathrooms`, `no_of_garages`, `no_of_parkings`, `pets_allowed`, `pool`, `views`, `created_at`, `updated_at`) VALUES
(1, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '11350.00', '', '', 'Available', 1, 'Plot', '1200.15', 2, '200.00', 2, 3, 0, 0, 0, 0, 10, NULL, '2019-11-20 13:33:57'),
(2, 'New space', 'test desiptign', 'new city', '', '12050.00', '', '', 'sfafa', 47, 'jbjkk', '0.00', 1, '12.21', 14, 1, 1, 1, 0, 0, 1, '2019-11-21 18:54:09', '2019-11-21 18:54:09'),
(3, 'Space Two', 'test description', 'San Fr', '', '123150.00', '', '', 'Available', 43, 'Plot', '0.00', 2, '12.21', 1, 2, 1, 1, 0, 0, 81, '2019-11-21 19:27:54', '2019-11-21 19:27:54'),
(4, 'space Three', 'tdyajd hdesc', 'dfs', '', '12500.00', '', '', 'NA', 47, 'Flat', '0.00', 1, '5.00', 1, 1, 1, 0, 0, 0, 36, '2019-11-21 19:35:24', '2019-11-21 19:35:24'),
(5, 'fsdfs', 'gsfdgs', 'fgdsgs', '', '180550.00', '', '', 'Available', 43, 'fsfs', '0.00', 2, '154.10', 2, 3, 1, 1, 0, 0, 0, '2019-11-23 17:03:36', '2019-11-23 17:03:36'),
(6, 'gsfdgsd', 'shshytsd', 'gsfdgsd', '', '1254510.00', '', '', 'gfsdh`', 43, 'Home', '0.00', 2, '50.00', 1, 1, 1, 1, 0, 0, 9, '2019-11-23 17:05:04', '2019-11-23 17:05:04'),
(7, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '12150.00', '', '', 'Available', 43, 'Plot', '1200.15', 2, '200.00', 2, 4, 2, 2, 0, 0, 0, '2019-11-28 17:42:11', '2019-11-28 17:42:11'),
(8, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '121580.00', '', '', 'Available', 43, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 0, '2019-11-28 17:56:05', '2019-11-28 17:56:05'),
(9, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 43, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 0, '2019-11-28 17:57:30', '2019-11-28 17:57:30'),
(10, 'Hello space', 'hi test description', 'NY', '{lat: 14.445, long: 12.254}', '153152.00', '', '', 'Active', 43, 'Flat', '1200.15', 3, '120.00', 4, 5, 2, 2, 0, 0, 0, '2019-11-28 17:59:55', '2019-11-28 17:59:55'),
(11, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 43, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 0, '2019-11-28 18:05:21', '2019-11-28 18:05:21'),
(12, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 43, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 3, '2019-11-28 18:05:29', '2019-11-28 18:05:29'),
(13, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 43, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 0, '2019-11-28 18:06:33', '2019-11-28 18:06:33'),
(14, 'New Hello', 'test descriptiom', 'test city', '{lat: 14.445, long: 12.254}', '4561230.00', '', '', 'Active', 47, 'Plot', '1200.15', 2, '1234.00', 4, 5, 2, 2, 0, 0, 0, '2019-11-28 18:12:11', '2019-11-28 18:12:11'),
(15, 'klashdfklhklh', 'klh', 'klh', '', '230010.00', '', '', 'kl', 43, 'hkl', '0.00', 2, '0.00', 13, 1, 2, 1, 0, 0, 0, '2019-12-03 16:36:59', '2019-12-03 16:36:59'),
(16, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 43, 'Plot', '1200.15', 2, '200.00', 2, 1, 2, 1, 0, 0, 0, '2019-12-03 16:39:47', '2019-12-03 16:39:47'),
(17, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 47, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 0, '2019-12-03 16:40:13', '2019-12-03 16:40:13'),
(18, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 47, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 0, '2019-12-03 16:41:55', '2019-12-03 16:41:55'),
(19, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 47, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 0, '2019-12-03 16:44:06', '2019-12-03 16:44:06'),
(20, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 47, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 0, '2019-12-03 16:44:49', '2019-12-03 16:44:49'),
(21, 'hello 4 dec with image', 'check', 'dasda', '', '45400.00', '', '', 'sataf', 43, 'sdfs', '0.00', 4, '154.10', 1, 1, 2, 1, 0, 0, 0, '2019-12-04 12:49:59', '2019-12-04 12:49:59'),
(22, 'with image', 'fsadfkjh', 'kllk', '', '230010.00', '', '', 'klsdhfkl', 43, 'Plot', '0.00', 2, '12.21', 1, 1, 1, 1, 0, 0, 0, '2019-12-04 12:53:57', '2019-12-04 12:53:57'),
(23, 'sdkflhlk', 'hklhl', 'sdgkn', '', '450020.00', '', '', 'dsfsd', 43, 'jkgjk', '0.00', 2, '12.21', 1, 1, 1, 1, 0, 0, 0, '2019-12-04 12:56:05', '2019-12-04 12:56:05'),
(24, 'fdsfgsfd', 'gsdgf', 'sdfg', '', '4554.00', '', '', 'hdfgh', 43, 'dfghd', '0.00', 2, '120.00', 1, 1, 1, 1, 0, 0, 0, '2019-12-04 13:01:07', '2019-12-04 13:01:07'),
(25, 'sldgslk', 'ljkl', 'lk', '', '1540.00', '', '', 'dsdg', 43, 'fdhd', '0.00', 1, '12.21', 1, 1, 1, 1, 0, 0, 0, '2019-12-04 13:02:41', '2019-12-04 13:02:41'),
(26, 'with image url 4 dec', 'test description', 'it works', '', '66435.00', 'http://localhost:3001/images/space/file_1575450720809_50m-pool-2-1-min-min.jpg', '', '242', 43, 'Plot', '0.00', 2, '12.21', 1, 1, 1, 1, 0, 0, 0, '2019-12-04 14:42:04', '2019-12-04 14:42:04'),
(27, 'gallery uploaded', 'test s', 'adada ', '', '454500.00', '', 'http://localhost:3001/images/space/file_1575456335080_1f528.png, http://localhost:3001/images/space/file_1575456335081_3Z8A0969-Edit.jpg, http://localhost:3001/images/space/file_1575456335096_177-1-e1558547236293.jpg', 'Active', 43, '55sdf', '0.00', 1, '0.00', 13, 1, 1, 1, 0, 0, 0, '2019-12-04 16:15:35', '2019-12-04 16:15:35'),
(28, 'test more', 'dfdslk', 'lkhlk', '', '4543.00', '', '[\"http://localhost:3001/images/space/file_1575456795287_3Z8A0956%20(1).jpg\",\"http://localhost:3001/images/space/file_1575456795287_3Z8A0969-Edit%20(1).jpg\",\"http://localhost:3001/images/space/file_1575456795288_3Z8A9781-2%20(1).jpg\"]', 'sgs', 43, 'sdg', '0.00', 6, '12.21', 1, 1, 1, 1, 0, 0, 0, '2019-12-04 16:23:15', '2019-12-04 16:23:15'),
(29, 'upload done', 'sdghsi', 'sdjfskl', '', '1210.00', '', '[\"http://localhost:3001/images/space/file_1575457161379_1-1.jpg\",\"http://localhost:3001/images/space/file_1575457161380_3Z8A1065_RETOUCHED%20(1).jpg\",\"http://localhost:3001/images/space/file_1575457161380_3Z8A2463.jpg\"]', 'dsgs', 43, 'hkj', '0.00', 1, '12.21', 1, 1, 1, 1, 0, 0, 0, '2019-12-04 16:29:21', '2019-12-04 16:29:21'),
(30, 'fasdfa', 'djeifl', 'sdglsj;', '', '18120.00', '', '[\"http://localhost:3001/images/space/file_1575458002357_1-1.jpg\",\"http://localhost:3001/images/space/file_1575458002366_1-1-min.jpg\"]', 'dag a', 43, 'sdgs s', '0.00', 1, '12.21', 1, 1, 1, 1, 0, 0, 0, '2019-12-04 16:43:22', '2019-12-04 16:43:22');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `image` text,
  `email` varchar(50) DEFAULT NULL,
  `password` text,
  `status` int(11) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `phone` int(12) DEFAULT NULL,
  `brokerage` varchar(10) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `image`, `email`, `password`, `status`, `role`, `phone`, `brokerage`, `created_at`, `updated_at`) VALUES
(1, 'rupinder', 'singh', '', 'noni', '', 1, '', 54, '', NULL, '2019-11-15 07:31:33'),
(28, 'rupinder', 'singh', '', 'rupinder', 'admin#123', 1, 'broker', 54, '10', NULL, '2019-11-15 07:31:33'),
(33, 'rupinder', 'singh', '', 'rupinders', 'admin#123', 1, 'broker', 54, '10', NULL, '2019-11-15 07:31:33'),
(34, 'rupinder', 'singh', '', 'rupinderss', 'admin#123', NULL, 'broker', 54, '10', NULL, '2019-11-15 07:31:33'),
(35, 'rupinder', 'singh', '', 'rupindersss', 'admin#123', NULL, 'broker', 54, '10', NULL, '2019-11-15 07:31:33'),
(36, 'rupinder', 'singh', '', 'rupinderssss', 'admin#123', NULL, 'broker', 54, '10', NULL, '2019-11-15 07:31:33'),
(37, 'name', NULL, NULL, 'asd@fsd.com', NULL, NULL, NULL, NULL, NULL, NULL, '2019-11-15 12:55:11'),
(38, 'sameer', NULL, NULL, 'yourOtherValue@nsdf.com', NULL, NULL, NULL, NULL, NULL, NULL, '2019-11-18 09:16:52'),
(39, 'as', NULL, NULL, 'sdf', NULL, NULL, NULL, NULL, NULL, NULL, '2019-11-18 10:17:51'),
(40, 'Sameer', NULL, NULL, 'test@admin.com', NULL, NULL, NULL, NULL, NULL, NULL, '2019-11-18 10:22:19'),
(41, 'Samds', NULL, NULL, 'admindd@admin.com', NULL, NULL, NULL, NULL, NULL, NULL, '2019-11-18 10:23:24'),
(42, 'first', NULL, NULL, 'test@demo.com', NULL, NULL, NULL, NULL, NULL, NULL, '2019-11-18 11:33:20'),
(43, 'Sameer', 'pujani', 'avatar_1575466573087_img_avatar.png', 'new@demo.com', '12345678', NULL, NULL, 1231234587, '4', NULL, '2019-11-18 11:36:04'),
(44, 'Samfxd', 'Testf', NULL, 'admdfin@admin.com', 'admin123', NULL, NULL, 1234567890, '12', NULL, '2019-11-19 05:10:10'),
(45, 'asdas', 'dffer', NULL, 'etest@adminnew.com', '12365487', NULL, NULL, 1452369870, '24', NULL, '2019-11-20 08:50:55'),
(46, 'name', 'sdfsd', NULL, 'asasd@fsd.com', 'dsfsdfgsd', NULL, NULL, 78945613, 'fsd', NULL, '2019-11-23 06:20:05'),
(47, 'hello', 'dfsds', NULL, 'admin@admin.com', 'admin123', NULL, NULL, 1234567890, '2', NULL, '2019-11-23 11:09:26'),
(48, 'hellonew', 'lstneeew', NULL, 'aadmin@admin.comss', 'as21d3a5', NULL, NULL, 1234680534, '3', NULL, '2019-11-23 11:17:06'),
(49, 'asfsafa', 'lhklhjkl', NULL, 'sdadmin@dsadmin.com', '12345678912', NULL, NULL, 1234567980, '2', NULL, '2019-11-23 11:21:55'),
(50, 'sfdgsfg', ';jlkhl', NULL, 'admsdin@admin.com', 'admin123', NULL, NULL, 1234567890, '2', NULL, '2019-11-23 11:24:01'),
(51, 'sdgsd', 'sgfdgs', NULL, 'sdfsadmin@admin.com', '1d23as5d', NULL, NULL, 1894561230, '2', NULL, '2019-11-23 12:23:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `spaces`
--
ALTER TABLE `spaces`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `spaces`
--
ALTER TABLE `spaces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
