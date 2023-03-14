import { Routes, Route } from "react-router-dom";

import routes from "./js/routes";
import Layout from "./components/Layout";

import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={routes.home} element={<HomePage />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
