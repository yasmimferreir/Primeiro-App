import React from 'react'
import Image from './img/login.svg'

import './App.css';

function App() {

  const [comentario, setComentario] = React.useState()
  const [todosOsComentarios, setTodosOsComentarios] = React.useState([])
  



  function digiteiNoTextArea(eventoDoTextArea) {
    setComentario(eventoDoTextArea.target.value)
   
  }

  function cliqueiNoBotao() {
     const todosOsComentariosAnteriores = [...todosOsComentarios, comentario]



   setTodosOsComentarios(todosOsComentariosAnteriores)
  }

  return (
    <div>
      <img src={Image} alt="imagem-pessoas" />
      <textarea onChange={digiteiNoTextArea}></textarea>
      <button onClick={cliqueiNoBotao}>Comentar</button>

      <ul>
        {todosOsComentarios.map((coment) =>  (
       <li key={coment}>{coment}</li>
        ))}
      
      </ul>

    </div>
  );
}

export default App;
