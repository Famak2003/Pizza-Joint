import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const backDropVariant = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 200,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backDropVariant}
          initial={"hidden"}
          animate={"visible"}
          exit={"hidden"}
        >
          <motion.div variants={modal} className="modal">
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
