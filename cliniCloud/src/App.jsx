import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Title from "./components/Title/Title";
import PatientTable from "./components/PatientTable/PatientTable";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <div className="dashboard">
          <div className="sidebarCtn">
            <div className="sidebar">
              <div className="menu">
              <Button className="btn" variant="contained">🏚 Home</Button>
              <Button className="btn" variant="contained">➕ Add Patient</Button>
              </div>
              <div className="logOutCtn">
                <Button className="btn" variant="contained">❌Sair</Button>
              </div>
            </div>
          </div>

          <div className="table">
            <Title />
            <PatientTable/>
            <div className="tableCtn"></div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
