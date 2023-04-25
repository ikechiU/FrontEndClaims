import { Route, Routes } from "react-router";
import { LoginPage } from "./components/LoginPage";
import { HomePage } from "./components/HomePage";
import { ClaimBoard } from "./components/ClaimBoard";
import { MotorClaimForm } from "./components/MotorClaimForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/form" element={<MotorClaimForm />} />
        <Route path="/claim" element={<ClaimBoard />} />
      </Routes>
    </div>
  );
}

export default App;
