import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Single = () => {
  let pr=useParams()
  let [arr,setArr]=useState([])
  // console.log(id.id);
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${pr.id}`)
      .then((pro) => {
        setArr(pro.data)
      })
  }, [arr])
console.log(arr)
  return (
    <>
    {<>
      <img src={arr.thumbnail} alt="" />
      <h1>{arr.title}</h1>
      </>
    }
    </>
  )
}

export default Single