import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const Nav = ({ isNavOpen, setNavOpen }) => {
  return (
    <MenuNav
      variants={variants}
      initial="closed"
      animate={isNavOpen ? "open" : "closed"}
      transition={{ damping: 300 }}
    >
      <button onClick={() => setNavOpen(false)}>Close</button>
      <ul>
        <li>
          <a alt="one" href="#">
            One
          </a>
        </li>
        <li>
          <a alt="two" href="#">
            Two
          </a>
        </li>
        <li>
          <a alt="three" href="#">
            Three
          </a>
        </li>
        <li>
          <a alt="four" href="#">
            Four
          </a>
        </li>
      </ul>
    </MenuNav>
  );
};

const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--black);
  padding: 40px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0;
    margin: 0;
    a {
      color: white;
      text-decoration: none;
      font-size: 2rem;
    }
  }
`;

export default Nav;
