import Header from "./Layout/Header";
import Sidebar from "./Layout/Sidebar";
import "./sass/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
