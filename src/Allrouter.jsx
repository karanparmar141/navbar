import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Men from './Men'
import Women from './Women'
import Kids from './Kids'
import Single from './Single'

const Allrouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Men' element={<Men/>} />
                <Route path='/men/:id' element={<Single/>}/>
                <Route path='/Kids' element={<Women />} />
                <Route path='/Women' element={<Kids />} />
            </Routes>
        </>
    )
}

export default Allrouter