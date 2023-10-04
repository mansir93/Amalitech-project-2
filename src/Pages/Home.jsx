import React from "react";
import Hero from "../Components/Hero";
import AllProduct from "../Components/AllProduct";
import Layout from "../Components/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <AllProduct />
      </Layout>
    </div>
  );
};

export default Home;
