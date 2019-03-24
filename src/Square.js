import React from "react"
import './Square.css'

// class Square extends React.Component {

//   handleClick = () => this.props.onClick()
//     render() {
//       return (
//         <button className="square" onClick={this.handleClick}>
//           {this.props.value}
//         </button>
//       );
//     }
//   }

function Square(props){
  return (
            <button className="square" onClick={props.onClick}>
              {props.value}
            </button>
          );
}

  export default Square