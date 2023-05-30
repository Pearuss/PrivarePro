import { ToastContainer } from "react-toastify";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import "./sass/app.scss";

function App() {
  const content = useRoutes(routes);
  return (
    <>
      <ToastContainer />
      {content}
    </>
  );
}

export default App;
