import React from 'react'
import '../styles/location_form_styles.css'
import { useParams, useNavigate } from 'react-router-dom'

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
      <div className='center_box'></div>
    </div>
  )
}
