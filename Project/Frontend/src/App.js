import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import TemplateManagement from "./pages/TemplateManagement";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { routes } from "./routes";
import MainLayout from "./components/MainLayout";
import LandingPage from "./pages/LandingPage";
import TemplateKas from "./pages/TemplateKas";
import ForgotPassword from "./pages/ForgotPassword";
import CustomiseTempl from "./pages/CustomizeTemplate";
import { UserTemplate } from "./pages/UserTemplate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/template/:id" element={<UserTemplate />} />
        <Route element={<ProtectedRoutes component={MainLayout} />}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.name />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
