import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CardFeature from "../../components/Cards/CardFeature";
import "./Features.css"

function Features() {
  return (
    <>
      <Navbar/>
      <div className="feature-body py-5">
        <h1 className="mt-2 mb-2 text-center">Hello This is the Feature Title</h1>
        <p className="mb-5 text-center"> and this is should be the explanation for this page</p>
        <div className="row mx-auto my-auto w-75">
          <div className="col align-items-center justify-content-center d-flex">
            <CardFeature
            picture="/image/silsilah-keluarga.png"
            title="Silsilah Keluarga"
            description="Pelajari bagaimana silsilah keluarga Kerajaan Sumedang"/>
          </div>
          <div className="col align-items-center justify-content-center d-flex">
            <CardFeature
            picture="/image/cari-silsilah.png"
            title="Cari Silsilah Keluarga"
            description="Pelajari sebagian silsilah keluarga"/>
          </div>
          <div className="col align-items-center justify-content-center d-flex">
          <CardFeature
            picture="/image/cari-silsilah.png"
            title="Fitur Dalam Pengembangan"
            description="Fitur ini sedang dalam pengembangan"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
