import axios from "axios";
import React from "react";
import { useState } from "react";

const backEndURL = "http://localhost:3000";
const registerEndPoint = "/register";

export const useLogin = () => {
  const [name, setName] = useState("");
  const [cedula, setCedula] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState('');



  const onSubmit = async(e) => {
    e.preventDefault();
    const registerAPIEndPoint = backEndURL + registerEndPoint;
    const response = await axios.post(registerAPIEndPoint, {name,cedula,email,tel,password,department})
    setName("");
    setCedula("");
    setEmail("");
    setTel("");
    setPassword("");
    setDepartment("");
    console.log(response)
  };

  return {
    name,
    setName,
    cedula,
    setCedula,
    tel,
    setTel,
    password,
    setPassword,
    department,
    setDepartment,
    email,
    setEmail,
    onSubmit,
  };
};
