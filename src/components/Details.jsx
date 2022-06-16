import styles from '../styles/Details.module.scss';
import Input from './Input';

const Details = () => {
  console.log('Details works');

  return (
    <div className={styles.wrapper}>
      <Input placeholder="Ahuh" />
    </div>
  );
};

export default Details;
