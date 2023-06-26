import { Route, Routes, Navigate } from "react-router-dom";
import SignInScreen from "./pages/SigninScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInScreen />} />
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
}

export default App;
