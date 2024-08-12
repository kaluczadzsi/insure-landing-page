import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import ScreenContext from "./context/ScreenContext/ScreenContext";

const App = () => {
  return (
    <ScreenContext>
      <Nav />
      <Hero />
    </ScreenContext>
  );
};

export default App;
