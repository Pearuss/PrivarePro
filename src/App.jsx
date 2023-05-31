import { ToastContainer } from "react-toastify";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import "react-toastify/dist/ReactToastify.css";
import "./sass/app.scss";

function App() {
  const content = useRoutes(routes);
  return (
    <>
      <ToastContainer
        toastStyle={{ backgroundColor: "#1A1D2A", color: "white" }}
      />
      {content}
    </>
  );
}

export default App;
