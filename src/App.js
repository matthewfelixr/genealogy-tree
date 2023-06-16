import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from './page/landing/LandingPage';
import Features from './page/features/Features';
import AdminDashboard from './page/admin/dashboard/AdminDashboard';
import AdminLogin from './page/admin/login/AdminLogin';


function App() {
  const loggedIn = true;
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/features" element={<Features/>}></Route>

        <Route exact path="/admin" element={ 
          loggedIn 
          ? <AdminDashboard/>
          : <AdminLogin/>
          // <Navigate replace to={"/admin/login"}/>
          }>
        <Route path="login" element={<AdminLogin/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
