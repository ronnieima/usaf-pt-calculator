import { useEffect } from 'react';
import Calculator from './layout/Calculator';
import Footer from './layout/Footer';
import NavBar from './layout/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    toast(
      'UPDATE 30 OCT 2023: Currently working on real-time updating min and max values! 📲',
    );
  }, []);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />{' '}
      <NavBar />
      <Calculator />
      <Footer />
    </>
  );
}

export default App;
