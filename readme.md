##SETTING UP THE PROYECT
To start the project, after cloning the repository on the local server, do "npm install" at the nicasource_challenge level. After that we can do "npm run dev" to start the server that will be running on port 5000.

To verify all the routes we can use postman with the base of "http://localhost:5000/api/<CORRESPONDING PATH>

IMPORTANT CLARIFICATION: we must first be logged in to do anything about the tasks

##USER-CONTROLLERS
Register Function: In this function, we accept the incoming user data (name, lastname, email and password) and create a new user record. While saving the password, we use bcrypt library to hash the password.

Login Function: We receive the email and password from the incoming request body. Using the email, we fetch the user from the database and if the passwords match, we create an access token using the sign() method. The sign() method takes a payload (user id), a secret key and expiry duration of the token as input. We also generate the refresh token using the same method. Also, before sending a success response, we set the access token and refresh token to the cookies using the res.cookie() function.

AuthenticatedUser Function: we use the access token of the caller to extract the payload (user id). Using this id, we fetch the user data from the database and return the same to the caller. To extract the payload, we have to use the verify() method from the jsonwebtoken library. This method takes the accessToken from the cookie as input along with the secret key.

##TASK-CONTROLLERS
Create Function: In this function we receive the title and the description of the task (the default status is created as "pending"), the user token is extracted from the cookies to verify it through the id.
We proceed with the handling of possible errors and then, the logic of the function: it creates and saves the new task associated with the user in the task table and sends a response with the corresponding status.

Get Task: In this function we only extract the user id from the cookie to check that he is logged in. Once we do that, we proceed to error handling and if we move forward, we get a list of all the tasks of that user and a response with their corresponding status.

Update Task: In this function we can receive title, description or status. We verify that the user is logged in and handle errors. After that, if we move forward, we update the task with what corresponds.

Delete Task: It works with the same mechanic as the Update Task controller
