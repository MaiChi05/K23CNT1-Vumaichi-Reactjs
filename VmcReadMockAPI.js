
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function VmcReadMockAPI() {
    // khởi tạo state 
    const [vmcListUser, setvmcListUser] = useState([])
    // api
    const vmcApiOnline = "https://67da1cfd35c87309f52b01d1.mockapi.io/K23CNT1-vumaichi-2310900013/Vmc_users"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(vmcApiOnline)
            .then((vmc_response)=>{
                setvmcListUser(vmc_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const vmcElementUser = vmcListUser.map((vmc_item, index)=>{
        return(
            <tr>
                <td>{vmc_item.vmc_name}</td>
                <td>{vmc_item.vmc_email}</td>
                <td>{vmc_item.vmc_phone}</td>
                
                <td>{vmc_item.vmc_active?'Hoạt động':'Khóa'}</td>
                <td>{vmc_item.id}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   vmcElementUser
                }
            </tbody>
        </table>
    </div>
  )
}
