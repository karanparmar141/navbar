import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Men = () => {
  let [arr, setArr] = useState([])

  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then((pro) => {
        setArr(pro.data.products)
      })
  }, [])
  console.log(arr)


  

  return (
    <>
      <div className='row'>
        {
          arr.map((pr,index) => {
            return <>
              <Col sm={3} className='p-4'>
                <Link to={`/men/${pr.id}`}><img src={pr.thumbnail} alt={pr.title} className='col-10' style={{width:'100%',height:'200px'}}/>
                <p>{pr.title}</p>
                </Link>
              </Col>
            </>
          })
        }
      </div>
    </>
  )
}

export default Men