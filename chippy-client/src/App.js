import './App.css';
import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Layout from "./components/layout/layout/Layout";
import { loginUser, registerUser, verifyUser, removeToken } from "./sevices/auth";
import Login from "./screens/Login"


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





  return (
    <Layout>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
