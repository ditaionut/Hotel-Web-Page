import React, {Component} from 'react'

class Welcome extends Component {

    constructor(){
      super()
      this.state = {
        text: "What if?"
      }
    }
     
    // changeText() {
    //     this.setState({
    //         text: "What else?"
    //     })
    // }
    changeText(){
      this.setState({
        text: "What else?"
      })
    }

    render(){
      return(
        <div>
        <h1>{this.state.text}!</h1>
        <button onClick= {() => this.changeText()}>on click!</button>
      </div>
    )
  }
}

export default Welcome;