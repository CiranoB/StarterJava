import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import Bookkeeper from './pages/bookkeeper/Bookkeeper';
import RegisterPay from './components/pay/registerPay/RegisterPay';
import DeletePay from './components/pay/deletePay/DeletePay';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastro />} />
            <Route path="/bookkeeper" element={<Bookkeeper />} />
            <Route path="/formularioPay" element={<RegisterPay />} />
            <Route path="/formularioPay/:uuidPay" element={<RegisterPay />} />
            <Route path="/deletePay/:uuidPay" element={<DeletePay />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
