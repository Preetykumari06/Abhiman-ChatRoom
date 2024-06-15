# Abhiman-ChatRoom

Abhiman-ChatRoom is a chat room application that allows users to register, log in, and engage in conversations. This README file provides information about the API endpoints for user registration and login.

* User Register API
  Endpoint
  POST /api/register
  URL :  https://abhiman-chatroom.onrender.com/api/register

* Description
  This endpoint allows a new user to register by providing necessary user information.

* Request Body
  The request body should be a JSON object containing the following fields:

|Field	  |Type	|Description|
|---------|-------|---------------------------------------------|
|name	    |String	|User's full name.                              |
|userId	  |String	|Unique identifier for the user (e.g., email).|
|password	|String	|Password for the user's account.               | 
|phone	  |String	|User's contact number (must be exactly 10 digits).|
|deviceId	|String	|Unique identifier for the user's device.       |
|-----------------------------------------------------------------|

Example
JSON
  {
    "userId": "",
    "deviceId": "123456789ABCDEF",
    "name": "John",
    "phone": "1237897890",
    "password": "12345",
    "availCoins": 0,
    "prime": true
  }
    
* User Login API
  Endpoint
  POST /api/login
  URL :  https://abhiman-chatroom.onrender.com/api/login

* Description
  This endpoint allows an existing user to log in by providing their user credentials.

* Request Body
  The request body should be a JSON object containing the following fields:

  JSON
  {
    "userId": "2",
    "password": "12345"
  }

* Response
  Upon successful login, the server will respond with a JSON object containing a JWT token.


This README file provides the necessary details for registering and logging in users in the Abhiman-ChatRoom application. Adjust the endpoints, request body fields, and example responses to your specific implementation.

Deployed URL : https://abhiman-chatroom.onrender.com/


