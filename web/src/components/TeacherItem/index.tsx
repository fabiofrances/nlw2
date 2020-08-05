import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/40203915?s=460&u=1ede84772ed62da8de5d8fa7d9f0c3c38f3335c6&v=4" alt="Fabio Franceschetto"/>
            <div>
              <strong>Fabio Franceschetto</strong>
              <span>Química</span> 
            </div>
          </header>
          <p>
          "Lorem ipsum dolor sit amet quis
          <br/> <br/>
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
   );
}

export default TeacherItem;