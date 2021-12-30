import React from 'react'
import '../styles/upload_option_styles.css'
import { useParams, useNavigate } from 'react-router-dom'

export default function UploadOptionScreen () {
  //helps to navigate between the screens
  var navigate = useNavigate()

  //Getting data from url parameter
  const { algo } = useParams()

  //Submitting the user resposne
  //And move to the next page based on the response
  const submitDetails = option => {
    if (option === 'upload') {
      alert('Under Construction')
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
        <div
          className='upload_button'
          onClick={() => {
            submitDetails('upload')
          }}
        >
          <h4 className='excel_button'>UPLOAD EXCEL</h4>
        </div>
        <div
          className='fillform_button'
          onClick={() => {
            submitDetails('form')
          }}
        >
          <h4 className='form_button'>FILL FORM</h4>
        </div>
      </div>
    </div>
  )
}
