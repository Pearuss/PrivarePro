import Channel from "./Layout/Channel";
import Header from "./Layout/Header";
import ShortVideo from "./Layout/ShortVideo";
import Sidebar from "./Layout/Sidebar";
import "./sass/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Sidebar />
        <div className="main__page">
          <Channel />
        </div>
      </div>
    </div>
  );
}

export default App;
