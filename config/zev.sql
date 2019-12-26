-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 26, 2019 at 11:47 AM
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
  `fullname` varchar(255) NOT NULL,
  `space_id` int(11) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `reports` text NOT NULL,
  `status` enum('Sent','Opened','Completed') NOT NULL DEFAULT 'Sent',
  `plaid_item_id` varchar(255) DEFAULT NULL,
  `plaid_access_token` varchar(255) DEFAULT NULL,
  `plaid_data` text,
  `stripe_payment_id` varchar(255) DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL,
  `customer_id` varchar(255) NOT NULL,
  `receipt_url` text NOT NULL,
  `routing_number` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `fullname`, `space_id`, `email`, `phone`, `message`, `reports`, `status`, `plaid_item_id`, `plaid_access_token`, `plaid_data`, `stripe_payment_id`, `amount`, `customer_id`, `receipt_url`, `routing_number`, `created_at`, `updated_at`) VALUES
(1, 'First', 12, 'hello@demo.com', '7894561230', 'Hello, I would like to but this property.', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-11-26 14:22:57', '2019-11-26 14:22:57'),
(2, 'sadf', 3, 'new@mailc.ocm', '4561231025', 'sdf', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-11-26 18:51:38', '2019-11-26 18:51:38'),
(3, 'new', 1, 'sameer@mailinator.com', '1215465453', 'sdfsd', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-11-26 19:12:23', '2019-11-26 19:12:23'),
(4, 'sfd', 1, 'hi@my.com', '4785465122', 'dsfsdg', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-11-27 17:28:39', '2019-11-27 17:28:39'),
(5, 'dsdfg', 3, 'he@fdsg.com', '4534354355', 'dsgsg', '', 'Opened', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-11-27 17:31:09', '2019-11-27 17:31:09'),
(6, 'fdgs', 1, 'sdgs@gsd.cpo', '1233213313', 'sdg', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-11-27 17:33:15', '2019-11-27 17:33:15'),
(7, 'fdgs', 1, 'sdgs@gsd.cpo', '1233213313', 'sdg', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-11-27 17:33:18', '2019-11-27 17:33:18'),
(8, 'fdgs', 1, 'sdgs@gsd.cpo', '1233213313', 'sdg', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-11-27 17:34:08', '2019-11-27 17:34:08'),
(9, 'sfgg', 12, 'new@mailc.ocm', '4561231025', '', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-11-27 17:34:31', '2019-11-27 17:34:31'),
(10, 'New', 1, 'my@email.com', '7894561230', 'test message for space', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-11-28 18:25:24', '2019-11-28 18:25:24'),
(11, 'hgello', 3, 'my@email.com', '4561278004', 'yegkjsdbsjkd fjks', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-11-28 18:29:25', '2019-11-28 18:29:25'),
(12, 'Helli', 3, 'sameer@squareloops.com', '1234567890', 'sdgs', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-12-09 15:08:06', '2019-12-09 15:08:06'),
(13, 'Helli', 3, 'sameer@squareloops.com', '1234567890', 'sdgs', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-12-09 15:22:18', '2019-12-09 15:22:18'),
(14, 'Helli', 3, 'sameer@squareloops.com', '1234567890', 'sdgs', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-12-09 15:59:04', '2019-12-09 15:59:04'),
(15, 'sdsa hdfgh', 32, 'eminla@fmsid.com', '4513215313', 'gklfdjgklsjdfl gs', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-12-16 17:01:03', '2019-12-16 17:01:03'),
(16, 'messa', 32, 'sadaa@msail.com', '7897987987', 'sjdfhjkash kjashd\n', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-12-16 17:37:37', '2019-12-16 17:37:37'),
(17, 'sameer', 32, 'sam@mail.com', '7894561230', 'here is smesan', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-12-17 18:01:50', '2019-12-17 18:01:50'),
(18, 'hekki', 32, 'sfsh@sfs.sdfs', '7894545465', 'sdfs sdfsdf', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-12-17 18:14:32', '2019-12-17 18:14:32'),
(19, 'dfs', 32, 'sdf@gfd.sdf', '1254863515', 'sdfgs', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-12-17 18:18:24', '2019-12-17 18:18:24'),
(20, 'jsfdklj', 32, 'hekk@mdfsk.com', '4564654646', 'hdue', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-12-17 18:20:26', '2019-12-17 18:20:26'),
(21, 'jflssdfs', 32, 'hekki@dfs.com', '3423423423', 'fknskl', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-12-17 18:21:44', '2019-12-17 18:21:44'),
(22, 'dfsdgssdf', 32, 'sdf@sdf.com', '5343543545', 'sfgdgs', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-12-17 18:32:48', '2019-12-17 18:32:48'),
(23, 'test te', 32, 'fdsg@sdfsd.sd', '1234567890', 'dsfsd', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-12-17 18:38:28', '2019-12-17 18:38:28'),
(24, 'hello', 32, 'sdf@fmsj.com', '2132321321', 'fdgsdfg', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-12-18 12:58:09', '2019-12-18 12:58:09'),
(25, 'loaosj 13', 32, 'dsdf@wreqw.sdf', '4561237981', 'sfdg fsdg', '', 'Sent', NULL, NULL, NULL, NULL, '0.00', '', '', 0, '2019-12-18 13:03:30', '2019-12-18 13:03:30'),
(26, 'sdfsd 1306', 32, 'gsg@rtr.hj', '2132132132', 'sfdgsfdg', '', 'Sent', '9nMoyNWRedfqNGML4m8ASy8egjLJpQHRGEp75', 'access-sandbox-ea457f3b-33b4-4b72-ab83-da398138bfb5', NULL, NULL, '0.00', '', '', 0, '2019-12-18 13:08:09', '2019-12-18 13:08:09'),
(27, 'fso ', 32, 'pod@lodm.com', '9023472309', 'yrjcl fsdf\n', '', 'Sent', 'Z6mRVAPRb7tvZ94evwbzULMZLmngLWfgRb6oy', 'access-sandbox-98877873-1f23-4410-832f-0dbe42eade1b', NULL, NULL, '0.00', '', '', 0, '2019-12-18 13:12:28', '2019-12-18 13:12:28'),
(28, 'fdgsd fh', 32, 'hgjg@khfg.fdg', '1354132435', 'fgklh', '', 'Sent', '9LNm7G9prxHgAnE5DAvQs6NPJr945PCRGmrWK', 'access-sandbox-03ddc42c-a0f3-47c8-83ad-e8d65c82297b', NULL, NULL, '0.00', '', '', 0, '2019-12-18 13:32:18', '2019-12-18 13:32:18'),
(29, 'dfsd', 32, 'sdfshj@fdg.sdfg', '2121312131', 'fdsg sd', '', 'Sent', 'gWy6WbjxNACGxrpKGGN4hxLRVqpEBmcg6JjAK', 'access-sandbox-0ce6cf41-3ff0-4a0e-930d-ceec0c8657e0', NULL, NULL, '0.00', '', '', 0, '2019-12-18 14:12:04', '2019-12-18 14:12:04'),
(30, 'hello 27', 32, 'test@gfsd.ds', '1345465465', 'fdsfsdf', '', 'Sent', 'Ejq8akVZZgib6GZerjVrtR7RXzXKgwcXBNZDk', 'access-sandbox-7308d87f-dc8d-4f7e-a566-b1df8787e61e', NULL, NULL, '0.00', '', '', 0, '2019-12-18 14:28:17', '2019-12-18 14:28:17'),
(31, 'new fomr', 32, 'fgdsdg@esg.fgd', '4548547453', 'fg dfgd', '', 'Sent', '9n6EK9BqWQtW3dDEJkNMcJ9oMm7qAQfRWr8Br', 'access-sandbox-dc836f6d-d46f-453c-8c97-a52e09d86337', NULL, 'py_1FsksIEhHgcHyNzSGqHJlHaR', '12.00', 'cus_GPa2UGiNxtR9NO', 'https://pay.stripe.com/receipts/acct_1FAVLjEhHgcHyNzS/py_1FsksIEhHgcHyNzSGqHJlHaR/rcpt_GPa2mOA18GRuaxXhntdNNabl1nm2956', 110000000, '2019-12-23 12:28:43', '2019-12-23 12:28:43'),
(32, 'sdfsd', 32, 'sfs@dsfs.sdf', '2343242342', 'sdf\nsdf', '', 'Sent', 'GevxGWmQwDCKeLDE8RGgcPKpDwjyl7C1MAqqw', 'access-sandbox-609f9723-0e0e-4925-ada8-334ee2743a56', NULL, 'py_1FsoREEhHgcHyNzS8C9oxtm7', '12.00', 'cus_GPdixUd4rtxqAU', 'https://pay.stripe.com/receipts/acct_1FAVLjEhHgcHyNzS/py_1FsoREEhHgcHyNzS8C9oxtm7/rcpt_GPdiS3P8RmwuwfWbXwZh7COQdJKlYbz', 110000000, '2019-12-23 16:17:01', '2019-12-23 16:17:01'),
(33, 'hello', 32, 'jfbsk@ffsdf.dsj', '4654654654', 'sdf s', '', 'Sent', 'GLlor8vNMdHnDgLyB76bSwnaXg5kZ7h1eavKx', 'access-sandbox-c9c3f852-63d7-4d95-8086-e167728f0e86', NULL, 'py_1FspWWEhHgcHyNzSHvRCRpMJ', '12.00', 'cus_GPeqaWJQmXoX5a', 'https://pay.stripe.com/receipts/acct_1FAVLjEhHgcHyNzS/py_1FspWWEhHgcHyNzSHvRCRpMJ/rcpt_GPeqrZYpbVv94IsA1bZZbELALTWhWu2', 110000000, '2019-12-23 17:26:33', '2019-12-23 17:26:33');

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
(3, 'Space Two', 'test description', 'San Fr', '', '123150.00', '', '', 'Available', 43, 'Plot', '0.00', 2, '12.21', 1, 2, 1, 1, 0, 0, 268, '2019-11-21 19:27:54', '2019-11-21 19:27:54'),
(4, 'space Three', 'tdyajd hdesc', 'dfs', '', '12500.00', '', '', 'NA', 47, 'Flat', '0.00', 1, '5.00', 1, 1, 1, 0, 0, 0, 88, '2019-11-21 19:35:24', '2019-11-21 19:35:24'),
(5, 'fsdfs', 'gsfdgs', 'fgdsgs', '', '180550.00', '', '', 'Available', 43, 'fsfs', '0.00', 2, '154.10', 2, 3, 1, 1, 0, 0, 0, '2019-11-23 17:03:36', '2019-11-23 17:03:36'),
(6, 'gsfdgsd', 'shshytsd', 'gsfdgsd', '', '1254510.00', '', '', 'gfsdh`', 43, 'Home', '0.00', 2, '50.00', 1, 1, 1, 1, 0, 0, 11, '2019-11-23 17:05:04', '2019-11-23 17:05:04'),
(7, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '12150.00', '', '', 'Available', 43, 'Plot', '1200.15', 2, '200.00', 2, 4, 2, 2, 0, 0, 0, '2019-11-28 17:42:11', '2019-11-28 17:42:11'),
(8, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '121580.00', '', '', 'Available', 43, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 0, '2019-11-28 17:56:05', '2019-11-28 17:56:05'),
(9, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 43, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 0, '2019-11-28 17:57:30', '2019-11-28 17:57:30'),
(10, 'Hello space', 'hi test description', 'NY', '{lat: 14.445, long: 12.254}', '153152.00', '', '', 'Active', 43, 'Flat', '1200.15', 3, '120.00', 4, 5, 2, 2, 0, 0, 0, '2019-11-28 17:59:55', '2019-11-28 17:59:55'),
(11, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 43, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 0, '2019-11-28 18:05:21', '2019-11-28 18:05:21'),
(12, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 43, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 17, '2019-11-28 18:05:29', '2019-11-28 18:05:29'),
(13, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 43, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 1, '2019-11-28 18:06:33', '2019-11-28 18:06:33'),
(14, 'New Hello', 'test descriptiom', 'test city', '{lat: 14.445, long: 12.254}', '4561230.00', '', '', 'Active', 47, 'Plot', '1200.15', 2, '1234.00', 4, 5, 2, 2, 0, 0, 2, '2019-11-28 18:12:11', '2019-11-28 18:12:11'),
(15, 'klashdfklhklh', 'klh', 'klh', '', '230010.00', '', '', 'kl', 43, 'hkl', '0.00', 2, '0.00', 13, 1, 2, 1, 0, 0, 0, '2019-12-03 16:36:59', '2019-12-03 16:36:59'),
(16, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '[\"space1.jpg\",\"file_1575537761452_3Z8A0969-Edit.jpg\",\"file_1575537761516_3Z8A1022-Edit%20(1).jpg\"]', 'Available', 43, 'Plot', '1200.15', 2, '200.00', 2, 1, 2, 1, 0, 0, 38, '2019-12-03 16:39:47', '2019-12-03 16:39:47'),
(17, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 47, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 0, '2019-12-03 16:40:13', '2019-12-03 16:40:13'),
(18, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 47, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 34, '2019-12-03 16:41:55', '2019-12-03 16:41:55'),
(19, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 47, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 0, '2019-12-03 16:44:06', '2019-12-03 16:44:06'),
(20, 'Plot in Residential Area', 'Here is description', 'San Francisco', '{lat: 14.445, long: 12.254}', '450100.00', '', '', 'Available', 47, 'Plot', '1200.15', 2, '200.00', 2, 0, 0, 0, 0, 0, 0, '2019-12-03 16:44:49', '2019-12-03 16:44:49'),
(21, 'hello 4 dec with image', 'check', 'dasda', '', '45400.00', '', '', 'sataf', 43, 'sdfs', '0.00', 4, '154.10', 1, 1, 2, 1, 0, 0, 0, '2019-12-04 12:49:59', '2019-12-04 12:49:59'),
(22, 'with image', 'fsadfkjh', 'kllk', '', '230010.00', '', '[\"space2.jpg\",\"file_1575537761452_3Z8A0969-Edit.jpg\",\"file_1575537761516_3Z8A1022-Edit%20(1).jpg\"]', 'klsdhfkl', 43, 'Plot', '0.00', 2, '12.21', 1, 1, 1, 1, 0, 0, 2, '2019-12-04 12:53:57', '2019-12-04 12:53:57'),
(23, 'sdkflhlk', 'hklhl', 'sdgkn', '', '450020.00', '', '', 'dsfsd', 43, 'jkgjk', '0.00', 2, '12.21', 1, 1, 1, 1, 0, 0, 1, '2019-12-04 12:56:05', '2019-12-04 12:56:05'),
(24, 'fdsfgsfd', 'gsdgf', 'sdfg', '', '4554.00', '', '', 'hdfgh', 43, 'dfghd', '0.00', 2, '120.00', 1, 1, 1, 1, 0, 0, 0, '2019-12-04 13:01:07', '2019-12-04 13:01:07'),
(25, 'sldgslk', 'ljkl', 'lk', '', '1540.00', '', '', 'dsdg', 43, 'fdhd', '0.00', 1, '12.21', 1, 1, 1, 1, 0, 0, 72, '2019-12-04 13:02:41', '2019-12-04 13:02:41'),
(26, 'with image url 4 dec', 'test description', 'it works', '', '66435.00', 'http://localhost:3001/images/space/file_1575450720809_50m-pool-2-1-min-min.jpg', '[\"space3.jpg\",\"file_1575537761452_3Z8A0969-Edit.jpg\",\"file_1575537761516_3Z8A1022-Edit%20(1).jpg\"]', '242', 43, 'Plot', '0.00', 2, '12.21', 1, 1, 1, 1, 0, 0, 9, '2019-12-04 14:42:04', '2019-12-04 14:42:04'),
(27, 'gallery uploaded', 'test s', 'adada ', '', '454500.00', '', '[\"space3.jpg\",\"file_1575537761452_3Z8A0969-Edit.jpg\",\"file_1575537761516_3Z8A1022-Edit%20(1).jpg\"]', 'Active', 43, '55sdf', '0.00', 1, '0.00', 13, 1, 1, 1, 0, 0, 0, '2019-12-04 16:15:35', '2019-12-04 16:15:35'),
(28, 'test more', 'dfdslk', 'lkhlk', '', '4543.00', '', '[\"space1.jpg\",\"file_1575537761452_3Z8A0969-Edit.jpg\",\"file_1575537761516_3Z8A1022-Edit%20(1).jpg\"]', 'sgs', 43, 'sdg', '0.00', 6, '12.21', 1, 1, 1, 1, 0, 0, 0, '2019-12-04 16:23:15', '2019-12-04 16:23:15'),
(29, 'upload done', 'sdghsi', 'sdjfskl', '', '1210.00', '', '[\"space2.jpg\",\"file_1575537761452_3Z8A0969-Edit.jpg\",\"file_1575537761516_3Z8A1022-Edit%20(1).jpg\"]', 'dsgs', 43, 'hkj', '0.00', 1, '12.21', 1, 1, 1, 1, 0, 0, 1, '2019-12-04 16:29:21', '2019-12-04 16:29:21'),
(30, 'fasdfa', 'djeifl\nfdgfd\nsdf', 'sdglsj;', '', '18120.00', '', '[\"file_1575537761452_1f528.png\",\"file_1575537761452_3Z8A0969-Edit.jpg\",\"file_1575537761516_3Z8A1022-Edit%20(1).jpg\"]', 'dag a', 43, 'sdgs s', '0.00', 1, '12.21', 1, 1, 1, 1, 0, 0, 0, '2019-12-04 16:43:22', '2019-12-04 16:43:22'),
(31, 'ff', 'khkl', 'hlk', '', '12501.00', '', '[\"file_1575537761452_1f528.png\",\"file_1575537761452_3Z8A0969-Edit.jpg\",\"file_1575537761516_3Z8A1022-Edit%20(1).jpg\"]', 'lh', 43, 'lkh', '0.00', 1, '12.21', 0, 1, 2, 0, 0, 0, 16, '2019-12-05 14:52:41', '2019-12-05 14:52:41'),
(32, 'Hello update', 'description also', 'city this', '', '1501.00', '', '[\"space1.jpg\",\"space2.jpg\",\"space3.jpg\",\"space1.jpg\",\"space2.jpg\"]', 'available', 43, 'sdfg', '0.00', 1, '120.00', 121, 2, 0, 1, 0, 0, 106, '2019-12-06 15:57:08', '2019-12-06 15:57:08');

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
(43, 'Sameer', 'Pujani', 'avatar_1575952791858_img_avatar.png', 'new@demo.com', '12345678', NULL, NULL, 123456790, '4', NULL, '2019-11-18 11:36:04'),
(44, 'Samfxd', 'Testf', NULL, 'admdfin@admin.com', 'admin123', NULL, NULL, 1234567890, '12', NULL, '2019-11-19 05:10:10'),
(45, 'asdas', 'dffer', NULL, 'etest@adminnew.com', '12365487', NULL, NULL, 1452369870, '24', NULL, '2019-11-20 08:50:55'),
(46, 'name', 'sdfsd', NULL, 'asasd@fsd.com', 'dsfsdfgsd', NULL, NULL, 78945613, 'fsd', NULL, '2019-11-23 06:20:05'),
(47, 'hello', 'dfsds', 'avatar_1576054877459_4.jpg', 'admin@admin.com', 'admin123', NULL, NULL, 1234567890, '2', NULL, '2019-11-23 11:09:26'),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT for table `spaces`
--
ALTER TABLE `spaces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
