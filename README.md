# Tech-Blog

## Purpose
The purpose of creating the Tech Blog is so users that are interested in tech can post about various topics. The user will be able to edit and delete their post as well as make comments on other user's posts. When the user is logged in, they will be able to navigate to the dashboard to create a post or to the homepage which is linked through Tech-Blog to view the blogs that were added.

## Built With
* HTML
* CSS
* JavaScript
* Sequelize
* MySql2
* express
* dotenv
* bcrypt
* connect-session-sequelize
* express-handlebars
* express-session
* node

## Installation
To install this application, run the following commands in the terminal:
 * npm init
 * npm install express sequelize mysql2 bcrypt connect-session-sequelize express-handlebars express-session node
 * npm install dotenv -save
    * Be sure to save your database, username, and password in the .env file and then make sure it is added to the .gitignore

Then, be sure to go into you mysql shell using:
* mysql -u root -p
    * When here, run source db/schema.sql
    * Then, quit.

In the root of the application run the following commands:
* node seeds
* npm start


## Website
https://github.com/jen2ags/Tech-Blog

## Screen Shot
![Screenshot Tech-Blog](https://github.com/jen2ags/Tech-Blog/blob/main/assets/images/Tech-Blog%20screenshot.png)


## Contribution
Made by Jennifer Jennings
