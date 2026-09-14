import factsData from "../api/facts.json";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import pikachu from "../assets/pikachu.jpg";

const Carousel = () => {
  const [facts, setFacts] = useState([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setFacts(factsData);
  }, []);

  const goTo = (dir) => {
    if (facts.length === 0) return;
    setDirection(dir);
    setIndex((i) => (i + dir + facts.length) % facts.length);
  };

  const current = facts[index];

  return (
    <div className="relative mx-auto flex h-72 w-3/4 items-center justify-center overflow-hidden rounded-xl">
      <img
        src={pikachu}
        alt="Carousel"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <AnimatePresence mode="wait">
<motion.div
          key={index}
          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
          transition={{ duration: 0.35 }}
          className="relative z-10 flex flex-col items-center justify-center px-6 text-center text-white"
        >
          <h1
            className="my-5 text-3xl font-bold"
            style={{ textShadow: "2px 2px 5px black" }}
          >
            {current?.title}
          </h1>
          <p
            className="w-3/4 text-center font-medium"
            style={{ textShadow: "2px 2px 5px black" }}
          >
            {current?.fact}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="absolute left-5 right-5 top-1/2 z-20 flex -translate-y-1/2 transform justify-between">
        <button
          className="btn btn-circle"
          onClick={() => goTo(-1)}
          aria-label="Previous fact"
        >
          ❮
        </button>
        <button
          className="btn btn-circle"
          onClick={() => goTo(1)}
          aria-label="Next fact"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;