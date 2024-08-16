import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Work from "./components/Work/Work";
import ScreenContext from "./context/ScreenContext/ScreenContext";

const App = () => {
  return (
    <ScreenContext>
      <Nav />
      <Hero />
      <Features />
      <Work />
      <Footer />
    </ScreenContext>
  );
};

export default App;
