# PayPlus assignment

| Methods	| Urls	                | Actions
| --------- | --------------------- | ---------------------- |
| GET       | api/v1/users         | get all Users
| GET       | api/v1/users/:id     | get User by id
| POST      | api/v1/users         | add new User
| PUT       | api/v1/users/:id     | update User by id
| DELETE    | api/v1/users/:id     | remove User by id
| POST      | api/v1/users         | add new User
| POST      | api/v1/auth/login    | user login
| POST      | api/v1/auth/register | user register

## users DDL stetment
```SQL
 CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(128) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `idNo` varchar(9) NOT NULL,
  `password` varchar(128) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `birthDay` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`) USING HASH
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
```

## Project setup
```
npm install
```

### Run
```
npm run start
```

## More Practice
