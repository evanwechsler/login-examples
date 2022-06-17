import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginOne from "./pages/one/Login/Login";
import PrivateRoute from "./router/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<PrivateRoute element={<Home />} />} />
        <Route path="/login1" element={<LoginOne />} />
      </Routes>
    </div>
  );
}

export default App;
