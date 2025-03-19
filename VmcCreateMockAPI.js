import React, { useState } from 'react'
import axios from 'axios'

export default function VmcAppCreateMockAPI() {
 // khởi tạo state
 const [vmcAppFullName,setvmcAppFullName] = useState('')
 const [vmcAppAge,setvmcAppAge] = useState(0)
 const [vmcAppActive,setvmcAppActive] = useState(true)

 // api post
 const vmcAppCreateUserApi = "https://67da1cfd35c87309f52b01d1.mockapi.io/K23CNT1-vumaichi-2310900013/Vmc_uses";

 // khi submit form
 const vmcAppHandleSubmit = (event)=>{
     event.preventDefault();
     console.log("vmcAppActive:",vmcAppActive);
     let vmcAppNewUser = {vmcAppFullName,vmcAppAge,vmcAppActive};
     console.log(vmcAppNewUser);

     // ghi dữ liệu vào api
     axios
         .post(vmcAppCreateUserApi, vmcAppNewUser)
         .then((vmcApp_response)=>{
             
         })
     
 }


return (
 <div className='alert alert-info'>
 <h2>Thêm mới users</h2>
 <hr/>
 <form>
     <div className=' mb-1'>
         <label for="vmcAppFullName">Full Name</label>
         <input type='text' name='vmcAppFullName' id="vmcAppFullName" 
             value={vmcAppFullName}
             onChange={(ev)=>setvmcAppFullName(ev.target.value)} />
     </div>
     <div className=' mb-1'>
         <label for="vmcAppAge">Age</label>
         <input type='number' name='vmcAppAge' id="vmcAppAge" 
             value={vmcAppAge}
             onChange={(ev)=>setvmcAppAge(ev.target.value)} />
     </div>
     <div className=' mb-1'>
         <label for="vmcAppActive">Active</label>
         <input type='radio' name='vmcAppActive' id="vmcAppActive_hd" value={'true'} 
             onChange={(ev)=>setvmcAppActive(ev.target.value)} />
             <label for="vmcAppActive_hd"> Hoạt động</label>
         <input type='radio' name='vmcAppActive' id="vmcAppActive_kh" value={'false'} 
             onChange={(ev)=>setvmcAppActive(ev.target.value)}/>
             <label for="vmcAppActive_kh"> Khóa</label>
     </div>
     <button onClick={vmcAppHandleSubmit}>Create</button>
 </form>
</div>
  )
}