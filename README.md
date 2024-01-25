# Hapi.js-REST-API-MySQL

REST API using [hapi.js](https://hapi.dev/) and [MySQL](https://www.mysql.com/)

## Installation

### Clone Project

```bash
 git clone git@github.com:m1kael1/hapi-rest-api-articles-users.git
```

```bash
 cd hapi-rest-api-articles-users
```

### Copy .env.example -> .env

```bash
cp .env.example .env
```

### Install Dependensi

```bash
 npm install
```

### Start

```bash
 npm start
```

### Base API Endpoint

Buka [http://localhost:8000/](http://localhost:3000/api/v1), akan muncul '**API Ready**'

## API Endpoint

#### Create Users

```http
  POST /users
```

| Payload    | Type     |
| :--------- | :------- |
| `username` | `string` |
| `email`    | `string` |
| `password` | `string` |

#### Get All Users

```http
  GET /users
```

#### Get User

```http
  GET /users/{uid}
```

| Parameter | Type  |
| :-------- | :---- |
| `uid`     | `int` |

#### Delete Users

```http
  DELETE /users/{uid}
```

| Parameter | Type  |
| :-------- | :---- |
| `uid`     | `int` |

#### Create Aticles

```http
  POST /articles
```

| Payload   | Type     |
| :-------- | :------- |
| `uid_fk`  | `int`    |
| `article` | `string` |

#### Get All Aticles

```http
  GET /articles
```

### Get Article

```http
GET /articles/{aid}
```

| Parameter | Type  |
| :-------- | :---- |
| `aid`     | `int` |

### Delete articles

```http
DELETE /article/{uid}/{aid}
```

| Parameter | Type  |
| :-------- | :---- |
| `uid`     | `int` |
| `aid`     | `int` |
