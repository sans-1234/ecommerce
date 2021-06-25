import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main-header">
          
          <div className="navigation-menu">
            <Link to={`${process.env.PUBLIC_URL}/ecommerce`}>Ecommerce |</Link>
            
          </div>
        </div>
      </div>
    )
  }
}