import React from "react";
import { motion } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
        y: -50,
        skew: 7.4,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        skew: 0,
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
            x: 500,
            y: -0,
            skew: -7.4,
          }}
          animate={{
            x: 0,
            y: 0,
            skew: 0,
          }}
          transition={{
            duration: 1.3,
          }}
        >
          Super Cool
        </motion.h2>
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
