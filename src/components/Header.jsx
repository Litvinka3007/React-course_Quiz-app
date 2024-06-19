import logoImg from '../assets/quiz-logo.png';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Quiz logo" />
      <h1>React Quiz</h1>
    </header>
  );
}