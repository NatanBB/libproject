import React, { useState } from 'react';
import Image from 'next/image';

import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { FiMinus, FiPlus, FiPower, FiTrash2 } from 'react-icons/fi';

export default function Cart() {
  const [cart, setCart] = useState([1, 2, 3, 4, 5]);

  const history = useNavigate();

  const handleLogout = () => {
    history("/")
  }

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
        {cart.map((item) => (
          <div className={"body"}>
            <p>{"A Cabana"}</p>
            <p>R$ {"80,00"}</p>
            <p>{"2"}</p>
            <div>
            <FiPlus size={16} color="#088a0f" className={"buttons"}/>
            <FiMinus size={16} color="red" className={"buttons"}/>
            <FiTrash2 size={16} color="grey" className={"buttons"}/>
            </div>
            <p>$ {"16,00"}</p>
          </div>
        ))}
        <div className={"header"}>
          <div></div>
        </div>
        <h2>Total: R$ {64},00</h2>
        </div>
      </>
    </div>
  )
}