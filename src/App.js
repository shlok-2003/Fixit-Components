import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Content from './components/Content'

function App() {
  return (
    <>
      <Navbar />
      <Content className='sm:bg-[#F3F3F3]'/>
      <Footer />
    </>
  );
}

export default App;
