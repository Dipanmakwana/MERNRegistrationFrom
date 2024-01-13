import { Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp/Signup";
import Login from "./components/LogIn/Login";
import Main from "./components/Main/Main";

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
    <Routes>
      {user && <Route path="/" exact element={<Main />} /> }
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" exact element={<Navigate replace to="/login" />} />
    </Routes>
    </>
  );
}

export default App;
