import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/header';
import HeroSection from './components/herosection/HeroSection';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Footer/>
    </>
  );
}

export default App;
