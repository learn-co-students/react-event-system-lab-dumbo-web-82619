// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {




  render(){
    return <button onFocus={ event => console.log('Good!')} onBlur={ event => console.log('Hey! Eyes on me!')} >Button</button>
  }







}
