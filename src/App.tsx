import { Route, Routes, Navigate } from "react-router-dom";
import SignInScreen from "./pages/SigninScreen";
import DashboarScreen from "./pages/DashboarScreen";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboarScreen />} />
      <Route path="/" element={<SignInScreen />} />
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
}

export default App;
