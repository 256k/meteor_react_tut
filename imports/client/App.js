import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Items from '../api/items';
import Item from './item';


class App extends Component { 


addItems = (e) => { 
e.preventDefault();
const itemOne = this.refs.itemOne.value.trim();
const itemTwo = this.refs.itemTwo.value.trim();

if (itemOne !== "" && itemTwo !== ""){
  Items.insert({
    itemOne: {
      text : itemOne,
      value: 0
    },
    itemTwo: {
      text: itemTwo,
      value: 0
    }
  })
  } else {
    alert("please fill in both items");
  }
}
  


render(){
  return ( 
    <div>
    <header>
    <h1>Voting App</h1>
    </header>
    <main>
      <form onSubmit={this.addItems}>
        <input type="text" ref="itemOne"/>
        <input type="text" ref="itemTwo"/>
        <button type="submit">Add Items</button>
      </form>
    
    
      {this.props.items.map(item => {
      return (
      <Item  item={item} key={item._id}/>
    )})}
    </main>
    </div>
  )
}
}

// this is creating a wrapper for meteor to inject the data into the component we want it to give the data to in our case it's App.
export default createContainer(() => {
return{
  items: Items.find({}).fetch()
}
}, App);
