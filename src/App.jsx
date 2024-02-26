import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app | flex flex-col h-dvh w-full">
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
