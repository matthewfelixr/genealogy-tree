import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "./AdminDashboard.css";
import CardFeatureAdmin from "../../../components/Cards/CardFeatureAdmin/CardFeatureAdmin";
// import RenderFamilyTree from "../../../components/FamilyTree/RenderFamilyTree";
import FormAddData from "../../../components/FormAddData/FormAddData";
import TableAdmin from "../../../components/TableAdmin/TableAdmin";
import FamilyChart from "../../../components/FamilyChart/FamilyChart";

function AdminDashboard() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <Navbar />
      <div className="admin-dashboard d-flex">
        <div className="sidebar-list-container">
          <ul className="sidebar-listing-container p-1 nav-tabs">
            <p className="sidebar-title pt-4"> Dashboard </p>
            <li
              className={`sidebar-list align-items-center py-3 ${
                toggleState === 1 ? "active" : ""
              }`}
              onClick={() => toggleTab(1)}
            >
              <p className="sidebar-list-title">Feature</p>
            </li>
            <li
              className={`sidebar-list align-items-center py-3 ${
                toggleState === 2 ? "active" : ""
              }`}
              onClick={() => toggleTab(2)}
            >
              <p className="sidebar-list-title">Feature</p>
            </li>
            <li
              className={`sidebar-list align-items-center py-3 ${
                toggleState === 3 ? "active" : ""
              }`}
              onClick={() => toggleTab(3)}
            >
              <p className="sidebar-list-title">Feature</p>
            </li>
          </ul>
        </div>
        <div className="admin-dashboard-content ps-4 pt-2">
          <h1 className="admin-dashboard-title"> Hello, Admin</h1>

          <div
            className={`card-features-container d-flex gap-4 mb-5 ${
              toggleState !== 0 ? "d-none" : ""
            }`}
          >
            <CardFeatureAdmin
              picture={"/image/silsilah-keluarga.png"}
              title="Silsilah Keluarga"
              description="Lihat kondisi tampilan grafik silsilah keluarga sekarang"
            />
            <CardFeatureAdmin
              picture={"/image/tambah-silsilah-keluarga.png"}
              title="Tambah Data"
              description="Tambahkan data untuk melakukan perbaruan data silsilah kerajaan"
            />
            <CardFeatureAdmin
              picture={"image/database-silsilah-keluarga.png"}
              title="Tampilkan Database"
              description="Tampilkan database dalam bentuk tabel"
            />
          </div>
          {toggleState === 1 && <FamilyChart/>}
          {toggleState === 2 && <FormAddData />}
          {toggleState === 3 && <TableAdmin />}
          {/* <FamilyChart data ={familyTree}/> */}
          {/* <FormAddData/> */}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
