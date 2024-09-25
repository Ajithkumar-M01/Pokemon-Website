import { useEffect, useState } from "react";
import dataObject from "../api/trainers.json";
import RegionCard from "../components/RegionCard";
import Carousel from "../components/Carousel";

const FunFacts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataObject.regions);
  }, []);

  console.log(data);

  return (
    <div className="mb-10">
      <h1 className="text-5xl text-center my-9">Pokemon Regions</h1>
      <RegionCard regionName={data} />
      <h1 className="text-5xl text-center my-9">Fun Facts</h1>
      <Carousel/>
    </div>
  );
};

export default FunFacts;
