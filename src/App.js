import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ReactGA from "react-ga";
import { useEffect } from "react";

function initializeGA() {
  ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);
  ReactGA.pageview("/Homepage");
}
function App() {
  useEffect(() => {
    initializeGA();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Header />
    </div>
  );
}

export default App;
