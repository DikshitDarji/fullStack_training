import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Card from './Comonents/Card'
import ProductImage1 from './assets/image1.jpeg'
import ProductImage2 from './assets/image2.webp'
import ProductImage3 from './assets/image5.avif'
import ProductImage4 from './assets/image6.jpg'

const data = [
  {
    heading : "Card 1",
    description : "Card 1 Description",
    className : "bg-slate-700",
    image : ProductImage1
  },
  {
    heading : "Card 2",
    description : "Card 2 Description",
    className : "bg-orange-400",
    image : ProductImage2
  },
  {
    heading : "Card 3",
    description : "Card 3 Description",
    className : "bg-red-300",
    image : ProductImage3
  },
  {
    heading : "Card 4",
    description : "Card 4 Description",
    className : "bg-blue-300",
    image : ProductImage4
  },
  {
    heading : "Card 5",
    description : "Card 5 Description",
    className : "bg-cyan-300",
    image : ProductImage2
  },
  {
    heading : "Card 6",
    description : "Card 6 Description",
    className : "bg-purple-300",
    image : ProductImage3
  },
  {
    heading : "Card 7",
    description : "Card 7 Description",
    className : "bg-orange-300",
    image : ProductImage4
  },
  {
    heading : "Card 8",
    description : "Card 8 Description",
    className : "bg-sky-300",
    image : ProductImage1
  },
  {
    heading : "Card 1",
    description : "Card 1 Description",
    className : "bg-slate-300",
    image : ProductImage1
  },
  {
    heading : "Card 2",
    description : "Card 2 Description",
    className:'bg-amber-400',
    image : ProductImage2
  },
  {
    heading : "Card 3",
    description : "Card 3 Description",
    className : "bg-red-300",
    image : ProductImage3
  },
  {
    heading : "Card 4",
    description : "Card 4 Description",
    className : "bg-blue-300",
    image : ProductImage4
  },
  {
    heading : "Card 5",
    description : "Card 5 Description",
    className : "bg-cyan-300",
    image : ProductImage2
  },
  {
    heading : "Card 6",
    description : "Card 6 Description",
    className : "bg-purple-300",
    image : ProductImage3
  },
  {
    heading : "Card 7",
    description : "Card 7 Description",
    className : "bg-orange-300",
    image : ProductImage4
  },
  {
    heading : "Card 8",
    description : "Card 8 Description",
    className : "bg-sky-300",
    image : ProductImage1
  },
]
function App() {
  return (
    <> 
    <div className='p-4 grid grid-cols-4 gap-3 text-center' style={{height:'250vh'}}>
      {data.map((item,i)=>{
          return (
            <Card heading ={item.heading} Discription = {item.description} image={item.image} className={item.className}/>
          )
       })
      }
      {/* <Card heading ={2} Discription = {'this is Discription for card 2'} image={ProductImage2}/> */}
      {/* <Card heading ={3} Discription = {'this is Discription for card 3'} image={ProductImage3}/> */}
      {/* <Card heading ={4} Discription = {'this is Discription for card 4'} image={ProductImage4}/> */}   

    </div>
    </>
    )
  }


export default App
