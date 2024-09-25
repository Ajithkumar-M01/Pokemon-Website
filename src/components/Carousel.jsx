import factsData from "../api/facts.json";
import { useEffect, useState } from "react";
import pikachu from "../assets/pikachu.jpg";
import bulbasar from "../assets/bulbasar.jpg";

const Carousel = () => {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    setFacts(factsData);
  }, []);

  return (
    <div className="carousel w-3/4 flex mx-auto rounded-xl h-72">
      {facts.map((fact, index) => (
        <div id={`slide${index}`} className="carousel-item relative w-full" key={fact.factId}>
          <img
            src={pikachu}
            className="w-full"
            alt="Carousel"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white ">
            <h1 className="text-3xl font-bold my-5" style={{ textShadow: "2px 2px 5px black" }}>{fact.title}</h1>
            <p className="w-3/4 text-center font-medium" style={{ textShadow: "2px 2px 5px black" }}>{fact.fact}</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={`#slide${index === 0 ? facts.length - 1 : index - 1}`} className="btn btn-circle">
              ❮
            </a>
            <a href={`#slide${index === facts.length - 1 ? 0 : index + 1}`} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
