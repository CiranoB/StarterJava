import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Bookkeeper from './pages/bookkeeper/Bookkeeper';
import ListDiet from './components/diet/listDiet/ListDiet';
import RegisterDiet from './components/diet/registerDiet/RegisterDiet';
import ListGroup from './components/group/listGroup/ListGroup';
import RegisterGroup from './components/group/registerGroup/RegisterGroup';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import UserF from './pages/user/User';
import MyPays from './pages/user/MyPays';
import RegisterPay from './components/pay/registerPay/RegisterPay';
import DeletePay from './components/pay/deletePay/DeletePay';
import Nutritionist from './components/nutritionist/Nutritionist';

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <Router>
          <Navbar />
          <div style={{ minHeight: '80vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastrar" element={<Cadastro />} />
              <Route path="/bookkeeper" element={<Bookkeeper />} />
              <Route path="/formularioPay" element={<RegisterPay />} />
              <Route path="/formularioPay/:uuidPay" element={<RegisterPay />} />
              <Route path="/deletePay/:uuidPay" element={<DeletePay />} />
              <Route path="/user" element={<UserF />} />
              <Route path="/mypays" element={<MyPays />} />
              <Route path="/nutritionist" element={<Nutritionist />} />
              <Route path="/listDiet" element={<ListDiet />} />
              <Route path="/registerDiet" element={<RegisterDiet />} />
              <Route path="/updateDiet/:uuidDiet" element={<RegisterDiet />} />
              <Route path="/listGroup" element={<ListGroup />} />
              <Route path="/registerGroup" element={<RegisterGroup />} />
              <Route path="/updateDiet/:uuidGroup" element={<RegisterDiet />} />

            </Routes>
          </div>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
