import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import routes from "./js/routes";

import { RootState } from "./store";

import Layout from "./components/Layout";

import HomePage from "./pages/Home";
import UserLoginPage from "./pages/Login/User";
import SignUpPage from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AddCategory from "./pages/Category/Add";

const PrivateRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  return isLoggedIn ? <>{children}</> : <Navigate to={routes.home} />;
};

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={routes.home} element={<HomePage />}></Route>
          <Route path={routes.login} element={<UserLoginPage />}></Route>
          <Route path={routes.signup} element={<SignUpPage />}></Route>
          <Route
            path={routes.dashboard}
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path={routes.addCategory}
            element={
              <PrivateRoute>
                <AddCategory />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
