
import React from 'react'
import VmcAppCreateMockAPI from './components/VmcCreateMockAPI'
import VmcReadApiLocal from './components/VmcReadApiLocal'
import VmcReadMockAPI from './components/VmcReadMockAPI'

function vmcApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1>
            ReactJS - API - Vu Mai Chi
        </h1>
        <hr/>
        <VmcAppCreateMockAPI />
        <VmcReadApiLocal />
        <VmcReadMockAPI />

        <hr/>
        <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
        
        
    </div>
  )
}

export default vmcApp
