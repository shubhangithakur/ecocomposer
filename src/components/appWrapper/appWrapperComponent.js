import React from 'react'
// import styles from './appWrapperComponent.scss'
import HeaderComponent from '../header/headerComponent'

class AppWrapper extends React.Component {
  render () {
    return (
      <div>
        <HeaderComponent />
        {this.props.children}
      </div>
    )
  }

  props: {
    children: any
  }
}

export default AppWrapper

// import { Glyphicon } from 'react-bootstrap'

// class AppWrapper extends React.Component {
//   render () {
//     return (
//       <div >
//         <HeaderComponent />
//         <Glyphicon glyph='star' />

//         Hello React!
//       </div>
//     )
//   }
// }

// export default AppWrapper
