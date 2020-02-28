// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

  handleInputKeyboard = () => console.log('Entering password...')

  render(){
    return (
      <div>
      <input
      type="password"
      onKeyUp={this.handleInputKeyboard}
      />
      </div>
    )
  }
}

export default Keypad;
