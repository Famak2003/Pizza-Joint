import React, { useEffect, useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const containerVariant = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      when: "beforeChildren",
      mass: 0.4,
      damping: 8,
      type: "spring",
      staggerChildren: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: easeInOut },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {
  const [exitPage, setExitPage] = useState(false);
  setTimeout(() => {
    setExitPage(true);
  }, 4000);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.div
      variants={containerVariant}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className="container order"
    >
      <AnimatePresence>
        {!exitPage && (
          <motion.h2 exit={{ y: "-100vh" }} transition={{ duration: 1 }}>
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>
      <motion.p variants={childVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>

      {pizza.toppings.map((topping) => (
        <motion.div variants={childVariant} key={topping}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
