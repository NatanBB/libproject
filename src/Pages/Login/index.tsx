import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';

function initialState() {
  return {user: '', password: ''};
}

export default function Login() {
  //todo
  const [values, setValues] = useState(initialState);

  function onChange(event: any) {
  const {value, name} = event.target;

    setValues({
      ...values,
      [name]: value,
    })

  }


  return (
    <div className="logon-container">
      <section className="form">
        <img src="https://i.imgur.com/dOF75ol.png" alt="icon" className="iconLogin" />
        <form onSubmit={e => e}>
          <h1>Faça seu login</h1>

          <input
            placeholder="Login"
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
          />
          <input
            placeholder="Senha"
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
          />
          <Link to="/home">
            <button 
              className="button" 
              type="submit"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                console.log(values.user, values.password)
              }}
            >
              Entrar
            </button>
          </Link>


        </form>

      </section>
      <img src={"https://i.imgur.com/77GkPUV.png"} alt="Library" />
    </div>
  )
}