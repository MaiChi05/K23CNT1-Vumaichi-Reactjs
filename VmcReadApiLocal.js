import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function VmcReadApiLocal() {
    // khởi tạo state
    const [vmcListUser, setvmcListUser] = useState([])
    // đọc dữ liệu từ api local  và set cho vmcListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((vmcResponse)=>{
                setvmcListUser(vmcResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Class</th>
                    <th>Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    vmcListUser.map((vmcItem, index)=>{
                        return (
                            <tr>
                                <td>{vmcItem.vmcFullName}</td>
                                <td>{vmcItem.vmcAge}</td>
                                <td>{vmcItem.vmcClass}</td>
                                <td>{vmcItem.vmcId}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}