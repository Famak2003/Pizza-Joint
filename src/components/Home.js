// import { MotionConfig } from "framer-motion";
import { easeIn, easeInOut, motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";
import { Helmet } from "react-helmet-async";

const homeVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delay: 0.7,
      duration: 2,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: easeInOut },
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
      ease: easeIn,
    },
  },
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Pelumi Pizza Shop</title>
        <meta
          name="description"
          content="Try out our family size chicken pizza, its the best you could imagine we promise"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <motion.div
        variants={homeVariant}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
        className="home container"
      >
        <h2>Welcome to Pizza Joint</h2>
        <NavLink to="/base">
          <motion.button
            variants={buttonVariant}
            animate={"visible"}
            whileHover={"hoverEffect"}
          >
            Create Your Pizza
          </motion.button>
        </NavLink>
        <Loader />
      </motion.div>
    </>
  );
};

export default Home;
