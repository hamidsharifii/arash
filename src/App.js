import React, { Component } from 'react';
import About from './About';

import './App.css'
import Contactme from './Contactme';
import Main from './Main';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tabindex: 0,
      text: 'Hello'
    }
  }
  render () {
    const { tabindex, text } = this.state
    const { textProps } = this.props

    return (
      <div className="App__mainContainer">
        <div className='App__mainNavbar'>
          <div className='App__tabButtons'
            onClick={()=>{this.setState({ tabindex: 0, text: 'Arash'})}}
          >Main</div>
          <div className='App__tabButtons'
            onClick={()=>{this.setState({ tabindex: 1, text: 'Sanaz'})}}
          >About </div>
          <div className='App__tabButtons'
            onClick={()=>{this.setState({ tabindex: 2, text: 'Hamid'})}}
          >Contact Me</div>
        </div>
        <div className='App__pageContents'>
          {tabindex === 0 && <Main/>}
          {tabindex === 1 && <About/>}
          {tabindex === 2 && <Contactme/>}
        </div>
        {/* <div>{tabindex}</div>
        <div>{text}</div>
        <div>{textProps}</div> */}
      </div>
    );
  }
}

export default App;
