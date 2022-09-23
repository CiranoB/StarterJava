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
import DeleteDiet from './components/diet/deleteDiet/DeleteDiet';
import ListDiet from './components/diet/listDiet/ListDiet';
import RegisterDiet from './components/diet/registerDiet/RegisterDiet';
import ListGroup from './components/group/listGroup/ListGroup';
import DeleteGroup from './components/group/deleteGroup/DeleteGroup';
import RegisterGroup from './components/group/registerGroup/RegisterGroup';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import User from './pages/user/User';
import UserF from './pages/user/User';
import MyPays from './pages/user/MyPays';

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <Router>
          <Navbar />
          <div style={{ minHeight: '100vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastrar" element={<Cadastro />} />
              <Route path="/bookkeeper" element={<Bookkeeper />} />
              <Route path="/user" element={<UserF />} />
              <Route path="/mypays" element={<MyPays />} />
              <Route path="/listDiet" element={<ListDiet />} />
              <Route path="/deleteDiet" element={<DeleteDiet />} />
              <Route path="/registerDiet" element={<RegisterDiet />} />
              <Route path="/listGroup" element={<ListGroup />} />
              <Route path="/deleteGroup" element={<DeleteGroup />} />
              <Route path="/registerGroup" element={<RegisterGroup />} />
              
            </Routes>
          </div>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
