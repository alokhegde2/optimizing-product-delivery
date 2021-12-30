import React from 'react'
import '../styles/location_form_styles.css'
import { useParams, useNavigate } from 'react-router-dom'
import { FormControl, InputGroup } from 'react-bootstrap'

export default function LocationFormScreen () {
  //helps to navigate between the screens
  var navigate = useNavigate()

  //Getting data from url parameter
  const { algo } = useParams()

  //Submitting the user resposne
  //And move to the next page based on the response
  const submitDetails = option => {
    if (option === 'Select The Algorithm') {
      alert('Please select the any one option from the dropdown')
    } else {
      navigate(`/location-form/${algo}`)
    }
  }

  return (
    <div className='App'>
      {/* blue box  */}
      <div className='blue_box'></div>
      {/* Red box  */}
      <div className='red_box'></div>
      {/* center working space  */}
      <div className='center_box'>
        {/* Heading section  */}
        <div className='heading_container'>
          {/* Heading of the screen  */}
          {/* Which is application name  */}
          <h4 className='screen_heading'>Optimizing Product Delivery</h4>

          {/* Paragraph about the operations  */}
          <p className='srcreen_paragraph'>
            Select the path selection type from the dropdown.
          </p>
        </div>

        <div className='input_group_container'>
          {/* Starting point input group  */}
          <InputGroup className='mb-3 input_group'>
            <InputGroup.Text id='inputGroup-sizing-default'>
              Starting Point
            </InputGroup.Text>
            <FormControl
              aria-label='Default'
              aria-describedby='inputGroup-sizing-default'
            />
          </InputGroup>

          <InputGroup className='mb-3 input_group'>
            <InputGroup.Text id='inputGroup-sizing-default'>
              Other Point
            </InputGroup.Text>
            <FormControl
              aria-label='Default'
              aria-describedby='inputGroup-sizing-default'
            />
          </InputGroup>
        </div>

        <div className='add_new_input_group_button'>
            <h1 className='add_icon'>+</h1>
        </div>
      </div>
    </div>
  )
}
