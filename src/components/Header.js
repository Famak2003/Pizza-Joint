import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const svgVariant = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <header>
      <NavLink to={"/"}>
        <motion.div
          drag="x"
          dragElastic={0.7}
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          className="logo"
        >
          <motion.svg
            variants={svgVariant}
            initial={"hidden"}
            animate={"visible"}
            className="pizza-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <motion.path
              variants={pathVariant}
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            />
            <motion.path
              variants={pathVariant}
              fill="none"
              d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            />
          </motion.svg>
        </motion.div>
      </NavLink>
      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
