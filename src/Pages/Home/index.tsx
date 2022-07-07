import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';

export default function Home() {

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={"https://img.freepik.com/vetores-gratis/loja-de-balcao-da-livraria-com-vetor-de-publicacao_87689-4222.jpg?w=2000"} alt="library" onClick={e => e} className={"registerIcon"} />

          <h1>Cadastrar novo livro</h1>
          <p>Insira o titúlo do livro, uma breve descrição de seu conteúdo, e o preço a ser cadastrado.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para página inicial
          </Link>

        </section>
        <form onSubmit={e => e}>
          <input
            placeholder="Título do livro"
          // value={title}
          // onChange= { e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
          // value={description}
          // onChange= { e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
          // value={value}
          // onChange= {e => setValue(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}