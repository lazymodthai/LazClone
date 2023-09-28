import "./App.css";
import BannerSlider from "./components/header/BannerSlider";
import Content from "./components/contents/Content";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSlider />
      <Content />
    </div>
  );
}

export default App;
