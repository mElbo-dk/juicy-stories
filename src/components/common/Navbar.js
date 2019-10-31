import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../../assets/logo2.png'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'


class Navbar extends React.Component {

  constructor() {
    super()
    this.state = {
      isAuthenticated: false
    }
    this.handleLogout = this.handleLogout.bind(this)
  }


  handleLogout() {
    Auth.logout()
    this.setState({ isAuthenticated: false })
  }

  componentDidMount() {
    this.setState({ isAuthenticated: Auth.isAuthenticated() })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ isAuthenticated: Auth.isAuthenticated() })
    }
  }


  render() {
    const authCheck = this.state.isAuthenticated
    return (
      <div className="bg-primary">
        <div className="container">
          <header className="navbar md-padding">
            <section className="navbar-section">
              <Link to="/" className="navbar-brand mr-4">
                <img className="img-responsive" src={logo} width="100px" alt="logo" />
              </Link>
            </section>
            <section className="navbar-center">
              <div className="input-group input-inline">
                <select>
                  <option>Video</option>
                  <option>Audio</option>
                  <option>Image</option>
                </select>
                <input className="form-input" type="text" placeholder="search for juicy stories" />
                <button className="btn bg-dark input-group-btn">Search</button>
              </div>
            </section>
            <section className="navbar-section">
              {!authCheck &&
                <>
                  <Link to="/login"><button className="btn bg-secondary input-group-btn">Login</button></Link>
                  <Link to="/register"><button className="btn bg-error input-group-btn">Sign Up</button></Link>
                </>
              }
              {authCheck &&
                <>
                  <Link to="/dashboard">
                    <figure className="avatar avatar-lg">
                      <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="profile pic" />
                    </figure>
                  </Link>
                  <Link to="/stories/new">
                    <button className="btn tooltip bg-warning input-group-btn" data-tooltip="Add a story">
                      <i className="icon icon-upload text-secondary"/>
                    </button>
                    
                    {/* <i id="uploadIcon" className="fas fa-upload "/> */}
                  </Link>
                  <button className="btn tooltip bg-secondary input-group-btn" data-tooltip="Logout? 🥺" onClick={this.handleLogout}>
                    <i className="icon icon-shutdown"/>Logout
                  </button>
                </>
              }
            </section>
          </header>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)