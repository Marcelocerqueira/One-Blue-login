import React from "react";
import { Link } from "react-router-dom";
import './login.css'
import { Button } from "../../components/Button";
import { useFormik } from 'formik';
import { ImUser } from "react-icons/im";

import { MdLock, MdLogin } from "react-icons/md"
import api from "../../services/api";

export function Login() {
  

  const formik = useFormik({
    initialValues: {
      nome: '',
      password: '',
      
    },
      
    onSubmit: values => {
      api.post('login', {
        name: values.nome,
        password: values.password,
      })    
        
    },

    
  });


  return (

    <div className='login'>
      <div className="login-right">

        <h1>Faça seu login</h1>
        <div className="grup-input">
          <div className="loginInput" >
            <ImUser />
            <input
              type="text"
              name="nome"
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
          <Link to="/Home">
          <Button onClick={() => {
            formik.handleSubmit()
            
          }
          }>Entrar</Button>
          
          </Link>
          
        </div>
        
        <div className="text-h4">
          <h4>Esqueci minha senha</h4>
        </div>
      
        <div className="conta">
        <Link  to="/Register" >          
          <MdLogin />         
          Criar conta
        </Link>
        </div>
      </div>
    </div>
  )
}
