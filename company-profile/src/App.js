import React, { Suspense, lazy } from 'react';
import './App.css';
import Navbar from './Navbar';

// Lazy load the components
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Service = lazy(() => import('./Service'));
const Products = lazy(() => import('./Products'));
const Contact = lazy(() => import('./Contact'));
const Digitization = lazy(() => import('./Digitization'));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="service">
          <Service />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="digitization">
          <Digitization />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Suspense>
    </div>
  );
}

export default App;



// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Service from './components/Service';
// import Products from './components/Products';
// import Contact from './components/Contact';
// import Digitization from './components/Digitization';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <section id="home">
//         <Home />
//       </section>
//       <section id="about">
//         <About />
//       </section>
//       <section id="service">
//         <Service />
//       </section>
//       <section id="products">
//         <Products />
//       </section>
//       <section id="contact">
//         <Digitization />
//       </section>
//       <section id="contact">
//         <Contact />
//       </section>
//     </div>
//   );
// }
// export default App;
