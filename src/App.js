
import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/reasons/Reasons';
import Plans from './components/plans/Plans';
import Testimonial from './components/testimonial/Testimonial';
import Join from './components/join/Join';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonial/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
