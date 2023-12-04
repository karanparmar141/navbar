import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
    let [handel,setHandel]=useSearchParams()
    return (
        <>
            <button onClick={()=>setHandel({short:'lth'})}>low to high</button>
            <button onClick={()=>setHandel({short:'htl'})}>low to high</button>
        </>
    )
}

export default Filter