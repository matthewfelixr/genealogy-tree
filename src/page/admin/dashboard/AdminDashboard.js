import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "./AdminDashboard.css";
import CardFeatureAdmin from "../../../components/Cards/CardFeatureAdmin/CardFeatureAdmin";
import TableAdmin from "../../../components/TableAdmin/TableAdmin";
import FamilyTrees from "../../../components/FamilyTrees/FamilyTrees";
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import RulerTree from "../../features/RulerTree";

const base_url = "https://gen-tree-backend-fe240a55091e.herokuapp.com/api/v1"

function AdminDashboard() {
  const [nodes, setNodes] = useState(null);
  const [loaded,setLoaded] = useState(false);
  const [toggleState, setToggleState] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token')
    const decoded = jwt_decode(token)
    if (decoded.exp < Date.now() / 1000) {
      // console.log('Token has expired.');
      logOut();
    } else {
      // console.log('Token has not expired.');
    }
  },[])


  useEffect(() => {
    axios.get(`${base_url}/people`).then((res)=>{
      setNodes(res.data)
      setLoaded(true)
    })
    .catch(
      setNodes(null)
    )
  },[loaded])

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const logOut = ()=> {
    localStorage.removeItem("token");
    window.location.reload()
  }

  return (
    <>
      <Navbar />
      <div className="admin-dashboard d-flex">
        <div className="sidebar-list-container">
          <ul className="sidebar-listing-container p-1 nav-tabs">
            <p className="sidebar-title pt-4" onClick={() => toggleTab(0)}> Dashboard </p>
            <li
              className={`sidebar-list align-items-center py-3 ${
                toggleState === 1 ? "active" : ""
              }`}
              onClick={() => toggleTab(1)}
            >
              <p className="sidebar-list-title">Silsilah Keluarga</p>
            </li>
            {/* <li
              className={`sidebar-list align-items-center py-3 ${
                toggleState === 2 ? "active" : ""
              }`}
              onClick={() => toggleTab(2)}
            >
              <p className="sidebar-list-title">Generasi Penguasa</p>
            </li> */}
            {/* <li
              className={`sidebar-list align-items-center py-3 ${
                toggleState === 3 ? "active" : ""
              }`}
              onClick={() => toggleTab(3)}
            >
              <p className="sidebar-list-title">Feature</p>
            </li> */}
            <li
              className={`logout-button bg-danger align-items-center py-3`}
              onClick={() => logOut()}
            >
              <p className="sidebar-list-title">Log Out</p>
            </li>
          </ul>
        </div>
        <div className="admin-dashboard-content ps-4 pt-2 w-100">
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
            {/* <CardFeatureAdmin
              picture={"image/database-silsilah-keluarga.png"}
              title="Tampilkan Database"
              description="Tampilkan database dalam bentuk tabel"
            /> */}
          </div>
          {toggleState === 1 && <FamilyTrees tree={nodes} />}
          {/* {toggleState === 2 && <RulerTree />} */}
          {toggleState === 3 && <TableAdmin />}

        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
