import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components import
import EmployeeRegister from "./components/EmployeeRegister"

function App() {
  return (
    <div >
        <Router>
          <Route exact path="/" component={EmployeeRegister} />
      </Router>
    </div>
  );
}

export default App;
