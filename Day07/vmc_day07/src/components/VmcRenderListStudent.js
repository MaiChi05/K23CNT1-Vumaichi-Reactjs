import React, { Component } from 'react';

class VmcRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            VmcStudents:[
                {tcvId:"SV001",VmcName:"Trịnh Văn Chung", VmcAge:45, VmcClass:"K23CNT1"},
                {tcvId:"SV002",VmcName:"Nguyễn Quang A", VmcAge:22, VmcClass:"K23CNT1"},
                {tcvId:"SV003",VmcName:"Nguyễn Quang B", VmcAge:21, VmcClass:"K23CNT1"},
                {tcvId:"SV004",VmcName:"Nguyễn Quang C", VmcAge:23, VmcClass:"K23CNT1"},
            ],
        }
    }
   
    render() {
        // render data
        const VmcElement = this.state.VmcStudents.map((VmcItem, index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{VmcItem.VmcId}</td>
                    <td>{VmcItem.VmcName}</td>
                    <td>{VmcItem.VmcAge}</td>
                    <td>{VmcItem.VmcClass}</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <h2>Danh sách sinh viên</h2>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>VmcID</th>
                            <th>VmcName</th>
                            <th>VmcAge</th>
                            <th>VmcClass</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {VmcElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default VmcRenderListStudent;