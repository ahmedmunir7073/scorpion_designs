import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      phone: '',
      bio: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decode = jwt_decode(token)
    this.setState({
      username: decode.username,
      phone: decode.phone,
      bio: decode.bio
    })
  }

  render() {
    return (
      




      <div className="card-container">
        <div className="upper-container">
          <div className="image-container">
            <img src="../assets/card.jpg" />
          </div>
        </div>
        <div className="lower-container">
          <div style={{marginTop: '30px'}}>
            <h3>{this.state.username}</h3>
            <h4>Vector Artist</h4>
          </div>
          <div>
            <h3>{this.state.bio}</h3>
          </div>
          <div style={{marginTop: '70px'}}>
            <a href="/Settings" className="btn" >Settings</a>
          </div>  
        </div> 
      </div>


    )
  }
}

export default Profile;