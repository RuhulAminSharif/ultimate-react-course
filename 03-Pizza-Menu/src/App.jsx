import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Menu from "./components/menu";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
