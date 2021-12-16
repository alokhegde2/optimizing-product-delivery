import React from 'react'
import '../styles/upload_option_styles.css'

export default function UploadOptionScreen () {
  return (
    <div className='App'>
      {/* blue box  */}
      <div className='blue_box'></div>
      {/* Red box  */}
      <div className='red_box'></div>
      {/* center working space  */}
      <div className='center_box'>
        <div className='upload_button' onClick={()=>{}}>
            <h4 className='excel_button'>UPLOAD EXCEL</h4>
        </div>
        <div className='fillform_button' onClick={()=>{}}>
            <h4 className='form_button'>FILL FORM</h4>
        </div>
      </div>
    </div>
  )
}
