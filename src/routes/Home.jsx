import React from "react";
import CategoryDirectory from "../components/CategoryDirectory";
import categories from "../data/categoryDirectory.json";

const Home = () => {
  return (
    <>
      <CategoryDirectory categories={categories} />
    </>
  );
};

export default Home;
