import React, {Component} from 'react';
import './App.css';
import users from './users'
import NavBar from './Components/NavBar/NavBar'
import Card from './Component/Card/Card'
import Controls from './Components/Controls/Controls'
import './reset.css'
// import './Card/Card.css'


class App extends Component{
  constructor(){
    super()

    this.state = {
        users: users,
        page: 1,
    }
  }

  next = () => {
      this.setState({
        page: this.state.page + 1
      })
   }

   prev = () => {
    this.setState({
      page: this.state.page - 1
    })
 }

  render(){
    const filteredUser = this.state.users.filter(user => (
      user.id === this.state.page
    ))
    return(
      <div className='app-container'>
        <NavBar/>
        <Card filteredUser={filteredUser}/>
        <Controls next={this.next} prev={this.prev}/>
      </div>
    )
  }
}

export default App