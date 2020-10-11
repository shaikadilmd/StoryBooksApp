# StoryBooks
•	Developed a web-based application using Google OAuth2.0 which allows users to create and share private, public stories and has access to post, edit, and delete their stories.


## Live Demo
   [StoryBooks](https://desolate-springs-73884.herokuapp.com/)
   
## Reach out to me
[<img align="left" alt="LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />](https://www.linkedin.com/in/prabhakargaddam/)
[<img align="left" alt="Gmail" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg" />](<mailto:prabhakargaddam1729@gmail.com>)

<br/>

## Built with
 - Node
 - Express
 - Mongoose
 - MongoDB
 - Express Handlebars
 - Passport Google OAuth2 for authentication
 
## Usage
 Replace MONGO_DB_URI in app.js with your mongoDB URI.
```javascript
const uri = MONGO_DB_URI;
```
Update config/keys_dev.js with your Google Client Id,Secret
 ```javascript
googleClientID: GOOGLE_CLIENT_ID,
googleClientSecret: GOOGLE_SECRET
```
 
```
# Install dependencies
npm install

# Start 
npm start
```
## You may also like...

- [VidJot](https://github.com/prabha1729/VidJot)  -  An app for jotting down ideas for future Youtube videos.
- [Blog Posts](https://github.com/prabha1729/RESTful-Service-Blog-Post) - REST API for blog posts.
- [Todo App](https://github.com/prabha1729/Todo-App) - A Todo List App.
- [Contact System](https://github.com/prabha1729/RESTful-Service-for-Contact-Entry-System) - A RESTful service to contacts using Node.js
