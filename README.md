# Abhiman-ChatRoom


User Register API
Endpoint
POST /api/register

Description
This endpoint allows a new user to register by providing necessary user information.

Request Body
The request body should be a JSON object containing the following fields:

|Field	    |Type	|Description|
|-----------|-------|--------------------------------------------------|
|name	    |String	|User's full name.                                 |
|userId	    |String	|Unique identifier for the user (e.g., email).     |
|password	|String	|Password for the user's account.                  | 
|phone	    |String	|User's contact number (must be exactly 10 digits).|
|deviceId	|String	|Unique identifier for the user's device.          |
|----------------------------------------------------------------------|

Example

{
    "userId":"",
    "deviceId": "123456789ABCDEF",
    "name": "John",
    "phone": "1237897890",
    "password": "12345",
    "availCoins": 0,
    "prime": true
}

### Response

{
  "token":"jwt token"
}


***

## User Login API

### Endpoint
`POST /api/login`

### Description
This endpoint allows an existing user to log in by providing their user credentials.

### Request Body
The request body should be a JSON object containing the following fields:

| Field     | Type   | Description                                   |
|-----------|--------|-----------------------------------------------|
| userId    | String | Unique identifier for the user (e.g., email). |
| password  | String | Password for the user's account.              |


#### Example
```json
{
    "userId": "2",
    "password": "12345"
}

