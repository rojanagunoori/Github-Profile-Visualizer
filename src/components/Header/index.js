import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import UsernameContext from '../../context/UsernameContext'
import './index.css'

class Header extends Component {
  state = {activeStatus: false}

  onClickMenuButton = () => {
    this.setState(prevState => ({activeStatus: !prevState.activeStatus}))
  }

  render() {
    const {activeStatus} = this.state
    const {location} = this.props

    const currentPath = location.pathname

    return (
      <UsernameContext.Consumer>
        {value => {
          const {changeUserName} = value

          const resetAndGoHome = e => {
            e.preventDefault()
            const {history} = this.props
            console.log('🔁 resetAndGoHome triggered')
            changeUserName('')
            history.push('/')
          }

          return (
            <div className="container">
              <div data-testid="header" className="repo-item">
                <nav className="header-container">
                  <Link
                    to="/"
                    className="heading-nav-link"
                    onClick={e => {
                      e.preventDefault() // stop instant navigation
                      const {history} = this.props
                      changeUserName('') // clear username first
                      setTimeout(() => {
                        history.push('/') // navigate after React updates
                      }, 0)
                    }}
                  >
                    <h1 className="header-heading">
                      GitHub Profile Visualizer
                    </h1>
                  </Link>

                  <button
                    className="menu-button"
                    type="button"
                    onClick={this.onClickMenuButton}
                    aria-label="Toggle navigation menu"
                  >
                    <img
                      src="https://res.cloudinary.com/ddsn9feta/image/upload/v1718691523/menu_l33xs7.png"
                      alt="menu"
                      className="menuSize"
                    />
                  </button>

                  <ul className={`items-nav ${activeStatus ? 'active' : ''}`}>
                    <li>
                      <Link
                        to="/"
                        className={
                          currentPath === '/'
                            ? 'active-link item-nav-link'
                            : 'item-nav-link'
                        }
                        onClick={e => {
                          e.preventDefault() // stop instant navigation
                          const {history} = this.props
                          changeUserName('') // clear username first
                          setTimeout(() => {
                            history.push('/') // navigate after React updates
                          }, 0)
                        }}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/repositories"
                        className={
                          currentPath === '/repositories'
                            ? 'active-link item-nav-link'
                            : 'item-nav-link'
                        }
                      >
                        Repositories
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/analysis"
                        className={
                          currentPath === '/analysis'
                            ? 'active-link item-nav-link'
                            : 'item-nav-link'
                        }
                      >
                        Analysis
                      </Link>
                    </li>
                  </ul>
                </nav>

                {activeStatus && (
                  <nav>
                    <ul className="nav-items-container active">
                      <li>
                        <Link
                          to="/"
                          className={
                            currentPath === '/'
                              ? 'active-link item-link'
                              : 'item-link'
                          }
                          onClick={resetAndGoHome}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/repositories"
                          className={
                            currentPath === '/repositories'
                              ? 'active-link item-link'
                              : 'item-link'
                          }
                        >
                          Repositories
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/analysis"
                          className={
                            currentPath === '/analysis'
                              ? 'active-link item-link'
                              : 'item-link'
                          }
                        >
                          Analysis
                        </Link>
                      </li>
                    </ul>
                  </nav>
                )}
              </div>
            </div>
          )
        }}
      </UsernameContext.Consumer>
    )
  }
}

export default withRouter(Header)
