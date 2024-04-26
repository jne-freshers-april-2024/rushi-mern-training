import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Navbar from './components/Navbar/NavbarComponent';
import Todo from './components/Todos';
import UserTodo from './components/UserTodo';
import ContactUs from './components/ContactUs';
import SignInForm from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/todo" element={<Todo/>} />
        <Route path="/usertodo" element={<UserTodo/>} />       
        <Route path="/contact" element={<ContactUs/>} />       
        <Route path="/signin" element={<SignInForm/>} />       
        <Route path="/signup" element={<Signup/>} />       

      </Routes>
    </>
  );
}

export default App;
