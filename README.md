# E-commerce Backend

Link to Repository: https://github.com/maymyatnoehtet/E-commerce-backend

Link to Video: https://drive.google.com/file/d/1qDtQAkA7tvZjAVRu4gelqqE4S1t_Nxv0/view?usp=sharing

## User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Database Models
![Database Model](https://github.com/maymyatnoehtet/E-commerce-backend/blob/main/public/images/db_models.png)

## Usage Instruction

```git clone git@github.com:maymyatnoehtet/E-commerce-backend.git```

To run the code,
```npm install```
```mysql -u root -p```
```source db/schema.sql```
```npm run seed```
```node server.js```

## Build With

node: 16.20.0
dotenv: 16.0.3,
express: 4.18.2,
mysql2: 3.3.1,
nodemon: 2.0.22,
sequelize: 6.31.1
