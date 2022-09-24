import React, { useState } from "react";

function Item({ name, category }) {
  const [ inCart, setInCart ] = useState(false)

  function handleCartText() {
    setInCart((incart) => !inCart)
  }

  const color = inCart ? 'purple' : 'yellow'

  return (
    <li className={inCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartText} style={{background: color}} >{!inCart ? 'Add to Cart' : 'Remove From Cart'}</button>
    </li>
  );
}

export default Item;
