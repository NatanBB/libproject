import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

export default function Login() {
  //todo
  return (
    <div className="logon-container">
      <section className="form">
        <img src="https://i.imgur.com/dOF75ol.png" alt="icon" className="iconLogin" />
        <form onSubmit={e => e}>
          <h1>Faça seu login</h1>

          <input
            placeholder="Login"
          // value={id}
          // onChange={e => setID(e.target.value)}
          />
          <input
            placeholder="Senha"
          // value={id}
          // onChange={e => setID(e.target.value)}
          />
          <Link to="/home">
            <button className="button" type="submit">Entrar</button>
          </Link>
        </form>

      </section>
      <img src={"https://i.imgur.com/77GkPUV.png"} alt="Library" />
    </div>
  )
}