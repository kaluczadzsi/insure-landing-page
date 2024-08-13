import Features from "./components/Features/Features";
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
    </ScreenContext>
  );
};

export default App;
