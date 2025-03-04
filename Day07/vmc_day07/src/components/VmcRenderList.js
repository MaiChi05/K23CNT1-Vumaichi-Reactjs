import React from 'react'

export default function VmcRenderList() {
    const VmcNameVmcElementNames = ["Chi", "Hoa"];
    // hien thi gia tri cua mang 
    const VmcElementName = VmcNameVmcElementNames.map ((item)=>{
        return <li>{item}</li>
    })
  return (
    <div>
        <h2> danh sách các anh hùng thời đại </h2>
        {VmcElementName}
    </div>
  )
}
