import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: {
    opacity: 0,
    x: "-100%",
    transition: {
      delay: 0.25,
    },
  },
};

const liVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
    },
  },
  closed: { opacity: 0, y: -20 },
};

const links = ["one", "two", "three", "four"];

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
        {links.map((link, i) => {
          return (
            <motion.li variants={liVariants} key={`${link}_${i}`}>
              <a alt={link} href="#">
                {link}
              </a>
            </motion.li>
          );
        })}
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
    margin: 0 0 1rem;
    a {
      color: white;
      text-decoration: none;
      font-size: 2rem;
      border-bottom: 2px transparent solid;
      transition: 0.3s ease border;
      &:hover {
        border-bottom: 2px var(--blue) solid;
      }
    }
  }
`;

export default Nav;
