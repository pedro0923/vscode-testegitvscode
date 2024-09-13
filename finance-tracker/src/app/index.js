import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <h1 className={styles.title}>Bem-vindo ao Finance Tracker</h1>
      <nav>
        <ul>
          <li>
            <Link href="/receitas">Receitas</Link>
          </li>
          <li>
            <Link href="/despesas">Despesas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
