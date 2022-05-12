import { Col, Row } from 'react-bootstrap'
import styles from './FormScreen.module.css'
import { useDropzone } from 'react-dropzone'
import Close from '../../assets/images/Close.png'
import { useState, useEffect } from 'react';
import Header from '../../components/Header';

function FormScreen(params) {
    var [address, setAddress] = useState([]);

    var [addressField, setAddressField] = useState("");

    const [mapAddress, setMapAddress] = useState([]);

    const addAddress = (add) => {
        var isStart = false;
        if (address.length === 0) {
            isStart = true;
        }

        var data = {
            "address": add,
            "isStart": isStart
        }

        var newAddress = [...address]

        newAddress.push(data)

        setAddress(newAddress);

        setAddressField("")
    }

    const removeAddress = (index) => {
        var newAddress = [...address]

        newAddress.splice(index, 1)

        setAddress(newAddress)
    }

    useEffect(() => {

    })

    return (
        <div >
            <Header title="Fill Form"/>
            <Row className={styles.container}>
                <Col md={6} className={styles.leftContainer}>
                    <div className={styles.inputField}>
                        <input alt='Form' placeholder='Enter Address' required={true} value={addressField} onChange={(value) => { setAddressField(value.target.value) }} />
                        <div className={styles.addButton} onClick={(e) => {
                            addAddress(addressField)
                        }}>
                            <h5 className={styles.plusText}>+</h5>
                        </div>
                    </div>
                </Col>
                {address.length !== 0 ? (
                    < Col md={6} className={styles.rightContainerCol}>
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
                        )
                        )}
                        <div className={styles.submitButton}>
                            <span>Submit</span>
                        </div>
                    </Col>
                ) : <Col md={6} className={styles.noFileContainer}>
                    <p>Please add address to see here</p>
                </Col>

                }

            </Row >
        </div>
    )
}

export default FormScreen;