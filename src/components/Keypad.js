// Code Keypad Component Here
import React from 'react'

export default class KeyPad extends React.Component {


  render(){
    return <input type="password" onKeyUp={ event => console.log('Entering password...')}></input>
  }
}
