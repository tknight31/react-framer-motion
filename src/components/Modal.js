import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const Modal = ({ isToggled, children }) => {
  return (
    <AnimatePresence>
      {isToggled && (
        <ModalStyles
          as={motion.div}
          initial={{
            scale: 1.4,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 1.4,
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          Hello
          <button>Close</button>
          {children}
        </ModalStyles>
      )}
    </AnimatePresence>
  );
};

export const ModalStyles = styled(motion.div)`
  width: 95%;
  max-width: 600px;
  background: red;
  margin: 0 auto;
  padding-bottom: 60px;
`;

export default Modal;
