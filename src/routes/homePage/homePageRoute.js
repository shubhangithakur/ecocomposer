// import React from 'react'
// import SmartDisplayStars from '../../containers/displayStars/displayStarsContainer'

// class HomePageRoute extends React.Component {
//   render () {
//     return (
//       <div>
//         <h1>This is the Homepage</h1>
//         <SmartDisplayStars />
//       </div>
//     )
//   }
//   props: {}
// }
// export default HomePageRoute

import React from 'react'
import Register from '../../components/register/registerComponent'
import ProductDescription from '../../components/productDescription/productDescriptionComponent'

class HomePageRoute extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Composer Bla Bla ...............</h1>

        <div className='container'>
          <div className='row'><ProductDescription />
            <Register />
          </div>
        </div>
      </div>
    )
  }
  props: {}
}
export default HomePageRoute
