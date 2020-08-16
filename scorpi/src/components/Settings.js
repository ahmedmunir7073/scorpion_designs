import React, {Component} from 'react'

import { updateRec } from './UserFunctions'



  


class Settings extends Component {

 



  

  constructor() {
    super()
    this.state = {
      username: '',
      phone: '',
      address: '',
      email: '',
      bio: '',
      city: '',
      state: '',
      country: '',
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
    
        const update = {
          username: this.state.username,
          phone: this.state.phone,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          country: this.state.country,
          bio: this.state.bio,
          email: this.state.email,
          
        }
    
        updateRec(update).then(res => {
          this.props.history.push(`/login`)
        })
      }

      // componentDidMount() {
      //   const token = localStorage.usertoken
      //   const decode = jwt_decode(token)
      //   this.setState({
      //     username: decode.username,
      //     phone: decode.phone,
      //     bio: decode.bio,
      //     address: decode.address,
      //     city: decode.city,
      //     state: decode.state,
      //     country: decode.country,
      //     email: decode.email
      //   })
      // }





    render(){

  

        return(
            <div>
                <h3>User Profile Seetings</h3>
                <div className="container">
                    <form noValidate onSubmit={this.onSubmit}>
                    <label htmlFor="Username">User Name</label>
                    <input type="text" id="username" value ={this.username} name="username" value={this.state.username} onChange = {this.onChange} placeholder="Enter Your name.." />
                    {/* <input type="submit" defaultValue="Submit" />
                    </form>
                    <form action="/action_page.php"> */}
                    <label htmlFor="phone">Phone #</label>
                    <input type="text" id="phone" name="phone"  onChange = {this.onChange} value={this.state.phone} placeholder="Enter your new Phone #.." />
                    {/* <input type="submit" defaultValue="Submit" />
                    </form >
                    <form action="/action_page.php"> */}
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email"  onChange = {this.onChange} value={this.state.email} placeholder="Enter your new Email.." />
                    {/* <input type="submit" defaultValue="Submit" />
                    </form >
                    <form action="/action_page.php"> */}
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" onChange = {this.onChange} value={this.state.address}  placeholder="Update your address.." />
                    {/* <input type="submit" defaultValue="Submit" />
                    </form>
                    <form action="/action_page.php"> */}
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" onChange = {this.onChange} value={this.state.city} placeholder="Enter your city.." />
                    {/* <input type="submit" defaultValue="Submit" />
                    </form>
                    <form action="/action_page.php"> */}
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" onChange = {this.onChange} value={this.state.state} placeholder="Your your state.." />
                    {/* <input type="submit" defaultValue="Submit" />
                    </form>
                    <form action="/action_page.php"> */}
                    <label htmlFor="country">Country</label>
                    <select id="country" name="country" value={this.state.country} onChange = {this.onChange} >
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        <option value="usa">Pakistan</option>
                        <option value="usa">India</option>
                        <option value="usa">Srilanka</option>
                        <option value="usa">UAE</option>
                        <option value="usa">Arabia</option>
                        <option value="usa">Oman</option>
                        <option value="usa">Qatar</option>
                        <option value="usa">China</option>
                        <option value="usa">Russia</option>
                        <option value="usa">UK</option>
                        <option value="usa">Canada</option>
                    </select>
                    {/* <input type="submit" defaultValue="Submit" />
                    </form>
                    <form action="/action_page.php"> */}
                    <label htmlFor="subject">Update Bio</label>
                    <textarea id="subject" name="bio" placeholder="Write something.." value={this.state.bio} onChange = {this.onChange} style={{height: '100px'}} defaultValue={""} />
                    <input type="submit" />
                    </form>
                </div>
                </div>

        )
                


    }
}


export default Settings