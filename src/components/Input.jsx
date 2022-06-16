import styles from '../styles/Input.module.scss';

const Input = ({placeholder}) =>{
    console.log('Input works');

    return (
        <div className={styles.wrapper}>
            <input placeholder={placeholder} type="number" className={styles.input} />
        </div>
    )
}

export default Input;