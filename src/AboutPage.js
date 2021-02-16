import React from "react";
import { motion } from "framer-motion";
import Squares from "./components/Squares";

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: 100,
  },
};

const h2Variants = {
  initial: { opacity: 0, y: -100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
    },
  },
  exit: { opacity: 0, y: 100 },
};

const AboutPage = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h2
        variants={h2Variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        About page
      </motion.h2>
      <Squares />
    </motion.div>
  );
};

export default AboutPage;
