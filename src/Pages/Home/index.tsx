import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

export default function Home() {

  const history = useNavigate();

  const handleLogout = () => {
    history("/")
  }

  return (
    <div className="profile-container">
      <header>
        <img src={"https://i.imgur.com/dOF75ol.png"} alt="livrary" className="icon"/>
        <span>Bem vindo, Natan!</span>

        <Link className="button" to="/registration">Cadastrar novo livro</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Livros cadastrados</h1>

      <ul>
        <li key={1}>
          <strong>LIVRO:</strong>
          <p>{"A Cabana"}</p>

          <strong>DESCRIÇÃO:</strong>
          <p>{"Lorem ipsum tellus ipsum nostra quisque ullamcorper elit aenean fringilla luctus, tempus accumsan amet accumsan libero mauris leo sapien vestibulum cursus, porta magna turpis himenaeos est congue"}</p>

          <strong>VALOR:</strong>
          <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(25)}</p>

          <button onClick={e => e} type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li key={1}>
          <strong>LIVRO:</strong>
          <p>{"Titulo top teste"}</p>

          <strong>DESCRIÇÃO:</strong>
          <p>{"Sit convallis posuere egestas gravida habitasse morbi vivamus mattis augue nam, condimentum ipsum faucibus class accumsan vulputate aenean neque sodales, tristique congue ultrices auctor euismod potenti sagittis quis amet. quam consectetur quisque sit aptent lacus done"}</p>

          <strong>VALOR:</strong>
          <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(48)}</p>

          <button onClick={e => e} type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li key={1}>
          <strong>LIVRO:</strong>
          <p>{"A volta dos que não foram"}</p>

          <strong>DESCRIÇÃO:</strong>
          <p>{"Conubia vehicula maecenas sed adipiscing iaculis tempus inceptos nisl, curabitur congue dolor sollicitudin phasellus sem lacinia, convallis metus quisque interdum pretium placerat varius. sit cursus ultricies vulputate faucibus nisl lacus neque velit urna imperdiet ut inceptos, dui ante quis habitasse nibh erat ac libero semper conubia. etiam malesuada inceptos euismod ip"}</p>

          <strong>VALOR:</strong>
          <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(59)}</p>

          <button onClick={e => e} type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li key={1}>
          <strong>LIVRO:</strong>
          <p>{"A trança da mulher careca"}</p>

          <strong>DESCRIÇÃO:</strong>
          <p>{"Facilisis habitant imperdiet egestas ut hac tellus odio metus interdum eget habitant, non scelerisque rutrum sociosqu proin nibh eleifend congue dolor feugiat. taciti libero inceptos ut commodo erat sagittis torquent mollis felis volutpat mauris aliquet, sed litora nisl iaculis ligula consequat "}</p>

          <strong>VALOR:</strong>
          <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(87.9)}</p>

          <button onClick={e => e} type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li key={1}>
          <strong>LIVRO:</strong>
          <p>{"Poeira em alto mar"}</p>

          <strong>DESCRIÇÃO:</strong>
          <p>{"Nullam fermentum placerat platea inceptos mi amet nostra, tincidunt curabitur lobortis curae scelerisque placerat congue posuere, viverra pulvinar urna sollicitudin lacinia sagittis. purus dictum curabitur a fringilla ipsum eros consectetur inceptos, vestibulum in volutpat "}</p>

          <strong>VALOR:</strong>
          <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(35.5)}</p>

          <button onClick={e => e} type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}