import { useNavigate } from 'react-router-dom'
import styles from './WelcomeScreen.module.css'

export default function WelcomeScreen (params) {
  //For navigation
  const navigate = useNavigate()

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h5>
          <b>
            Optimizing Product
            <br /> Delivery
          </b>
        </h5>
        <p>
          Choose the any of the below <br />
          option to continue{' '}
        </p>
        <button
          onClick={() => {
            navigate('/file-upload')
          }}
          className={styles.upload_excel_button}
        >
          Upload Excel
        </button>
        <button onClick={() => {}} className={styles.fill_form_button}>
          Fill Form
        </button>
      </div>
    </div>
  )
}
