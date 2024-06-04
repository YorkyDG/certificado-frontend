import axios from "axios";
import React from "react";
import { useState } from "react";

const backEndURL = "http://localhost:3000/api";
const registerEndPoint = "/signup";

export const useLogin = () => {
  const [uName, setUName] = useState("");
  const [name, setName] = useState("");
  const [cedula, setCedula] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");



  const onSubmit = async(e) => {
    e.preventDefault();
    const registerAPIEndPoint = backEndURL + registerEndPoint;
    const response = await axios.post(registerAPIEndPoint, {uName,name,cedula,email,password,tel,department})
    setUName("");
    setName("");
    setCedula("");
    setEmail("");
    setPassword("");
    setTel("");
    setDepartment("");
    console.log(response)
  };

  return {
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
  };
};
