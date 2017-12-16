# Cryptolio

## Hosted on Heroku
 - https://fathomless-inlet-17347.herokuapp.com/
## Git Repo
 - https://github.com/brohlson/cryptolio

## Description on how to use the app

When you arrive at the homepage, you will create a new user using an email and password. After creation, you will then login and it will proceed to your dashboard page where you can add 10 different cryptocoins we support to your portfolio to keep track of.

## Requirements

- Create an app modeling an MVC framework using the newest/latest topics we covered being Sequelize and Handlebars. 

- be able to understand how an ORM like sequelize helps interact with a database in a MVC framework and how templates like handlebars can help organize the data being returned to the client/browser.

## Technologies Used
- Node/NPM
- Javascript
- jQuery/AJAX
- MySQL
- Sequelize
- Express
- Handlebars
- Gulp
- Chart.js
- request, and request-promise node package
- Passport

## Code Explanation
### Overall Lesson Learned
- This project helped put into perspective how work can be split up more efficiently when using the MVC framework. It also highlighted what type of information is required to be passed by those working on front-end or back-end so that things can proceed without waiting on others like route paths, or types of data, or how to send it back, etc...

### Specific Lessons Learned
- There are repercussions to using const and importing/exporting files everywhere else that may use the same variable name
- Heroku deploys with a default of process.env.node_env = production
- Heroku logs is super useful when debuggin why the app won't work once deployed
- How Passport works