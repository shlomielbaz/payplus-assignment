# PayPlus assignment

| Methods	| Urls	                | Actions
| --------- | --------------------- | ---------------------- |
| GET       | api/users         | get all Users
| GET       | api/users/:id     | get User by id
| POST      | api/users         | add new User
| PUT       | api/users/:id     | update User by id
| DELETE    | api/users/:id     | remove User by id

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

## Project Structure
```bash
├── README.md
├── package-lock.json
├── package.json
├── server.ts
├── src
│   ├── controllers
│   │   ├── employee.controller.ts
│   │   ├── home.controller.ts
│   │   └── tutorial.controller.ts
│   ├── db
│   │   └── index.ts
│   ├── index.ts
│   ├── interfaces
│   │   └── crud-repository.interface.ts
│   ├── middlewares
│   │   └── auth.validation.ts
│   ├── models
│   │   ├── employee.model.ts
│   │   └── tutorial.model.ts
│   ├── repositories
│   │   ├── employee.repository.ts
│   │   └── tutorial.repository.ts
│   ├── routes
│   │   ├── employee.router.ts
│   │   ├── home.routes.ts
│   │   ├── index.ts
│   │   └── tutorial.routes.ts
│   └── services
│       ├── employee.service.ts
│       └── tutorial.service.ts
└── tsconfig.json
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
