'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input
        type='search'
        placeholder='Digite o nome do usuario no GitHub' />
    </div>

    <div className='user-info'>
      <img src='https://avatars2.githubusercontent.com/u/15269663?v=4' />
        <h1>
          <a href='https://github.com/Henriquepaisca'>Carlos Henrique</a>
        </h1>

       <ul className='repos-info'>
         <li>Repositórios: 9</li>
         <li>Seguidores: 4</li>
         <li>Seguindo: 8</li>
       </ul>

       <div className='actions'>
         <button>Ver Repositorios</button>
         <button>Ver favoritos</button>
       </div>

       <div className='repos'>
         <h2>Repositórios:</h2>
         <ul>
           <li><a href='!#'>Nome do Repositorio</a></li>
         </ul>
       </div>

       <div className='starred'>
         <h2>Favoritos:</h2>
         <ul>
           <li><a href='!#'>Nome do Repositorio</a></li>
         </ul>
       </div>
    </div>
  </div>
)
export default App;
