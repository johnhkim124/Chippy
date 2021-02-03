# Chippy

- [Overview](#overview)
- [Live Demo](#livedemo)
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

## Live Demo

https://determined-jackson-554ec5.netlify.app/

<br>

## Overview

\_**Chippy** is the one stop shop for all your snack cravings e-commerce web app. Browse your favorites from sweet to salty, brands to indie, and much more.
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

|   Library    | Description          |
| :----------: | :------------------- |
|    React     | _Front-end._         |
| React Router | _Routes._            |
|    Rails     | _Back-end/DB._       |
| Material UI  | _Styling_            |
| React Slick  | _Styling/Components_ |

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

![Edit](https://puu.sh/HblIw/ce9444c4cd.png)

- Desktop Edit

![Wire Frame](https://puu.sh/Hb8MC/2aeeb8c68e.png)

- Tablet Resource Index

![Wire Frame](https://puu.sh/Hb8NA/53f99a66ec.png)

- Tablet Resource Index

#### Component Tree

#### Component Hierarchy

```structure

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
| Project Approved    |    H     |     2 hrs      |     1hrs      |      1      |
| Create Rails/React  |    H     |     1 hrs      |     1hrs      |      1      |
| User Auth           |    H     |     3 hrs      |     4hrs      |      5      |
| Full CRUD Back-end  |    H     |     6 hrs      |     7hrs      |      8      |
| Component Layout    |    H     |     2 hrs      |     3hrs      |      4      |
| Component List      |    H     |     3 hrs      |     3hrs      |      5      |
| Component Details   |    H     |     2 hrs      |     3hrs      |      5      |
| Component Edit      |    H     |     1 hrs      |     1hrs      |      2      |
| Full CRUD Front-end |    H     |     3 hrs      |     5hrs      |      6      |
| Styling CSS         |    H     |     5 hrs      |     6hrs      |      6      |
| POST MVP            |    L     |     4 hrs      |     4hrs      |      4      |
| Polishing           |    L     |     3 hrs      |     3hrs      |      3      |
| TOTAL               |          |     6 hrs      |     41hrs     |     50      |

<br>

### Server (Back End)

#### ERD Model

![ERD Model](https://puu.sh/Hbb70/0f5ad5aebf.png)

<br>

---

## Post-MVP

- \_User Reviews
- _User Favorites_
- _Polished Sleek Design_
- _Shopping Cart_
- _Checkout Functional_

---

## Code Showcase

```
const Cart = (props) => {
  const [cartSnacks, setCartSnacks] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const cartData = await getCart();
      setCartSnacks(cartData);
    };
    fetchCart();
  }, [props.currentUser]);

  const mappedCartSnacks = cartSnacks.map((snack, index) => {
    return (
      <div className="single-cart-div">
        <SingleSnack
          id={snack.id}
          imgURL={snack.img_url}
          name={snack.name}
          price={snack.price}
          origin={snack.origin}
          key={index}
        />
      </div>
    );
  });

  return (
    <div className="shopping-cart-div">
      <h1>Shopping Cart</h1>
      <div className="cart-div">{mappedCartSnacks}</div>
    </div>
  );
};
```

## Code Issues & Resolutions

- Had alot of troubles with cart feature.
