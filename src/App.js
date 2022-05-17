import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Athentication/PrivateRoute";
import Navbar from "./components/Navbar";
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
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
