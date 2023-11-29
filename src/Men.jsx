import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'

const Men = () => {
  let [arr, setArr] = useState([])

  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then((pro) => {
        setArr(pro.data.products)
      })
  }, [])
  console.log(arr)

  const HandelDelet=(i)=>{
    let data=arr.filter((ele,index)=>index !=i)
    setArr(data)
  }
  

  return (
    <>
      <div className='row'>
        {
          arr.map((pr,index) => {
            return <>
              <Col sm={3} className='p-4'>
                <img src={pr.thumbnail} alt={pr.title} className='col-10' style={{width:'100%',height:'200px'}}/>
                <p>{pr.title}</p>
                <button onClick={()=>HandelDelet(index)}>delet</button>
              </Col>
            </>
          })
        }
      </div>
    </>
  )
}

export default Men