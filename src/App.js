import "./App.css";
import BannerSlider from "./components/header/BannerSlider";
import Content from "./components/contents/Content";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSlider />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
