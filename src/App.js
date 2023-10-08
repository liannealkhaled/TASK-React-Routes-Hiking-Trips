import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="*" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/trips" Component={TripsList} />
        <Route path="/TripDetail/:tripId" Component={TripDetail} />
        {/* <Route path="/TripDetail/:tripDiff" Component={TripDetail} /> */}
      </Routes>
    </div>
  );
}

export default App;
