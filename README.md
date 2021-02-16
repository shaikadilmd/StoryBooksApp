# StoryBooks
•	Developed a web-based application using Google OAuth2.0 which allows users to create and share private, public stories and has access to post, edit, and delete their stories.

   
## Reach out to me
[<img align="left" alt="LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />](https://www.linkedin.com/in/shaik-adil/)
[<img align="left" alt="Gmail" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg" />](<mailto:kshaik@uncc.edu>)

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

