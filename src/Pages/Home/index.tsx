import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import { useState } from 'react';
import { api } from '../../services/api';
import { useEffect } from 'react';
import { Book } from './homeTypes';
// import { toastr } from 'react-redux-toastr'

export default function Home() {

  //#region data
  const [data, setData] = useState<Book[]>([]);

  useEffect(() => {
    handleData();
  }, [])

  const handleData = async () => {
    const { data } = await api.get('books');
    setData(data);
  }

  //#endregion
  
  //#region navigation
  const history = useNavigate();

  const handleLogout = () => {
    history("/")
  }
  //#endregion

  //#region funcitions
  const handleDelete = (id: number) => {
    api.delete(`books/${id}`)
    handleData();
  }
  //#endregion

  return (
    <div className="profile-container">
      <header>
        <img src={"https://i.imgur.com/dOF75ol.png"} alt="livrary" className="icon"/>
        <span>Bem vindo, Natan!</span>

        <Link className="button" to="/marketplace" style={{marginLeft: "80px"}}>Ir ao Marketplace</Link>
        <Link className="button" to="/registration">Cadastrar novo livro</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Livros cadastrados</h1>

      <ul>
        {data.map(book => (
          <li key={book.id}>
          <strong>LIVRO:</strong>
          <p>{book.title}</p>

          <strong>DESCRIÇÃO:</strong>
          <p>{book.description}</p>

          <strong>VALOR:</strong>
          <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(book.price)}</p>

          <button onClick={e => handleDelete(book.id)}>
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}