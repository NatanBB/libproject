import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
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
  const handleAddCart = (id: number, title: string, description: string, price: number) => {
    const preparedData = {
      id: id,
      title: title,
      description: description,
      price: price,
      qtd: 1
    }
    api.post("cart", preparedData)
    handleData();
  }

  //#endregion

  return (
    <div className="profile-container">
      <header>
        <img src={"https://i.imgur.com/dOF75ol.png"} alt="livrary" className="icon" />
        <span>Bem vindo!</span>

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

            <button onClick={e => handleAddCart(book.id, book.title, book.description, book.price)} type="button">
              <Link className="buttonCart" to="">+ Carrinho</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}