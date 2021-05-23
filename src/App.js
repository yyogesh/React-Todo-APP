import React from 'react';
import './App.css';
import Xyz from './components/Event';
import Parent from './components/Parent';
import Todo from './Todo/Todo';


var badString = <script>alert('your site has been hacked');</script> // XSS
class App extends React.Component {
  user = {
    name: 'test',
    age: 26,
    location: 'Delhi'
  }
  getUserInfo(user) {
    // alert(user.name + ' ' + user.location);
    return user.name + ' ' + user.location
  }
  getLocation = (location) => location || 'unknown';
  getUserAge = (age) => <h1>User Age :: {age}</h1>
  render() {
    return (
      <div className="App">
        {/* <p>Hello React</p>
        <p>user age : {this.user.age + 10}</p>
        <p>user name : {this.user.name}</p>
        <p>{["Red", "Black", "Green"][1]}</p>
        <p>{this.getUserInfo(this.user)}</p>
        <p>{this.getLocation(this.user.location)}</p>
        <p>{this.user.location || 'unknown'}</p>
        {this.getUserAge(this.user.age)}
        {badString}
        <p>{this.user.location ? this.user.location : 'Unknown'}</p>
        <p>{this.user.age && this.user.age >= 18 && <span>You are eliplible for vacination. You age is {this.user.age}</span>}</p>
        <Xyz />
        <Parent />
        <hr /> */}
        <Todo />
      </div>
    );
  }
}

export default App;
