import About from "./components/about";
import Hero from "./components/hero";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/PutTheTrust/room-homepage">
          Bekithemba Mdluli
        </a>
        .
      </div>
    </div>
  );
}

export default App;
