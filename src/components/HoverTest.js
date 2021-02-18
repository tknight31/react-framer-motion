import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled, { css } from "styled-components";
import { useHover } from "../hooks/useHover";

const variants = {
  initial: { opacity: 0, y: 100, rotate: "15deg" },
  animate: {
    opacity: 1,
    y: 0,
    rotate: "-11deg",
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 250,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    rotate: "8deg",
    transition: {
      duration: 0.1,
    },
  },
};

const HoverTest = () => {
  const [isHovered, bind] = useHover();

  return (
    <MainBox isHovered={isHovered} {...bind}>
      <AnimatePresence>
        {isHovered && (
          <Button
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            isHovered={isHovered}
          >
            Hello!
          </Button>
        )}
      </AnimatePresence>
    </MainBox>
  );
};

const MainBox = styled.div`
  height: 400px;
  width: 400px;
  background: var(--black);
  position: relative;
  ${(props) =>
    props.isHovered &&
    css`
      /* background: var(--blue); */
    `}
`;

const Button = styled(motion.button)`
  border: none;
  font-size: 2rem;
  font-weight: bold;
  padding: 9px 59px;
  color: var(--black);
  background: var(--green);
  position: absolute;
  bottom: 5px;
  right: -45px;
  &:hover {
    color: var(--green);
    background: var(--black);
    padding: 5px 55px;
    border: solid 4px white;
    box-sizing: border-box;
  }
`;

export default HoverTest;
