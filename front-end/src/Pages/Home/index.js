import React from "react";
import Navbar from "../../Components/Navbar";
import ImageGallery from "../../Components/ImageGallery";
import Card from "../../Components/Card";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageGallery />
      <h1 className="heading">New Arrival</h1>
      <section className="card-container">
        <Card />
        <Card />
        <Card />
      </section>
      <h1 className="heading">Category</h1>
      <section className="category-container">
        <div className="category-box">Mens</div>
        <div className="category-box">Jewellery</div>
        <div className="category-box">Electronic</div>
        <div className="category-box">Cloths</div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
