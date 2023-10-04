import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className="relative h-screen z-10 overflow-hidden">
        <div className="absolute -top-52 left-0 rotate-45 " style={{ margin: 0 }}>
          <img
            src="./assets/pokemoncardback.png"
            alt=""
            className="w-[300px]"
          />
        </div>
        <div
          className="absolute top-96 -left-28 transform rotate-6 -translate-y-1/2"
          style={{ margin: `15px` }}
        >
          <img
            src="./assets/pokemoncardback.png"
            alt=""
            className="w-[300px]"
          />
        </div>
        <div
          className="absolute -bottom-28 -left-14  -rotate-45"
          style={{ margin: `15px` }}
        >
          <img
            src="./assets/pokemoncardback.png"
            alt=""
            className="w-[300px]"
          />
        </div>
  {/* Right */}
        <div className="absolute -top-52 right-0 -rotate-12 " style={{ margin: 0 }}>
          <img
            src="./assets/pokemoncardback.png"
            alt=""
            className="w-[300px]"
          />
        </div>
        <div
          className="absolute top-96 -right-28 transform -rotate-6 -translate-y-1/2"
          style={{ margin: `15px` }}
        >
          <img
            src="./assets/pokemoncardback.png"
            alt=""
            className="w-[300px]"
          />
        </div>
        <div
          className="absolute -bottom-28 -right-14  rotate-12"
          style={{ margin: `15px` }}
        >
          <img
            src="./assets/pokemoncardback.png"
            alt=""
            className="w-[300px]"
          />
        </div>
      </div>
    
      
      <img
            src="./assets/bg.jpg"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover inset-0 z-0 opacity-20"
          />
    </div>
  );
};

export default LandingPage;
