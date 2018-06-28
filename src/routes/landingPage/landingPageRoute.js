import React from 'react'
import Register from '../../components/register/registerComponent'
import ProductDescription from '../../components/productDescription/productDescriptionComponent'

class LandingPageRoute extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Composer Bla Bla ...............</h1>

        <div className='container'>
          <div className='row'>
            <Register />
            <ProductDescription />
          </div>
        </div>
      </div>
    )
  }
  props: {}
}
export default LandingPageRoute
