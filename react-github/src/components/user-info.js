'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars2.githubusercontent.com/u/15269663?v=4' />
      <h1 className='username'>
        <a href='https://github.com/Henriquepaisca'>Carlos Henrique</a>
      </h1>

     <ul className='repos-info'>
       <li>Repositórios: 9</li>
       <li>Seguidores: 4</li>
       <li>Seguindo: 8</li>
     </ul>
  </div>
)

export default UserInfo
