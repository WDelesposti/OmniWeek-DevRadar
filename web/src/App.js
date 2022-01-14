import React, { useEffect, useState } from "react";
import api from "./services/api";

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevForm from './components/DevForm'
import DevItem from './components/DevItem'


/* 
  Componente  -> Ex. App(), uma função/bloco isolado que retorna algum conteúdo HTML-CSS-JS. 
                  Utilizado para fazer uma mesma rotina diversas vezes, 
                  ou isolar um trecho da aplicação que não atinja os outros componetes.
  Propriedade -> Informações que um componente PAI passa para o componente FILHO -> title dentro de App utilizando Header
  Estado      -> Informações mantidas pelo componetente (Lembrar: imutabilidade, por isso foi usado o useState)
  Desestruturação -> Em JS, pegar um vetor/objeto e separar ele em variáveis diferentes
*/

//JSX - União do JS com HTML
function App() {
  const [devs, setDevs] = useState([])


  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data)

    }
    loadDevs();
  }, []);

  async function handleAddDev(data){

    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}


export default App; 