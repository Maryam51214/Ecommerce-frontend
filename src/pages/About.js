import React from "react";

const About = () => {
  return (
    <>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpg.jpg"
            alt="about us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 >About Us</h1>
          <p className="text-justify mt-2" style={{ fontStyle:"oblique", margin:"100px 100px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
