import React from 'react'

function Card({heading,Discription,image}) {
  return (
    <>
      <div className='flex flex-wrap flex-col items-center text-center p-2 m-2 text-center  shadow-xl rounded-lg gap-10' style={{width:"350px",height:"400px"}}>
        {/* <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" /> */}
        <img src={image} alt="" className='w-4/5 h-30' />
        <h1 className='text-4xl'>{heading} Heading</h1>
        <p>{Discription}</p>
     </div>  
    </>
  )
}

export default Card