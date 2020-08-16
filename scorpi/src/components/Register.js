import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      phone: '',
      address:'',
      email: '',
      bio: '',
      city: '',
      state: '',
      country: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      username: this.state.username,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      bio: this.state.bio,
      email: this.state.email,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-6 mt-5 mx-auto">
    //         <form noValidate onSubmit={this.onSubmit}>
    //           <h1 className="h3 mb-3 font-weight-normal">Register</h1>
    //           <div className="form-group">
    //             <label htmlFor="name">First name</label>
    //             <input
    //               type="text"
    //               className="form-control"
    //               name="first_name"
    //               placeholder="Enter your first name"
    //               value={this.state.first_name}
    //               onChange={this.onChange}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="name">Last name</label>
    //             <input
    //               type="text"
    //               className="form-control"
    //               name="last_name"
    //               placeholder="Enter your lastname name"
    //               value={this.state.last_name}
    //               onChange={this.onChange}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="email">Email address</label>
    //             <input
    //               type="email"
    //               className="form-control"
    //               name="email"
    //               placeholder="Enter email"
    //               value={this.state.email}
    //               onChange={this.onChange}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="password">Password</label>
    //             <input
    //               type="password"
    //               className="form-control"
    //               name="password"
    //               placeholder="Password"
    //               value={this.state.password}
    //               onChange={this.onChange}
    //             />
    //           </div>
    //           <button
    //             type="submit"
    //             className="btn btn-lg btn-primary btn-block"
    //           >
    //             Register!
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>


      <div className="loginbox">
        <img src="avatar.png" className="avatar" />
        <h1>Sign-up Here</h1>
        <form noValidate onSubmit={this.onSubmit}>
          <div>
            <p>UserName</p>
            <input 
            type = "text" 
            name = "username" 
            placeholder = "Username" 
            value = {this.state.username}
            onChange = {this.onChange}
            />
          </div>
          <div>
            <p>Bio</p>
            <input 
            type = "text" 
            name = "bio" 
            placeholder = "Bio" 
            value = {this.state.bio}
            onChange = {this.onChange}
            />
          </div>
          <div>
            <p>Email</p>
            <input 
            type="text" 
            name ="email"
            placeholder="E-mail" 
            value = {this.state.email}
            onChange = {this.onChange}
            />
          </div>
          <div>
            <p>Password</p>
            <input 
            type = "password" 
            name = "password" 
            placeholder="Password" 
            value = {this.state.password}
            onChange = {this.onChange}
            />
          </div>
          <input type="submit"/>
          
        </form>
      </div>





    )
  }
}

export default Register