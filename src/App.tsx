import { Routes, Route } from "react-router-dom";

import routes from "./js/routes";
import Layout from "./components/Layout";

import HomePage from "./pages/Home";
import UserLoginPage from "./pages/Login/User";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={routes.home} element={<HomePage />}></Route>
          <Route path={routes.login} element={<UserLoginPage />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
