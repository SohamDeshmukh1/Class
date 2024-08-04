import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="darktheme flex flex-col h-screen">
      <Navbar />
      {/* <div className="flex-grow">
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
