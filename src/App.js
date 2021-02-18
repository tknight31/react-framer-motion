import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import Nav from "./components/Nav";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import HoverTest from "./components/HoverTest";

function App() {
  const [value, setValue] = useState(0);
  const [isToggled, setToggle] = useState(false);
  const [isCardActive, setCardActive] = useState(true);

  const [isNavOpen, setNavOpen] = useState(false);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  const location = useLocation();

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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Header>
      <Container>
        <h2>Bruh</h2>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={HoverTest} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </AnimatePresence>
      </Container>
    </motion.div>
  );
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
