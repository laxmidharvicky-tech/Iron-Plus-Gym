import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";
import Trainers from "./Components/Trainers.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import Movingtext from "./Components/Movingtext.jsx";
function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-950 text-white ">
      <Navbar />
      <Hero />
      <About />
      <Movingtext />
      <Services />
      <Trainers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
