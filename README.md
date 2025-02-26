# Makan Now API Documentation

## Overview

- **Base URL**: `https://makan-now-backend.onrender.com`
<!-- - **Authentication**: No authentication required for these endpoints (public). -->
- **Content Type**: `application/json`

---

## Endpoint: `POST /auth/sign-up`

### Description

Creates a new user account. This endpoint registers a new user with their provided credentials.

### Method

`POST`

### Endpoint URL

`/auth/sign-up`

### Request

#### Headers

```json
{
	"Content-Type": "application/json"
}
```

#### Body

- `username` (string, required): The username of the user.
- `password` (string, required): The password associated with the user's account.

```json
{
	"username": "Username",
	"password": "Password"
}
```

#### Response

- Success Response - Status Code: `201 OK`

Response Body:

```json
{
	"token": "<-hashed string->"
}
```

---

## Endpoint: `POST /auth/sign-in`

### Description

This endpoint allows a user to log in by providing their email and password. On successful authentication, a JWT (JSON Web Token) will be returned for authenticating subsequent requests.

### Method

`POST`

### Endpoint URL

`/auth/sign-in`

### Request

#### Headers

```json
{
	"Content-Type": "application/json"
}
```

#### Body

- `username` (string, required): The username of the user.
- `password` (string, required): The password associated with the user's account.

```json
{
	"username": "Username",
	"password": "Password"
}
```

#### Response

- Success Response - Status Code: `200 OK`

Response Body:

```json
{
	"token": "<-hashed string->"
}
```

---

## Endpoint: `GET /shops/`

### Description

This endpoint will provide all full list of all the shops .

### Method

`GET`

### Endpoint URL

`/shops/`

### Request

#### Headers

```json
{
	"Content-Type": "application/json"
}
```

#### Response

- Success Response - Status Code: `200 OK`

Response Body:

```json
[
	{
		"_id": "67bea84407155c3b9fd3c65b",
		"shopName": "Satay King"
	},
	{
		"_id": "67bea84407155c3b9fd3c65b",
		"shopName": "Han's Chicken Rice"
	}
]
```

---

## Endpoint: `POST /shops/`

### Description

This endpoint will allow users to create a shop profile .

### Method

`POST`

### Endpoint URL

`/shops/`

### Request

#### Headers

```json
{
	"Content-Type": "application/json"
}
```

#### Body

- `shopName` (string, required): The name of the Shop.
- `address` (string, required): The address of the shop.

```json
{
	"shopName": "Shop Name",
	"address": "Shop address"
}
```

#### Response

- Success Response - Status Code: `201 OK`

Response Body:

```json
{
	"shopName": "Shop Name",
	"address": "Shop address",
	"_id": "67bebcfc83e4c11073870ad6",
	"menu": [],
	"__v": 0
}
```

---

## Endpoint: `GET /shops/:shopId`

### Description

This endpoint will provide details of a specific shop.

### Method

`GET`

### Endpoint URL

`/shops/:shopId`

### Request

#### Headers

```json
{
	"Content-Type": "application/json"
}
```

#### Response

- Success Response - Status Code: `200 OK`

Response Body:

```json
{
	"shopName": "Shop Name",
	"address": "Shop address",
	"_id": "67bebcfc83e4c11073870ad6",
	"menu": [],
	"__v": 0
}
```

---

## Endpoint: `DELETE /shops/:shopId`

### Description

This endpoint will delete the specified shop.

### Method

`DELETE`

### Endpoint URL

`/shops/:shopId`

### Request

#### Headers

```json
{
	"Content-Type": "application/json"
}
```

#### Response

- Success Response - Status Code: `200 OK`

Response Body:

```json
{
	"deleted": {
		"shopName": "Shop Name",
		"address": "Shop address",
		"_id": "67bebcfc83e4c11073870ad6",
		"menu": [],
		"__v": 0
	}
}
```

---

## Endpoint: `PUT /shops/:shopId`

### Description

This endpoint will update the specified shop.

### Method

`PUT`

### Endpoint URL

`/shops/:shopId`

### Request

#### Headers

```json
{
	"Content-Type": "application/json"
}
```

#### Body

- `shopName` (string, required): The name of the Shop.
- `address` (string, required): The address of the shop.

```json
{
	"shopName": "Updated Name",
	"address": "Updated address"
}
```

#### Response

- Success Response - Status Code: `200 OK`

Response Body:

```json
{
	"shopName": "Shop Name",
	"address": "Shop address",
	"_id": "67bebcfc83e4c11073870ad6",
	"menu": [],
	"__v": 0
}
```
