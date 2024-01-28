import React from "react";
import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const containerVariant = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      type: "spring",
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: easeInOut },
  },
};

const toppingsVariant = {
  hoverEffect: {
    originX: 0,
    scale: 1.2,
    color: "#f8e111",
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
};

const buttonVariant = {
  visible: {
    x: [-30, 20, -30, 20, -30, 0],
    transition: {
      delay: 1.2,
    },
  },
  hoverEffect: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255",
    boxShadow: "0px 0px 8px rgb(255, 255, 255",
    transition: {
      duration: 0.7,
      repeat: Infinity,
    },
  },
};

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <>
      <Helmet>
        <title>Pizza Joint pizza-toppings-selection</title>
        <meta
          name="description"
          content="Choose desired toppings to go with your pizza base"
        />
        <link rel="canonical" href="/toppings" />
      </Helmet>
      <motion.div
        variants={containerVariant}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
        className="toppings container"
      >
        <h3>Step 2: Choose Toppings</h3>
        <ul>
          {toppings.map((topping) => {
            let spanClass = pizza.toppings.includes(topping) ? "active" : "";
            return (
              <motion.li
                variants={toppingsVariant}
                whileHover={"hoverEffect"}
                key={topping}
                onClick={() => addTopping(topping)}
              >
                <span className={spanClass}>{topping}</span>
              </motion.li>
            );
          })}
        </ul>

        <Link to="/order">
          <motion.button variants={buttonVariant} whileHover={"hoverEffect"}>
            Order
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
};

export default Toppings;
