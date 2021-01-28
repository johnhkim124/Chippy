# Chippy

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Chippy** is the one stop shop for all your snacking cravings. Browse your favorites from sweet to salty, brands to indie, and much more. 
Chippy is a Full Stack Full CRUD web app utilizing a Restful API, Ruby on rails, and React. 


<br>

## MVP

_The **Chippy** MVP is to have a Full CRUD both front-end(React) and back-end(Rails). Have a Restful JSON API with at least 3 database tables with at least one
association._

<br>

### Goals

- _Full CRUD back-end_
- _Restful JSON API_
- _At least 3 database tables 1 association_
- _Full CRUD front-end_
- _At least 8 components_
- _Sleek professional styling/design_
- _Responsive design at least 2 media-queries_
- _Linting_
- _Deployment_

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-end._ |
|   React Router   | _Routes._ |
|      Rails       | _Back-end/DB._ |


<br>

### Client (Front End)

#### Wireframes



![Wire Frame](https://puu.sh/Hb8yT/e9f34a3897.png)

- Desktop Landing

![Wire Frame](https://puu.sh/Hb8A6/dbe581fdaa.png)

- Resource Index

![Wire Frame](https://puu.sh/Hb8KN/096f209a9c.png)

- Resource Show

![Create](https://puu.sh/Hb8Cr/d472e7e386.png)

- Desktop Create

![Wire Frame](https://puu.sh/Hb8MC/2aeeb8c68e.png)

- Tablet Resource Index

![Wire Frame](https://puu.sh/Hb8NA/53f99a66ec.png)

- Tablet Resource Index

#### Component Tree



#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ footer/
            |__ Footer.jsx
      |__ layout/
            |__ Layout.jsx
      |__ nav/
            |__ Nav.jsx
|__ screens/
      |__ Login
            |__ Login.jsx
      |__ Register
            |__ Register.jsx
      |__ Snacks
            |__ Snacks.jsx
      |__ SnackDeatails
            |__ SnackDeatails.jsx
      |__ AddSnack
            |__ AddSnack.jsx
      |__ EditSnack
            |__ EditSnack.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ snacks.js
      |__ flavors.js

```

#### Component Tree

![Component Hierarchy]()

![Component tree](https://puu.sh/Hb9BL/33893702af.png)

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Approved    |    H     |     2 hrs      |       hrs     |     TBD     |
| Create Rails/React  |    H     |     1 hrs      |       hrs     |     TBD     |
| User Auth           |    H     |     3 hrs      |       hrs     |     TBD     |
| Full CRUD Back-end  |    H     |     6 hrs      |       hrs     |     TBD     |
| Component Layout    |    H     |     2 hrs      |       hrs     |     TBD     |
| Component List      |    H     |     3 hrs      |       hrs     |     TBD     |
| Component Details   |    H     |     2 hrs      |       hrs     |     TBD     |
| Component Edit      |    H     |     1 hrs      |       hrs     |     TBD     |
| Full CRUD Front-end |    H     |     3 hrs      |       hrs     |     TBD     |
| Styling CSS         |    H     |     5 hrs      |       hrs     |     TBD     |
| POST MVP            |    L     |     4 hrs      |       hrs     |     TBD     |
| Polishing           |    L     |     3  hrs     |       hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |       hrs     |     TBD     |



<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.
![ERD Model](https://puu.sh/Hbb70/0f5ad5aebf.png)

<br>

***

## Post-MVP
- _User Reviews
- _User Favorites_
- _Polished Sleek Design_
- _Shopping Cart_
- _Checkout Functional_

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions
