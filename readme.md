##USER-CONTROLLERS

Register Function: In this function, we accept the incoming user data (name, lastname, email and password) and create a new user record. While saving the password, we use bcrypt library to hash the password.

Login Function: We receive the email and password from the incoming request body. Using the email, we fetch the user from the database and if the passwords match, we create an access token using the sign() method. The sign() method takes a payload (user id), a secret key and expiry duration of the token as input. We also generate the refresh token using the same method. Also, before sending a success response, we set the access token and refresh token to the cookies using the res.cookie() function.

AuthenticatedUser Function: we use the access token of the caller to extract the payload (user id). Using this id, we fetch the user data from the database and return the same to the caller. To extract the payload, we have to use the verify() method from the jsonwebtoken library. This method takes the accessToken from the cookie as input along with the secret key.
