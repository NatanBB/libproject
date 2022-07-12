import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiInbox, FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import { Book } from '../Home/homeTypes';
import { api } from '../../services/api';

export default function Marketplace() {

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

  const cartList = () => {
    history("/cart")
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
        <img src={"https://i.imgur.com/dOF75ol.png"} alt="livrary" className="icon" />
        <span>Bem vindo, Natan!</span>

        <Link className="" to=""></Link>
        <button onClick={cartList} type="button">
          <FiShoppingCart size={18} color="black" />
        </button>
      </header>

      <h1>Adicionar ao carrinho</h1>
      <ul>
      {data.map(book => (
          <li key={book.id}>
          <strong>LIVRO:</strong>
          <p>{book.title}</p>

          <strong>DESCRIÇÃO:</strong>
          <p>{book.description}</p>

          <strong>VALOR:</strong>
          <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(book.price)}</p>

          <button onClick={e => handleDelete(book.id)} type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        ))}
      </ul>
    </div>
  )
}