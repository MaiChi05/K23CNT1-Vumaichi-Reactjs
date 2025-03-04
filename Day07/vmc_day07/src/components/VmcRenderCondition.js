import React, { Component } from 'react';
import VmcLoginControl from './VmcLoginControl';

class VmcRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    VmcHandleLogin = (ev)=>{
        ev.preventDefault();
        this.setState({
            isLoggedIn:true
        })
    }
    // Hàm xử lý sự kiện logout
    VmcHandleLogout = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:false
        })
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <VmcLoginControl isLoggedIn={this.state.isLoggedIn} />

                {
                    this.state.isLoggedIn ?
                        <button className='btn btn-danger' onClick={this.VmcHandleLogout} >Logout</button>
                        : <button className='btn btn-primary' onClick={this.VmcHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default VmcRenderCondition;