import React from 'react'
import './registerComponent.scss'

class Register extends React.Component {
  render () {
    return (
      <div className='col-sm-4' id='sidebar'>
        <h5 className='mb-4 mt-0 text-center'>Experience it free for 90 days</h5>
        <p>New free template by lorem ipsumjjjjjjjjjjjjjjjjjj. For more templates visit the Lorem ipsum dolor sit amet, consectetur adipisicing elit. is simply dummy text of the printing and typesetting industry.</p>
        <div className='form-group'>
          <input type='text' className='form-control pb_height-50 reverse' placeholder='Full name' />
        </div>

        <div className='form-group'>
          <input type='text' className='form-control pb_height-50 reverse' placeholder='Email' />
        </div>
        <div className='form-group' />
        <div className='form-group'>
          <input type='submit' className='btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue' value='Test Drive' />
        </div>
      </div>
    )
  }

  props: {
    children: any
  }
}

export default Register
