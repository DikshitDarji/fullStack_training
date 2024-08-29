import React from 'react'

function Card({heading,Discription}) {
  return (
    <>
      <div className='text-center justify-center p-2 m-2 text-center bg-sky-400 shadow-xl rounded-lg ' style={{width:"300px",height:"120px"}}>
        <h1 className='text-2xl'>Card {heading} Heading</h1>
        <p>{Discription}</p>
     </div>  
    </>
  )
}

export default Card