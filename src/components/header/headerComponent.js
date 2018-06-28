import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './headerComponent.scss'
import FontAwesome from 'react-fontawesome'
console.log(FontAwesome)

class HeaderComponent extends React.Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand className='navbar'>
            <a href='#home'>ECOComposer</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav bsStyle='tabs' >
          <NavItem eventKey={1} title='Alert'>
            <FontAwesome name='bell' />
          </NavItem>
          <NavItem eventKey={2} title='User'>
            <FontAwesome name='user' />
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default HeaderComponent
