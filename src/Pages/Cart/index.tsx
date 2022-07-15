import React, { useEffect, useState } from 'react';

import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { FiMinus, FiPlus, FiPower, FiTrash2 } from 'react-icons/fi';
import { api } from '../../services/api';
import { CartProps } from '../Home/homeTypes';

export default function Cart() {

  //#region data
  const [cart, setCart] = useState<CartProps[]>([]);
  const total: any[] = [];
  cart.forEach(item => {
    total.push(item.qtd * item.price)
  })

  let sum = 0;

  for (let i = 0; i < total.length; i++) {
    sum += total[i];
  }

  useEffect(() => {
    handleData();
  }, [])

  const handleData = async () => {
    const { data } = await api.get('cart');
    setCart(data);
  }

  //#endregion

  //#region functions
  const history = useNavigate();

  const handleLogout = () => {
    history("/")
  }

  const handleDelete = async (id: number) => {
    await api.delete(`cart/${id}`)
    handleData();
  }

  const handleAddQtd = async (item: CartProps) => {
    const qtd = { qtd: item.qtd++ }
    await api.patch(`cart/${item.id}`, qtd)
  }

  const handleRemoveQtd = async (item: CartProps) => {
    if (item.qtd > 0) {
      const qtd = { qtd: item.qtd-- }
      await api.patch(`cart/${item.id}`, qtd)
    } else if (item.qtd <= 0) {
      await api.delete(`cart/${item.id}`)
    }
  }
  //#endregion

  return (
    <div className="profile-container">
      <>
        <header>
          <img src={"https://i.imgur.com/dOF75ol.png"} alt="livrary" className="icon" />
          <span>Bem vindo, Natan!</span>

          <Link className="button" to="/marketplace">Ir ao Marketplace</Link>
          <button onClick={handleLogout} type="button">
            <FiPower size={18} color="#E02041" />
          </button>
        </header>

        <div className={"borderContainer"}>
          <h1>Seu carrinho</h1>
          <div className={"header"}>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map(item => (
            <div className={"body"}>
              <p>{item.title}</p>
              <p>R$ {item.price}</p>
              <p>{item.qtd}</p>
              <div>
                <FiPlus size={16} color="#088a0f" className={"buttons"} onClick={e => handleAddQtd(item)} />
                <FiMinus size={16} color="red" className={"buttons"} onClick={e => handleRemoveQtd(item)} />
                <FiTrash2 size={16} color="grey" className={"buttons"} onClick={e => handleDelete(item.id)} />
              </div>
              <p>$ {item.qtd * item.price}</p>
            </div>
          ))}
          <div className={"header"}>
            <div></div>
          </div>
          <h2>{`Total: R$ ${sum}`}</h2>
        </div>
      </>
    </div>
  )
}