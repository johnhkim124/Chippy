import './App.css';
import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Layout from "./components/layout/layout/Layout";
import { loginUser, registerUser, verifyUser, removeToken } from "./sevices/auth";
import Login from "./screens/Login"
import Signup from './screens/Signup';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/")
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/")
  }



  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route path="/login">
          <Login handleLogin={handleLogin}/>
        </Route>
        <Route path="/signup">
          <Signup handleRegister={handleRegister}/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
