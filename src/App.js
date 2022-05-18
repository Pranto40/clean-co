import { Route, Routes } from "react-router-dom";
import AdminRoute from "./Athentication/AdminRoute";
import PrivateRoute from "./Athentication/PrivateRoute";
import Navbar from "./components/Navbar";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";
import Dashboard from "./pages/Dashboard/Dashboard";
import { privateRoute } from "./routes/PrivateRoute";
import { publicRoute } from "./routes/PublicRoute";

function App() {
  return (
    <div className="">
      <Navbar>
        <Routes>
            {
              publicRoute.map(({path, Component}, index) => <Route
              path={path} element={<Component />}
              key={index}
              ></Route>
              )
            }
            <Route element={<PrivateRoute />}>
              {
                privateRoute.map(({path, Component}, index) => <Route
                path={path} element={<Component />}
                key={index}
                />)
              }
            </Route>
            <Route element={<AdminRoute />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="add-admin" element={<AddAdmin />}></Route>
                <Route path="add-service" element={<AddService />}></Route>
              </Route>
            </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
