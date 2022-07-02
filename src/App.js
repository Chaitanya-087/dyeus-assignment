import './App.css';
import About from './sections/about/About';
import Navbar from './components/Navbar';
import Difference from './sections/difference/Difference';
import Product from './sections/product/Product';
import Mood from './sections/mood/Mood';
import Track from './sections/track/Track';
import Consult from './sections/consult/Consult';
import CreateBox from './sections/createbox/CreateBox';
import Summary from './sections/summary/Summary';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Difference />
        <Product />
        <Mood />
        <Track />
        <Consult />
        <CreateBox />
        <Summary />
      </main>
      <Footer />
    </>
  );
}

export default App;