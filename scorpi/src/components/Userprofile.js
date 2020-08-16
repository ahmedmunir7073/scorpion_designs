import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Userprofile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decode = jwt_decode(token)
    this.setState({
      first_name: decode.first_name,
      last_name: decode.last_name,
      email: decode.email
    })
  }

  render() {
    return (
    
        
        <div className="container" style={{marginTop: '60px'}}>
        <div className="profile-header">
          <div className="profile-img">
            <img src="../assets/card.jpg" width={200}  />
          </div>
          <div className="profile-nav1-info">
            <h3 className="user-name">Alaina Wick</h3>
            <div className="address">
              <p className="state">Unknown</p>
              <span className="country">Country</span>
            </div>
          </div>
          <div className="profile-option">
            <div className="notification">
              <i className="fa fa-bell" />
              <span className="alert-messege">1</span>
            </div>
          </div>
        </div>
        <div className="main-bd">
          <div className="left-side">
            <div className="profile-side">
              <p className="mobile-no"><i className="fa fa-phone" />+92564xx564864</p>
              <p className="user-mail"><i className="fa fa-envelope" />alainawick243@yahoo.com</p>
              <div className="user-bio">
                <h3>Bio</h3>
                <p className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam consequatur harum possimus nostrum qui culpa? Repellat nisi officiis eos iusto enim, consequuntur excepturi. Illum nam perferendis tenetur perspiciatis eveniet.</p>
              </div>
              <div className="profile-btn">
                <button className="chatbtn">
                  <i className="far fa-images" />Choose 
                </button>
                <button className="createbtn">
                  <i className="fa fa-plus" />
                  Upload
                </button>        
              </div>
              <div className="user-rating">
                <h3 className="rating">4.5</h3>
                <div className="rate">
                  <div className="stars"><i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" /></div>
                  <span className="no-user"><span>123</span>&nbsp;&nbsp; reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="nav1">
              <ul>
                <li onclick="tabs(0)" className="user-post active">Posts</li>
                <li onclick="tabs(1)" className="user-review">Reviews</li>
                <li onclick="tabs(2)" className="user-setting">Settings</li>
              </ul>
            </div>
            <div className="profile-body">
              <div className="profile-posts tab">
                <h1>POSTS</h1>
                <div className="bg-image img1" />
                <div className="bg-image img2" />
                <div className="bg-image img3" />
                <div className="bg-image img4" />
                <div className="bg-image img5" />
                <div className="bg-image img6" />
                <div className="bg-text">TEXT</div>
              </div>
              <div className="profile-review tab">
                <h1>REVIEWS</h1>
                <span className="heading">User Rating</span>
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <p>4.1 average based on 254 reviews.</p>
                <hr style={{border: '3px solid #f1f1f1'}} />
                <div className="row">
                  <div className="side">
                    <div>5 star</div>
                  </div>
                  <div className="middle">
                    <div className="bar-container">
                      <div className="bar-5" />
                    </div>
                  </div>
                  <div className="side right">
                    <div>150</div>
                  </div>
                  <div className="side">
                    <div>4 star</div>
                  </div>
                  <div className="middle">
                    <div className="bar-container">
                      <div className="bar-4" />
                    </div>
                  </div>
                  <div className="side right">
                    <div>63</div>
                  </div>
                  <div className="side">
                    <div>3 star</div>
                  </div>
                  <div className="middle">
                    <div className="bar-container">
                      <div className="bar-3" />
                    </div>
                  </div>
                  <div className="side right">
                    <div>15</div>
                  </div>
                  <div className="side">
                    <div>2 star</div>
                  </div>
                  <div className="middle">
                    <div className="bar-container">
                      <div className="bar-2" />
                    </div>
                  </div>
                  <div className="side right">
                    <div>6</div>
                  </div>
                  <div className="side">
                    <div>1 star</div>
                  </div>
                  <div className="middle">
                    <div className="bar-container">
                      <div className="bar-1" />
                    </div>
                  </div>
                  <div className="side right">
                    <div>20</div>
                  </div>
                </div>
              </div>
              <div className="profile-setting tab">
                <h2>Edit your profile</h2>
                <div className="containerr">
                  <form action="/action_page.php">
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="fname">Name</label>
                      </div>
                      <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="name.." />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="lname">Phone</label>
                      </div>
                      <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="phone.." />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="lname">Address</label>
                      </div>
                      <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="address.." />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="lname">City</label>
                      </div>
                      <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="city.." />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="lname">State</label>
                      </div>
                      <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="state.." />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="lname">Postal Code</label>
                      </div>
                      <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="postal.." />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="country">Country</label>
                      </div>
                      <div className="col-75">
                        <select id="country" name="country">
                          <option value="australia">Australia</option>
                          <option value="canada">Canada</option>
                          <option value="usa">USA</option>
                          <option value="usa">Pakistan</option>
                          <option value="usa">India</option>
                          <option value="usa">Dubai</option>
                          <option value="usa">China</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="subject">Bio</label>
                      </div>
                      <div className="col-75">
                        <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}} defaultValue={""} />
                      </div>
                    </div>
                    <div className="row">
                      <input type="submit" defaultValue="Update" />
                    </div>
                  </form>
                  <label><a href="#">Delete</a>your profile</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      


    )
  }
}

export default Userprofile;