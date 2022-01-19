import React from "react";
import Heading from "../components/Heading";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home">
      <Heading />
      <section className="main">
        <div class="card-list">
          <Card key={1} />
          <Card key={2} />
          <Card key={3} />
        </div>
        <div class="product-details">
          <ProductDetail />
        </div>
      </section>
    </div>
  );
};

export default Home;
