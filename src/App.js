import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebcamCapture from "./components/webcam/WebcamCapture";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import CreateEmployeForm from "./components/CreateEmployeForm";

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        <Route path='/faceauth' element={<WebcamCapture />} ></Route>

          <Route path='/' element={<SignIn />} ></Route>
          <Route path='/Register' element={<AdminLogin />} ></Route>
          <Route path='/Register' element={<AdminDashboard />} ></Route>
          <Route path='/Dashboard' element={<Dashboard />} ></Route>
          <Route path='/admin' element={<AdminLogin />}></Route>
          <Route path='/admin/AdminDashboard' element={<AdminDashboard />}></Route>
          <Route path='/admin/AdminDashboard/CreateEmployeForm' element={<CreateEmployeForm />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
