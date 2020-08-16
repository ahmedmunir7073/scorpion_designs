import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      // <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarsExample10"
      //     aria-controls="navbarsExample10"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span className="navbar-toggler-icon" />
      //   </button>

      //   <div
      //     className="collapse navbar-collapse justify-content-md-center"
      //     id="navbarsExample10"
      //   >
      //     <ul className="navbar-nav">
      //       <li className="nav-item">
      //         <Link to="/" className="nav-link">
      //           Home
      //         </Link>
      //       </li>
      //     </ul>
      //     {localStorage.usertoken ? userLink : loginRegLink}
      //   </div>
      // </nav>


      <div>
      <nav className="nav">

{/* 
      <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}



  <div className="nav-menu flex-row">
    <div className="nav-brand">
      <a href="./" className="text-gray active" style={{fontFamily: '"Pacifico", cursive'}}>ScorpiDesigns</a> 
    </div>
    <div className="toggle-collapse">
      <div className="toggle-icons">
        <i className="fas fa-bars" />
      </div>
    </div>
    <div>
      <ul className="nav-items">
        <li className="nav-link">
          <Link className='nav-link' to='/' style={{fontFamily: '"Nunito", cursive'}}>HOME</Link> 
        </li>  
        <li className="nav-link">
          <a href="./login" style={{fontFamily: '"Nunito", cursive'}}>PORTFOLIO</a>
        </li>
        <li className="nav-link">
          <a href="./about" style={{fontFamily: '"Nunito", cursive'}}>ABOUT</a>
        </li>
        <li className="nav-link">
          <a href="./contact" style={{fontFamily: '"Nunito", cursive'}}>CONTACT US</a>
        </li>
      </ul>
      
    </div>
    <div className="social text-gray">
      <a href="https://www.facebook.com/worldwidegraphicdesigners"><i className="fab fa-facebook-f" /></a>
      <a href="https://www.instagram.com/scorpion.designs/?hl=en"><i className="fab fa-instagram" /></a>
      <a href="#"><i className="fas fa-phone-alt" /></a>
      <div style={{display: 'inline'}}>
      {localStorage.usertoken ? userLink : loginRegLink}  
      </div>
    </div>
  </div>
</nav>
{/*--nav*/}
</div>



    )
  }
}

export default withRouter(Landing)