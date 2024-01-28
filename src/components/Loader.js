import { easeInOut, easeOut, motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { repeat: Infinity, duration: 1 },
      y: { repeat: Infinity, duration: 0.4 },
      ease: easeOut(1),
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: { repeat: Infinity, duration: 0.5, ease: easeInOut },
    },
  },
};

function Loader() {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate={animation}
        className="loader"
      ></motion.div>
      <motion.div onClick={() => cycleAnimation()}>Change Loader</motion.div>
    </>
  );
}

export default Loader;
