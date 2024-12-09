import React from "react";
import "./Loader.css"; // Include the CSS for the loader

function Loader() {
  return (
    <div id="loader">
      <div className="planet-top"></div>
      <div className="planet-bottom"></div>
      <div className="ring"></div>
    </div>
  );
}

export default Loader;
