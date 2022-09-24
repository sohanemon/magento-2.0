import "swiper/css/bundle";
import BestSelling from "./components/best-selling";
import Demo from "./components/demo";
import Footer from "./components/footer";
import Navbar from "./components/header/navbar";
import NavbarTop from "./components/header/navbar-top";
import Hero from "./components/hero";

function App() {
  return (
    <div className=''>
      <NavbarTop />
      <Navbar />
      <Hero />
      <Demo />
      <BestSelling />
      <Footer />
    </div>
  );
}

export default App;
