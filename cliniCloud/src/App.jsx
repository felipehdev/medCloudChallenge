import "./App.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Title from "./components/Title/Title";
import PatientTable from "./components/PatientTable/PatientTable";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <div className="dashboard">
          <div className="table">
            <Title />
            <div className="cttCtn">
              <PatientTable/>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
