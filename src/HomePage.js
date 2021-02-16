import React from "react";
import { motion } from "framer-motion";
import Slideshow from "./components/Slideshow";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Homepage</h2>
      <Slideshow />
    </motion.div>
  );
};

export default HomePage;
