// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

    // state = {
    //     password: ''
    // }

    onChange = () => {
console.log('Entering password...')
    }

    render(){
        return (
            <div> 
                <input onKeyUp={this.onChange} type='password' />
            </div>
        )
    }
}
export default Keypad
