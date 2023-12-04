import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { Link, useSearchParams } from 'react-router-dom'
import Filter from './Filter'

const Men = () => {
  let [arr, setArr] = useState([])

  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then((pro) => {
        setArr(pro.data.products)
      })
  }, [])


  let [getparm]=useSearchParams()
  console.log(getparm.get('short'));

  const shorting=(sortvalue)=>{
    if(sortvalue=='lth'){
      let shortpro=arr.sort((a,b)=>a.price-b.price)
    }
    else{
      let shortpro=arr.sort((a,b)=>b.price-a.price)
    }
  }
  useEffect(()=>{
    shorting(getparm.get('short'))
  },[getparm])

  return (
    <>
      <div className='row'>
        <Filter/>
        {
          arr.map((pr,index) => {
            return <>
              <Col sm={3} className='p-4'>
                <Link to={`/men/${pr.id}`}><img src={pr.thumbnail} alt={pr.title} className='col-10' style={{width:'100%',height:'200px'}}/>
                <p>{pr.title}</p>
                <p>{pr.price}</p>
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