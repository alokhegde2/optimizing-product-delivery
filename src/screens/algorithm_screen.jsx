import { Dropdown, DropdownButton } from 'react-bootstrap'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import '../styles/algorithm_styles.css'

export default function AlgorithmScreen () {
  //helps to navigate between the screens
  var navigate = useNavigate()
  //Dropdown selection state
  //Which holds the value of the user selection from the dropdown
  const [dropdownSelection, setDropdownSelection] = useState(
    'Select The Algorithm'
  )

  //Algoritm List
  const algorithm = [
    'A* Algorithm',
    'AO* Algorithm',
    'Minimum Cost Flow Approach'
  ]

  //Submitting the user resposne
  //And move to the next page based on the response
  const submitDetails = () => {
    if (dropdownSelection === 'Select The Algorithm') {
      alert('Please select the any one option from the dropdown')
    } else {
      navigate(`/upload-option/${dropdownSelection}`)
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
              Select the algorithm from the dropdown.
            </p>
            <div className='dropdown_div'>
              <DropdownButton
                id='dropdown-basic-button'
                title={dropdownSelection}
              >
                {algorithm.map(alg => (
                  <Dropdown.Item
                    href='#'
                    className='dropdown_items'
                    onClick={() => {
                      setDropdownSelection(alg)
                    }}
                  >
                    {alg}
                  </Dropdown.Item>
                ))}
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
