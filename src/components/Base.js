import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

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

const baseVariant = {
  hoverEffect: {
    scale: 1.2,
    color: "#f8e111",
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
};

const nextVariant = {
  hidden: {
    x: "-100vh",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
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

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerVariant}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              variants={baseVariant}
              whileHover={"hoverEffect"}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={nextVariant}>
          <Link to="/toppings">
            <motion.button variants={buttonVariant} whileHover={"hoverEffect"}>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
