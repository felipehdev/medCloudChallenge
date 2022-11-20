import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import SideMenu from "./components/SideMenu/SideMenu";
import Home from "./Pages/Home/Home";
import AddUser from "./Pages/AddUser/AddUser";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div className="siteCtn">
        <header>
          <SideMenu />
        </header>

        <div className="dynamicCtt">
          <Routes>
            <Route path="/" exact element={<App/>} />
            <Route path="/addUser" element={<AddUser/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  </React.StrictMode>
);
