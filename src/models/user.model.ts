import { RowDataPacket } from "mysql2";

export default interface User extends RowDataPacket {
    id: number;
    name?: string;
    idNo?: string;
    password?: string;
    phone?: string;
    email?: string;
    birthDay?: string;
  }

  /*

  CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(128) NOT NULL,
  `name` varchar(64) NOT NULL,
  `idNo` varchar(9) NOT NULL,
  `password` varchar(32) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `birthDay` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`) USING HASH
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
  */