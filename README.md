# Fishes-app

## Simple RESTful app with backend Postgres Database.


## Installation
`
+ [Nodejs](https://nodejs.org/en/)
+ [Expressjs](https://expressjs.com/)
+ npm install pg
+ npm install -g nodemon


#### **Simply run**

```shell
$ node app.js or nodemon

```

##### **Endpoints**


##### **Endpoints**
    + GET /fishes - Display a list  of fish objects
    + POST /fishes - Creates a new fish object
    + PUT /fishes/:id - Updates an existing fish object
    + DELETE /fishes/:id - Removes an existing fish object

###### **Parameters**

```
    {
        "name": <reviewer_name>,
        "type": <type>
    }
```

###### ** File Structure**
```
├── app.js
├── db
│   └── index.js
├── index.js
├── package.json
├── package-lock.json
├── README.md
└── routes
    └── fishes.js
```
