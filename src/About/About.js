import React from "react";

const About = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center mt-4">
        <div className="text-start w-75">
          <h1>About Us</h1>
          <p>
            Learning Academy is a prominent education provider founded by a
            devoted team of professionals from around the United States. We
            provide certified certification and training to organizations in the
            United States who want to improve their organizational performance.
            Our extensive courses span a wide range of sectors and industries,
            with an emphasis on encouraging high standards of food hygiene,
            corporate wellness, and workplace safety.
          </p>
        </div>
        <div className="col-1"></div>
        <div>
          <img
            className="col-12"
            src="https://static.vecteezy.com/system/resources/previews/002/180/381/non_2x/e-learning-online-education-free-vector.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
