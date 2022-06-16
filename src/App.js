import styles from './styles/index.module.scss';
import Layout from './components/Layout';
import Details from './components/Details';

function App() {
  return (
    <div className={styles.app}>
      <Layout details={<Details />} result="Hi babe" />
    </div>
  );
}

export default App;
