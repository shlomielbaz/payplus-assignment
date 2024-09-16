# PayPlus assignment

| Methods	| Urls	                | Actions
| --------- | --------------------- | ---------------------- |
| GET       | api/users         | get all Users
| GET       | api/users/:id     | get User by id
| POST      | api/users         | add new User
| PUT       | api/users/:id     | update User by id
| DELETE    | api/users/:id     | remove User by id


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
