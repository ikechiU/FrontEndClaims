import { Route, Routes } from "react-router";
import { LoginPage } from "./components/LoginPage";
import { HomePage } from "./components/HomePage";
// import { MotorClaimForm } from "./components/MotorClaimForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
