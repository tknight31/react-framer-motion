import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const Modal = ({ isToggled, setToggle, children }) => {
  return (
    <AnimatePresence>
      {isToggled && (
        <ModalStyles
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div initial={{ y: 50 }} animate={{ y: 0 }}>
            <button onClick={() => setToggle(false)}>Close</button>
            {children}
          </motion.div>
        </ModalStyles>
      )}
    </AnimatePresence>
  );
};

export const ModalStyles = styled(motion.div)`
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`;

export default Modal;
