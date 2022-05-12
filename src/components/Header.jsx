import styles from './Header.module.css'

function Header({ title }) {
    return (
        <div className={styles.header}>
            <h5 className={styles.headerText}>{title}</h5>
        </div>
    )
}

export default Header