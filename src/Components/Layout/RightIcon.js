import React from 'react'
import shoppingCartIcon from './assets/shopping-cart1.png';
function RightIcon() {
  return (
    <div className="RightIcon">
      <div className="icon">
        <img src={shoppingCartIcon} alt="Icon 1" />
      </div>
      <div className="icon">
        <img src={shoppingCartIcon} alt="Icon 2" />
      </div>
      <div className="icon">
        <img src={shoppingCartIcon} alt="Icon 3" />
      </div>
    </div>
  )
}

export default RightIcon