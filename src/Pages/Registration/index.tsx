import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';
import { api } from '../../services/api';

export default function Registration() {
  const [title, setTitle] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [value, setValue] = useState<any>();

  const id = Math.floor(Math.random() * 65536);

  const handleSubmit = async () => {
    const preparedData = {
      id: id,
      title: title,
      description: description,
      price: value
    }
    api.post('books', preparedData)
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={"https://img.freepik.com/vetores-gratis/loja-de-balcao-da-livraria-com-vetor-de-publicacao_87689-4222.jpg?w=2000"} alt="library" onClick={e => e} className={"registerIcon"} />

          <h1>Cadastrar novo livro</h1>
          <p>Insira o título do livro, uma breve descrição de seu conteúdo, e o preço a ser cadastrado.</p>

          <Link className="back-link" to="/home">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para página de livros
          </Link>

        </section>
        <form onSubmit={e => e}>
          <input
            placeholder="Título do livro"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" onClick={handleSubmit}>Cadastrar</button>
        </form>
      </div>
    </div>
  )
}