import React, { Component } from 'react';
import VmcRenderCondition from './components/VmcRenderCondition.js';
import VmcRenderList from './components/VmcRenderList.js';
import VmcRenderListStudent from './components/VmcRenderListStudent.js';

class VmcApp extends Component {
  render() {
    return (
      <div className='container border mt-3'>
        <h1> Vũ Mai Chi - Lesson 7 - Render condition - Render List Key </h1>
        <VmcRenderCondition />
        <VmcRenderList />
        <VmcRenderListStudent />
      </div>
    );
  }
}

export default VmcApp;
