import React, { Component } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import VideoPlay from './Body/VideoPlay'

export default class ELearnApp extends Component {


  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <VideoPlay/>
        <Footer />
      </div>
    )
  }
}
