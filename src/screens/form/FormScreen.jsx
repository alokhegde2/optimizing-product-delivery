import { Col, Row } from 'react-bootstrap'
import styles from './FormScreen.module.css'
import { useDropzone } from 'react-dropzone'
import Close from '../../assets/images/Close.png'
import { useState, useEffect } from 'react'
import Header from '../../components/Header'

function FormScreen (params) {
  var [address, setAddress] = useState([])

  var [addressField, setAddressField] = useState('')

  var [buttonText, setButtonText] = useState('Submit')

  const [mapAddress, setMapAddress] = useState([])

  const addAddress = add => {
    var isStart = false
    if (address.length === 0) {
      isStart = true
    }

    var data = {
      address: add,
      isStart: isStart
    }

    var newAddress = [...address]

    newAddress.push(data)

    setAddress(newAddress)

    setAddressField('')
  }

  const removeAddress = index => {
    var newAddress = [...address]

    newAddress.splice(index, 1)

    setAddress(newAddress)
  }

  useEffect(() => {})

  const submitForm = async () => {
    setButtonText("Submitting...")
    if (address.length < 2) {
      alert('Enter atleast 2 locations before submitting')
      setButtonText("Submit")
      return
    }

    var response = await fetch('http://127.0.0.1:5000/upload_form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ address: address })
    })

    var responseData = await response.json()

    if (response.status === 200) {
      window.open(responseData["url"], "_blank");
    } else {
      alert('Some error occured')
    }

    setButtonText("Submit")
  }

  return (
    <div>
      <Header title='Fill Form' />
      <Row className={styles.container}>
        <Col md={6} className={styles.leftContainer}>
          <div className={styles.inputField}>
            <input
              alt='Form'
              placeholder='Enter Address'
              required={true}
              value={addressField}
              onChange={value => {
                setAddressField(value.target.value)
              }}
            />
            <div
              className={styles.addButton}
              onClick={e => {
                addAddress(addressField)
              }}
            >
              <h5 className={styles.plusText}>+</h5>
            </div>
          </div>
        </Col>
        {address.length !== 0 ? (
          <Col md={6} className={styles.rightContainerCol}>
            {address.map((value, index) => (
              <div className={styles.itemContainer} key={index}>
                <p className={styles.address}>{value.address}</p>
                <div>
                  <img
                    src={Close}
                    alt='close'
                    height={15}
                    className={styles.closeIcon}
                    onClick={() => {
                      removeAddress(index)
                    }}
                  />
                </div>
              </div>
            ))}
            <div
              className={styles.submitButton}
              onClick={() => {
                submitForm()
              }}
            >
              <span>{buttonText}</span>
            </div>
          </Col>
        ) : (
          <Col md={6} className={styles.noFileContainer}>
            <p>Please add address to see here</p>
          </Col>
        )}
      </Row>
    </div>
  )
}

export default FormScreen
