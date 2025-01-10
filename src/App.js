import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Userlisting from "./components/Userlisting";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <Link to={"/"}> Home </Link>
            <Link to={"/userlisting"}>User</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userlisting" element={<Userlisting />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/user/edit/:code" element={<UpdateUser />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          className="toast-position"
          position="bottom-right"
        ></ToastContainer>
      </div>
    </Provider>
  );
}

export default App;
