import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [value, setValue] = useState(0);
  const [isToggled, setToggle] = useState(0);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.3,
      }}
    >
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <motion.h2
          initial={{
            x: 25,
            y: 0,
            skew: -1.4,
            opacity: 1,
          }}
          animate={{
            x: value + "px",
            y: 0,
            skew: 0,
            opacity: isToggled,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          Super Cool
        </motion.h2>

        <button onClick={() => setToggle((prevValue) => (prevValue ? 0 : 1))}>
          Toggle
        </button>
        <input
          type="range"
          min="-100"
          max="100"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <CardGrid>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img alt="card" src={purp} />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
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
