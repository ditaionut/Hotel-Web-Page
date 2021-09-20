import React, {Component} from 'react';
import Button from "./Button"
import Welcome from './Button';


// class Button extends Component{
//   render() {
//     return(
//       <button onClick = {() => this.changeText()}>on click!</button>
//       )
//     }
//   }
  




class App extends Component{
  render(){
    return(
      <div>
        <Welcome/>
      </div>
    )
  }
}

export default App;
