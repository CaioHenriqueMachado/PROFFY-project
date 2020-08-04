import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/42723723?s=460&u=bd4caed80f422f22da8c8f2020468a9d6d3cd699&v=4" alt="Caio Henrique"/>
        <div>
          <strong>Caio Henrique</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Aqui é o primeiro paragrafo.
        <br /> <br />
        Esse aqui é um texto de mentira onde eu falo qualquer coisa que vem (batata) na minha cabeça.
      </p>

      <footer>
        <p>
          Preço/Hora 
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato.
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;