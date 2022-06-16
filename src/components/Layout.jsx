import styles from '../styles/Layout.module.scss';

const Layout = ({ details, result }) => {
  console.log('Layout works');

  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>{details}</div>
      <div className={styles.result}>{result}</div>
    </div>
  );
};

export default Layout;

