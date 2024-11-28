import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import teamRocket from "../assets/teamRocket.png";

const ScrollAnimationRight3 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    //   triggerOnce: true,
      // Ensures the animation happens only once
    threshold: 0.1, // Adjust this value to control when the animation triggers
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.img
      ref={ref}
      src={teamRocket}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: -400 },
        hidden: { opacity: 0, x: -500 },
      }}
      transition={{ duration: 1 }}
      alt="Animated Image"
      style={{ width: "50%", height: "auto", position: "relative", marginTop: "-8.5em" }}
      className="hidden sm:block"
    />
  );
};

export default ScrollAnimationRight3;

