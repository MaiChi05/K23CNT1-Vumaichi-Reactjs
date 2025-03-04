import React from 'react'
import VmcLogin from './VmcLoginComp.Js'
import VmcLogout from './VmcLogoutComp'

export default function VmcLoginControl(props) {
    const VmcElement = props.isLoggedIn ? <VmcLogin /> : <VmcLogout />

    // const VmcLogin = ()=>{
    //     if(props.isLoggedIn)
    //         return <VmcLogout />
    //     else
    //         return <VmcLogin />
    // }

  return (
    <div>
      {VmcElement}
    </div>
  )
}
