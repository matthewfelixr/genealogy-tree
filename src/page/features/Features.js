import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CardFeature from "../../components/Cards/CardFeature";
import "./Features.css"

function Features() {

  
  return (
    <>
      <Navbar/>
      <div className="feature-body py-5">
        <h1 className="mt-2 mb-2 text-center feature-title">Jelajahi Feature <span className="highlight">GenTree</span></h1>
        <p className="mb-5 text-center feature-sub">Pilihlah <span className="highlight">layanan</span> yang akan anda jelajahi pada Website GenTree</p>
        <div className="row mx-auto my-auto w-75">
          <div className="col align-items-center justify-content-center d-flex">
            <CardFeature
            picture="/image/silsilah-keluarga.png"
            title="Silsilah Keluarga"
            description="Lihat bagaimana silsilah keluarga Kerajaan Sumedang"
            feature_name="family-tree"
            />
          </div>
          {/* <div className="col align-items-center justify-content-center d-flex">
            <CardFeature
            picture="/image/cari-silsilah.png"
            title="Cari Silsilah Keluarga"
            description="Pelajari sebagian silsilah keluarga"/>
          </div> */}
          <div className="col align-items-center justify-content-center d-flex">
          <CardFeature
            picture="/image/cari-silsilah.png"
            title="Generasi Penguasa"
            description="Lihat siapa saja yang pernah menjadi penguasa Kerajaan Sumedang"
            feature_name="ruler-tree"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
