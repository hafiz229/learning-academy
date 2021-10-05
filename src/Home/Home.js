import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TopService from "../TopService/TopService";
import "./Home.css";

const Home = () => {
  const [topservices, setTopServices] = useState([]);

  // load data
  useEffect(() => {
    fetch("./topservices.json")
      .then((res) => res.json())
      .then((data) => setTopServices(data));
  }, []);
  return (
    <div>
      <div className="container d-flex align-items-center justify-content-between">
        <div className="">
          <h1 className="text-start">Get Training</h1>
          <h1 className="text-start">Get Certified</h1>
          <p className="text-start">
            At Learning Academy, we provide a wide selection of
            outstanding training and certification courses for people of all
            ages.
          </p>
        </div>
        <div className="col-1"></div>
        <div>
          <img
            className="ms-5 col-9"
            src="https://static.vecteezy.com/system/resources/previews/001/879/420/non_2x/illustration-of-e-learning-makes-it-easy-for-student-to-learn-distance-learning-with-laptop-and-internet-online-home-work-courses-and-study-for-open-knowledge-stationery-and-stack-of-book-free-vector.jpg"
            alt=""
          />
        </div>
      </div>
      <h2 className="my-4">Top Services</h2>
      <div className="container d-flex justify-content-evenly">
        <div></div>
        <div className="top-service-container">
          {/* rendering top services */}
          {topservices.map((topservice) => (
            <TopService
              key={topservice.id}
              topservice={topservice}
            ></TopService>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
