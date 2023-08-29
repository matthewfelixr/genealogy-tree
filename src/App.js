import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from './page/landing/LandingPage';
import Features from './page/features/Features';
import AdminDashboard from './page/admin/dashboard/AdminDashboard';
import AdminLogin from './page/admin/login/AdminLogin';
import FamilyTree from './page/features/FamilyTree';
import RulerTree from './page/features/RulerTree';


function App() {

  const token = localStorage.getItem('token')
  // console.log(localStorage.getItem('token'))
  let loggedIn = false
  if(token){
    loggedIn = true
  } else {
    loggedIn = false
  }
  
  return (
    <>
      <Routes>
        <Route path="/" element={!loggedIn ? <LandingPage/> : <AdminDashboard/> }></Route>
        <Route exact path="/features" element={!loggedIn ? <Features/>: <AdminDashboard/>}></Route>
        <Route path='/features/family-tree' element={ !loggedIn?<FamilyTree/>:<AdminDashboard/>}></Route>
        <Route path='/features/ruler-tree' element={ !loggedIn?<RulerTree/>:<AdminDashboard/>}></Route>
        

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
