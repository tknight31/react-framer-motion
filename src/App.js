import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";
import Modal from "./components/Modal";
import Accordion from "./components/Accordion";
import Nav from "./components/Nav";

function App() {
  const [value, setValue] = useState(0);
  const [isToggled, setToggle] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])


  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <Header>
        <Menu setNavOpen={setNavOpen} />
        <Nav isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
        <h1>Header</h1>
      </Header>
      <Container>
        <h2>Super Cool</h2>

        <button onClick={() => setToggle(true)}>Toggle</button>
        <input
          type="range"
          min="-100"
          max="100"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <Modal isToggled={isToggled} setToggle={setToggle}>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img alt="card" src={purp} />
          </Card>
        </Modal>
        <Accordion />

        <CardGrid>
          <Card
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              bottom: 100,
              right: 100,
            }}
            style={{ background: "var(--purp)" }}
          >
            <h3>Some card</h3>
            <img alt="card" src={purp} />
          </Card>
          <Card
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x,
              opacity,
              background: "var(--blue)",
            }}
          >
            <h3>Some card</h3>
            <img alt="card" src={blue} />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img alt="card" src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img alt="card" src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
