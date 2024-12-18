import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ash from "../assets/ash1.png"; 
const ScrollAnimationLeft1 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    // triggerOnce: true,
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
      src={ash}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 750 },
        hidden: { opacity: 0, x: 1000 },
      }}
      transition={{ duration: 1 }}
      alt="Animated Image"
      style={{ width: "25%", height: "10em", position: "relative", marginTop: "-8.5em" }}
      className="hidden sm:block"
    />
  );
};

export default ScrollAnimationLeft1;
