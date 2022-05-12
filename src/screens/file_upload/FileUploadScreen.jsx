import { Col, Row } from 'react-bootstrap'
import styles from './FileUploadScreen.module.css'
import { useDropzone } from 'react-dropzone'
import { useCallback, useState } from 'react'
import Close from '../../assets/images/Close.png'
import Header from '../../components/Header'

export default function FileUploadScreen(params) {
  const [uploadedFile, setFile] = useState('')
  //On drop handler
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles)
    setFile(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div>
      <Header title="Upload File" />
      <Row className={styles.container}>
        <Col md={6} className={styles.leftContainer}>
          {/* Drag and drop functionality  */}
          <div {...getRootProps()} className={styles.dropContainer}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
        </Col>
        {uploadedFile !== '' ? (
          <Col md={6} className={styles.rightContainerCol}>
            <div className={styles.rightContainer}>
              {uploadedFile !== '' ? (
                <div className={styles.iconConatiner}>
                  <p className={styles.iconText}>
                    {uploadedFile[0]['path'].split('.').reverse()[0]}
                  </p>
                </div>
              ) : null}
              {uploadedFile !== '' ? (
                <div>
                  <p>{uploadedFile[0]['path']}</p>
                </div>
              ) : null}
              {uploadedFile !== '' ? (
                <div>
                  <img
                    src={Close}
                    alt='close'
                    height={15}
                    className={styles.closeIcon}
                    onClick={() => {
                      setFile('')
                    }}
                  />
                </div>
              ) : null}
            </div>

            <div className={styles.submitButton}>
              <span>Submit</span>
            </div>
          </Col>
        ) : (
          <Col md={6} className={styles.noFileContainer}>
            <p>No File Selected</p>
          </Col>
        )}
      </Row>
    </div>
  )
}
