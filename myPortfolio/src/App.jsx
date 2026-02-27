import {Hero} from "./sections/Hero";
import {About} from "./sections/About";
import {Contacts} from "./sections/Contacts";
import {Experience} from "./sections/Experience";
import {Projects} from "./sections/Projects";
import { Navbar } from "./layout/Navbar";

function App() {
  

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>

        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contacts />
        

      </main>
    </div>
  );
}

export default App
