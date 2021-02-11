import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

const Accordion = () => {
  const [isToggled, setToggle] = useState(false);

  return (
    <article>
      <h2 role="button" onClick={() => setToggle((prevState) => !prevState)}>
        The Heading
      </h2>
      <AnimatePresence>
        {isToggled && (
          <AccordionStyles
            as={motion.div}
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div initial={{ y: 50 }} animate={{ y: 0 }}>
              <p>
                I'm baby bushwick yr bitters tofu mustache butcher, polaroid
                pitchfork health goth celiac ennui beard. Lo-fi 90's bicycle
                rights hot chicken microdosing marfa edison bulb chillwave
                gastropub jean shorts cronut chicharrones DIY. Kinfolk vice banh
                mi coloring book, kombucha listicle gentrify affogato cray
                narwhal street art direct trade. Microdosing kogi occupy,
                bitters polaroid kale chips wayfarers tacos ennui glossier
                literally asymmetrical echo park heirloom hexagon.
              </p>
            </motion.div>
          </AccordionStyles>
        )}
      </AnimatePresence>
    </article>
  );
};

export const AccordionStyles = styled(motion.div)`
  overflow: hidden;
`;

export default Accordion;
