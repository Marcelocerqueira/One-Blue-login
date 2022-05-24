import React from "react";
import './register.css'
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { useFormik } from 'formik';
import { ImUser } from "react-icons/im";


import { MdLock } from "react-icons/md"
import api from "../../services/api";

export function Register() {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit: values => {
      api.post('login', {
        name: values.name,
        password: values.password,
      })

    },
  });


  return (

    <div className='login'>
      <div className="login-right">

        <h1>Crie Sua Conta.</h1>
        <div className="grupo-input">
          <div className="loginInput" >
            <ImUser />
            <input
              type="text"
              name="name"
              placeholder="Nome"
              onChange={formik.handleChange}
              value={formik.values.nome}
            />

          </div>

          <div className="loginInput" >
            <MdLock />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <Link to="/">
          <Button onClick={() => {
            formik.handleSubmit()
            alert('Usuário Cried com successors')
          }}>Enviar</Button>
          
          </Link>
        </div>

      </div>

      <div className='login-img'>
        <img src="https://pngimg.com/uploads/simpsons/simpsons_PNG88.png" alt=""></img>
      </div>


    </div>
  )
}
