-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: quizzes
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer` (
  `answer_id` int NOT NULL AUTO_INCREMENT,
  `question_id` int NOT NULL,
  `is_answer` bit(1) NOT NULL,
  `content` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`answer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,1,_binary '\0','Only when the component mounts','2023-10-04 07:20:52'),(2,1,_binary '\0','Only when the component unmounts','2023-10-04 07:20:52'),(3,1,_binary '','The first time the component re-renders','2023-10-04 07:20:52'),(4,1,_binary '\0','Each time the component is re-rendered','2023-10-04 07:20:52'),(5,2,_binary '','True','2023-10-04 07:24:41'),(6,2,_binary '\0','It depends on the dependency array','2023-10-04 07:24:41'),(7,2,_binary '\0','False','2023-10-04 07:24:41'),(8,2,_binary '\0','In depends on the code in the effect','2023-10-04 07:24:41'),(9,3,_binary '\0','useState','2023-10-04 07:30:59'),(10,3,_binary '','useEffect','2023-10-04 07:30:59'),(11,3,_binary '\0','useRef','2023-10-04 07:30:59'),(12,3,_binary '\0','useReducer','2023-10-04 07:30:59'),(13,4,_binary '\0','Angular','2023-10-04 07:33:52'),(14,4,_binary '','React','2023-10-04 07:33:52'),(15,4,_binary '\0','Svelte','2023-10-04 07:33:52'),(16,4,_binary '\0','Vue','2023-10-04 07:33:52'),(17,5,_binary '\0','Node.js','2023-10-04 07:38:42'),(18,5,_binary '\0','TypeScript','2023-10-04 07:38:42'),(19,5,_binary '','npm','2023-10-04 07:38:42'),(20,5,_binary '\0','NestJs','2023-10-04 07:38:42'),(21,6,_binary '\0','Douglas Crockford','2023-10-04 07:40:55'),(22,6,_binary '\0','Sheryl Sandberg','2023-10-04 07:40:55'),(23,6,_binary '','Brendan Eich','2023-10-04 07:40:55'),(24,6,_binary '\0','Jordan Walke','2023-10-04 07:40:55');
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-04 17:43:18
