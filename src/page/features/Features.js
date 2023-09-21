import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CardFeature from "../../components/Cards/CardFeature";
import "./Features.css"
import content from './content.json'

function Features() {

  
  return (
    <>
      <Navbar/>
      <div className="feature-body py-5">
        <h1 className="mt-2 mb-2 text-center feature-title">{content?.title.map((word, index) => (
        <span
          key={index}
          className={word.style ? word.style : null}
        >
          {word.text}
        </span>
      ))}</h1>
        <p className="mb-5 text-center feature-sub">{content?.sub_title.map((word, index) => (
        <span
          key={index}
          className={word.style ? word.style : null}
        >
          {word.text}
        </span>
      ))}</p>
        <div className="row mx-auto my-auto card_grid">
          <div className="col-12 align-items-center justify-content-evenly d-md-flex d-sm-block">
            {content?.card?.feature.map((features,index)=>(
              <div key={index}>
              <CardFeature
              
              picture={features.image}
              title={features.title}
              description={features.desc}
              feature_name={features.name}
              />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
