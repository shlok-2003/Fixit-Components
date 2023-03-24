import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Content from './components/Content'

function App() {
  return (
    <div className='sm:bg-[#0F3486]'>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
