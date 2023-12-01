import { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
  state = { clicked : false }
  handleClick = () => {this.setState({clicked:!this.state.clicked})}
  render() {
  return (
    <>
      <nav>
        <a href="index.html"></a>
        <h1>Kichwa</h1>

        <div id='navbar'>
          <ul>
            <li><a href="index.html" className='active'>Home</a></li>
            <li><a href="index.html">Blog</a></li>
            <li><a href="index.html">Services</a></li>
            <li><a href="index.html">Log in</a></li>
          </ul>
        </div>

        <div className="mobile" onClick={this.handleClick}>

          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    </>
  )
}
}

export default Navbar;