import React from "react";
import { Navbar } from "./components/Navbar";
import { useLogin } from "./hooks/useLogin";


export const Register = () => {
  const {
    uName,
    setUName,
    name,
    setName,
    cedula,
    setCedula,
    password,
    setPassword,
    tel,
    setTel,
    department,
    setDepartment,
    email,
    setEmail,
    onSubmit,
  } = useLogin();
  return (
    <>
      <Navbar />
      <div className="login">
        <h2>Register</h2>
        <input
          name="username"
          className="input-login"
          type="text"
          placeholder="Nombre De Usuario"
          value={uName}
          onChange={(e) => setUName(e.target.value)}
        />

        <input
          name="fullName"
          className="input-login"
          type="text"
          placeholder="Nombre Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          name="cedula"
          className="input-login"
          type="text"
          placeholder="Cédula"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
        />
        <input
          name="correo"
          className="input-login"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="telefono"
          className="input-login"
          type="text"
          placeholder="Teléfono"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <input
          name="contraseña"
          className="input-login"
          type="password"
          placeholder="Contraseña"
          value = {password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          className="input-login"
          placeholder="Departamento"
          value = {department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="Undefined">Seleccione su departamento </option>
          <option value="Contabilidad">Contabilidad </option>
          <option value="Recursos Humanos">Recursos Humanos </option>
          <option value="Tecnología"> Tecnología</option>
        </select>

        <div className="log-btn">
          <button 
          className="btn btn-primary"
          onClick={onSubmit}
          >Registrarse</button>
        </div>
      </div>
    </>
  );
};
