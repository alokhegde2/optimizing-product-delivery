import { Dropdown, DropdownButton } from 'react-bootstrap'
import React, { useState } from 'react'
import '../styles/service_styles.css'
import { FaArrowRight } from 'react-icons/fa'

export default function ServiceTypeScreen () {
  //Dropdown selection state
  //Which holds the value of the user selection from the dropdown
  const [dropdownSelection, setDropdownSelection] = useState(
    'Select The Option'
  )

  //Submitting the user resposne
  //And move to the next page based on the response
  const submitDetails = () => {
    if(dropdownSelection === 'Select The Option'){

    } else {
        if(dropdownSelection === "Default"){
            console.log("Default");
        } else {
            console.log("Custom");
        }
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
        <div>
          {/* Heading of the screen  */}
          {/* Which is application name  */}
          <h4 className='screen_heading'>Optimizing Product Delivery</h4>
          {/* division for dropdown and paragraph  */}
          <div className='dropdown_section_div'>
            {/* Paragraph about the operations  */}
            <p className='srcreen_paragraph'>
              Select the path selection type from the dropdown.
            </p>
            <div className='dropdown_div'>
              <DropdownButton
                id='dropdown-basic-button'
                title={dropdownSelection}
              >
                <Dropdown.Item
                  href='#'
                  className='dropdown_items'
                  onClick={() => {
                    setDropdownSelection('Default')
                  }}
                >
                  Default
                </Dropdown.Item>
                <Dropdown.Item
                  href='#'
                  className='dropdown_items'
                  onClick={() => {
                    setDropdownSelection('Custom')
                  }}
                >
                  Custom
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
        <div className='submit_div'>
          <div></div>
          <div className='submit_button' onClick={submitDetails}>
            <FaArrowRight
              color='#ffffff'
              className='submit_button_icon'
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
