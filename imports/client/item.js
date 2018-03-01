import React, { Component } from 'react';
import Items from '../api/items';

class Item extends Component { 
voteOne = () => {
  console.log("voting 1");
  Items.update(this.props.item._id, {
    $inc: {
      'itemOne.value': 1
    }
  })
}
voteTwo = () => {
  console.log("voting 2");
  Items.update(this.props.item._id, {
    $inc: {
      'itemTwo.value': 1
    }
  })
}
render(){
  return (
    <div className="item">
      <div className="vote-one" onClick={this.voteOne}>
        <span>{this.props.item.itemOne.value} </span>
        <h3>{this.props.item.itemOne.text} </h3>
      </div>
      <span> VS </span>
      <div className="vote-two" onClick={this.voteTwo}>  
        <span>{this.props.item.itemTwo.value} </span>
        <h3>{this.props.item.itemTwo.text} </h3>
      </div>
      <br/>
    </div>
    )}
}
    export default Item;