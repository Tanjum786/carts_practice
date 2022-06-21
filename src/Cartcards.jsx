import React from 'react'

function Cartcards(props) {
  return (
      <>
<div>
    <div images={props.image}></div>
    <p price={props.price}></p>
    <button>Add to cart</button>
</div>
      </>
  )
}

export default Cartcards