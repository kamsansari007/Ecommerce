import React from "react";
import "../styles/Loader.css";
const Loader = () => {
  return (
    <>
      <h1 className="text-center">Welcome to E-Commerce Project</h1>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Loader;
