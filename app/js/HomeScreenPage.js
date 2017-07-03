import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import StatusBar from './components/StatusBar'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

class HomeScreenPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="home-screen-wrap">
      <StatusBar hideBackToHomeLink={true} />
      <div className="home-screen">
        <div className="container-fluid app-center">
          <div className="container app-wrap">
            <div className="app-container no-padding">
              <div className="app-box-wrap">
                <Link to="/storage/providers" className="app-box-container">
                  <div className="app-box">
                    <img src="/images/app-icon-storage-light@2x.png" />
                  </div>
                </Link>
                <div className="app-text-container">
                  <h3>Storage</h3>
                </div>
              </div>
              <div className="app-box-wrap">
                <Link to="/account/password" className="app-box-container">
                  <div className="app-box">
                    <img src="/images/app-icon-settings@2x.png" />
                  </div>
                </Link>
                <div className="app-text-container">
                  <h3>Account</h3>
                </div>
              </div>
              <div className="app-box-wrap">
                <a href="https://helloblockstack.com"
                   className="app-box-container">
                  <div className="app-box">
                    <img src="/images/app-icon-hello-blockstack@2x.png" />
                  </div>
                </a>
                <div className="app-text-container">
                  <h3>Hello, Blockstack</h3>
                </div>
              </div>
              <div className="app-box-wrap">
                <a href="https://forum.blockstack.org"
                   className="app-box-container">
                  <div className="app-box">
                    <img src="/images/app-icon-forum@2x.png" />
                  </div>
                </a>
                <div className="app-text-container">
                  <h3>Forum</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenPage)
