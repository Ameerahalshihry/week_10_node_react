# MERN - MongoDB Express React NodeJs

  

## Introduction

We've now seen how React is able to render HTML in the DOM with the help of JSX. We've also combined JavaScript and JSX to loop through arrays of data and apply that data to components via this.props.

Our mission now is to build a frontend app for a robot. On this site you will be using React to build out small components for each section of the site, and show info about their menu and locations through data we've provided.

![](app.png)

### Let’s take a quick look at the four packages:
***express:*** Express is a fast and lightweight web framework for Node.js. Express is an essential part of the MERN stack.

***body-parser:*** Node.js express body parsing middleware.

***cors:*** CORS is a node.js package for providing an Express middleware that can be used to enable CORS with various options. Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.

***mongoose:*** A Node.js framework which lets us access MongoDB in an object-oriented way.

***concurrently:*** A package to allow us start both node and react with one command.
  

## Setup

You will be working in the `week_10_node_react` folder. This repository was created using `npm init` for nodejs and `create-react-app frontend` for the reactjs app, but has additional data and styling.

  

1. Install `npm install -g concurrently` use `sudo npm install -g concurrently` if need be

1. Install the dependencies using `npm install` in the root directory

1. Install the dependencies for reactjs `cd frontend && npm install`

1. Open your text editor.

1. Start the dev server using `npm run dev` * this will start express and reactjs together
  

# Backend NodeJS

Building the back end in nodejs and mongodb we need to:

1. Start mongodb by running `mongod` in the terminal

```
$ mongod
```

 
