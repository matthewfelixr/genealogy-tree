import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="container-fluid p-0">
        <Navbar />
        <div className="container-fluid p-0 mx-auto text-center mt-5">
          <img alt="logo-sumedang" src="/image/logo-sumedang.png"/>
          <div className="container w-50">
            <p className="w-75 mx-auto pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Link to="/features">
              <button type="button" class="btn btn-success btn-lg">Pelajari Lebih Lanjut</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
