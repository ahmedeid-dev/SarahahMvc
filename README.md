# Sarah Application

The Sarah Application is a messaging platform built using the MVC (Model-View-Controller) architecture, providing secure user registration, authentication, and message management functionalities. This application allows users to send, receive, and manage messages through a well-structured API.

# Features

-  Models

User Model:

-  username: String (required)

-  email: String (required, unique)
  
-  password: String (hashed, required)

-  OTP: String (for two-factor authentication)


Message Model:

-  content: String (required)

-  receiverId: ObjectId (linked to User model)


# API Endpoints

  User Authentication

-  POST /register: User registration (checks email existence).

-  POST /login: User login (generates JWT token).

-  GET /verify: Token verification middleware to protect routes.


Message Operations

-  POST /messages: Add a new message (authenticated users only).

-  GET /messages: Retrieve all messages for the authenticated user.

-  DELETE /messages/


: Delete a specific message (authenticated users only).


# Additional Features

-  Validation: Ensures data integrity for all user and message operations.

-  Error Handling: Comprehensive error handling for better user experience.

-  Email Notifications: Sends email notifications for relevant actions.


# Installation

Clone the repository:

git clone https://github.com/yourusername/sarah-application.git

Navigate to the project directory:

cd sarah-application

# Install dependencies:

npm install


Start the application:

npm start

# Testing

Use Postman to test the API endpoints. The Postman documentation is included in the repository.


# Future Improvements

-  Enhance security measures, such as rate limiting.

-  Integrate a frontend for a complete user interface.

-  Add advanced message filtering and search functionalities.

# Acknowledgments

Feel free to explore the code and documentation. Contributions and feedback are welcome!
