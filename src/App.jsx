import "./App.css";
import { Navbar } from "./components/Navbar";
import { useLogin } from "./hooks/useLogin";
const App = () => {
  return (
    <>
      <Navbar />

      <div className="login">
        <h2>Login</h2>
          
        <input className="input-login" type="email" placeholder="Correo" />
        <input className="input-login" type="password" placeholder="Contraseña" />
        
        <div className="check-boxes">
        <input type="checkbox"/> 
        <h6>Remember me</h6>
        </div>
        <a href="">Forgot password?</a>
        <a href="/Register">No tienes una cuenta?</a>
        
        <div className="log-btn">
        <button className="btn btn-primary">Iniciar sesion</button>
        </div>

      </div>
    </>
  );
};

export default App;
