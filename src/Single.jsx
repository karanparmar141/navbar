import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Single = () => {
  let id=useParams()
  let [arr,setArr]=useState()
  
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id.id}`)
      .then((pro) => {
        setArr(pro.data)
      })
  }, [])

  console.log(arr);

 console.log(thumbnail); 
  return (
    <>
    {<>
      {/* <img src={arr.thumbnail} alt="" /> */}
      {/* <h1>{arr.title}</h1> */}
      </>
    }
    </>
  )
}

export default Single