import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';



function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
       
      </main>

      <Footer />
    </>
  );
}

export default App;
