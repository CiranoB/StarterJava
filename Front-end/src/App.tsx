import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
      <ToastContainer />
      <Router>
        {/* <Navbar /> */}
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastro />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </Router>
    </Provider>
    </>
  );
}

export default App;
