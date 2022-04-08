
<h1 align="center">Pizzeria | MEAN Web App</h1>



<p> This is a MEAN Stack Web Application Project , Created For Learning & Demo Purposes.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Authors](#authors)


## 🧐 About <a name = "about"></a>

- Pizzeria is a **MEAN Stack** web application where users book pizza online.
- The Pizzeria home page provides an 
overview of the organization.

- The Users can choose from the existing menu and 
order pizzas.
- The Users can also customize their pizza by 
choosing ingredients.
- The Shopping Cart page provides an overview of the order.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### **Prerequisites** :

Make sure you have installed all of the following prerequisites on your development machine:

* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Angular - Make sure you've installed Node.js and npm first, then install Angular globally using npm:

    ```
    npm install -g @angular/cli
    ```

### **Inserting Data In MongoDB Database** :

Using MongoDB Compass GUI Tool do the following:

- Create a database named "pizzeria"
- Create a collection with name "pizza" & insert the data into this collection from Data Folder -> **pizza.json** file.
- Create a collection with name "toppingsandingredients" & insert the data into this collection from Data Folder -> **toppingsandingredients.json** file. 

### **Starting Back-End Node Server** :

1) Download or clone the code from this repository.

   If you download as a zip file, be sure to unzip it.

2) Navigate to the pizserver folder.

   There should be a package.json file in this folder.

3) In a command window (or the Command prompt in VS Code), type below command.

    ```
    npm install
    ```

   This creates a **node_modules** folder and installs all packages from the package.json file into that folder. You may see a few warnings during this process, but you should not see any errors.
   
4) In the same command window (or the Command property in VS Code), type 

    ```
    npm start
    ```

   The application should then compile successfully and you should see  message like **"Connected to mongodb via mongoose"** in same window.

5) Go to Browser like Chrome/Edge and type this URL **http://localhost:3000/pizzas** & **http://localhost:3000//toppings** , you should get the response json from DB.

### **Starting Angular Dev Server** :

1) Download or clone the code from this repository.

   If you download as a zip file, be sure to unzip it.

2) Navigate to the pizclient folder.

   There should be a package.json file in this folder.

3) In a command window (or the Command prompt in VS Code), type below command.

    ```
    npm install
    ```

   This creates a **node_modules** folder and installs all packages from the package.json file into that folder. You may see a few warnings during this process, but you should not see any errors.
   
4) In the same command window (or the Command property in VS Code), type 

    ```
    ng serve
    ```

   The application should then compile successfully and you should see  message like **"Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/"**.

5) Congratulations now you have a working pizza app, Bravo!!







## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [Angular](https://angular.io/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Mongoose](https://mongoosejs.com/) - Object Data Modeling (ODM) library for MongoDB and Node.js
- [Bootstrap](https://getbootstrap.com/) - CSS Framework

## ✍️ Authors <a name = "authors"></a>

- [@Nilkanth-Patadiya](https://github.com/Nilkanth-Patadiya) - Idea & Implementation
