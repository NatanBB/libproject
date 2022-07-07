import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

export default function Login() {
  //todo
  return (
    <div className="logon-container">
      <section className="form">
        <img src="https://img.freepik.com/vetores-premium/livros-e-pessoas-lendo-publicacoes-decoracao-isolada_87689-1401.jpg?w=900" alt="icon" className="iconLogin" />
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
      <img src={"https://img.freepik.com/vetores-gratis/livraria-com-variedade-de-livros-e-publicacoes_87689-4225.jpg?w=2000"} alt="Library" />
    </div>
  )
}