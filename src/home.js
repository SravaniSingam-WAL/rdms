import React, { useState } from "react";
import { getBrandName } from "./utils";

const Home = () => {
  const brandName = getBrandName()
 
  return (
    <div>
      <p className="para">Home Page for RDMS Application</p>
    </div>
  );
};

export default Home;

