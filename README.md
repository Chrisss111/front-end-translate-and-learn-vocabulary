Translate and Build Vocabulary

Welcome to the front-end repo for this project!

## Introduction

This is a translation web app. The target audience is intermediate to advanced language learners. With this app you can paste a text in a foreign language into the designated text box then indicate with an asterisk (*) which specific words in the text you want translated. Then when you press enter a vocabulary list of the words you indicated will appear, along with your original text. For each word in the vocabulary list you will have the foreign word and its English translation, a link to a more detailed translation (on Google Translate), an input box to put any notes you want to write about the word. 

After your vocabulary list has been generated you will have the option to save it (along with the original text) for future reference/study


## Technologies

Front-end - React

Backend - Python, Flask, SQLAlchemy, PostgresSQL

External APIs - Google Translate API 

## Instructions

***In order to use this web app you will need to get a Google API key to use the Google Translate API ***

1.) Clone both the front-end and backend repositories
2.) For the backend: create and acivate the virtual environment with $ python3 -m venv venv then
$ source venv/bin/activate, in the virtual environment install project requirements with $ pip install -r requirements.txt, create a local database named _development, 
create .env file and add this vAdd this environment variable: FLASK_ENV=development

Also, add the environment variable SQLALCHEMY_DATABASE_URI to hold the path to your development database.

for example it can state that SQLALCHEMY_DATABASE_URI=here put the path

download the json files associated with your Google Translate API key and make sure to put it in root project folder
then run the backend server with $ FLASK_ENV=development flask run


For the front-end, install axios with $ yarn add axios, create .env file with the variable REACT_APP_BACKEND_URL equal to your local host, then start the front-end server with
$ npm start or $ yarn start

Once the web app opens up, and assuming you have set up the backend along with the Google API key/json file, you should be able to follow the instructions on the home page and start using the app!


